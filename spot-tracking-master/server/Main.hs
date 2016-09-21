{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE CPP #-}
module Main where

import ST
import ST.App

-- | warp deps
import Network.Wai.Middleware.Gzip ( gzip, def, gzipFiles, GzipFiles(..) )
import Network.HTTP.Types ( status500, status404 )
#ifdef DEVEL
import Network.Wai.Middleware.RequestLogger ( logStdoutDev )
#endif

-- | other Deps
import Control.Concurrent ( runInUnboundThread )
import Control.Exception ( bracket )
import Control.Monad.IO.Class ( liftIO )
import Data.Maybe ( fromMaybe )
import Data.Aeson hiding (json)
import qualified Data.Map.Strict as M
import qualified Data.Text as T
import qualified Data.Vector as V
import Data.Text.Lazy (pack)

import System.Environment ( lookupEnv )

-- | DB Deps
import qualified Hasql as H
import qualified Hasql.Postgres as HP

import Web.Scotty


main :: IO ()
main = do
  mp <- lookupEnv "PORT"
  let port = read $ fromMaybe "3000" mp :: Int
  runInUnboundThread $
    bracket (H.acquirePool postgresSettings poolSettings) H.releasePool $ \(pool :: H.Pool HP.Postgres) -> do
      eventsList <- liftIO $ H.session pool $ H.tx Nothing getAllEvents
      case eventsList of
        Left e -> error $ show e
        Right events -> do
          let eventMap = M.fromList $ V.toList $ V.map flipT events
          scotty port $ do
            -- Note that files are not gzip'd by the default settings.
            middleware $ gzip $ def { gzipFiles = GzipCompress }
#ifdef DEVEL
            middleware logStdoutDev
#endif
            get "/" homeView
            get "/event/:evid" $ do
              e <- param "evid"
              let eid = M.lookup e eventMap
              case eid of
                Just x -> mapView x
                Nothing -> do
                  status status404
                  fourohfourView

            get "/location" $ do
              --comp <- param "competitor"
              ev <- param "event"
              ml <- liftIO $ H.session pool $ H.tx Nothing $ getAllLocList ev
              -- liftIO $ print ml -- | uncomment to debut query
              case ml of
                  Right v -> json $ CompetitorList $ V.map toComp v
                  Left e -> do
                    status status500
                    text $ pack $ show e

            get "/competitors" $ do
              ev <- param "event"
              ml <- liftIO $ H.session pool $ H.tx Nothing $ getCompetitors ev
              -- liftIO $ print ml -- | uncomment to debut query
              case ml of
                  Right v -> json $ CsList $ V.map toCs v
                  Left e -> do
                    status status500
                    text $ pack $ show e

            get "/racepoints" $ do
              ev <- param "event"
              ml <- liftIO $ H.session pool $ H.tx Nothing $ getRacePoints ev
              -- liftIO $ print ml -- | uncomment to debut query
              case ml of
                  Right v -> json $ RacePoints $ V.map toRacePoint v
                  Left e -> do
                    status status500
                    text $ pack $ show e

            -- | we are getting the form from /admin/adduser
            post "/_admin/adduser" $ do
              cid <- param "spotId"
              name <- param "name"
              nick <- param "nick"
              bio <- param "bio"
              color <- param "color"
              trans <- liftIO $ H.session pool $ H.tx (Just (H.Serializable, Just True)) $ addCompetitor cid 1 name nick bio color
              case trans of
                Right _ -> json $ object ["status" .= String "success"]
                Left e -> json $ object ["status" .= String (T.concat ["error - ", T.pack $ show e])]




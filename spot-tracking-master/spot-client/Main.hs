{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE MultiParamTypeClasses #-}
module Main where

import ST

import Text.Printf ( printf )
import System.Environment ( getArgs )

import Control.Applicative ( pure )
import Control.Exception ( bracket )
--import Control.Monad ( forM_ )
import Control.Monad.IO.Class ( liftIO )

import Data.Aeson ( decode )
import Data.Text ( unpack )
import qualified Data.Vector as V
--import Data.Maybe ( fromJust )
--import qualified Data.ByteString.Lazy as BL
--import qualified Data.List as L

import Network ( withSocketsDo )
import Network.HTTP.Conduit ( withManager, httpLbs, Request(..), responseBody, parseUrl )

import qualified Hasql as H
import qualified Hasql.Postgres as HP


-- | format string for url
-- | placeholder is to be replaced by the required feed id
spotUrl :: String
spotUrl = "https://api.findmespot.com/spot-main-web/consumer/rest-api/2.0/public/feed/%s/message.json"


-- | Request Helpers
postReq :: Request -> Request
postReq req = req { method = "POST" }

getReq :: Request -> Request
getReq req = req { method = "GET" }

headReq :: Request -> Request
headReq req = req { method = "HEAD"
                  , checkStatus = \_ _ _ -> Nothing
                  }
-- | End request Helpers


getFeed :: String -> IO (Maybe MessageList)
getFeed u = case parseUrl u of
  Nothing -> liftIO $ pure Nothing
  Just req -> withSocketsDo $ do
    res <- withManager $ httpLbs (getReq req)
    return $ decode $ responseBody res


-- | config file is duplicating effort, should just read users from db
main :: IO ()
main = do
  (arg:_) <- getArgs
  let rid = read arg :: Int
  bracket (H.acquirePool postgresSettings poolSettings) H.releasePool $ \(pool :: H.Pool HP.Postgres) -> do
    putStrLn "Fetching Spot Locations"

    -- configFile <- BL.readFile "fixtures/config.json"
    -- let cList = fromJust (decode configFile :: Maybe ConfigList)
    -- print cList
    cList <- liftIO $ H.session pool $ H.tx Nothing $ getAllCompIds rid

    case cList of
         Right users_ ->
              -- | for each user
              --forM_ (users cList) $ \cu -> do
              V.forM_ users_ $ \cu -> do
                --let user = cSpotId cu
                let user = fst cu
                --print user
                -- | Get the current user location
                curLocs <- liftIO $ H.session pool $ H.tx Nothing $ getLocList user rid
                --print curLocs
                case curLocs of
                     -- | successful DB call
                     Right v -> do
                       let curLL = V.map toLoc v
                       -- | fetch the SPOT feed
                       feed <- getFeed $ printf spotUrl (unpack user)
                       case feed of
                            Just msg -> do
                              print msg
                              -- | Add all new locations to the database
                              V.mapM_ (addLocales pool rid user)
                                    $ V.filter (`V.notElem` curLL) $ V.map msgToLoc $ messages msg
                              return ()
                            Nothing -> putStrLn "Feed Not found"

                     Left e -> do
                       putStrLn "Database Error :("
                       print e

         Left e -> do
           putStrLn "Database Error :("
           print e



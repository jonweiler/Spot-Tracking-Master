{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE OverloadedLists #-}
{-# LANGUAGE ScopedTypeVariables #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE MultiParamTypeClasses #-}

module ST.Database (
  postgresSettings
  ,poolSettings
  ,getLocList
  ,getAllLocList
  ,getAllCompIds
  ,getAllEvents
  ,getCompetitors
  ,getCompetitor
  ,getCompId
  ,getRacePoints
  ,addLocation
  ,addLocales
  ,addCompetitor
) where

import ST.Instances

-- | DB Deps
import qualified Hasql as H
import qualified Hasql.Postgres as HP

import Data.Maybe ( fromJust )
import Data.Time ( UTCTime )
import Data.Text (Text)
import Data.Vector (Vector)
import qualified Data.Vector as V

postgresSettings :: HP.Settings
postgresSettings = HP.ParamSettings "localhost" 5432 "moat" "" "moat"

poolSettings :: H.PoolSettings
poolSettings = fromJust $ H.poolSettings 6 30

-- | DB Gets
-- | we are taking a lot of liberties with not validating data because we are relying on
-- | manual inputs as well as the need for speed
getLocList :: Text -> Int -> H.Tx HP.Postgres s (Vector (Double, Double, UTCTime))
getLocList c e = H.vectorEx $ [H.stmt|select latitude, longitude, time from competitor_location where competitor=? and event=?|] c e

-- | update to return competitor name as well
getAllLocList :: Int -> H.Tx HP.Postgres s (Vector (Text, Text, Text, Text, Text, Double, Double, UTCTime))
getAllLocList e = H.vectorEx $
    [H.stmt|select c.id, c.name, c.nickname, c.bio, c.color, cl.latitude, cl.longitude, cl.time from competitor c, competitor_location cl where c.id = cl.competitor and cl.event=?|] e

getAllEvents :: H.Tx HP.Postgres s (Vector (Int, Text))
getAllEvents = H.vectorEx $ [H.stmt|select id, name from event|]

-- | Retrieve all the spot ids for event
-- | this is stupid i just want a list of single items but im juggling
getAllCompIds :: Int -> H.Tx HP.Postgres s (Vector (Text, Text))
getAllCompIds e = H.vectorEx $ [H.stmt|select id, name from competitor where event_no=?|] e

-- | Return all competitor information
getCompetitors :: Int -> H.Tx HP.Postgres s (Vector (Text, Text, Text, Text, Text))
getCompetitors e = H.vectorEx $ [H.stmt|select id, name, nickname, bio, color from competitor where event_no=?|] e

-- | Return all event challenges
getRacePoints :: Int -> H.Tx HP.Postgres s (Vector (Text, Text, Double, Double))
getRacePoints e = H.vectorEx $ [H.stmt|select name, description, latitude, longitude from race_points where event=?|] e


-- | Assuming we have name and event
-- | Keeping these to 2 tuples so we can use fst and snd
getCompetitor :: Text -> Int -> H.Tx HP.Postgres s (Maybe (Text, Text))
getCompetitor n i = H.maybeEx $ [H.stmt|select nickname, bio from competitor where name=? and event_no=?|] n i

getCompId :: Text -> Int -> H.Tx HP.Postgres s (Maybe (Int, Text))
getCompId n i = H.maybeEx $ [H.stmt|select id, nickname from competitor where name=? and event_no=?|] n i



-- | DB inserts
addLocales :: H.Pool HP.Postgres -> Int -> Text -> Location -> IO (Either (H.SessionError HP.Postgres) ())
addLocales pl ev usr loc = H.session pl $ H.tx (Just (H.Serializable, Just True)) $ addLocation ev usr loc

addLocation :: Int -> Text -> Location -> H.Tx HP.Postgres s ()
addLocation event user (Location lat lon time) =
  H.unitEx $
    [H.stmt|insert into competitor_location (competitor, event, latitude, longitude, time) values (?, ?, ?, ?, ?)|] user event lat lon time

addCompetitor :: Text -> Int -> Text -> Text -> Text -> Text -> H.Tx HP.Postgres s ()
addCompetitor cid event name nick bio color =
  H.unitEx $ [H.stmt|insert into competitor (id, event_no, name, nickname, bio, color) values (?, ?, ?, ?, ?, ?)|] cid event name nick bio color


-- | DB updates needed?




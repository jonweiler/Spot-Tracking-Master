{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE OverloadedLists #-}
module ST.Instances(
   MessageList(..)
  ,Message(..)
  ,Competitor(..)
  ,CompetitorList(..)
  ,CompShort(..)
  ,CsList(..)
  ,LocationList(..)
  ,Location(..)
  ,ConfigUser(..)
  ,ConfigList(..)
  ,RacePoint(..)
  ,RacePoints(..)
  ,rt -- Export for testing
) where

-- | JSON deps
import Data.Aeson
import Control.Applicative ( (<$>), (<*>) )
import Control.Monad ( mzero, liftM )
import Data.Time ( UTCTime, readTime )
import Data.Text (Text, unpack)
import Data.Vector (Vector)
import System.Locale ( defaultTimeLocale )

-- | Helper object to capture the messages
data MessageList = MessageList { messages :: Vector Message } deriving Show

-- | Spot Message
data Message = Message { mId :: Text
                       , mName :: Text
                       , mType :: Text
                       , mLat :: Double
                       , mLong :: Double
                       , mTime :: UTCTime
                       } deriving (Show, Eq)

-- | The competitor point object the app returns
data Competitor = Competitor { cId :: Text -- | Spot ID, mainly for book keeping
                             , cName :: Text
                             , cNick :: Text
                             , cBio :: Text
                             , cColor :: Text
                             , cLat :: Double
                             , cLong :: Double
                             , cTime :: UTCTime
                             } deriving (Show, Eq)

data CompetitorList = CompetitorList { competitors :: Vector Competitor } deriving Show

data CompShort = CompShort { csId :: Text
                           , csName :: Text
                           , csNick :: Text
                           , csBio :: Text
                           , csColor :: Text
                           } deriving (Show, Eq)

data CsList = CsList { comp :: Vector CompShort } deriving Show



data LocationList = LocationList { locations :: Vector Location } deriving Show

-- | helper object to insert new location points into the db
data Location = Location { lLat :: Double
                         , lLong :: Double
                         , lTime :: UTCTime
                         } deriving (Show, Eq)

-- | Old json config object, now deprecated
data ConfigUser = ConfigUser { conName :: Text
                             , cSpotId :: Text
                             , cMessengerId :: Text } deriving Show

data ConfigList = ConfigList { users :: [ConfigUser] } deriving Show


data RacePoint = RacePoint { rName :: Text
                           , rDesc :: Text
                           , rLat :: Double
                           , rLon :: Double } deriving (Show, Eq)

data RacePoints = RacePoints { rPoints :: Vector RacePoint } deriving Show


-- | Time helper functionfor parsing the Message Objects
rt :: Text -> UTCTime
rt = readTime defaultTimeLocale "%FT%T+0000" . unpack


-- | Traverse to the messages
instance FromJSON MessageList where
  parseJSON (Object v) =
    MessageList <$> (( v .: "response")
                >>= (.: "feedMessageResponse")
                >>= (.: "messages")
                >>= (.: "message")
                >>= parseJSON)

  parseJSON _ = mzero

-- | Message Object
instance FromJSON Message where
  parseJSON (Object v) =
    Message <$> v .: "messengerId"
            <*> v .: "messengerName"
            <*> v .: "messageType"
            <*> v .: "latitude"
            <*> v .: "longitude"
            <*> liftM rt (v .: "dateTime")

  parseJSON _ = mzero

instance FromJSON ConfigUser where
  parseJSON (Object v) =
    ConfigUser <$> v .: "name"
               <*> v .: "spotId"
               <*> v .: "messengerId"

  parseJSON _ = mzero

instance FromJSON ConfigList where
  parseJSON (Object v) =
    ConfigList <$> (v .: "users" >>= parseJSON)

  parseJSON _ = mzero

instance ToJSON MessageList where
  toJSON (MessageList msgs) = object [ "messages" .= msgs ]

instance ToJSON Message where
  toJSON (Message mid mname mtype mlat mlong mtime) =
    object [ "mId" .= mid
           , "mName" .= mname
           , "mType" .= mtype
           , "mLat" .= mlat
           , "mLong" .= mlong
           , "mTime" .= mtime ]

instance ToJSON Competitor where
  toJSON (Competitor sid name nick bio color lat lon ts) =
    object [ "spotId" .= sid
           , "name" .= name
           , "nickname" .= nick
           , "bio" .= bio
           , "color" .= color
           , "latitude" .= lat
           , "longitude" .= lon
           , "timestamp" .= ts ]

instance ToJSON CompetitorList where
  toJSON (CompetitorList cl) = object [ "competitors" .= cl ]

instance ToJSON CompShort where
  toJSON (CompShort sid name nick bio color) =
    object [ "spotId" .= sid
           , "name" .= name
           , "nickname" .= nick
           , "bio" .= bio
           , "color" .= color]

instance ToJSON CsList where
  toJSON (CsList cl) = object [ "competitors" .= cl ]

instance ToJSON Location where
  toJSON (Location lat lon time) =
    object [ "latitude" .= lat
           , "longitude" .= lon
           , "timestamp" .= time ]

instance ToJSON LocationList where
  toJSON (LocationList ll) = object [ "location_points" .= ll ]

instance ToJSON RacePoint where
  toJSON (RacePoint name desc lat lon) =
    object [ "name" .= name
           , "description" .= desc
           , "latitude" .= lat
           , "longitude" .= lon ]

instance ToJSON RacePoints where
  toJSON (RacePoints rp) = object [ "race_points" .= rp ]



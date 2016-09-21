{-# LANGUAGE OverloadedStrings #-}
module ST.Utils(
   toLoc
  ,msgToLoc
  ,toComp
  ,toCs
  ,toRacePoint
  ,flipT
) where

import ST.Instances

import Data.Time ( UTCTime )

import Data.Text ( Text )


toLoc :: (Double, Double, UTCTime) -> Location
toLoc (lat, lon, time) = Location lat lon time

msgToLoc :: Message -> Location
msgToLoc (Message _ _ _ lat lon time) = Location lat lon time

toComp :: (Text, Text, Text, Text, Text, Double, Double, UTCTime) -> Competitor
toComp (sid, name, nick, bio, color, lat, lon, time) = Competitor sid name nick bio color lat lon time

toCs :: (Text, Text, Text, Text, Text) -> CompShort
toCs (sid, name, nick, bio, color) = CompShort sid name nick bio color

toRacePoint :: (Text, Text, Double, Double) -> RacePoint
toRacePoint (name, desc, lat, lon) = RacePoint name desc lat lon

flipT :: (Int, Text) -> (Text, Int)
flipT (x, y) = (y, x)


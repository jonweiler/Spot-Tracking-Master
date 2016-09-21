{-# LANGUAGE OverloadedStrings #-}
--{-# LANGUAGE QuasiQuotes #-}
module Main where

import ST
import Test.Hspec
--import Test.Hspec.Wai
--import Test.Hspec.Wai.JSON

import Data.Aeson
import Data.Maybe
import Data.Time

import qualified Data.Vector as V
import qualified Data.ByteString.Lazy as BL

main :: IO ()
main = hspec $ do
  describe "Term Parsing" $
    it "Term 1" $ do
      tf <- BL.readFile "fixtures/spotresponse.json"
      let t1 = decode tf :: Maybe MessageList
      t1 `shouldSatisfy` isJust
      V.length (messages $ fromJust t1) `shouldBe` (5 :: Int)

  describe "Config Parsing" $
    it "Config 1" $ do
      tf <- BL.readFile "fixtures/config.json"
      let t1 = decode tf :: Maybe ConfigList
      t1 `shouldSatisfy` isJust
      length (users $ fromJust t1) `shouldBe` (1 :: Int)

  describe "Date Parsing" $
    it "format 1" $ do
      let ds = rt "2015-02-13T01:39:11+0000"
      let dn = rt "2015-02-18T01:39:11+0000"
      ad ds `shouldBe` utctDay dn
        where
          ad _ds = addDays 5 $ utctDay _ds


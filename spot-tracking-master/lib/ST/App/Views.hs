{-# LANGUAGE OverloadedStrings #-}
module ST.App.Views ( homeView
                    , fourohfourView
                    , mapView ) where

import ST.App.Utils (pet, blaze)

import Data.Monoid (mempty)
import Prelude hiding (div, head, id, span)

import Text.Blaze.Html5 (Html, a, body, footer, stringValue,
                         dataAttribute, div, docTypeHtml, img,
                         head, header, hgroup, li, nav,
                         link, meta, p, script, span,
                         title, ul, (!))

import Text.Blaze.Html5.Attributes (charset, class_, content, href,
                                    httpEquiv, id, media, name, alt,
                                    rel, src, type_)
import Web.Scotty (ActionM)


homeView :: ActionM ()
homeView = blaze $ layout $ do
            div $
              p $ do
                span "This is the homepage, go find a "
                a ! href "/event/amazing%20race" $ "race"
            closing


fourohfourView :: ActionM ()
fourohfourView = blaze $ layout $
                  div $
                    p $ do
                      span "The page you were looking for could not be found... "
                      a ! href "/" $ "home"


mapView :: Int -> ActionM ()
mapView n = blaze $ do
              layout $ div ! id "map-canvas" ! class_ "min-height" ! dataAttribute "event" (stringValue $ show n) $ mempty
              script ! dataAttribute "main" "/static/prod/app" ! src "/static/js/lib/require.js" ! type_ "text/javascript" $ mempty


hhead :: Html
hhead = docTypeHtml $ do
              pet "<!--[if lt IE 7]><html class='no-js lt-ie9 lt-ie8 lt-ie7'> <![endif]-->"
              pet "<!--[if IE 7]><html class='no-js lt-ie9 lt-ie8'/> <![endif]-->"
              pet "<!--[if IE 8]><html class='no-js lt-ie9'> <![endif]-->"
              pet "<!--[if gt IE 8]><!--><html class='no-js'><!--<![endif]-->"
              head $ do
                title "Survival Trial Athlete Tracker"
                meta ! charset "utf-8"
                meta ! httpEquiv "X-UA-Compatible" ! content "IE=edge,chrome=1"
                meta ! name "description" ! content "GPS Athlete Tracking"
                meta ! name "viewport" ! content "user-scalable=no,initial-scale = 1.0,maximum-scale = 1.0"
                link ! href "/static/fonts/stylesheet.css" ! rel  "stylesheet" ! type_ "text/css"
                link ! href "/static/css/topcoat-desktop-dark.css" ! rel  "stylesheet" ! type_ "text/css"
                link ! href "/static/css/main.css" ! rel  "stylesheet" ! type_ "text/css"
                link ! href "/static/css/app.css" ! rel  "stylesheet" ! type_ "text/css" ! media "all"
                link ! href "http://survivaltrial.com/wp-content/uploads/2013/04/favicon.ico" ! rel "shortcut icon"

ulWith :: Html
ulWith = ul ! class_ "main-menu" $ navBar


--ulWithOut :: Html
--ulWithOut = ul navBar

navBar :: Html
navBar =  do
          li $ a ! href "http://store-survivaltrial-com.3dcartstores.com/" $ "Register"
          li $ do
            a ! href "http://survivaltrial.com/category/st-news/" $ "Research"
            ul ! class_ "sub-menu" $ do
              li $ a ! href "http://survivaltrial.com/survival-trial-winterborn/" $ "Survival Trial: Winterborn"
              li $ a ! href "http://survivaltrial.com/survival-trial-daybreaker/" $ "Survival Trial: Daybreaker"
              li $ a ! href "http://survivaltrial.com/survival-trial-sundowner/" $ "Survival Trial: Sundowner"
              li $ a ! href "http://survivaltrial.com/category/survivors/" $ "Survivors"
          li $ a ! href "http://survivaltrial.com/contact-us-survival-trial/" $ "Contact Us"
          li $ a ! href "http://survivaltrial.com/category/packing-list/" $ "Pack"
          li $ do
            a ! href "http://survivaltrial.com/category/survive/" $ "Survive"
            ul ! class_ "sub-menu" $ do
              li $ a ! href "http://survivaltrial.com/training/" $ "Training"
              li $ a ! href "http://survivaltrial.com/competitors-2/" $ "Competitors"
              li $ a ! href "https://www.flickr.com/photos/129430053@N06/" $ "Photo"
              li $ a ! href "http://www.youtube.com/user/SurvivalTrial12" $ "Video"
              li $ a ! href "http://survivaltrial.tumblr.com/" $ "Blog"
          li $ a ! href "http://survivaltrial.com/volunteer/" $ "Volunteer"


closing :: Html
closing = footer ! id "main-footer" $
            div ! id "footer-bottom" $
              div ! class_ "container clearfix" $ do
                div ! class_ "footer-info" $ span "Copyright 2014 Survival Trial"
                div ! class_ "footer-info" $ a ! href "mailto:info@survivaltrial.com" ! class_ "mailto" $ "Email Us"

lheader :: Html
lheader = header ! id "main-header" $
            div ! class_ "max-width" $ do
              hgroup $ a ! href "http://survivaltrial.com" $
                img ! src "http://survivaltrial.com/wp-content/uploads/2013/10/Survival-Trial-Logo.png" ! alt "Survival Trial" ! id "logo"
              nav ulWith
              a ! id "slide-menu-button" ! class_ "topcoat-icon-button--large--quiet" $ span ! class_ "topcoat-icon--large topcoat-icon--menu-stack" $ mempty


layout :: Html -> Html
layout c = do
             hhead
             body ! class_ "dark" $
               div ! id "wrapper" $ do
                 div ! class_ "max-width" $
                   div ! id "sideNav" $ do
                     nav ! class_ "site" $ p mempty
                     div ! id "competitorList" $
                       ul $ li mempty
                 div ! id "site" $ --do
                   div ! id "content" ! class_ "max-width min-height" $ c
                   --closing



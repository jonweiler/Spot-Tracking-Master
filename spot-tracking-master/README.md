# Mapping competitors using SPOT location data

## Synopsis

* Find N competitors in a race
* Fetch their location data from SPOT
* Return their location and Bio data to map
* ???


## Process Flow

* On race start, add competitors to DB
* Start Server instance
* Client begins polling spot API per limits
* JS beings polling server, setInterval seems simplest
* Client updates locations
* Server sends name, nick, bio, and location to JS
* JS draws map
* profit


## TODOS

### General

- [x] Add persistence
  - [x] Generate Schema

- [x] Create proper return type with JSON instances
- [ ] How do we handle multiple events...

### Server

- [x] Clean up rest interface
  - [x] quick and dirty option of returning all competitor locations
- [x] Add abiliity to specify race event locations
- [ ] Add admin interface
- [ ] Add tests for admin interface

### Client

- [x] Spot Client
  - [x] Read in competitor info from json config (eg spot ids)
  - [x] Add new points to DB
- [ ] Delorme Client
  - [ ] KML parser
  - [ ] Add new points to DB

### Front End

- [x] Figure out whether we are getting spot maps that we have to use or use google maps or mytopo
- [x] create html, css, js
- [x] Create google maps api key
- [x] Add points with user info bubble to google maps
- [x] Connect the points to show competitor route
- [x] Add sidebar of competitors to map with unique color track per competitor
- [x] Update JS data structure
- [ ] Clean up info bubbles and add user video url
- [ ] Ensure only one info bubble can be open at a time

### Infrastructure

- [x] Setup aws box with nginx, postgres
- [x] Create VM for build
- [x] Packer build app
- [ ] Terraform deployment if we ever use more than 1 box


## Links

### Syle Guide

[Guide](https://github.com/tibbe/haskell-style-guide/blob/master/haskell-style.md)

### Google dork for finding working spot id's to test

[allinurl:api.findmespot.com rest-api message](https://www.google.com/search?q=allinurl%3Aapi.findmespot.com+rest-api+message&oq=allinurl%3Aapi.findmespot.com+rest-api+message&aqs=chrome..69i57j69i58.12124j0j1&sourceid=chrome&es_sm=91&ie=UTF-8)

### Spot Api docs

[Spot Docs](http://faq.findmespot.com/index.php?action=showEntry&data=69)

### Halcyon help

[Halcyon Deployment](https://robots.thoughtbot.com/building-haskell-projects-with-halcyon)


## Assorted lessons in haskell

* Make sure that you add new library modules to the cabal file or linking will fail
* Halcyon is awesome


## Local Development

1. first
  * add 127.0.0.1 spot.dev to /etc/hosts
  * use the provided sql scripts to init the db
  * cabal configure --enable-test -f devel
  * competitor and event tables must be manually populated
  * cabal run st-client to populate locations
  * change app.js to base path of static/js
  * download react-tools, npm install -g react tools
  * then from the static directory, jsx --watch jsx js
  * to rebuild js, from static dir, r.js -o build.js

2. Using the provided nginx config
  * Run python -mSimpleHTTPServer from app/
  * Run cabal run st-server
  * view your app at spot.dev




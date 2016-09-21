CREATE TABLE event ( id SERIAL PRIMARY KEY
                   , name TEXT
                   , raceday DATE
                   );

CREATE TABLE competitor ( id TEXT PRIMARY KEY -- this is the spot id we use to grab their feeds
                        , event_no INTEGER REFERENCES event
                        , name TEXT
                        , nickname TEXT
                        , bio TEXT -- video url
                        , color TEXT -- The google map track color
                        );

CREATE TABLE competitor_location ( competitor TEXT REFERENCES competitor
                                 , event INTEGER REFERENCES event
                                 , latitude FLOAT
                                 , longitude FLOAT
                                 , time TIMESTAMP -- we get the timestamps from spot
                                 , PRIMARY KEY (competitor, event, time)
                                 );

CREATE TABLE race_points ( event INTEGER REFERENCES event
                         , name TEXT
                         , description TEXT
                         , latitude FLOAT
                         , longitude FLOAT
                         );


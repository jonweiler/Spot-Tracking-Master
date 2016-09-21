insert into event (name, raceday) values ('amazing race', '2015-02-13'); --YY-mm-dd
insert into competitor (id, event_no, name, nickname, bio, color) values
    ('0iO0U50i48qi8vNhR1OzR7Z2Ec68GAro6', 1, 'Zach Reeder', 'catfish', 'http://random.youtube.com', '#F00');
insert into competitor_location (competitor, event, latitude, longitude, time) values
    ('0iO0U50i48qi8vNhR1OzR7Z2Ec68GAro6', 1, 35.05721, -118.16437, '2015-02-13T01:39:11+0000')
   ,('0iO0U50i48qi8vNhR1OzR7Z2Ec68GAro6', 1, 35.2078, -117.99889, '2015-02-13T01:29:11+0000')
   ,('0iO0U50i48qi8vNhR1OzR7Z2Ec68GAro6', 1, 35.32403, -117.98486, '2015-02-13T01:19:09+0000')
   ,('0iO0U50i48qi8vNhR1OzR7Z2Ec68GAro6', 1, 35.05923, -118.16286, '2015-02-13T01:09:03+0000');
insert into race_points (event, name, description, latitude, longitude) values
    (1, 'Buried Treasure', 'X marks the spot for your pot of gold', 35.1234, -118.00012)
   ,(1, 'Snake Pit', 'Challenge the menacing snake pit of doom', 35.4321, -118.01233);

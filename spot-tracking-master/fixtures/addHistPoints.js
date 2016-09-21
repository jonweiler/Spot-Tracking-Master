function addHistoryPoints() {
    infowindow = new google.maps.InfoWindow({
        content: 'temp'
    });
    polypath = [];
    point = new google.maps.LatLng(37.277430, - 107.879320);
    imarker27 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 8 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker27);
    google.maps.event.addListener(imarker27, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #1 received at: 04:01:10 AM (MDT) 07/21/13 <br /> (37 days, 8 hours, 23 minutes ago) (0:00:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 0.0 ft traveled at 0.0 mph<br />Route mile 0.0 ft<br /> <a href=javascript:{google.maps.event.trigger(imarker24,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker30,"click");}>Next point >>></a>');
        infowindow.open(map, imarker27);
    });
    polypath.push(new google.maps.LatLng(37.277430, - 107.879320));
    point = new google.maps.LatLng(37.309910, - 107.888440);
    imarker30 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 8 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker30);
    google.maps.event.addListener(imarker30, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #4 received at: 04:16:10 AM (MDT) 07/21/13 <br /> (37 days, 8 hours, 8 minutes ago) (0:00:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 2.47 mi traveled at 9.9 mph<br />Route mile 0.0 ft<br /> <a href=javascript:{google.maps.event.trigger(imarker27,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker33,"click");}>Next point >>></a>');
        infowindow.open(map, imarker30);
    });
    polypath.push(new google.maps.LatLng(37.309910, - 107.888440));
    point = new google.maps.LatLng(37.335980, - 107.917080);
    imarker33 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 7 hours, 48 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker33);
    google.maps.event.addListener(imarker33, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #7 received at: 04:36:06 AM (MDT) 07/21/13 <br /> (37 days, 7 hours, 48 minutes ago) (0:00:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.08 mi traveled at 6.3 mph<br />Route mile 0.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker30,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker36,"click");}>Next point >>></a>');
        infowindow.open(map, imarker33);
    });
    polypath.push(new google.maps.LatLng(37.335980, - 107.917080));
    point = new google.maps.LatLng(37.352890, - 107.928700);
    imarker36 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 7 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker36);
    google.maps.event.addListener(imarker36, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #10 received at: 04:56:04 AM (MDT) 07/21/13 <br /> (37 days, 7 hours, 28 minutes ago) (0:00:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.46 mi traveled at 1.0 mph<br />Route mile 1.21 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker33,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker39,"click");}>Next point >>></a>');
        infowindow.open(map, imarker36);
    });
    polypath.push(new google.maps.LatLng(37.352890, - 107.928700));
    point = new google.maps.LatLng(37.354940, - 107.941850);
    imarker39 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 7 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker39);
    google.maps.event.addListener(imarker39, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #13 received at: 05:21:02 AM (MDT) 07/21/13 <br /> (37 days, 7 hours, 3 minutes ago) (0:01:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.21 mi traveled at 3.2 mph<br />Route mile 2.23 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker36,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker42,"click");}>Next point >>></a>');
        infowindow.open(map, imarker39);
    });
    polypath.push(new google.maps.LatLng(37.354940, - 107.941850));
    point = new google.maps.LatLng(37.392970, - 107.968300);
    imarker42 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 6 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker42);
    google.maps.event.addListener(imarker42, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #16 received at: 06:19:34 AM (MDT) 07/21/13 <br /> (37 days, 6 hours, 4 minutes ago) (0:02:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.07 mi traveled at 4.5 mph<br />Route mile 9.42 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker39,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker45,"click");}>Next point >>></a>');
        infowindow.open(map, imarker42);
    });
    polypath.push(new google.maps.LatLng(37.392970, - 107.968300));
    point = new google.maps.LatLng(37.425870, - 107.973330);
    imarker45 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 5 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker45);
    google.maps.event.addListener(imarker45, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #19 received at: 06:45:42 AM (MDT) 07/21/13 <br /> (37 days, 5 hours, 38 minutes ago) (0:02:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.38 mi traveled at 5.8 mph<br />Route mile 14.40 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker42,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker48,"click");}>Next point >>></a>');
        infowindow.open(map, imarker45);
    });
    polypath.push(new google.maps.LatLng(37.425870, - 107.973330));
    point = new google.maps.LatLng(37.445050, - 107.969510);
    imarker48 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 5 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker48);
    google.maps.event.addListener(imarker48, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #22 received at: 07:15:36 AM (MDT) 07/21/13 <br /> (37 days, 5 hours, 8 minutes ago) (0:03:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.75 mi traveled at 2.6 mph<br />Route mile 16.20 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker45,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker51,"click");}>Next point >>></a>');
        infowindow.open(map, imarker48);
    });
    polypath.push(new google.maps.LatLng(37.445050, - 107.969510));
    point = new google.maps.LatLng(37.450170, - 107.984280);
    imarker51 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 4 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker51);
    google.maps.event.addListener(imarker51, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #25 received at: 07:40:30 AM (MDT) 07/21/13 <br /> (37 days, 4 hours, 43 minutes ago) (0:03:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.80 mi traveled at 2.5 mph<br />Route mile 17.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker48,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker54,"click");}>Next point >>></a>');
        infowindow.open(map, imarker51);
    });
    polypath.push(new google.maps.LatLng(37.450170, - 107.984280));
    point = new google.maps.LatLng(37.451870, - 107.987430);
    imarker54 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 4 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker54);
    google.maps.event.addListener(imarker54, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #28 received at: 07:55:29 AM (MDT) 07/21/13 <br /> (37 days, 4 hours, 28 minutes ago) (0:03:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.04 mi traveled at 0.8 mph<br />Route mile 17.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker51,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker57,"click");}>Next point >>></a>');
        infowindow.open(map, imarker54);
    });
    polypath.push(new google.maps.LatLng(37.451870, - 107.987430));
    point = new google.maps.LatLng(37.448090, - 107.995670);
    imarker57 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 4 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker57);
    google.maps.event.addListener(imarker57, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #31 received at: 08:10:52 AM (MDT) 07/21/13 <br /> (37 days, 4 hours, 13 minutes ago) (0:04:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.01 mi traveled at 2.5 mph<br />Route mile 19.30 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker54,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker60,"click");}>Next point >>></a>');
        infowindow.open(map, imarker57);
    });
    polypath.push(new google.maps.LatLng(37.448090, - 107.995670));
    point = new google.maps.LatLng(37.448040, - 108.002520);
    imarker60 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 3 hours, 59 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker60);
    google.maps.event.addListener(imarker60, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #34 received at: 08:25:08 AM (MDT) 07/21/13 <br /> (37 days, 3 hours, 59 minutes ago) (0:04:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.49 mi traveled at 1.5 mph<br />Route mile 19.30 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker57,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker63,"click");}>Next point >>></a>');
        infowindow.open(map, imarker60);
    });
    polypath.push(new google.maps.LatLng(37.448040, - 108.002520));
    point = new google.maps.LatLng(37.456900, - 108.030040);
    imarker63 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 3 hours, 44 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker63);
    google.maps.event.addListener(imarker63, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #37 received at: 08:40:06 AM (MDT) 07/21/13 <br /> (37 days, 3 hours, 44 minutes ago) (0:04:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.32 mi traveled at 0.4 mph<br />Route mile 23.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker60,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker66,"click");}>Next point >>></a>');
        infowindow.open(map, imarker63);
    });
    polypath.push(new google.maps.LatLng(37.456900, - 108.030040));
    point = new google.maps.LatLng(37.459600, - 108.035310);
    imarker66 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 3 hours, 29 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker66);
    google.maps.event.addListener(imarker66, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #40 received at: 08:55:02 AM (MDT) 07/21/13 <br /> (37 days, 3 hours, 29 minutes ago) (0:04:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.13 mi traveled at 1.7 mph<br />Route mile 23.40 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker63,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker69,"click");}>Next point >>></a>');
        infowindow.open(map, imarker66);
    });
    polypath.push(new google.maps.LatLng(37.459600, - 108.035310));
    point = new google.maps.LatLng(37.470010, - 108.035770);
    imarker69 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 3 hours, 9 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker69);
    google.maps.event.addListener(imarker69, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #43 received at: 09:15:00 AM (MDT) 07/21/13 <br /> (37 days, 3 hours, 9 minutes ago) (0:05:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.00 mi traveled at 3.1 mph<br />Route mile 23.11 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker66,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker72,"click");}>Next point >>></a>');
        infowindow.open(map, imarker69);
    });
    polypath.push(new google.maps.LatLng(37.470010, - 108.035770));
    point = new google.maps.LatLng(37.483920, - 108.033940);
    imarker72 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 2 hours, 54 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker72);
    google.maps.event.addListener(imarker72, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #46 received at: 09:29:57 AM (MDT) 07/21/13 <br /> (37 days, 2 hours, 54 minutes ago) (0:05:29 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.05 mi traveled at 2.6 mph<br />Route mile 24.43 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker69,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker75,"click");}>Next point >>></a>');
        infowindow.open(map, imarker72);
    });
    polypath.push(new google.maps.LatLng(37.483920, - 108.033940));
    point = new google.maps.LatLng(37.549040, - 108.017280);
    imarker75 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 2 hours, 9 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker75);
    google.maps.event.addListener(imarker75, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #49 received at: 10:14:52 AM (MDT) 07/21/13 <br /> (37 days, 2 hours, 9 minutes ago) (0:06:14 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.65 mi traveled at 6.6 mph<br />Route mile 32.60 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker72,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker78,"click");}>Next point >>></a>');
        infowindow.open(map, imarker75);
    });
    polypath.push(new google.maps.LatLng(37.549040, - 108.017280));
    point = new google.maps.LatLng(37.579290, - 108.019440);
    imarker78 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 1 hours, 54 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker78);
    google.maps.event.addListener(imarker78, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #52 received at: 10:29:50 AM (MDT) 07/21/13 <br /> (37 days, 1 hours, 54 minutes ago) (0:06:29 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.46 mi traveled at 9.7 mph<br />Route mile 35.05 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker75,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker81,"click");}>Next point >>></a>');
        infowindow.open(map, imarker78);
    });
    polypath.push(new google.maps.LatLng(37.579290, - 108.019440));
    point = new google.maps.LatLng(37.619400, - 107.992550);
    imarker81 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 1 hours, 24 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker81);
    google.maps.event.addListener(imarker81, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #55 received at: 10:59:47 AM (MDT) 07/21/13 <br /> (37 days, 1 hours, 24 minutes ago) (0:06:59 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.82 mi traveled at 7.4 mph<br />Route mile 38.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker78,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker84,"click");}>Next point >>></a>');
        infowindow.open(map, imarker81);
    });
    polypath.push(new google.maps.LatLng(37.619400, - 107.992550));
    point = new google.maps.LatLng(37.636210, - 107.971120);
    imarker84 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 1 hours, 9 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker84);
    google.maps.event.addListener(imarker84, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #58 received at: 11:14:42 AM (MDT) 07/21/13 <br /> (37 days, 1 hours, 9 minutes ago) (0:07:14 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.02 mi traveled at 7.6 mph<br />Route mile 41.45 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker81,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker87,"click");}>Next point >>></a>');
        infowindow.open(map, imarker84);
    });
    polypath.push(new google.maps.LatLng(37.636210, - 107.971120));
    point = new google.maps.LatLng(37.662080, - 107.962270);
    imarker87 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 0 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker87);
    google.maps.event.addListener(imarker87, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #61 received at: 11:34:42 AM (MDT) 07/21/13 <br /> (37 days, 0 hours, 49 minutes ago) (0:07:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.51 mi traveled at 7.3 mph<br />Route mile 42.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker84,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker90,"click");}>Next point >>></a>');
        infowindow.open(map, imarker87);
    });
    polypath.push(new google.maps.LatLng(37.662080, - 107.962270));
    point = new google.maps.LatLng(37.678620, - 107.977910);
    imarker90 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 37 days, 0 hours, 9 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker90);
    google.maps.event.addListener(imarker90, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #64 received at: 12:14:29 PM (MDT) 07/21/13 <br /> (37 days, 0 hours, 9 minutes ago) (0:08:14 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.25 mi traveled at 2.2 mph<br />Route mile 44.88 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker87,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker93,"click");}>Next point >>></a>');
        infowindow.open(map, imarker90);
    });
    polypath.push(new google.maps.LatLng(37.678620, - 107.977910));
    point = new google.maps.LatLng(37.682960, - 107.980970);
    imarker93 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 23 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker93);
    google.maps.event.addListener(imarker93, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #67 received at: 12:29:18 PM (MDT) 07/21/13 <br /> (36 days, 23 hours, 55 minutes ago) (0:08:29 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.44 mi traveled at 2.0 mph<br />Route mile 46.19 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker90,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker96,"click");}>Next point >>></a>');
        infowindow.open(map, imarker93);
    });
    polypath.push(new google.maps.LatLng(37.682960, - 107.980970));
    point = new google.maps.LatLng(37.692990, - 107.969510);
    imarker96 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 23 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker96);
    google.maps.event.addListener(imarker96, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #70 received at: 12:45:48 PM (MDT) 07/21/13 <br /> (36 days, 23 hours, 38 minutes ago) (0:08:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.94 mi traveled at 8.3 mph<br />Route mile 46.19 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker93,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker99,"click");}>Next point >>></a>');
        infowindow.open(map, imarker96);
    });
    polypath.push(new google.maps.LatLng(37.692990, - 107.969510));
    point = new google.maps.LatLng(37.702260, - 107.960100);
    imarker99 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 23 hours, 25 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker99);
    google.maps.event.addListener(imarker99, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #73 received at: 12:59:12 PM (MDT) 07/21/13 <br /> (36 days, 23 hours, 25 minutes ago) (0:08:59 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.53 mi traveled at 5.9 mph<br />Route mile 49.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker96,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker102,"click");}>Next point >>></a>');
        infowindow.open(map, imarker99);
    });
    polypath.push(new google.maps.LatLng(37.702260, - 107.960100));
    point = new google.maps.LatLng(37.707320, - 107.940220);
    imarker102 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 23 hours, 10 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker102);
    google.maps.event.addListener(imarker102, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #76 received at: 01:14:05 PM (MDT) 07/21/13 <br /> (36 days, 23 hours, 10 minutes ago) (0:09:14 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.71 mi traveled at 10.3 mph<br />Route mile 50.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker99,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker105,"click");}>Next point >>></a>');
        infowindow.open(map, imarker102);
    });
    polypath.push(new google.maps.LatLng(37.707320, - 107.940220));
    point = new google.maps.LatLng(37.711860, - 107.916210);
    imarker105 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 22 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker105);
    google.maps.event.addListener(imarker105, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #79 received at: 01:28:59 PM (MDT) 07/21/13 <br /> (36 days, 22 hours, 55 minutes ago) (0:09:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.13 mi traveled at 5.7 mph<br />Route mile 53.98 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker102,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker108,"click");}>Next point >>></a>');
        infowindow.open(map, imarker105);
    });
    polypath.push(new google.maps.LatLng(37.711860, - 107.916210));
    point = new google.maps.LatLng(37.717780, - 107.881820);
    imarker108 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 22 hours, 30 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker108);
    google.maps.event.addListener(imarker108, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #82 received at: 01:53:59 PM (MDT) 07/21/13 <br /> (36 days, 22 hours, 30 minutes ago) (0:09:53 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.72 mi traveled at 2.8 mph<br />Route mile 54.99 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker105,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker111,"click");}>Next point >>></a>');
        infowindow.open(map, imarker108);
    });
    polypath.push(new google.maps.LatLng(37.717780, - 107.881820));
    point = new google.maps.LatLng(37.744000, - 107.850440);
    imarker111 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 21 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker111);
    google.maps.event.addListener(imarker111, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #85 received at: 02:28:45 PM (MDT) 07/21/13 <br /> (36 days, 21 hours, 55 minutes ago) (0:10:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.91 mi traveled at 5.8 mph<br />Route mile 59.66 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker108,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker114,"click");}>Next point >>></a>');
        infowindow.open(map, imarker111);
    });
    polypath.push(new google.maps.LatLng(37.744000, - 107.850440));
    point = new google.maps.LatLng(37.739350, - 107.843960);
    imarker114 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 21 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker114);
    google.maps.event.addListener(imarker114, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #88 received at: 02:48:40 PM (MDT) 07/21/13 <br /> (36 days, 21 hours, 35 minutes ago) (0:10:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.65 mi traveled at 1.7 mph<br />Route mile 60.86 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker111,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker117,"click");}>Next point >>></a>');
        infowindow.open(map, imarker114);
    });
    polypath.push(new google.maps.LatLng(37.739350, - 107.843960));
    point = new google.maps.LatLng(37.741720, - 107.835920);
    imarker117 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 21 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker117);
    google.maps.event.addListener(imarker117, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #91 received at: 03:03:38 PM (MDT) 07/21/13 <br /> (36 days, 21 hours, 20 minutes ago) (0:11:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.25 mi traveled at 2.3 mph<br />Route mile 61.15 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker114,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker120,"click");}>Next point >>></a>');
        infowindow.open(map, imarker117);
    });
    polypath.push(new google.maps.LatLng(37.741720, - 107.835920));
    point = new google.maps.LatLng(37.744610, - 107.826070);
    imarker120 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 21 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker120);
    google.maps.event.addListener(imarker120, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #94 received at: 03:18:36 PM (MDT) 07/21/13 <br /> (36 days, 21 hours, 5 minutes ago) (0:11:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.37 mi traveled at 2.7 mph<br />Route mile 61.70 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker117,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker123,"click");}>Next point >>></a>');
        infowindow.open(map, imarker120);
    });
    polypath.push(new google.maps.LatLng(37.744610, - 107.826070));
    point = new google.maps.LatLng(37.747440, - 107.819800);
    imarker123 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 20 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker123);
    google.maps.event.addListener(imarker123, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #97 received at: 03:33:33 PM (MDT) 07/21/13 <br /> (36 days, 20 hours, 50 minutes ago) (0:11:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.06 mi traveled at 2.2 mph<br />Route mile 62.66 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker120,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker126,"click");}>Next point >>></a>');
        infowindow.open(map, imarker123);
    });
    polypath.push(new google.maps.LatLng(37.747440, - 107.819800));
    point = new google.maps.LatLng(37.749390, - 107.816670);
    imarker126 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 20 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker126);
    google.maps.event.addListener(imarker126, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #100 received at: 03:48:32 PM (MDT) 07/21/13 <br /> (36 days, 20 hours, 35 minutes ago) (0:11:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.58 mi traveled at 0.7 mph<br />Route mile 63.80 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker123,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker129,"click");}>Next point >>></a>');
        infowindow.open(map, imarker126);
    });
    polypath.push(new google.maps.LatLng(37.749390, - 107.816670));
    point = new google.maps.LatLng(37.756070, - 107.794650);
    imarker129 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 20 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker129);
    google.maps.event.addListener(imarker129, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #103 received at: 04:03:34 PM (MDT) 07/21/13 <br /> (36 days, 20 hours, 20 minutes ago) (0:12:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.07 mi traveled at 6.2 mph<br />Route mile 65.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker126,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker132,"click");}>Next point >>></a>');
        infowindow.open(map, imarker129);
    });
    polypath.push(new google.maps.LatLng(37.756070, - 107.794650));
    point = new google.maps.LatLng(37.768700, - 107.754820);
    imarker132 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 19 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker132);
    google.maps.event.addListener(imarker132, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #106 received at: 04:28:23 PM (MDT) 07/21/13 <br /> (36 days, 19 hours, 55 minutes ago) (0:12:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.61 mi traveled at 6.7 mph<br />Route mile 68.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker129,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker135,"click");}>Next point >>></a>');
        infowindow.open(map, imarker132);
    });
    polypath.push(new google.maps.LatLng(37.768700, - 107.754820));
    point = new google.maps.LatLng(37.764300, - 107.737210);
    imarker135 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 19 hours, 40 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker135);
    google.maps.event.addListener(imarker135, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #109 received at: 04:43:24 PM (MDT) 07/21/13 <br /> (36 days, 19 hours, 40 minutes ago) (0:12:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.62 mi traveled at 7.7 mph<br />Route mile 69.84 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker132,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker138,"click");}>Next point >>></a>');
        infowindow.open(map, imarker135);
    });
    polypath.push(new google.maps.LatLng(37.764300, - 107.737210));
    point = new google.maps.LatLng(37.754380, - 107.719530);
    imarker138 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 19 hours, 25 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker138);
    google.maps.event.addListener(imarker138, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #112 received at: 04:58:24 PM (MDT) 07/21/13 <br /> (36 days, 19 hours, 25 minutes ago) (0:12:58 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.43 mi traveled at 6.5 mph<br />Route mile 71.65 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker135,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker141,"click");}>Next point >>></a>');
        infowindow.open(map, imarker138);
    });
    polypath.push(new google.maps.LatLng(37.754380, - 107.719530));
    point = new google.maps.LatLng(37.759040, - 107.680480);
    imarker141 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 19 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker141);
    google.maps.event.addListener(imarker141, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #115 received at: 05:18:25 PM (MDT) 07/21/13 <br /> (36 days, 19 hours, 5 minutes ago) (0:13:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.10 mi traveled at 21.4 mph<br />Route mile 78.39 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker138,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker144,"click");}>Next point >>></a>');
        infowindow.open(map, imarker141);
    });
    polypath.push(new google.maps.LatLng(37.759040, - 107.680480));
    point = new google.maps.LatLng(37.807660, - 107.668240);
    imarker144 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 18 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker144);
    google.maps.event.addListener(imarker144, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #118 received at: 05:33:25 PM (MDT) 07/21/13 <br /> (36 days, 18 hours, 50 minutes ago) (0:13:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.94 mi traveled at 0.1 mph<br />Route mile 82.28 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker141,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker147,"click");}>Next point >>></a>');
        infowindow.open(map, imarker144);
    });
    polypath.push(new google.maps.LatLng(37.807660, - 107.668240));
    point = new google.maps.LatLng(37.807620, - 107.668270);
    imarker147 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 18 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker147);
    google.maps.event.addListener(imarker147, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #121 received at: 05:48:28 PM (MDT) 07/21/13 <br /> (36 days, 18 hours, 35 minutes ago) (0:13:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.40 mi traveled at 0.1 mph<br />Route mile 82.28 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker144,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker150,"click");}>Next point >>></a>');
        infowindow.open(map, imarker147);
    });
    polypath.push(new google.maps.LatLng(37.807620, - 107.668270));
    point = new google.maps.LatLng(37.817460, - 107.652860);
    imarker150 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 18 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker150);
    google.maps.event.addListener(imarker150, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #124 received at: 06:03:27 PM (MDT) 07/21/13 <br /> (36 days, 18 hours, 20 minutes ago) (0:14:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.99 mi traveled at 12.7 mph<br />Route mile 84.24 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker147,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker153,"click");}>Next point >>></a>');
        infowindow.open(map, imarker150);
    });
    polypath.push(new google.maps.LatLng(37.817460, - 107.652860));
    point = new google.maps.LatLng(37.830830, - 107.607770);
    imarker153 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 18 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker153);
    google.maps.event.addListener(imarker153, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #127 received at: 06:18:24 PM (MDT) 07/21/13 <br /> (36 days, 18 hours, 5 minutes ago) (0:14:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.28 mi traveled at 11.8 mph<br />Route mile 87.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker150,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker156,"click");}>Next point >>></a>');
        infowindow.open(map, imarker153);
    });
    polypath.push(new google.maps.LatLng(37.830830, - 107.607770));
    point = new google.maps.LatLng(37.816880, - 107.580720);
    imarker156 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 17 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker156);
    google.maps.event.addListener(imarker156, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #130 received at: 06:33:23 PM (MDT) 07/21/13 <br /> (36 days, 17 hours, 50 minutes ago) (0:14:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.58 mi traveled at 6.1 mph<br />Route mile 90.01 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker153,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker159,"click");}>Next point >>></a>');
        infowindow.open(map, imarker156);
    });
    polypath.push(new google.maps.LatLng(37.816880, - 107.580720));
    point = new google.maps.LatLng(37.816410, - 107.570880);
    imarker159 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 17 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker159);
    google.maps.event.addListener(imarker159, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #133 received at: 07:03:08 PM (MDT) 07/21/13 <br /> (36 days, 17 hours, 21 minutes ago) (0:15:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.84 mi traveled at 1.1 mph<br />Route mile 90.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker156,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker162,"click");}>Next point >>></a>');
        infowindow.open(map, imarker159);
    });
    polypath.push(new google.maps.LatLng(37.816410, - 107.570880));
    point = new google.maps.LatLng(37.810940, - 107.568180);
    imarker162 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 17 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker162);
    google.maps.event.addListener(imarker162, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #136 received at: 07:18:07 PM (MDT) 07/21/13 <br /> (36 days, 17 hours, 6 minutes ago) (0:15:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.05 mi traveled at 1.6 mph<br />Route mile 90.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker159,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker165,"click");}>Next point >>></a>');
        infowindow.open(map, imarker162);
    });
    polypath.push(new google.maps.LatLng(37.810940, - 107.568180));
    point = new google.maps.LatLng(37.807760, - 107.563280);
    imarker165 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 16 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker165);
    google.maps.event.addListener(imarker165, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #139 received at: 07:33:06 PM (MDT) 07/21/13 <br /> (36 days, 16 hours, 51 minutes ago) (0:15:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.13 mi traveled at 2.1 mph<br />Route mile 90.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker162,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker168,"click");}>Next point >>></a>');
        infowindow.open(map, imarker165);
    });
    polypath.push(new google.maps.LatLng(37.807760, - 107.563280));
    point = new google.maps.LatLng(37.802620, - 107.558230);
    imarker168 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 16 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker168);
    google.maps.event.addListener(imarker168, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #142 received at: 07:48:03 PM (MDT) 07/21/13 <br /> (36 days, 16 hours, 36 minutes ago) (0:15:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.34 mi traveled at 2.3 mph<br />Route mile 90.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker165,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker171,"click");}>Next point >>></a>');
        infowindow.open(map, imarker168);
    });
    polypath.push(new google.maps.LatLng(37.802620, - 107.558230));
    point = new google.maps.LatLng(37.798280, - 107.551240);
    imarker171 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 16 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker171);
    google.maps.event.addListener(imarker171, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #145 received at: 08:03:00 PM (MDT) 07/21/13 <br /> (36 days, 16 hours, 21 minutes ago) (0:16:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.69 mi traveled at 1.1 mph<br />Route mile 92.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker168,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker174,"click");}>Next point >>></a>');
        infowindow.open(map, imarker171);
    });
    polypath.push(new google.maps.LatLng(37.798280, - 107.551240));
    point = new google.maps.LatLng(37.795710, - 107.533610);
    imarker174 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 15 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker174);
    google.maps.event.addListener(imarker174, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #148 received at: 08:28:03 PM (MDT) 07/21/13 <br /> (36 days, 15 hours, 56 minutes ago) (0:16:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.03 mi traveled at 2.8 mph<br />Route mile 94.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker171,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker177,"click");}>Next point >>></a>');
        infowindow.open(map, imarker174);
    });
    polypath.push(new google.maps.LatLng(37.795710, - 107.533610));
    point = new google.maps.LatLng(37.801200, - 107.538150);
    imarker177 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 15 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker177);
    google.maps.event.addListener(imarker177, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #151 received at: 08:43:03 PM (MDT) 07/21/13 <br /> (36 days, 15 hours, 41 minutes ago) (0:16:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.46 mi traveled at 1.7 mph<br />Route mile 94.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker174,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker180,"click");}>Next point >>></a>');
        infowindow.open(map, imarker177);
    });
    polypath.push(new google.maps.LatLng(37.801200, - 107.538150));
    point = new google.maps.LatLng(37.803630, - 107.532910);
    imarker180 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 15 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker180);
    google.maps.event.addListener(imarker180, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #154 received at: 08:58:01 PM (MDT) 07/21/13 <br /> (36 days, 15 hours, 26 minutes ago) (0:16:58 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.07 mi traveled at 1.6 mph<br />Route mile 94.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker177,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker183,"click");}>Next point >>></a>');
        infowindow.open(map, imarker180);
    });
    polypath.push(new google.maps.LatLng(37.803630, - 107.532910));
    point = new google.maps.LatLng(37.812930, - 107.525510);
    imarker183 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 15 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker183);
    google.maps.event.addListener(imarker183, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #157 received at: 09:13:01 PM (MDT) 07/21/13 <br /> (36 days, 15 hours, 11 minutes ago) (0:17:13 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.10 mi traveled at 5.1 mph<br />Route mile 96.50 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker180,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker186,"click");}>Next point >>></a>');
        infowindow.open(map, imarker183);
    });
    polypath.push(new google.maps.LatLng(37.812930, - 107.525510));
    point = new google.maps.LatLng(37.817500, - 107.521330);
    imarker186 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 14 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker186);
    google.maps.event.addListener(imarker186, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #160 received at: 09:28:00 PM (MDT) 07/21/13 <br /> (36 days, 14 hours, 56 minutes ago) (0:17:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.49 mi traveled at 2.0 mph<br />Route mile 98.67 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker183,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker189,"click");}>Next point >>></a>');
        infowindow.open(map, imarker186);
    });
    polypath.push(new google.maps.LatLng(37.817500, - 107.521330));
    point = new google.maps.LatLng(37.824020, - 107.520190);
    imarker189 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 14 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker189);
    google.maps.event.addListener(imarker189, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #163 received at: 09:43:01 PM (MDT) 07/21/13 <br /> (36 days, 14 hours, 41 minutes ago) (0:17:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.40 mi traveled at 1.9 mph<br />Route mile 99.24 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker186,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker192,"click");}>Next point >>></a>');
        infowindow.open(map, imarker189);
    });
    polypath.push(new google.maps.LatLng(37.824020, - 107.520190));
    point = new google.maps.LatLng(37.831100, - 107.518110);
    imarker192 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 14 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker192);
    google.maps.event.addListener(imarker192, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #166 received at: 09:57:59 PM (MDT) 07/21/13 <br /> (36 days, 14 hours, 26 minutes ago) (0:17:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.55 mi traveled at 1.6 mph<br />Route mile 99.15 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker189,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker195,"click");}>Next point >>></a>');
        infowindow.open(map, imarker192);
    });
    polypath.push(new google.maps.LatLng(37.831100, - 107.518110));
    point = new google.maps.LatLng(37.839900, - 107.512360);
    imarker195 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 14 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker195);
    google.maps.event.addListener(imarker195, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #169 received at: 10:12:57 PM (MDT) 07/21/13 <br /> (36 days, 14 hours, 11 minutes ago) (0:18:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.83 mi traveled at 4.1 mph<br />Route mile 99.24 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker192,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker198,"click");}>Next point >>></a>');
        infowindow.open(map, imarker195);
    });
    polypath.push(new google.maps.LatLng(37.839900, - 107.512360));
    point = new google.maps.LatLng(37.843560, - 107.503270);
    imarker198 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 13 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker198);
    google.maps.event.addListener(imarker198, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #172 received at: 10:27:56 PM (MDT) 07/21/13 <br /> (36 days, 13 hours, 56 minutes ago) (0:18:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.76 mi traveled at 0.3 mph<br />Route mile 100.76 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker195,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker201,"click");}>Next point >>></a>');
        infowindow.open(map, imarker198);
    });
    polypath.push(new google.maps.LatLng(37.843560, - 107.503270));
    point = new google.maps.LatLng(37.845950, - 107.488270);
    imarker201 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 13 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker201);
    google.maps.event.addListener(imarker201, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #175 received at: 10:43:02 PM (MDT) 07/21/13 <br /> (36 days, 13 hours, 41 minutes ago) (0:18:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.41 mi traveled at 5.9 mph<br />Route mile 102.46 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker198,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker204,"click");}>Next point >>></a>');
        infowindow.open(map, imarker201);
    });
    polypath.push(new google.maps.LatLng(37.845950, - 107.488270));
    point = new google.maps.LatLng(37.846290, - 107.481780);
    imarker204 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 13 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker204);
    google.maps.event.addListener(imarker204, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #178 received at: 10:57:57 PM (MDT) 07/21/13 <br /> (36 days, 13 hours, 26 minutes ago) (0:18:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.24 mi traveled at 0.7 mph<br />Route mile 102.88 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker201,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker207,"click");}>Next point >>></a>');
        infowindow.open(map, imarker204);
    });
    polypath.push(new google.maps.LatLng(37.846290, - 107.481780));
    point = new google.maps.LatLng(37.850040, - 107.476170);
    imarker207 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 13 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker207);
    google.maps.event.addListener(imarker207, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #181 received at: 11:13:00 PM (MDT) 07/21/13 <br /> (36 days, 13 hours, 11 minutes ago) (0:19:13 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.35 mi traveled at 2.8 mph<br />Route mile 103.36 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker204,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker210,"click");}>Next point >>></a>');
        infowindow.open(map, imarker207);
    });
    polypath.push(new google.maps.LatLng(37.850040, - 107.476170));
    point = new google.maps.LatLng(37.847410, - 107.461910);
    imarker210 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 12 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker210);
    google.maps.event.addListener(imarker210, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #184 received at: 11:27:56 PM (MDT) 07/21/13 <br /> (36 days, 12 hours, 56 minutes ago) (0:19:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.78 mi traveled at 5.4 mph<br />Route mile 104.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker207,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker213,"click");}>Next point >>></a>');
        infowindow.open(map, imarker210);
    });
    polypath.push(new google.maps.LatLng(37.847410, - 107.461910));
    point = new google.maps.LatLng(37.847150, - 107.444760);
    imarker213 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 12 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker213);
    google.maps.event.addListener(imarker213, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #187 received at: 11:42:56 PM (MDT) 07/21/13 <br /> (36 days, 12 hours, 41 minutes ago) (0:19:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.04 mi traveled at 3.7 mph<br />Route mile 105.75 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker210,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker216,"click");}>Next point >>></a>');
        infowindow.open(map, imarker213);
    });
    polypath.push(new google.maps.LatLng(37.847150, - 107.444760));
    point = new google.maps.LatLng(37.845200, - 107.438280);
    imarker216 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 12 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker216);
    google.maps.event.addListener(imarker216, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #190 received at: 11:57:55 PM (MDT) 07/21/13 <br /> (36 days, 12 hours, 26 minutes ago) (0:19:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.09 mi traveled at 3.8 mph<br />Route mile 105.75 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker213,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker219,"click");}>Next point >>></a>');
        infowindow.open(map, imarker216);
    });
    polypath.push(new google.maps.LatLng(37.845200, - 107.438280));
    point = new google.maps.LatLng(37.848710, - 107.432360);
    imarker219 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 12 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker219);
    google.maps.event.addListener(imarker219, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #193 received at: 12:12:55 AM (MDT) 07/22/13 <br /> (36 days, 12 hours, 11 minutes ago) (0:20:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.96 mi traveled at 1.1 mph<br />Route mile 105.67 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker216,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker222,"click");}>Next point >>></a>');
        infowindow.open(map, imarker219);
    });
    polypath.push(new google.maps.LatLng(37.848710, - 107.432360));
    point = new google.maps.LatLng(37.853090, - 107.424800);
    imarker222 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 11 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker222);
    google.maps.event.addListener(imarker222, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #196 received at: 12:27:55 AM (MDT) 07/22/13 <br /> (36 days, 11 hours, 56 minutes ago) (0:20:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.92 mi traveled at 3.0 mph<br />Route mile 105.67 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker219,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker225,"click");}>Next point >>></a>');
        infowindow.open(map, imarker222);
    });
    polypath.push(new google.maps.LatLng(37.853090, - 107.424800));
    point = new google.maps.LatLng(37.850070, - 107.402280);
    imarker225 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 11 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker225);
    google.maps.event.addListener(imarker225, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #199 received at: 12:47:50 AM (MDT) 07/22/13 <br /> (36 days, 11 hours, 36 minutes ago) (0:20:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.43 mi traveled at 7.7 mph<br />Route mile 108.23 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker222,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker228,"click");}>Next point >>></a>');
        infowindow.open(map, imarker225);
    });
    polypath.push(new google.maps.LatLng(37.850070, - 107.402280));
    point = new google.maps.LatLng(37.848500, - 107.385220);
    imarker228 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 11 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker228);
    google.maps.event.addListener(imarker228, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #202 received at: 01:02:48 AM (MDT) 07/22/13 <br /> (36 days, 11 hours, 21 minutes ago) (0:21:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.99 mi traveled at 4.3 mph<br />Route mile 109.97 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker225,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker231,"click");}>Next point >>></a>');
        infowindow.open(map, imarker228);
    });
    polypath.push(new google.maps.LatLng(37.848500, - 107.385220));
    point = new google.maps.LatLng(37.848000, - 107.371280);
    imarker231 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 11 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker231);
    google.maps.event.addListener(imarker231, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #205 received at: 01:17:45 AM (MDT) 07/22/13 <br /> (36 days, 11 hours, 6 minutes ago) (0:21:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.93 mi traveled at 2.5 mph<br />Route mile 110.78 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker228,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker234,"click");}>Next point >>></a>');
        infowindow.open(map, imarker231);
    });
    polypath.push(new google.maps.LatLng(37.848000, - 107.371280));
    point = new google.maps.LatLng(37.855260, - 107.365740);
    imarker234 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 10 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker234);
    google.maps.event.addListener(imarker234, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #208 received at: 01:32:43 AM (MDT) 07/22/13 <br /> (36 days, 10 hours, 51 minutes ago) (0:21:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.26 mi traveled at 2.7 mph<br />Route mile 111.67 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker231,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker237,"click");}>Next point >>></a>');
        infowindow.open(map, imarker234);
    });
    polypath.push(new google.maps.LatLng(37.855260, - 107.365740));
    point = new google.maps.LatLng(37.857980, - 107.360000);
    imarker237 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 10 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker237);
    google.maps.event.addListener(imarker237, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #211 received at: 01:47:46 AM (MDT) 07/22/13 <br /> (36 days, 10 hours, 36 minutes ago) (0:21:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.95 mi traveled at 1.3 mph<br />Route mile 112.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker234,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker240,"click");}>Next point >>></a>');
        infowindow.open(map, imarker237);
    });
    polypath.push(new google.maps.LatLng(37.857980, - 107.360000));
    point = new google.maps.LatLng(37.857110, - 107.353740);
    imarker240 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 10 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker240);
    google.maps.event.addListener(imarker240, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #214 received at: 02:02:50 AM (MDT) 07/22/13 <br /> (36 days, 10 hours, 21 minutes ago) (0:22:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.20 mi traveled at 1.5 mph<br />Route mile 112.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker237,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker243,"click");}>Next point >>></a>');
        infowindow.open(map, imarker240);
    });
    polypath.push(new google.maps.LatLng(37.857110, - 107.353740));
    point = new google.maps.LatLng(37.856440, - 107.350160);
    imarker243 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 10 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker243);
    google.maps.event.addListener(imarker243, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #217 received at: 02:17:48 AM (MDT) 07/22/13 <br /> (36 days, 10 hours, 6 minutes ago) (0:22:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.96 mi traveled at 0.8 mph<br />Route mile 112.65 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker240,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker246,"click");}>Next point >>></a>');
        infowindow.open(map, imarker243);
    });
    polypath.push(new google.maps.LatLng(37.856440, - 107.350160));
    point = new google.maps.LatLng(37.861460, - 107.343140);
    imarker246 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 9 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker246);
    google.maps.event.addListener(imarker246, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #220 received at: 02:32:51 AM (MDT) 07/22/13 <br /> (36 days, 9 hours, 51 minutes ago) (0:22:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.93 mi traveled at 3.3 mph<br />Route mile 112.60 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker243,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker249,"click");}>Next point >>></a>');
        infowindow.open(map, imarker246);
    });
    polypath.push(new google.maps.LatLng(37.861460, - 107.343140));
    point = new google.maps.LatLng(37.872220, - 107.333890);
    imarker249 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 9 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker249);
    google.maps.event.addListener(imarker249, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #223 received at: 02:47:48 AM (MDT) 07/22/13 <br /> (36 days, 9 hours, 36 minutes ago) (0:22:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.62 mi traveled at 3.7 mph<br />Route mile 113.65 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker246,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker252,"click");}>Next point >>></a>');
        infowindow.open(map, imarker249);
    });
    polypath.push(new google.maps.LatLng(37.872220, - 107.333890));
    point = new google.maps.LatLng(37.880630, - 107.322420);
    imarker252 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 9 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker252);
    google.maps.event.addListener(imarker252, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #226 received at: 03:02:50 AM (MDT) 07/22/13 <br /> (36 days, 9 hours, 21 minutes ago) (0:23:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.55 mi traveled at 3.6 mph<br />Route mile 114.66 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker249,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker255,"click");}>Next point >>></a>');
        infowindow.open(map, imarker252);
    });
    polypath.push(new google.maps.LatLng(37.880630, - 107.322420));
    point = new google.maps.LatLng(37.890770, - 107.314950);
    imarker255 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 9 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker255);
    google.maps.event.addListener(imarker255, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #229 received at: 03:17:44 AM (MDT) 07/22/13 <br /> (36 days, 9 hours, 6 minutes ago) (0:23:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.15 mi traveled at 4.3 mph<br />Route mile 117.32 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker252,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker258,"click");}>Next point >>></a>');
        infowindow.open(map, imarker255);
    });
    polypath.push(new google.maps.LatLng(37.890770, - 107.314950));
    point = new google.maps.LatLng(37.905540, - 107.292210);
    imarker258 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 8 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker258);
    google.maps.event.addListener(imarker258, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #232 received at: 03:32:47 AM (MDT) 07/22/13 <br /> (36 days, 8 hours, 51 minutes ago) (0:23:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.89 mi traveled at 7.9 mph<br />Route mile 119.32 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker255,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker261,"click");}>Next point >>></a>');
        infowindow.open(map, imarker258);
    });
    polypath.push(new google.maps.LatLng(37.905540, - 107.292210));
    point = new google.maps.LatLng(37.917490, - 107.282850);
    imarker261 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 8 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker261);
    google.maps.event.addListener(imarker261, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #235 received at: 03:52:39 AM (MDT) 07/22/13 <br /> (36 days, 8 hours, 31 minutes ago) (0:23:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.28 mi traveled at 2.1 mph<br />Route mile 119.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker258,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker264,"click");}>Next point >>></a>');
        infowindow.open(map, imarker261);
    });
    polypath.push(new google.maps.LatLng(37.917490, - 107.282850));
    point = new google.maps.LatLng(37.924880, - 107.278150);
    imarker264 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 8 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker264);
    google.maps.event.addListener(imarker264, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #238 received at: 04:07:36 AM (MDT) 07/22/13 <br /> (36 days, 8 hours, 16 minutes ago) (1:00:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.39 mi traveled at 2.8 mph<br />Route mile 121.77 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker261,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker267,"click");}>Next point >>></a>');
        infowindow.open(map, imarker264);
    });
    polypath.push(new google.maps.LatLng(37.924880, - 107.278150));
    point = new google.maps.LatLng(37.927460, - 107.256000);
    imarker267 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 8 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker267);
    google.maps.event.addListener(imarker267, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #241 received at: 04:22:29 AM (MDT) 07/22/13 <br /> (36 days, 8 hours, 1 minutes ago) (1:00:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.49 mi traveled at 7.0 mph<br />Route mile 123.34 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker264,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker270,"click");}>Next point >>></a>');
        infowindow.open(map, imarker267);
    });
    polypath.push(new google.maps.LatLng(37.927460, - 107.256000));
    point = new google.maps.LatLng(37.927170, - 107.240710);
    imarker270 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 7 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker270);
    google.maps.event.addListener(imarker270, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #244 received at: 04:37:28 AM (MDT) 07/22/13 <br /> (36 days, 7 hours, 46 minutes ago) (1:00:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.01 mi traveled at 3.4 mph<br />Route mile 124.37 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker267,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker273,"click");}>Next point >>></a>');
        infowindow.open(map, imarker270);
    });
    polypath.push(new google.maps.LatLng(37.927170, - 107.240710));
    point = new google.maps.LatLng(37.927890, - 107.230040);
    imarker273 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 7 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker273);
    google.maps.event.addListener(imarker273, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #247 received at: 04:52:26 AM (MDT) 07/22/13 <br /> (36 days, 7 hours, 31 minutes ago) (1:00:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.21 mi traveled at 2.4 mph<br />Route mile 124.80 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker270,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker276,"click");}>Next point >>></a>');
        infowindow.open(map, imarker273);
    });
    polypath.push(new google.maps.LatLng(37.927890, - 107.230040));
    point = new google.maps.LatLng(37.930170, - 107.212300);
    imarker276 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 7 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker276);
    google.maps.event.addListener(imarker276, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #250 received at: 05:07:29 AM (MDT) 07/22/13 <br /> (36 days, 7 hours, 16 minutes ago) (1:01:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.18 mi traveled at 3.9 mph<br />Route mile 126.02 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker273,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker279,"click");}>Next point >>></a>');
        infowindow.open(map, imarker276);
    });
    polypath.push(new google.maps.LatLng(37.930170, - 107.212300));
    point = new google.maps.LatLng(37.934800, - 107.185100);
    imarker279 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 7 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker279);
    google.maps.event.addListener(imarker279, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #253 received at: 05:22:29 AM (MDT) 07/22/13 <br /> (36 days, 7 hours, 1 minutes ago) (1:01:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.84 mi traveled at 7.6 mph<br />Route mile 127.95 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker276,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker282,"click");}>Next point >>></a>');
        infowindow.open(map, imarker279);
    });
    polypath.push(new google.maps.LatLng(37.934800, - 107.185100));
    point = new google.maps.LatLng(37.940180, - 107.159000);
    imarker282 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 6 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker282);
    google.maps.event.addListener(imarker282, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #256 received at: 05:37:23 AM (MDT) 07/22/13 <br /> (36 days, 6 hours, 46 minutes ago) (1:01:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.56 mi traveled at 7.1 mph<br />Route mile 129.68 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker279,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker285,"click");}>Next point >>></a>');
        infowindow.open(map, imarker282);
    });
    polypath.push(new google.maps.LatLng(37.940180, - 107.159000));
    point = new google.maps.LatLng(37.966600, - 107.172960);
    imarker285 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 6 hours, 32 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker285);
    google.maps.event.addListener(imarker285, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #259 received at: 05:52:20 AM (MDT) 07/22/13 <br /> (36 days, 6 hours, 32 minutes ago) (1:01:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.57 mi traveled at 5.7 mph<br />Route mile 130.72 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker282,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker288,"click");}>Next point >>></a>');
        infowindow.open(map, imarker285);
    });
    polypath.push(new google.maps.LatLng(37.966600, - 107.172960));
    point = new google.maps.LatLng(37.968510, - 107.184290);
    imarker288 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 6 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker288);
    google.maps.event.addListener(imarker288, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #262 received at: 06:07:15 AM (MDT) 07/22/13 <br /> (36 days, 6 hours, 17 minutes ago) (1:02:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.04 mi traveled at 1.8 mph<br />Route mile 132.39 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker285,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker291,"click");}>Next point >>></a>');
        infowindow.open(map, imarker288);
    });
    polypath.push(new google.maps.LatLng(37.968510, - 107.184290));
    point = new google.maps.LatLng(37.990050, - 107.200560);
    imarker291 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 5 hours, 52 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker291);
    google.maps.event.addListener(imarker291, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #265 received at: 06:32:13 AM (MDT) 07/22/13 <br /> (36 days, 5 hours, 52 minutes ago) (1:02:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.35 mi traveled at 4.9 mph<br />Route mile 136.30 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker288,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker294,"click");}>Next point >>></a>');
        infowindow.open(map, imarker291);
    });
    polypath.push(new google.maps.LatLng(37.990050, - 107.200560));
    point = new google.maps.LatLng(38.012760, - 107.197040);
    imarker294 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 5 hours, 37 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker294);
    google.maps.event.addListener(imarker294, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #268 received at: 06:47:14 AM (MDT) 07/22/13 <br /> (36 days, 5 hours, 37 minutes ago) (1:02:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.16 mi traveled at 19.2 mph<br />Route mile 140.83 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker291,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker297,"click");}>Next point >>></a>');
        infowindow.open(map, imarker294);
    });
    polypath.push(new google.maps.LatLng(38.012760, - 107.197040));
    point = new google.maps.LatLng(38.012770, - 107.197080);
    imarker297 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 5 hours, 22 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker297);
    google.maps.event.addListener(imarker297, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #271 received at: 07:02:13 AM (MDT) 07/22/13 <br /> (36 days, 5 hours, 22 minutes ago) (1:03:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.02 mi traveled at 0.0 mph<br />Route mile 140.83 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker294,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker300,"click");}>Next point >>></a>');
        infowindow.open(map, imarker297);
    });
    polypath.push(new google.maps.LatLng(38.012770, - 107.197080));
    point = new google.maps.LatLng(38.054050, - 107.076490);
    imarker300 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 4 hours, 57 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker300);
    google.maps.event.addListener(imarker300, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #274 received at: 07:27:11 AM (MDT) 07/22/13 <br /> (36 days, 4 hours, 57 minutes ago) (1:03:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.55 mi traveled at 13.3 mph<br />Route mile 149.46 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker297,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker303,"click");}>Next point >>></a>');
        infowindow.open(map, imarker300);
    });
    polypath.push(new google.maps.LatLng(38.054050, - 107.076490));
    point = new google.maps.LatLng(38.093510, - 107.036990);
    imarker303 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 4 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker303);
    google.maps.event.addListener(imarker303, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #277 received at: 07:42:08 AM (MDT) 07/22/13 <br /> (36 days, 4 hours, 42 minutes ago) (1:03:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.27 mi traveled at 13.6 mph<br />Route mile 152.31 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker300,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker306,"click");}>Next point >>></a>');
        infowindow.open(map, imarker303);
    });
    polypath.push(new google.maps.LatLng(38.093510, - 107.036990));
    point = new google.maps.LatLng(38.088530, - 107.013920);
    imarker306 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 4 hours, 22 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker306);
    google.maps.event.addListener(imarker306, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #280 received at: 08:02:09 AM (MDT) 07/22/13 <br /> (36 days, 4 hours, 22 minutes ago) (1:04:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.78 mi traveled at 3.8 mph<br />Route mile 155.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker303,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker309,"click");}>Next point >>></a>');
        infowindow.open(map, imarker306);
    });
    polypath.push(new google.maps.LatLng(38.088530, - 107.013920));
    point = new google.maps.LatLng(38.094710, - 106.995000);
    imarker309 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 4 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker309);
    google.maps.event.addListener(imarker309, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #283 received at: 08:17:05 AM (MDT) 07/22/13 <br /> (36 days, 4 hours, 7 minutes ago) (1:04:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.47 mi traveled at 4.4 mph<br />Route mile 155.68 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker306,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker312,"click");}>Next point >>></a>');
        infowindow.open(map, imarker309);
    });
    polypath.push(new google.maps.LatLng(38.094710, - 106.995000));
    point = new google.maps.LatLng(38.098180, - 106.985530);
    imarker312 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 3 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker312);
    google.maps.event.addListener(imarker312, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #286 received at: 08:37:04 AM (MDT) 07/22/13 <br /> (36 days, 3 hours, 47 minutes ago) (1:04:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 20.84 mi traveled at 4.8 mph<br />Route mile 157.75 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker309,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker315,"click");}>Next point >>></a>');
        infowindow.open(map, imarker312);
    });
    polypath.push(new google.maps.LatLng(38.098180, - 106.985530));
    point = new google.maps.LatLng(38.103970, - 106.935330);
    imarker315 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 3 hours, 32 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker315);
    google.maps.event.addListener(imarker315, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #289 received at: 08:52:03 AM (MDT) 07/22/13 <br /> (36 days, 3 hours, 32 minutes ago) (1:04:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.42 mi traveled at 23.9 mph<br />Route mile 162.42 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker312,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker318,"click");}>Next point >>></a>');
        infowindow.open(map, imarker315);
    });
    polypath.push(new google.maps.LatLng(38.103970, - 106.935330));
    point = new google.maps.LatLng(38.131590, - 106.898850);
    imarker318 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 3 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker318);
    google.maps.event.addListener(imarker318, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #292 received at: 09:07:01 AM (MDT) 07/22/13 <br /> (36 days, 3 hours, 17 minutes ago) (1:05:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.61 mi traveled at 12.3 mph<br />Route mile 166.14 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker315,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker321,"click");}>Next point >>></a>');
        infowindow.open(map, imarker318);
    });
    polypath.push(new google.maps.LatLng(38.131590, - 106.898850));
    point = new google.maps.LatLng(38.175400, - 106.855030);
    imarker321 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 3 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker321);
    google.maps.event.addListener(imarker321, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #295 received at: 09:22:01 AM (MDT) 07/22/13 <br /> (36 days, 3 hours, 2 minutes ago) (1:05:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 26.06 mi traveled at 15.5 mph<br />Route mile 170.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker318,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker324,"click");}>Next point >>></a>');
        infowindow.open(map, imarker321);
    });
    polypath.push(new google.maps.LatLng(38.175400, - 106.855030));
    point = new google.maps.LatLng(38.213720, - 106.782240);
    imarker324 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 2 hours, 37 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker324);
    google.maps.event.addListener(imarker324, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #298 received at: 09:46:57 AM (MDT) 07/22/13 <br /> (36 days, 2 hours, 37 minutes ago) (1:05:46 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 29.26 mi traveled at 11.7 mph<br />Route mile 177.51 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker321,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker327,"click");}>Next point >>></a>');
        infowindow.open(map, imarker324);
    });
    polypath.push(new google.maps.LatLng(38.213720, - 106.782240));
    point = new google.maps.LatLng(38.227940, - 106.742220);
    imarker327 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 2 hours, 22 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker327);
    google.maps.event.addListener(imarker327, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #301 received at: 10:01:52 AM (MDT) 07/22/13 <br /> (36 days, 2 hours, 22 minutes ago) (1:06:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 25.85 mi traveled at 7.7 mph<br />Route mile 178.89 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker324,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker330,"click");}>Next point >>></a>');
        infowindow.open(map, imarker327);
    });
    polypath.push(new google.maps.LatLng(38.227940, - 106.742220));
    point = new google.maps.LatLng(38.189830, - 106.729690);
    imarker330 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 2 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker330);
    google.maps.event.addListener(imarker330, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #304 received at: 10:16:48 AM (MDT) 07/22/13 <br /> (36 days, 2 hours, 7 minutes ago) (1:06:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 25.01 mi traveled at 12.2 mph<br />Route mile 183.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker327,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker333,"click");}>Next point >>></a>');
        infowindow.open(map, imarker330);
    });
    polypath.push(new google.maps.LatLng(38.189830, - 106.729690));
    point = new google.maps.LatLng(38.172620, - 106.692460);
    imarker333 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 1 hours, 52 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker333);
    google.maps.event.addListener(imarker333, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #307 received at: 10:31:46 AM (MDT) 07/22/13 <br /> (36 days, 1 hours, 52 minutes ago) (1:06:31 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.75 mi traveled at 6.2 mph<br />Route mile 186.12 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker330,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker336,"click");}>Next point >>></a>');
        infowindow.open(map, imarker333);
    });
    polypath.push(new google.maps.LatLng(38.172620, - 106.692460));
    point = new google.maps.LatLng(38.151310, - 106.671910);
    imarker336 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 1 hours, 37 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker336);
    google.maps.event.addListener(imarker336, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #310 received at: 10:46:42 AM (MDT) 07/22/13 <br /> (36 days, 1 hours, 37 minutes ago) (1:06:46 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 26.00 mi traveled at 10.0 mph<br />Route mile 189.85 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker333,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker339,"click");}>Next point >>></a>');
        infowindow.open(map, imarker336);
    });
    polypath.push(new google.maps.LatLng(38.151310, - 106.671910));
    point = new google.maps.LatLng(38.152030, - 106.646840);
    imarker339 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 1 hours, 22 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker339);
    google.maps.event.addListener(imarker339, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #313 received at: 11:01:40 AM (MDT) 07/22/13 <br /> (36 days, 1 hours, 22 minutes ago) (1:07:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 26.60 mi traveled at 8.3 mph<br />Route mile 191.46 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker336,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker342,"click");}>Next point >>></a>');
        infowindow.open(map, imarker339);
    });
    polypath.push(new google.maps.LatLng(38.152030, - 106.646840));
    point = new google.maps.LatLng(38.151600, - 106.628800);
    imarker342 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 1 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker342);
    google.maps.event.addListener(imarker342, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #316 received at: 11:16:35 AM (MDT) 07/22/13 <br /> (36 days, 1 hours, 7 minutes ago) (1:07:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 26.36 mi traveled at 4.8 mph<br />Route mile 191.51 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker339,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker345,"click");}>Next point >>></a>');
        infowindow.open(map, imarker342);
    });
    polypath.push(new google.maps.LatLng(38.151600, - 106.628800));
    point = new google.maps.LatLng(38.192410, - 106.605030);
    imarker345 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 0 hours, 27 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker345);
    google.maps.event.addListener(imarker345, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #319 received at: 11:56:33 AM (MDT) 07/22/13 <br /> (36 days, 0 hours, 27 minutes ago) (1:07:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 25.66 mi traveled at 4.7 mph<br />Route mile 197.50 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker342,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker348,"click");}>Next point >>></a>');
        infowindow.open(map, imarker345);
    });
    polypath.push(new google.maps.LatLng(38.192410, - 106.605030));
    point = new google.maps.LatLng(38.205160, - 106.597500);
    imarker348 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 36 days, 0 hours, 12 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker348);
    google.maps.event.addListener(imarker348, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #322 received at: 12:11:29 PM (MDT) 07/22/13 <br /> (36 days, 0 hours, 12 minutes ago) (1:08:11 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 23.59 mi traveled at 5.7 mph<br />Route mile 198.40 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker345,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker351,"click");}>Next point >>></a>');
        infowindow.open(map, imarker348);
    });
    polypath.push(new google.maps.LatLng(38.205160, - 106.597500));
    point = new google.maps.LatLng(38.221940, - 106.592120);
    imarker351 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 23 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker351);
    google.maps.event.addListener(imarker351, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #325 received at: 12:36:38 PM (MDT) 07/22/13 <br /> (35 days, 23 hours, 47 minutes ago) (1:08:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.76 mi traveled at 2.2 mph<br />Route mile 198.95 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker348,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker354,"click");}>Next point >>></a>');
        infowindow.open(map, imarker351);
    });
    polypath.push(new google.maps.LatLng(38.221940, - 106.592120));
    point = new google.maps.LatLng(38.232500, - 106.577040);
    imarker354 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 23 hours, 32 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker354);
    google.maps.event.addListener(imarker354, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #328 received at: 12:51:39 PM (MDT) 07/22/13 <br /> (35 days, 23 hours, 32 minutes ago) (1:08:51 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.84 mi traveled at 3.5 mph<br />Route mile 202.50 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker351,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker357,"click");}>Next point >>></a>');
        infowindow.open(map, imarker354);
    });
    polypath.push(new google.maps.LatLng(38.232500, - 106.577040));
    point = new google.maps.LatLng(38.240690, - 106.560040);
    imarker357 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 23 hours, 12 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker357);
    google.maps.event.addListener(imarker357, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #331 received at: 01:11:35 PM (MDT) 07/22/13 <br /> (35 days, 23 hours, 12 minutes ago) (1:09:11 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.59 mi traveled at 3.2 mph<br />Route mile 204.11 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker354,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker360,"click");}>Next point >>></a>');
        infowindow.open(map, imarker357);
    });
    polypath.push(new google.maps.LatLng(38.240690, - 106.560040));
    point = new google.maps.LatLng(38.244660, - 106.558400);
    imarker360 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 22 hours, 52 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker360);
    google.maps.event.addListener(imarker360, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #334 received at: 01:31:33 PM (MDT) 07/22/13 <br /> (35 days, 22 hours, 52 minutes ago) (1:09:31 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.36 mi traveled at 1.6 mph<br />Route mile 204.11 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker357,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker363,"click");}>Next point >>></a>');
        infowindow.open(map, imarker360);
    });
    polypath.push(new google.maps.LatLng(38.244660, - 106.558400));
    point = new google.maps.LatLng(38.260370, - 106.542040);
    imarker363 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 22 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker363);
    google.maps.event.addListener(imarker363, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #337 received at: 02:06:30 PM (MDT) 07/22/13 <br /> (35 days, 22 hours, 17 minutes ago) (1:10:06 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.66 mi traveled at 2.6 mph<br />Route mile 207.42 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker360,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker366,"click");}>Next point >>></a>');
        infowindow.open(map, imarker363);
    });
    polypath.push(new google.maps.LatLng(38.260370, - 106.542040));
    point = new google.maps.LatLng(38.263230, - 106.536530);
    imarker366 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 22 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker366);
    google.maps.event.addListener(imarker366, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #340 received at: 02:21:27 PM (MDT) 07/22/13 <br /> (35 days, 22 hours, 2 minutes ago) (1:10:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.50 mi traveled at 1.5 mph<br />Route mile 207.89 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker363,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker369,"click");}>Next point >>></a>');
        infowindow.open(map, imarker366);
    });
    polypath.push(new google.maps.LatLng(38.263230, - 106.536530));
    point = new google.maps.LatLng(38.277200, - 106.529050);
    imarker369 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 21 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker369);
    google.maps.event.addListener(imarker369, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #343 received at: 02:36:25 PM (MDT) 07/22/13 <br /> (35 days, 21 hours, 47 minutes ago) (1:10:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.25 mi traveled at 5.3 mph<br />Route mile 208.97 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker366,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker372,"click");}>Next point >>></a>');
        infowindow.open(map, imarker369);
    });
    polypath.push(new google.maps.LatLng(38.277200, - 106.529050));
    point = new google.maps.LatLng(38.296870, - 106.516760);
    imarker372 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 21 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker372);
    google.maps.event.addListener(imarker372, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #346 received at: 03:01:20 PM (MDT) 07/22/13 <br /> (35 days, 21 hours, 23 minutes ago) (1:11:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.50 mi traveled at 4.8 mph<br />Route mile 210.78 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker369,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker375,"click");}>Next point >>></a>');
        infowindow.open(map, imarker372);
    });
    polypath.push(new google.maps.LatLng(38.296870, - 106.516760));
    point = new google.maps.LatLng(38.307430, - 106.517670);
    imarker375 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 21 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker375);
    google.maps.event.addListener(imarker375, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #349 received at: 03:16:20 PM (MDT) 07/22/13 <br /> (35 days, 21 hours, 8 minutes ago) (1:11:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.93 mi traveled at 1.6 mph<br />Route mile 210.78 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker372,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker378,"click");}>Next point >>></a>');
        infowindow.open(map, imarker375);
    });
    polypath.push(new google.maps.LatLng(38.307430, - 106.517670));
    point = new google.maps.LatLng(38.311820, - 106.516690);
    imarker378 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 20 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker378);
    google.maps.event.addListener(imarker378, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #352 received at: 03:31:18 PM (MDT) 07/22/13 <br /> (35 days, 20 hours, 53 minutes ago) (1:11:31 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.06 mi traveled at 1.6 mph<br />Route mile 210.78 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker375,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker381,"click");}>Next point >>></a>');
        infowindow.open(map, imarker378);
    });
    polypath.push(new google.maps.LatLng(38.311820, - 106.516690));
    point = new google.maps.LatLng(38.316120, - 106.508710);
    imarker381 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 20 hours, 33 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker381);
    google.maps.event.addListener(imarker381, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #355 received at: 03:51:14 PM (MDT) 07/22/13 <br /> (35 days, 20 hours, 33 minutes ago) (1:11:51 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.30 mi traveled at 1.4 mph<br />Route mile 211.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker378,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker384,"click");}>Next point >>></a>');
        infowindow.open(map, imarker381);
    });
    polypath.push(new google.maps.LatLng(38.316120, - 106.508710));
    point = new google.maps.LatLng(38.317060, - 106.482000);
    imarker384 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 20 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker384);
    google.maps.event.addListener(imarker384, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #358 received at: 04:21:05 PM (MDT) 07/22/13 <br /> (35 days, 20 hours, 3 minutes ago) (1:12:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.96 mi traveled at 3.0 mph<br />Route mile 214.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker381,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker387,"click");}>Next point >>></a>');
        infowindow.open(map, imarker384);
    });
    polypath.push(new google.maps.LatLng(38.317060, - 106.482000));
    point = new google.maps.LatLng(38.301000, - 106.457400);
    imarker387 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 19 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker387);
    google.maps.event.addListener(imarker387, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #361 received at: 04:41:09 PM (MDT) 07/22/13 <br /> (35 days, 19 hours, 43 minutes ago) (1:12:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.98 mi traveled at 10.1 mph<br />Route mile 215.69 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker384,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker390,"click");}>Next point >>></a>');
        infowindow.open(map, imarker387);
    });
    polypath.push(new google.maps.LatLng(38.301000, - 106.457400));
    point = new google.maps.LatLng(38.292130, - 106.447240);
    imarker390 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 19 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker390);
    google.maps.event.addListener(imarker390, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #364 received at: 04:56:12 PM (MDT) 07/22/13 <br /> (35 days, 19 hours, 28 minutes ago) (1:12:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.36 mi traveled at 4.5 mph<br />Route mile 217.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker387,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker393,"click");}>Next point >>></a>');
        infowindow.open(map, imarker390);
    });
    polypath.push(new google.maps.LatLng(38.292130, - 106.447240));
    point = new google.maps.LatLng(38.278230, - 106.419540);
    imarker393 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 18 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker393);
    google.maps.event.addListener(imarker393, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #367 received at: 05:31:02 PM (MDT) 07/22/13 <br /> (35 days, 18 hours, 53 minutes ago) (1:13:31 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.74 mi traveled at 3.0 mph<br />Route mile 219.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker390,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker396,"click");}>Next point >>></a>');
        infowindow.open(map, imarker393);
    });
    polypath.push(new google.maps.LatLng(38.278230, - 106.419540));
    point = new google.maps.LatLng(38.284040, - 106.406190);
    imarker396 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 18 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker396);
    google.maps.event.addListener(imarker396, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #370 received at: 05:46:03 PM (MDT) 07/22/13 <br /> (35 days, 18 hours, 38 minutes ago) (1:13:46 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.97 mi traveled at 1.5 mph<br />Route mile 220.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker393,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker399,"click");}>Next point >>></a>');
        infowindow.open(map, imarker396);
    });
    polypath.push(new google.maps.LatLng(38.284040, - 106.406190));
    point = new google.maps.LatLng(38.284900, - 106.392760);
    imarker399 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 18 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker399);
    google.maps.event.addListener(imarker399, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #373 received at: 06:01:08 PM (MDT) 07/22/13 <br /> (35 days, 18 hours, 23 minutes ago) (1:14:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.08 mi traveled at 5.2 mph<br />Route mile 221.32 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker396,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker402,"click");}>Next point >>></a>');
        infowindow.open(map, imarker399);
    });
    polypath.push(new google.maps.LatLng(38.284900, - 106.392760));
    point = new google.maps.LatLng(38.296730, - 106.375380);
    imarker402 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 18 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker402);
    google.maps.event.addListener(imarker402, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #376 received at: 06:16:06 PM (MDT) 07/22/13 <br /> (35 days, 18 hours, 8 minutes ago) (1:14:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.47 mi traveled at 9.1 mph<br />Route mile 223.43 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker399,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker405,"click");}>Next point >>></a>');
        infowindow.open(map, imarker402);
    });
    polypath.push(new google.maps.LatLng(38.296730, - 106.375380));
    point = new google.maps.LatLng(38.308260, - 106.339420);
    imarker405 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 17 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker405);
    google.maps.event.addListener(imarker405, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #379 received at: 06:31:11 PM (MDT) 07/22/13 <br /> (35 days, 17 hours, 53 minutes ago) (1:14:31 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.28 mi traveled at 8.9 mph<br />Route mile 226.04 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker402,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker408,"click");}>Next point >>></a>');
        infowindow.open(map, imarker405);
    });
    polypath.push(new google.maps.LatLng(38.308260, - 106.339420));
    point = new google.maps.LatLng(38.315630, - 106.328840);
    imarker408 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 17 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker408);
    google.maps.event.addListener(imarker408, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #382 received at: 06:46:09 PM (MDT) 07/22/13 <br /> (35 days, 17 hours, 38 minutes ago) (1:14:46 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.61 mi traveled at 1.9 mph<br />Route mile 227.15 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker405,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker411,"click");}>Next point >>></a>');
        infowindow.open(map, imarker408);
    });
    polypath.push(new google.maps.LatLng(38.315630, - 106.328840));
    point = new google.maps.LatLng(38.326930, - 106.320640);
    imarker411 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 17 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker411);
    google.maps.event.addListener(imarker411, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #385 received at: 07:01:15 PM (MDT) 07/22/13 <br /> (35 days, 17 hours, 23 minutes ago) (1:15:01 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.10 mi traveled at 5.2 mph<br />Route mile 228.14 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker408,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker414,"click");}>Next point >>></a>');
        infowindow.open(map, imarker411);
    });
    polypath.push(new google.maps.LatLng(38.326930, - 106.320640));
    point = new google.maps.LatLng(38.343030, - 106.306440);
    imarker414 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 16 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker414);
    google.maps.event.addListener(imarker414, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #388 received at: 07:26:09 PM (MDT) 07/22/13 <br /> (35 days, 16 hours, 58 minutes ago) (1:15:26 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.25 mi traveled at 3.2 mph<br />Route mile 229.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker411,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker417,"click");}>Next point >>></a>');
        infowindow.open(map, imarker414);
    });
    polypath.push(new google.maps.LatLng(38.343030, - 106.306440));
    point = new google.maps.LatLng(38.344640, - 106.290020);
    imarker417 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 16 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker417);
    google.maps.event.addListener(imarker417, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #391 received at: 07:41:05 PM (MDT) 07/22/13 <br /> (35 days, 16 hours, 43 minutes ago) (1:15:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.89 mi traveled at 3.6 mph<br />Route mile 230.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker414,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker420,"click");}>Next point >>></a>');
        infowindow.open(map, imarker417);
    });
    polypath.push(new google.maps.LatLng(38.344640, - 106.290020));
    point = new google.maps.LatLng(38.346940, - 106.281780);
    imarker420 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 16 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker420);
    google.maps.event.addListener(imarker420, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #394 received at: 07:56:02 PM (MDT) 07/22/13 <br /> (35 days, 16 hours, 28 minutes ago) (1:15:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.91 mi traveled at 1.2 mph<br />Route mile 231.56 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker417,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker423,"click");}>Next point >>></a>');
        infowindow.open(map, imarker420);
    });
    polypath.push(new google.maps.LatLng(38.346940, - 106.281780));
    point = new google.maps.LatLng(38.351000, - 106.274740);
    imarker423 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 16 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker423);
    google.maps.event.addListener(imarker423, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #397 received at: 08:16:00 PM (MDT) 07/22/13 <br /> (35 days, 16 hours, 8 minutes ago) (1:16:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.83 mi traveled at 1.9 mph<br />Route mile 231.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker420,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker426,"click");}>Next point >>></a>');
        infowindow.open(map, imarker423);
    });
    polypath.push(new google.maps.LatLng(38.351000, - 106.274740));
    point = new google.maps.LatLng(38.349380, - 106.266030);
    imarker426 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 15 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker426);
    google.maps.event.addListener(imarker426, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #400 received at: 08:30:59 PM (MDT) 07/22/13 <br /> (35 days, 15 hours, 53 minutes ago) (1:16:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.77 mi traveled at 2.7 mph<br />Route mile 231.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker423,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker429,"click");}>Next point >>></a>');
        infowindow.open(map, imarker426);
    });
    polypath.push(new google.maps.LatLng(38.349380, - 106.266030));
    point = new google.maps.LatLng(38.348200, - 106.250170);
    imarker429 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 15 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker429);
    google.maps.event.addListener(imarker429, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #403 received at: 08:46:01 PM (MDT) 07/22/13 <br /> (35 days, 15 hours, 38 minutes ago) (1:16:46 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.64 mi traveled at 4.2 mph<br />Route mile 233.00 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker426,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker432,"click");}>Next point >>></a>');
        infowindow.open(map, imarker429);
    });
    polypath.push(new google.maps.LatLng(38.348200, - 106.250170));
    point = new google.maps.LatLng(38.371830, - 106.237680);
    imarker432 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 15 hours, 18 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker432);
    google.maps.event.addListener(imarker432, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #406 received at: 09:05:51 PM (MDT) 07/22/13 <br /> (35 days, 15 hours, 18 minutes ago) (1:17:05 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.32 mi traveled at 7.0 mph<br />Route mile 236.34 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker429,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker435,"click");}>Next point >>></a>');
        infowindow.open(map, imarker432);
    });
    polypath.push(new google.maps.LatLng(38.371830, - 106.237680));
    point = new google.maps.LatLng(38.384860, - 106.236760);
    imarker435 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 15 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker435);
    google.maps.event.addListener(imarker435, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #409 received at: 09:20:48 PM (MDT) 07/22/13 <br /> (35 days, 15 hours, 3 minutes ago) (1:17:20 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.99 mi traveled at 4.7 mph<br />Route mile 237.18 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker432,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker438,"click");}>Next point >>></a>');
        infowindow.open(map, imarker435);
    });
    polypath.push(new google.maps.LatLng(38.384860, - 106.236760));
    point = new google.maps.LatLng(38.400620, - 106.255020);
    imarker438 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 14 hours, 48 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker438);
    google.maps.event.addListener(imarker438, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #412 received at: 09:35:45 PM (MDT) 07/22/13 <br /> (35 days, 14 hours, 48 minutes ago) (1:17:35 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.79 mi traveled at 3.1 mph<br />Route mile 238.89 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker435,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker441,"click");}>Next point >>></a>');
        infowindow.open(map, imarker438);
    });
    polypath.push(new google.maps.LatLng(38.400620, - 106.255020));
    point = new google.maps.LatLng(38.414130, - 106.254790);
    imarker441 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 14 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker441);
    google.maps.event.addListener(imarker441, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #415 received at: 09:55:42 PM (MDT) 07/22/13 <br /> (35 days, 14 hours, 28 minutes ago) (1:17:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.29 mi traveled at 4.0 mph<br />Route mile 240.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker438,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker444,"click");}>Next point >>></a>');
        infowindow.open(map, imarker441);
    });
    polypath.push(new google.maps.LatLng(38.414130, - 106.254790));
    point = new google.maps.LatLng(38.422850, - 106.252380);
    imarker444 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 14 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker444);
    google.maps.event.addListener(imarker444, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #418 received at: 10:10:32 PM (MDT) 07/22/13 <br /> (35 days, 14 hours, 13 minutes ago) (1:18:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.05 mi traveled at 2.3 mph<br />Route mile 241.25 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker441,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker447,"click");}>Next point >>></a>');
        infowindow.open(map, imarker444);
    });
    polypath.push(new google.maps.LatLng(38.422850, - 106.252380));
    point = new google.maps.LatLng(38.438710, - 106.255950);
    imarker447 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 13 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker447);
    google.maps.event.addListener(imarker447, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #421 received at: 10:25:31 PM (MDT) 07/22/13 <br /> (35 days, 13 hours, 58 minutes ago) (1:18:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.49 mi traveled at 6.2 mph<br />Route mile 242.47 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker444,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker450,"click");}>Next point >>></a>');
        infowindow.open(map, imarker447);
    });
    polypath.push(new google.maps.LatLng(38.438710, - 106.255950));
    point = new google.maps.LatLng(38.443890, - 106.262040);
    imarker450 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 13 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker450);
    google.maps.event.addListener(imarker450, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #424 received at: 10:40:30 PM (MDT) 07/22/13 <br /> (35 days, 13 hours, 43 minutes ago) (1:18:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.55 mi traveled at 0.2 mph<br />Route mile 242.83 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker447,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker453,"click");}>Next point >>></a>');
        infowindow.open(map, imarker450);
    });
    polypath.push(new google.maps.LatLng(38.443890, - 106.262040));
    point = new google.maps.LatLng(38.444170, - 106.269390);
    imarker453 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 13 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker453);
    google.maps.event.addListener(imarker453, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #427 received at: 10:55:25 PM (MDT) 07/22/13 <br /> (35 days, 13 hours, 28 minutes ago) (1:18:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.64 mi traveled at 1.2 mph<br />Route mile 242.83 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker450,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker456,"click");}>Next point >>></a>');
        infowindow.open(map, imarker453);
    });
    polypath.push(new google.maps.LatLng(38.444170, - 106.269390));
    point = new google.maps.LatLng(38.454630, - 106.276840);
    imarker456 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 13 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker456);
    google.maps.event.addListener(imarker456, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #430 received at: 11:10:25 PM (MDT) 07/22/13 <br /> (35 days, 13 hours, 13 minutes ago) (1:19:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.68 mi traveled at 2.7 mph<br />Route mile 244.68 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker453,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker459,"click");}>Next point >>></a>');
        infowindow.open(map, imarker456);
    });
    polypath.push(new google.maps.LatLng(38.454630, - 106.276840));
    point = new google.maps.LatLng(38.472290, - 106.273880);
    imarker459 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 12 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker459);
    google.maps.event.addListener(imarker459, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #433 received at: 11:30:23 PM (MDT) 07/22/13 <br /> (35 days, 12 hours, 53 minutes ago) (1:19:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.28 mi traveled at 2.7 mph<br />Route mile 245.08 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker456,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker462,"click");}>Next point >>></a>');
        infowindow.open(map, imarker459);
    });
    polypath.push(new google.maps.LatLng(38.472290, - 106.273880));
    point = new google.maps.LatLng(38.514970, - 106.268520);
    imarker462 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 12 hours, 18 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker462);
    google.maps.event.addListener(imarker462, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #436 received at: 12:05:24 AM (MDT) 07/23/13 <br /> (35 days, 12 hours, 18 minutes ago) (1:20:05 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.99 mi traveled at 6.0 mph<br />Route mile 249.75 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker459,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker465,"click");}>Next point >>></a>');
        infowindow.open(map, imarker462);
    });
    polypath.push(new google.maps.LatLng(38.514970, - 106.268520));
    point = new google.maps.LatLng(38.526000, - 106.270520);
    imarker465 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 12 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker465);
    google.maps.event.addListener(imarker465, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #439 received at: 12:20:21 AM (MDT) 07/23/13 <br /> (35 days, 12 hours, 4 minutes ago) (1:20:20 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.54 mi traveled at 0.1 mph<br />Route mile 250.33 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker462,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker468,"click");}>Next point >>></a>');
        infowindow.open(map, imarker465);
    });
    polypath.push(new google.maps.LatLng(38.526000, - 106.270520));
    point = new google.maps.LatLng(38.526470, - 106.271870);
    imarker468 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 10 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker468);
    google.maps.event.addListener(imarker468, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #442 received at: 02:17:27 AM (MDT) 07/23/13 <br /> (35 days, 10 hours, 6 minutes ago) (1:22:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.13 mi traveled at 0.0 mph<br />Route mile 250.98 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker465,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker471,"click");}>Next point >>></a>');
        infowindow.open(map, imarker468);
    });
    polypath.push(new google.maps.LatLng(38.526470, - 106.271870));
    point = new google.maps.LatLng(38.544980, - 106.242870);
    imarker471 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 9 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker471);
    google.maps.event.addListener(imarker471, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #445 received at: 02:37:28 AM (MDT) 07/23/13 <br /> (35 days, 9 hours, 46 minutes ago) (1:22:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.36 mi traveled at 1.8 mph<br />Route mile 252.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker468,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker474,"click");}>Next point >>></a>');
        infowindow.open(map, imarker471);
    });
    polypath.push(new google.maps.LatLng(38.544980, - 106.242870));
    point = new google.maps.LatLng(38.546540, - 106.239690);
    imarker474 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 9 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker474);
    google.maps.event.addListener(imarker474, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #448 received at: 02:52:27 AM (MDT) 07/23/13 <br /> (35 days, 9 hours, 31 minutes ago) (1:22:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.93 mi traveled at 2.3 mph<br />Route mile 252.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker471,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker477,"click");}>Next point >>></a>');
        infowindow.open(map, imarker474);
    });
    polypath.push(new google.maps.LatLng(38.546540, - 106.239690));
    point = new google.maps.LatLng(38.555590, - 106.232700);
    imarker477 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 9 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker477);
    google.maps.event.addListener(imarker477, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #451 received at: 03:07:33 AM (MDT) 07/23/13 <br /> (35 days, 9 hours, 16 minutes ago) (1:23:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.86 mi traveled at 3.9 mph<br />Route mile 255.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker474,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker480,"click");}>Next point >>></a>');
        infowindow.open(map, imarker477);
    });
    polypath.push(new google.maps.LatLng(38.555590, - 106.232700));
    point = new google.maps.LatLng(38.565770, - 106.226380);
    imarker480 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 9 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker480);
    google.maps.event.addListener(imarker480, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #454 received at: 03:22:25 AM (MDT) 07/23/13 <br /> (35 days, 9 hours, 1 minutes ago) (1:23:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.28 mi traveled at 2.0 mph<br />Route mile 256.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker477,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker483,"click");}>Next point >>></a>');
        infowindow.open(map, imarker480);
    });
    polypath.push(new google.maps.LatLng(38.565770, - 106.226380));
    point = new google.maps.LatLng(38.576960, - 106.220950);
    imarker483 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 8 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker483);
    google.maps.event.addListener(imarker483, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #457 received at: 03:37:18 AM (MDT) 07/23/13 <br /> (35 days, 8 hours, 47 minutes ago) (1:23:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.56 mi traveled at 2.2 mph<br />Route mile 257.69 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker480,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker486,"click");}>Next point >>></a>');
        infowindow.open(map, imarker483);
    });
    polypath.push(new google.maps.LatLng(38.576960, - 106.220950));
    point = new google.maps.LatLng(38.581680, - 106.221620);
    imarker486 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 8 hours, 32 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker486);
    google.maps.event.addListener(imarker486, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #460 received at: 03:52:13 AM (MDT) 07/23/13 <br /> (35 days, 8 hours, 32 minutes ago) (1:23:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.80 mi traveled at 1.8 mph<br />Route mile 257.94 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker483,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker489,"click");}>Next point >>></a>');
        infowindow.open(map, imarker486);
    });
    polypath.push(new google.maps.LatLng(38.581680, - 106.221620));
    point = new google.maps.LatLng(38.587040, - 106.216200);
    imarker489 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 8 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker489);
    google.maps.event.addListener(imarker489, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #463 received at: 04:07:05 AM (MDT) 07/23/13 <br /> (35 days, 8 hours, 17 minutes ago) (2:00:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.61 mi traveled at 1.2 mph<br />Route mile 257.69 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker486,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker492,"click");}>Next point >>></a>');
        infowindow.open(map, imarker489);
    });
    polypath.push(new google.maps.LatLng(38.587040, - 106.216200));
    point = new google.maps.LatLng(38.589780, - 106.206340);
    imarker492 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 7 hours, 57 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker492);
    google.maps.event.addListener(imarker492, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #466 received at: 04:27:04 AM (MDT) 07/23/13 <br /> (35 days, 7 hours, 57 minutes ago) (2:00:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.55 mi traveled at 2.5 mph<br />Route mile 257.69 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker489,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker495,"click");}>Next point >>></a>');
        infowindow.open(map, imarker492);
    });
    polypath.push(new google.maps.LatLng(38.589780, - 106.206340));
    point = new google.maps.LatLng(38.603370, - 106.195590);
    imarker495 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 7 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker495);
    google.maps.event.addListener(imarker495, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #469 received at: 04:42:00 AM (MDT) 07/23/13 <br /> (35 days, 7 hours, 42 minutes ago) (2:00:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.98 mi traveled at 3.3 mph<br />Route mile 261.07 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker492,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker498,"click");}>Next point >>></a>');
        infowindow.open(map, imarker495);
    });
    polypath.push(new google.maps.LatLng(38.603370, - 106.195590));
    point = new google.maps.LatLng(38.610070, - 106.192050);
    imarker498 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 7 hours, 27 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker498);
    google.maps.event.addListener(imarker498, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #472 received at: 04:56:58 AM (MDT) 07/23/13 <br /> (35 days, 7 hours, 27 minutes ago) (2:00:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.68 mi traveled at 1.6 mph<br />Route mile 261.07 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker495,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker501,"click");}>Next point >>></a>');
        infowindow.open(map, imarker498);
    });
    polypath.push(new google.maps.LatLng(38.610070, - 106.192050));
    point = new google.maps.LatLng(38.629180, - 106.180070);
    imarker501 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 7 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker501);
    google.maps.event.addListener(imarker501, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #475 received at: 05:21:57 AM (MDT) 07/23/13 <br /> (35 days, 7 hours, 2 minutes ago) (2:01:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.92 mi traveled at 6.2 mph<br />Route mile 264.53 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker498,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker504,"click");}>Next point >>></a>');
        infowindow.open(map, imarker501);
    });
    polypath.push(new google.maps.LatLng(38.629180, - 106.180070));
    point = new google.maps.LatLng(38.645220, - 106.180180);
    imarker504 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 6 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker504);
    google.maps.event.addListener(imarker504, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #478 received at: 05:41:50 AM (MDT) 07/23/13 <br /> (35 days, 6 hours, 42 minutes ago) (2:01:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.24 mi traveled at 2.8 mph<br />Route mile 265.81 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker501,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker507,"click");}>Next point >>></a>');
        infowindow.open(map, imarker504);
    });
    polypath.push(new google.maps.LatLng(38.645220, - 106.180180));
    point = new google.maps.LatLng(38.670300, - 106.181900);
    imarker507 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 6 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker507);
    google.maps.event.addListener(imarker507, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #481 received at: 06:16:47 AM (MDT) 07/23/13 <br /> (35 days, 6 hours, 7 minutes ago) (2:02:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.05 mi traveled at 2.7 mph<br />Route mile 267.98 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker504,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker510,"click");}>Next point >>></a>');
        infowindow.open(map, imarker507);
    });
    polypath.push(new google.maps.LatLng(38.670300, - 106.181900));
    point = new google.maps.LatLng(38.708590, - 106.182620);
    imarker510 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 5 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker510);
    google.maps.event.addListener(imarker510, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #484 received at: 06:41:47 AM (MDT) 07/23/13 <br /> (35 days, 5 hours, 42 minutes ago) (2:02:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.94 mi traveled at 10.6 mph<br />Route mile 272.40 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker507,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker513,"click");}>Next point >>></a>');
        infowindow.open(map, imarker510);
    });
    polypath.push(new google.maps.LatLng(38.708590, - 106.182620));
    point = new google.maps.LatLng(38.708790, - 106.192990);
    imarker513 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 5 hours, 27 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker513);
    google.maps.event.addListener(imarker513, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #487 received at: 06:56:49 AM (MDT) 07/23/13 <br /> (35 days, 5 hours, 27 minutes ago) (2:02:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.17 mi traveled at 4.1 mph<br />Route mile 272.36 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker510,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker516,"click");}>Next point >>></a>');
        infowindow.open(map, imarker513);
    });
    polypath.push(new google.maps.LatLng(38.708790, - 106.192990));
    point = new google.maps.LatLng(38.716370, - 106.199110);
    imarker516 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 5 hours, 12 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker516);
    google.maps.event.addListener(imarker516, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #490 received at: 07:11:43 AM (MDT) 07/23/13 <br /> (35 days, 5 hours, 12 minutes ago) (2:03:11 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.35 mi traveled at 2.8 mph<br />Route mile 272.46 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker513,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker519,"click");}>Next point >>></a>');
        infowindow.open(map, imarker516);
    });
    polypath.push(new google.maps.LatLng(38.716370, - 106.199110));
    point = new google.maps.LatLng(38.735630, - 106.161640);
    imarker519 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 4 hours, 57 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker519);
    google.maps.event.addListener(imarker519, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #493 received at: 07:26:40 AM (MDT) 07/23/13 <br /> (35 days, 4 hours, 57 minutes ago) (2:03:26 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.50 mi traveled at 5.1 mph<br />Route mile 276.56 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker516,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker522,"click");}>Next point >>></a>');
        infowindow.open(map, imarker519);
    });
    polypath.push(new google.maps.LatLng(38.735630, - 106.161640));
    point = new google.maps.LatLng(38.739280, - 106.168230);
    imarker522 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 4 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker522);
    google.maps.event.addListener(imarker522, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #496 received at: 07:41:25 AM (MDT) 07/23/13 <br /> (35 days, 4 hours, 42 minutes ago) (2:03:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.46 mi traveled at 4.7 mph<br />Route mile 276.56 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker519,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker525,"click");}>Next point >>></a>');
        infowindow.open(map, imarker522);
    });
    polypath.push(new google.maps.LatLng(38.739280, - 106.168230));
    point = new google.maps.LatLng(38.741160, - 106.181790);
    imarker525 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 4 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker525);
    google.maps.event.addListener(imarker525, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #499 received at: 07:56:16 AM (MDT) 07/23/13 <br /> (35 days, 4 hours, 28 minutes ago) (2:03:56 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.48 mi traveled at 1.8 mph<br />Route mile 276.56 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker522,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker528,"click");}>Next point >>></a>');
        infowindow.open(map, imarker525);
    });
    polypath.push(new google.maps.LatLng(38.741160, - 106.181790));
    point = new google.maps.LatLng(38.752490, - 106.195820);
    imarker528 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 4 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker528);
    google.maps.event.addListener(imarker528, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #502 received at: 08:16:17 AM (MDT) 07/23/13 <br /> (35 days, 4 hours, 8 minutes ago) (2:04:16 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.89 mi traveled at 4.4 mph<br />Route mile 280.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker525,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker531,"click");}>Next point >>></a>');
        infowindow.open(map, imarker528);
    });
    polypath.push(new google.maps.LatLng(38.752490, - 106.195820));
    point = new google.maps.LatLng(38.770950, - 106.210690);
    imarker531 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 3 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker531);
    google.maps.event.addListener(imarker531, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #505 received at: 08:41:16 AM (MDT) 07/23/13 <br /> (35 days, 3 hours, 43 minutes ago) (2:04:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.72 mi traveled at 3.7 mph<br />Route mile 281.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker528,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker534,"click");}>Next point >>></a>');
        infowindow.open(map, imarker531);
    });
    polypath.push(new google.maps.LatLng(38.770950, - 106.210690));
    point = new google.maps.LatLng(38.795750, - 106.229960);
    imarker534 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 3 hours, 18 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker534);
    google.maps.event.addListener(imarker534, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #508 received at: 09:06:06 AM (MDT) 07/23/13 <br /> (35 days, 3 hours, 18 minutes ago) (2:05:06 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.60 mi traveled at 6.6 mph<br />Route mile 286.37 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker531,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker537,"click");}>Next point >>></a>');
        infowindow.open(map, imarker534);
    });
    polypath.push(new google.maps.LatLng(38.795750, - 106.229960));
    point = new google.maps.LatLng(38.803580, - 106.239810);
    imarker537 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 3 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker537);
    google.maps.event.addListener(imarker537, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #511 received at: 09:21:04 AM (MDT) 07/23/13 <br /> (35 days, 3 hours, 3 minutes ago) (2:05:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.38 mi traveled at 1.8 mph<br />Route mile 286.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker534,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker540,"click");}>Next point >>></a>');
        infowindow.open(map, imarker537);
    });
    polypath.push(new google.maps.LatLng(38.803580, - 106.239810));
    point = new google.maps.LatLng(38.806780, - 106.257060);
    imarker540 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 2 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker540);
    google.maps.event.addListener(imarker540, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #514 received at: 09:41:00 AM (MDT) 07/23/13 <br /> (35 days, 2 hours, 43 minutes ago) (2:05:41 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.12 mi traveled at 5.5 mph<br />Route mile 286.99 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker537,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker543,"click");}>Next point >>></a>');
        infowindow.open(map, imarker540);
    });
    polypath.push(new google.maps.LatLng(38.806780, - 106.257060));
    point = new google.maps.LatLng(38.809300, - 106.266890);
    imarker543 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 2 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker543);
    google.maps.event.addListener(imarker543, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #517 received at: 09:55:52 AM (MDT) 07/23/13 <br /> (35 days, 2 hours, 28 minutes ago) (2:05:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.83 mi traveled at 2.2 mph<br />Route mile 288.85 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker540,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker546,"click");}>Next point >>></a>');
        infowindow.open(map, imarker543);
    });
    polypath.push(new google.maps.LatLng(38.809300, - 106.266890));
    point = new google.maps.LatLng(38.814370, - 106.257690);
    imarker546 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 2 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker546);
    google.maps.event.addListener(imarker546, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #520 received at: 10:10:56 AM (MDT) 07/23/13 <br /> (35 days, 2 hours, 13 minutes ago) (2:06:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.55 mi traveled at 14.6 mph<br />Route mile 289.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker543,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker549,"click");}>Next point >>></a>');
        infowindow.open(map, imarker546);
    });
    polypath.push(new google.maps.LatLng(38.814370, - 106.257690));
    point = new google.maps.LatLng(38.842030, - 106.139510);
    imarker549 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 1 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker549);
    google.maps.event.addListener(imarker549, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #523 received at: 10:30:51 AM (MDT) 07/23/13 <br /> (35 days, 1 hours, 53 minutes ago) (2:06:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.13 mi traveled at 19.4 mph<br />Route mile 300.81 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker546,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker552,"click");}>Next point >>></a>');
        infowindow.open(map, imarker549);
    });
    polypath.push(new google.maps.LatLng(38.842030, - 106.139510));
    point = new google.maps.LatLng(38.840080, - 106.131690);
    imarker552 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 1 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker552);
    google.maps.event.addListener(imarker552, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #526 received at: 10:45:48 AM (MDT) 07/23/13 <br /> (35 days, 1 hours, 38 minutes ago) (2:06:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.64 mi traveled at 0.5 mph<br />Route mile 300.81 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker549,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker555,"click");}>Next point >>></a>');
        infowindow.open(map, imarker552);
    });
    polypath.push(new google.maps.LatLng(38.840080, - 106.131690));
    point = new google.maps.LatLng(38.874180, - 106.144900);
    imarker555 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 1 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker555);
    google.maps.event.addListener(imarker555, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #529 received at: 11:00:43 AM (MDT) 07/23/13 <br /> (35 days, 1 hours, 23 minutes ago) (2:07:00 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.23 mi traveled at 9.2 mph<br />Route mile 303.59 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker552,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker558,"click");}>Next point >>></a>');
        infowindow.open(map, imarker555);
    });
    polypath.push(new google.maps.LatLng(38.874180, - 106.144900));
    point = new google.maps.LatLng(38.914460, - 106.164670);
    imarker558 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 1 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker558);
    google.maps.event.addListener(imarker558, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #532 received at: 11:15:37 AM (MDT) 07/23/13 <br /> (35 days, 1 hours, 8 minutes ago) (2:07:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.65 mi traveled at 12.3 mph<br />Route mile 306.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker555,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker561,"click");}>Next point >>></a>');
        infowindow.open(map, imarker558);
    });
    polypath.push(new google.maps.LatLng(38.914460, - 106.164670));
    point = new google.maps.LatLng(38.932660, - 106.170980);
    imarker561 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 0 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker561);
    google.maps.event.addListener(imarker561, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #535 received at: 11:30:35 AM (MDT) 07/23/13 <br /> (35 days, 0 hours, 53 minutes ago) (2:07:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.24 mi traveled at 4.5 mph<br />Route mile 308.20 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker558,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker564,"click");}>Next point >>></a>');
        infowindow.open(map, imarker561);
    });
    polypath.push(new google.maps.LatLng(38.932660, - 106.170980));
    point = new google.maps.LatLng(38.960300, - 106.200730);
    imarker564 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 0 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker564);
    google.maps.event.addListener(imarker564, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #538 received at: 11:45:37 AM (MDT) 07/23/13 <br /> (35 days, 0 hours, 38 minutes ago) (2:07:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 20.44 mi traveled at 7.9 mph<br />Route mile 311.01 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker561,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker567,"click");}>Next point >>></a>');
        infowindow.open(map, imarker564);
    });
    polypath.push(new google.maps.LatLng(38.960300, - 106.200730));
    point = new google.maps.LatLng(38.989430, - 106.219530);
    imarker567 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 0 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker567);
    google.maps.event.addListener(imarker567, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #541 received at: 12:00:35 PM (MDT) 07/23/13 <br /> (35 days, 0 hours, 23 minutes ago) (2:08:00 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.97 mi traveled at 6.9 mph<br />Route mile 313.74 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker564,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker570,"click");}>Next point >>></a>');
        infowindow.open(map, imarker567);
    });
    polypath.push(new google.maps.LatLng(38.989430, - 106.219530));
    point = new google.maps.LatLng(39.014300, - 106.240690);
    imarker570 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 35 days, 0 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker570);
    google.maps.event.addListener(imarker570, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #544 received at: 12:15:34 PM (MDT) 07/23/13 <br /> (35 days, 0 hours, 8 minutes ago) (2:08:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 23.48 mi traveled at 8.4 mph<br />Route mile 316.30 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker567,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker573,"click");}>Next point >>></a>');
        infowindow.open(map, imarker570);
    });
    polypath.push(new google.maps.LatLng(39.014300, - 106.240690));
    point = new google.maps.LatLng(39.022000, - 106.279300);
    imarker573 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 23 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker573);
    google.maps.event.addListener(imarker573, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #547 received at: 12:30:34 PM (MDT) 07/23/13 <br /> (34 days, 23 hours, 53 minutes ago) (2:08:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 25.30 mi traveled at 12.0 mph<br />Route mile 319.35 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker570,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker576,"click");}>Next point >>></a>');
        infowindow.open(map, imarker573);
    });
    polypath.push(new google.maps.LatLng(39.022000, - 106.279300));
    point = new google.maps.LatLng(39.022190, - 106.293610);
    imarker576 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 23 hours, 38 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker576);
    google.maps.event.addListener(imarker576, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #550 received at: 12:45:34 PM (MDT) 07/23/13 <br /> (34 days, 23 hours, 38 minutes ago) (2:08:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.24 mi traveled at 2.0 mph<br />Route mile 319.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker573,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker579,"click");}>Next point >>></a>');
        infowindow.open(map, imarker576);
    });
    polypath.push(new google.maps.LatLng(39.022190, - 106.293610));
    point = new google.maps.LatLng(39.020970, - 106.303180);
    imarker579 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 23 hours, 23 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker579);
    google.maps.event.addListener(imarker579, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #553 received at: 01:00:25 PM (MDT) 07/23/13 <br /> (34 days, 23 hours, 23 minutes ago) (2:09:00 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.06 mi traveled at 1.3 mph<br />Route mile 319.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker576,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker582,"click");}>Next point >>></a>');
        infowindow.open(map, imarker579);
    });
    polypath.push(new google.maps.LatLng(39.020970, - 106.303180));
    point = new google.maps.LatLng(39.039130, - 106.308300);
    imarker582 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 23 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker582);
    google.maps.event.addListener(imarker582, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #556 received at: 01:15:22 PM (MDT) 07/23/13 <br /> (34 days, 23 hours, 8 minutes ago) (2:09:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.64 mi traveled at 4.4 mph<br />Route mile 322.86 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker579,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker585,"click");}>Next point >>></a>');
        infowindow.open(map, imarker582);
    });
    polypath.push(new google.maps.LatLng(39.039130, - 106.308300));
    point = new google.maps.LatLng(39.043450, - 106.316220);
    imarker585 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 22 hours, 54 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker585);
    google.maps.event.addListener(imarker585, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #559 received at: 01:30:20 PM (MDT) 07/23/13 <br /> (34 days, 22 hours, 54 minutes ago) (2:09:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.50 mi traveled at 2.9 mph<br />Route mile 323.60 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker582,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker588,"click");}>Next point >>></a>');
        infowindow.open(map, imarker585);
    });
    polypath.push(new google.maps.LatLng(39.043450, - 106.316220));
    point = new google.maps.LatLng(39.074820, - 106.327800);
    imarker588 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 22 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker588);
    google.maps.event.addListener(imarker588, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #562 received at: 02:05:07 PM (MDT) 07/23/13 <br /> (34 days, 22 hours, 19 minutes ago) (2:10:05 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.72 mi traveled at 2.7 mph<br />Route mile 325.73 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker585,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker591,"click");}>Next point >>></a>');
        infowindow.open(map, imarker588);
    });
    polypath.push(new google.maps.LatLng(39.074820, - 106.327800));
    point = new google.maps.LatLng(39.073310, - 106.305920);
    imarker591 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 22 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker591);
    google.maps.event.addListener(imarker591, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #565 received at: 02:20:05 PM (MDT) 07/23/13 <br /> (34 days, 22 hours, 4 minutes ago) (2:10:20 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.70 mi traveled at 4.7 mph<br />Route mile 326.71 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker588,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker594,"click");}>Next point >>></a>');
        infowindow.open(map, imarker591);
    });
    polypath.push(new google.maps.LatLng(39.073310, - 106.305920));
    point = new google.maps.LatLng(39.096250, - 106.332460);
    imarker594 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 21 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker594);
    google.maps.event.addListener(imarker594, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #568 received at: 02:35:04 PM (MDT) 07/23/13 <br /> (34 days, 21 hours, 49 minutes ago) (2:10:35 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.83 mi traveled at 11.1 mph<br />Route mile 331.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker591,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker597,"click");}>Next point >>></a>');
        infowindow.open(map, imarker594);
    });
    polypath.push(new google.maps.LatLng(39.096250, - 106.332460));
    point = new google.maps.LatLng(39.095040, - 106.364840);
    imarker597 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 21 hours, 34 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker597);
    google.maps.event.addListener(imarker597, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #571 received at: 02:50:05 PM (MDT) 07/23/13 <br /> (34 days, 21 hours, 34 minutes ago) (2:10:50 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.34 mi traveled at 3.1 mph<br />Route mile 333.99 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker594,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker600,"click");}>Next point >>></a>');
        infowindow.open(map, imarker597);
    });
    polypath.push(new google.maps.LatLng(39.095040, - 106.364840));
    point = new google.maps.LatLng(39.097090, - 106.376510);
    imarker600 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 21 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker600);
    google.maps.event.addListener(imarker600, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #574 received at: 03:05:02 PM (MDT) 07/23/13 <br /> (34 days, 21 hours, 19 minutes ago) (2:11:05 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.59 mi traveled at 3.5 mph<br />Route mile 333.79 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker597,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker603,"click");}>Next point >>></a>');
        infowindow.open(map, imarker600);
    });
    polypath.push(new google.maps.LatLng(39.097090, - 106.376510));
    point = new google.maps.LatLng(39.098030, - 106.389080);
    imarker603 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 21 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker603);
    google.maps.event.addListener(imarker603, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #577 received at: 03:19:57 PM (MDT) 07/23/13 <br /> (34 days, 21 hours, 4 minutes ago) (2:11:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.66 mi traveled at 2.6 mph<br />Route mile 335.50 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker600,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker606,"click");}>Next point >>></a>');
        infowindow.open(map, imarker603);
    });
    polypath.push(new google.maps.LatLng(39.098030, - 106.389080));
    point = new google.maps.LatLng(39.102100, - 106.394090);
    imarker606 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 20 hours, 44 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker606);
    google.maps.event.addListener(imarker606, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #580 received at: 03:40:03 PM (MDT) 07/23/13 <br /> (34 days, 20 hours, 44 minutes ago) (2:11:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.51 mi traveled at 2.8 mph<br />Route mile 335.50 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker603,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker609,"click");}>Next point >>></a>');
        infowindow.open(map, imarker606);
    });
    polypath.push(new google.maps.LatLng(39.102100, - 106.394090));
    point = new google.maps.LatLng(39.116760, - 106.389180);
    imarker609 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 20 hours, 24 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker609);
    google.maps.event.addListener(imarker609, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #583 received at: 03:59:59 PM (MDT) 07/23/13 <br /> (34 days, 20 hours, 24 minutes ago) (2:11:59 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.59 mi traveled at 1.6 mph<br />Route mile 337.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker606,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker612,"click");}>Next point >>></a>');
        infowindow.open(map, imarker609);
    });
    polypath.push(new google.maps.LatLng(39.116760, - 106.389180));
    point = new google.maps.LatLng(39.138780, - 106.405030);
    imarker612 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 20 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker612);
    google.maps.event.addListener(imarker612, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #586 received at: 04:19:57 PM (MDT) 07/23/13 <br /> (34 days, 20 hours, 4 minutes ago) (2:12:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.75 mi traveled at 2.5 mph<br />Route mile 339.86 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker609,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker615,"click");}>Next point >>></a>');
        infowindow.open(map, imarker612);
    });
    polypath.push(new google.maps.LatLng(39.138780, - 106.405030));
    point = new google.maps.LatLng(39.193960, - 106.380340);
    imarker615 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 19 hours, 29 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker615);
    google.maps.event.addListener(imarker615, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #589 received at: 04:54:51 PM (MDT) 07/23/13 <br /> (34 days, 19 hours, 29 minutes ago) (2:12:54 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.51 mi traveled at 17.2 mph<br />Route mile 346.31 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker612,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker618,"click");}>Next point >>></a>');
        infowindow.open(map, imarker615);
    });
    polypath.push(new google.maps.LatLng(39.193960, - 106.380340));
    point = new google.maps.LatLng(39.220110, - 106.353410);
    imarker618 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 19 hours, 14 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker618);
    google.maps.event.addListener(imarker618, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #592 received at: 05:09:49 PM (MDT) 07/23/13 <br /> (34 days, 19 hours, 14 minutes ago) (2:13:09 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.44 mi traveled at 8.3 mph<br />Route mile 349.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker615,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker621,"click");}>Next point >>></a>');
        infowindow.open(map, imarker618);
    });
    polypath.push(new google.maps.LatLng(39.220110, - 106.353410));
    point = new google.maps.LatLng(39.234850, - 106.317120);
    imarker621 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 18 hours, 59 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker621);
    google.maps.event.addListener(imarker621, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #595 received at: 05:24:47 PM (MDT) 07/23/13 <br /> (34 days, 18 hours, 59 minutes ago) (2:13:24 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.73 mi traveled at 8.3 mph<br />Route mile 352.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker618,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker624,"click");}>Next point >>></a>');
        infowindow.open(map, imarker621);
    });
    polypath.push(new google.maps.LatLng(39.234850, - 106.317120));
    point = new google.maps.LatLng(39.247010, - 106.290570);
    imarker624 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 18 hours, 44 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker624);
    google.maps.event.addListener(imarker624, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #598 received at: 05:39:43 PM (MDT) 07/23/13 <br /> (34 days, 18 hours, 44 minutes ago) (2:13:39 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.02 mi traveled at 5.4 mph<br />Route mile 353.68 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker621,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker627,"click");}>Next point >>></a>');
        infowindow.open(map, imarker624);
    });
    polypath.push(new google.maps.LatLng(39.247010, - 106.290570));
    point = new google.maps.LatLng(39.260590, - 106.292160);
    imarker627 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 18 hours, 29 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker627);
    google.maps.event.addListener(imarker627, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #601 received at: 05:54:38 PM (MDT) 07/23/13 <br /> (34 days, 18 hours, 29 minutes ago) (2:13:54 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.33 mi traveled at 0.2 mph<br />Route mile 354.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker624,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker630,"click");}>Next point >>></a>');
        infowindow.open(map, imarker627);
    });
    polypath.push(new google.maps.LatLng(39.260590, - 106.292160));
    point = new google.maps.LatLng(39.260510, - 106.291950);
    imarker630 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 18 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker630);
    google.maps.event.addListener(imarker630, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #604 received at: 06:17:21 PM (MDT) 07/23/13 <br /> (34 days, 18 hours, 7 minutes ago) (2:14:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.61 mi traveled at 0.2 mph<br />Route mile 354.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker627,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker633,"click");}>Next point >>></a>');
        infowindow.open(map, imarker630);
    });
    polypath.push(new google.maps.LatLng(39.260510, - 106.291950));
    point = new google.maps.LatLng(39.273300, - 106.300110);
    imarker633 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 17 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker633);
    google.maps.event.addListener(imarker633, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #607 received at: 06:32:24 PM (MDT) 07/23/13 <br /> (34 days, 17 hours, 51 minutes ago) (2:14:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.18 mi traveled at 11.5 mph<br />Route mile 356.12 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker630,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker636,"click");}>Next point >>></a>');
        infowindow.open(map, imarker633);
    });
    polypath.push(new google.maps.LatLng(39.273300, - 106.300110));
    point = new google.maps.LatLng(39.304540, - 106.329640);
    imarker636 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 17 hours, 37 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker636);
    google.maps.event.addListener(imarker636, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #610 received at: 06:47:20 PM (MDT) 07/23/13 <br /> (34 days, 17 hours, 37 minutes ago) (2:14:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.05 mi traveled at 10.0 mph<br />Route mile 359.34 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker633,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker639,"click");}>Next point >>></a>');
        infowindow.open(map, imarker636);
    });
    polypath.push(new google.maps.LatLng(39.304540, - 106.329640));
    point = new google.maps.LatLng(39.334690, - 106.330020);
    imarker639 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 17 hours, 22 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker639);
    google.maps.event.addListener(imarker639, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #613 received at: 07:02:19 PM (MDT) 07/23/13 <br /> (34 days, 17 hours, 22 minutes ago) (2:15:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.40 mi traveled at 5.3 mph<br />Route mile 361.95 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker636,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker642,"click");}>Next point >>></a>');
        infowindow.open(map, imarker639);
    });
    polypath.push(new google.maps.LatLng(39.334690, - 106.330020));
    point = new google.maps.LatLng(39.349660, - 106.347290);
    imarker642 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 17 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker642);
    google.maps.event.addListener(imarker642, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #616 received at: 07:22:13 PM (MDT) 07/23/13 <br /> (34 days, 17 hours, 2 minutes ago) (2:15:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.27 mi traveled at 3.2 mph<br />Route mile 363.65 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker639,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker645,"click");}>Next point >>></a>');
        infowindow.open(map, imarker642);
    });
    polypath.push(new google.maps.LatLng(39.349660, - 106.347290));
    point = new google.maps.LatLng(39.361480, - 106.312850);
    imarker645 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 16 hours, 37 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker645);
    google.maps.event.addListener(imarker645, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #619 received at: 07:47:12 PM (MDT) 07/23/13 <br /> (34 days, 16 hours, 37 minutes ago) (2:15:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.82 mi traveled at 5.5 mph<br />Route mile 366.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker642,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker648,"click");}>Next point >>></a>');
        infowindow.open(map, imarker645);
    });
    polypath.push(new google.maps.LatLng(39.361480, - 106.312850));
    point = new google.maps.LatLng(39.387510, - 106.318710);
    imarker648 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 16 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker648);
    google.maps.event.addListener(imarker648, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #622 received at: 08:07:07 PM (MDT) 07/23/13 <br /> (34 days, 16 hours, 17 minutes ago) (2:16:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.81 mi traveled at 6.2 mph<br />Route mile 368.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker645,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker651,"click");}>Next point >>></a>');
        infowindow.open(map, imarker648);
    });
    polypath.push(new google.maps.LatLng(39.387510, - 106.318710));
    point = new google.maps.LatLng(39.407760, - 106.314640);
    imarker651 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 15 hours, 57 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker651);
    google.maps.event.addListener(imarker651, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #625 received at: 08:27:05 PM (MDT) 07/23/13 <br /> (34 days, 15 hours, 57 minutes ago) (2:16:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.35 mi traveled at 5.5 mph<br />Route mile 371.77 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker648,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker654,"click");}>Next point >>></a>');
        infowindow.open(map, imarker651);
    });
    polypath.push(new google.maps.LatLng(39.407760, - 106.314640));
    point = new google.maps.LatLng(39.422360, - 106.295430);
    imarker654 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 15 hours, 42 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker654);
    google.maps.event.addListener(imarker654, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #628 received at: 08:42:03 PM (MDT) 07/23/13 <br /> (34 days, 15 hours, 42 minutes ago) (2:16:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.48 mi traveled at 4.9 mph<br />Route mile 372.76 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker651,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker657,"click");}>Next point >>></a>');
        infowindow.open(map, imarker654);
    });
    polypath.push(new google.maps.LatLng(39.422360, - 106.295430));
    point = new google.maps.LatLng(39.434540, - 106.281830);
    imarker657 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 15 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker657);
    google.maps.event.addListener(imarker657, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #631 received at: 08:57:31 PM (MDT) 07/23/13 <br /> (34 days, 15 hours, 26 minutes ago) (2:16:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 17.17 mi traveled at 9.0 mph<br />Route mile 374.85 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker654,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker660,"click");}>Next point >>></a>');
        infowindow.open(map, imarker657);
    });
    polypath.push(new google.maps.LatLng(39.434540, - 106.281830));
    point = new google.maps.LatLng(39.422490, - 106.268370);
    imarker660 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 15 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker660);
    google.maps.event.addListener(imarker660, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #634 received at: 09:21:54 PM (MDT) 07/23/13 <br /> (34 days, 15 hours, 2 minutes ago) (2:17:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.40 mi traveled at 0.5 mph<br />Route mile 376.04 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker657,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker663,"click");}>Next point >>></a>');
        infowindow.open(map, imarker660);
    });
    polypath.push(new google.maps.LatLng(39.422490, - 106.268370));
    point = new google.maps.LatLng(39.427540, - 106.270340);
    imarker663 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 14 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker663);
    google.maps.event.addListener(imarker663, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #637 received at: 09:36:53 PM (MDT) 07/23/13 <br /> (34 days, 14 hours, 47 minutes ago) (2:17:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.52 mi traveled at 1.3 mph<br />Route mile 375.88 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker660,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker666,"click");}>Next point >>></a>');
        infowindow.open(map, imarker663);
    });
    polypath.push(new google.maps.LatLng(39.427540, - 106.270340));
    point = new google.maps.LatLng(39.431810, - 106.253890);
    imarker666 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 14 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker666);
    google.maps.event.addListener(imarker666, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #640 received at: 10:06:52 PM (MDT) 07/23/13 <br /> (34 days, 14 hours, 17 minutes ago) (2:18:06 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.98 mi traveled at 2.0 mph<br />Route mile 375.88 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker663,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker669,"click");}>Next point >>></a>');
        infowindow.open(map, imarker666);
    });
    polypath.push(new google.maps.LatLng(39.431810, - 106.253890));
    point = new google.maps.LatLng(39.432690, - 106.243910);
    imarker669 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 14 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker669);
    google.maps.event.addListener(imarker669, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #643 received at: 10:21:44 PM (MDT) 07/23/13 <br /> (34 days, 14 hours, 2 minutes ago) (2:18:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.66 mi traveled at 1.4 mph<br />Route mile 378.54 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker666,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker672,"click");}>Next point >>></a>');
        infowindow.open(map, imarker669);
    });
    polypath.push(new google.maps.LatLng(39.432690, - 106.243910));
    point = new google.maps.LatLng(39.434460, - 106.238280);
    imarker672 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 12 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker672);
    google.maps.event.addListener(imarker672, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #646 received at: 11:37:57 PM (MDT) 07/23/13 <br /> (34 days, 12 hours, 46 minutes ago) (2:19:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.98 mi traveled at 0.7 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker669,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker675,"click");}>Next point >>></a>');
        infowindow.open(map, imarker672);
    });
    polypath.push(new google.maps.LatLng(39.434460, - 106.238280));
    point = new google.maps.LatLng(39.434480, - 106.232130);
    imarker675 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 12 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker675);
    google.maps.event.addListener(imarker675, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #649 received at: 11:52:55 PM (MDT) 07/23/13 <br /> (34 days, 12 hours, 31 minutes ago) (2:19:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.20 mi traveled at 2.7 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker672,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker678,"click");}>Next point >>></a>');
        infowindow.open(map, imarker675);
    });
    polypath.push(new google.maps.LatLng(39.434480, - 106.232130));
    point = new google.maps.LatLng(39.429760, - 106.227490);
    imarker678 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 12 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker678);
    google.maps.event.addListener(imarker678, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #652 received at: 12:07:57 AM (MDT) 07/24/13 <br /> (34 days, 12 hours, 16 minutes ago) (2:20:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.54 mi traveled at 1.4 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker675,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker681,"click");}>Next point >>></a>');
        infowindow.open(map, imarker678);
    });
    polypath.push(new google.maps.LatLng(39.429760, - 106.227490));
    point = new google.maps.LatLng(39.431550, - 106.220630);
    imarker681 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 12 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker681);
    google.maps.event.addListener(imarker681, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #655 received at: 12:22:54 AM (MDT) 07/24/13 <br /> (34 days, 12 hours, 1 minutes ago) (2:20:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.91 mi traveled at 2.3 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker678,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker684,"click");}>Next point >>></a>');
        infowindow.open(map, imarker681);
    });
    polypath.push(new google.maps.LatLng(39.431550, - 106.220630));
    point = new google.maps.LatLng(39.440610, - 106.222120);
    imarker684 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 11 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker684);
    google.maps.event.addListener(imarker684, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #658 received at: 12:37:56 AM (MDT) 07/24/13 <br /> (34 days, 11 hours, 46 minutes ago) (2:20:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.28 mi traveled at 2.7 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker681,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker687,"click");}>Next point >>></a>');
        infowindow.open(map, imarker684);
    });
    polypath.push(new google.maps.LatLng(39.440610, - 106.222120));
    point = new google.maps.LatLng(39.445670, - 106.228160);
    imarker687 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 11 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker687);
    google.maps.event.addListener(imarker687, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #661 received at: 12:52:51 AM (MDT) 07/24/13 <br /> (34 days, 11 hours, 31 minutes ago) (2:20:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 4.82 mi traveled at 2.2 mph<br />Route mile 378.93 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker684,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker690,"click");}>Next point >>></a>');
        infowindow.open(map, imarker687);
    });
    polypath.push(new google.maps.LatLng(39.445670, - 106.228160));
    point = new google.maps.LatLng(39.459220, - 106.228610);
    imarker690 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 11 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker690);
    google.maps.event.addListener(imarker690, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #664 received at: 01:07:45 AM (MDT) 07/24/13 <br /> (34 days, 11 hours, 16 minutes ago) (2:21:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.42 mi traveled at 4.2 mph<br />Route mile 383.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker687,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker693,"click");}>Next point >>></a>');
        infowindow.open(map, imarker690);
    });
    polypath.push(new google.maps.LatLng(39.459220, - 106.228610));
    point = new google.maps.LatLng(39.469190, - 106.229370);
    imarker693 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 11 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker693);
    google.maps.event.addListener(imarker693, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #667 received at: 01:22:45 AM (MDT) 07/24/13 <br /> (34 days, 11 hours, 1 minutes ago) (2:21:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.22 mi traveled at 4.5 mph<br />Route mile 384.08 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker690,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker696,"click");}>Next point >>></a>');
        infowindow.open(map, imarker693);
    });
    polypath.push(new google.maps.LatLng(39.469190, - 106.229370));
    point = new google.maps.LatLng(39.471140, - 106.219790);
    imarker696 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 10 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker696);
    google.maps.event.addListener(imarker696, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #670 received at: 01:37:44 AM (MDT) 07/24/13 <br /> (34 days, 10 hours, 46 minutes ago) (2:21:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.34 mi traveled at 3.7 mph<br />Route mile 383.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker693,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker699,"click");}>Next point >>></a>');
        infowindow.open(map, imarker696);
    });
    polypath.push(new google.maps.LatLng(39.471140, - 106.219790));
    point = new google.maps.LatLng(39.480800, - 106.204190);
    imarker699 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 10 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker699);
    google.maps.event.addListener(imarker699, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #673 received at: 01:52:41 AM (MDT) 07/24/13 <br /> (34 days, 10 hours, 31 minutes ago) (2:21:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.02 mi traveled at 2.9 mph<br />Route mile 386.08 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker696,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker702,"click");}>Next point >>></a>');
        infowindow.open(map, imarker699);
    });
    polypath.push(new google.maps.LatLng(39.480800, - 106.204190));
    point = new google.maps.LatLng(39.488740, - 106.188030);
    imarker702 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 10 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker702);
    google.maps.event.addListener(imarker702, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #676 received at: 02:12:38 AM (MDT) 07/24/13 <br /> (34 days, 10 hours, 11 minutes ago) (2:22:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.87 mi traveled at 1.7 mph<br />Route mile 388.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker699,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker705,"click");}>Next point >>></a>');
        infowindow.open(map, imarker702);
    });
    polypath.push(new google.maps.LatLng(39.488740, - 106.188030));
    point = new google.maps.LatLng(39.495200, - 106.170230);
    imarker705 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 9 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker705);
    google.maps.event.addListener(imarker705, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #679 received at: 02:32:31 AM (MDT) 07/24/13 <br /> (34 days, 9 hours, 51 minutes ago) (2:22:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.58 mi traveled at 3.1 mph<br />Route mile 388.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker702,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker708,"click");}>Next point >>></a>');
        infowindow.open(map, imarker705);
    });
    polypath.push(new google.maps.LatLng(39.495200, - 106.170230));
    point = new google.maps.LatLng(39.498490, - 106.152540);
    imarker708 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 9 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker708);
    google.maps.event.addListener(imarker708, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #682 received at: 02:47:30 AM (MDT) 07/24/13 <br /> (34 days, 9 hours, 36 minutes ago) (2:22:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.22 mi traveled at 7.0 mph<br />Route mile 389.67 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker705,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker711,"click");}>Next point >>></a>');
        infowindow.open(map, imarker708);
    });
    polypath.push(new google.maps.LatLng(39.498490, - 106.152540));
    point = new google.maps.LatLng(39.494790, - 106.143800);
    imarker711 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 9 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker711);
    google.maps.event.addListener(imarker711, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #685 received at: 03:02:22 AM (MDT) 07/24/13 <br /> (34 days, 9 hours, 21 minutes ago) (2:23:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.10 mi traveled at 2.7 mph<br />Route mile 391.57 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker708,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker714,"click");}>Next point >>></a>');
        infowindow.open(map, imarker711);
    });
    polypath.push(new google.maps.LatLng(39.494790, - 106.143800));
    point = new google.maps.LatLng(39.491890, - 106.136250);
    imarker714 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 9 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker714);
    google.maps.event.addListener(imarker714, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #688 received at: 03:17:23 AM (MDT) 07/24/13 <br /> (34 days, 9 hours, 6 minutes ago) (2:23:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.02 mi traveled at 2.1 mph<br />Route mile 391.57 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker711,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker717,"click");}>Next point >>></a>');
        infowindow.open(map, imarker714);
    });
    polypath.push(new google.maps.LatLng(39.491890, - 106.136250));
    point = new google.maps.LatLng(39.492460, - 106.136320);
    imarker717 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 8 hours, 52 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker717);
    google.maps.event.addListener(imarker717, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #691 received at: 03:32:19 AM (MDT) 07/24/13 <br /> (34 days, 8 hours, 52 minutes ago) (2:23:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.22 mi traveled at 0.0 mph<br />Route mile 391.57 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker714,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker720,"click");}>Next point >>></a>');
        infowindow.open(map, imarker717);
    });
    polypath.push(new google.maps.LatLng(39.492460, - 106.136320));
    point = new google.maps.LatLng(39.497500, - 106.135010);
    imarker720 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 8 hours, 2 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker720);
    google.maps.event.addListener(imarker720, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #694 received at: 04:21:31 AM (MDT) 07/24/13 <br /> (34 days, 8 hours, 2 minutes ago) (3:00:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.90 mi traveled at 4.0 mph<br />Route mile 391.57 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker717,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker723,"click");}>Next point >>></a>');
        infowindow.open(map, imarker720);
    });
    polypath.push(new google.maps.LatLng(39.497500, - 106.135010));
    point = new google.maps.LatLng(39.491890, - 106.129680);
    imarker723 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 7 hours, 47 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker723);
    google.maps.event.addListener(imarker723, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #697 received at: 04:36:31 AM (MDT) 07/24/13 <br /> (34 days, 7 hours, 47 minutes ago) (3:00:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.61 mi traveled at 1.5 mph<br />Route mile 391.81 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker720,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker726,"click");}>Next point >>></a>');
        infowindow.open(map, imarker723);
    });
    polypath.push(new google.maps.LatLng(39.491890, - 106.129680));
    point = new google.maps.LatLng(39.484940, - 106.126570);
    imarker726 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 7 hours, 32 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker726);
    google.maps.event.addListener(imarker726, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #700 received at: 04:51:25 AM (MDT) 07/24/13 <br /> (34 days, 7 hours, 32 minutes ago) (3:00:51 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.94 mi traveled at 2.3 mph<br />Route mile 392.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker723,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker729,"click");}>Next point >>></a>');
        infowindow.open(map, imarker726);
    });
    polypath.push(new google.maps.LatLng(39.484940, - 106.126570));
    point = new google.maps.LatLng(39.481260, - 106.122700);
    imarker729 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 7 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker729);
    google.maps.event.addListener(imarker729, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #703 received at: 05:06:23 AM (MDT) 07/24/13 <br /> (34 days, 7 hours, 17 minutes ago) (3:01:06 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.10 mi traveled at 1.0 mph<br />Route mile 392.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker726,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker732,"click");}>Next point >>></a>');
        infowindow.open(map, imarker729);
    });
    polypath.push(new google.maps.LatLng(39.481260, - 106.122700));
    point = new google.maps.LatLng(39.477430, - 106.115360);
    imarker732 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 6 hours, 48 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker732);
    google.maps.event.addListener(imarker732, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #706 received at: 05:36:18 AM (MDT) 07/24/13 <br /> (34 days, 6 hours, 48 minutes ago) (3:01:36 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 4.49 mi traveled at 0.7 mph<br />Route mile 395.31 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker729,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker735,"click");}>Next point >>></a>');
        infowindow.open(map, imarker732);
    });
    polypath.push(new google.maps.LatLng(39.477430, - 106.115360));
    point = new google.maps.LatLng(39.481130, - 106.116320);
    imarker735 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 6 hours, 33 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker735);
    google.maps.event.addListener(imarker735, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #709 received at: 05:51:12 AM (MDT) 07/24/13 <br /> (34 days, 6 hours, 33 minutes ago) (3:01:51 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 4.10 mi traveled at 1.0 mph<br />Route mile 395.26 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker732,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker738,"click");}>Next point >>></a>');
        infowindow.open(map, imarker735);
    });
    polypath.push(new google.maps.LatLng(39.481130, - 106.116320));
    point = new google.maps.LatLng(39.482280, - 106.113360);
    imarker738 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 6 hours, 18 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker738);
    google.maps.event.addListener(imarker738, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #712 received at: 06:06:04 AM (MDT) 07/24/13 <br /> (34 days, 6 hours, 18 minutes ago) (3:02:06 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.41 mi traveled at 1.1 mph<br />Route mile 395.26 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker735,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker741,"click");}>Next point >>></a>');
        infowindow.open(map, imarker738);
    });
    polypath.push(new google.maps.LatLng(39.482280, - 106.113360));
    point = new google.maps.LatLng(39.485940, - 106.113420);
    imarker741 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 6 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker741);
    google.maps.event.addListener(imarker741, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #715 received at: 06:21:00 AM (MDT) 07/24/13 <br /> (34 days, 6 hours, 3 minutes ago) (3:02:21 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.22 mi traveled at 1.4 mph<br />Route mile 394.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker738,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker744,"click");}>Next point >>></a>');
        infowindow.open(map, imarker741);
    });
    polypath.push(new google.maps.LatLng(39.485940, - 106.113420));
    point = new google.maps.LatLng(39.491270, - 106.113710);
    imarker744 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 5 hours, 48 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker744);
    google.maps.event.addListener(imarker744, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #718 received at: 06:35:57 AM (MDT) 07/24/13 <br /> (34 days, 5 hours, 48 minutes ago) (3:02:35 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.38 mi traveled at 1.4 mph<br />Route mile 393.15 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker741,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker747,"click");}>Next point >>></a>');
        infowindow.open(map, imarker744);
    });
    polypath.push(new google.maps.LatLng(39.491270, - 106.113710));
    point = new google.maps.LatLng(39.492470, - 106.113980);
    imarker747 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 5 hours, 33 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker747);
    google.maps.event.addListener(imarker747, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #721 received at: 06:50:53 AM (MDT) 07/24/13 <br /> (34 days, 5 hours, 33 minutes ago) (3:02:50 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.40 mi traveled at 1.0 mph<br />Route mile 392.72 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker744,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker750,"click");}>Next point >>></a>');
        infowindow.open(map, imarker747);
    });
    polypath.push(new google.maps.LatLng(39.492470, - 106.113980));
    point = new google.maps.LatLng(39.498490, - 106.114000);
    imarker750 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 5 hours, 18 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker750);
    google.maps.event.addListener(imarker750, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #724 received at: 07:05:55 AM (MDT) 07/24/13 <br /> (34 days, 5 hours, 18 minutes ago) (3:03:05 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.14 mi traveled at 1.2 mph<br />Route mile 393.00 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker747,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker753,"click");}>Next point >>></a>');
        infowindow.open(map, imarker750);
    });
    polypath.push(new google.maps.LatLng(39.498490, - 106.114000));
    point = new google.maps.LatLng(39.511230, - 106.110810);
    imarker753 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 4 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker753);
    google.maps.event.addListener(imarker753, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #727 received at: 07:25:58 AM (MDT) 07/24/13 <br /> (34 days, 4 hours, 58 minutes ago) (3:03:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 3.61 mi traveled at 3.2 mph<br />Route mile 398.06 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker750,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker756,"click");}>Next point >>></a>');
        infowindow.open(map, imarker753);
    });
    polypath.push(new google.maps.LatLng(39.511230, - 106.110810));
    point = new google.maps.LatLng(39.522830, - 106.111600);
    imarker756 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 4 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker756);
    google.maps.event.addListener(imarker756, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #730 received at: 07:40:55 AM (MDT) 07/24/13 <br /> (34 days, 4 hours, 43 minutes ago) (3:03:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 4.01 mi traveled at 4.3 mph<br />Route mile 398.06 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker753,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker759,"click");}>Next point >>></a>');
        infowindow.open(map, imarker756);
    });
    polypath.push(new google.maps.LatLng(39.522830, - 106.111600));
    point = new google.maps.LatLng(39.532310, - 106.085400);
    imarker759 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 4 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker759);
    google.maps.event.addListener(imarker759, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #733 received at: 08:10:44 AM (MDT) 07/24/13 <br /> (34 days, 4 hours, 13 minutes ago) (3:04:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.40 mi traveled at 4.4 mph<br />Route mile 400.34 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker756,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker762,"click");}>Next point >>></a>');
        infowindow.open(map, imarker759);
    });
    polypath.push(new google.maps.LatLng(39.532310, - 106.085400));
    point = new google.maps.LatLng(39.539670, - 106.076260);
    imarker762 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 3 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker762);
    google.maps.event.addListener(imarker762, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #736 received at: 08:25:45 AM (MDT) 07/24/13 <br /> (34 days, 3 hours, 58 minutes ago) (3:04:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 5.92 mi traveled at 2.5 mph<br />Route mile 401.83 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker759,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker765,"click");}>Next point >>></a>');
        infowindow.open(map, imarker762);
    });
    polypath.push(new google.maps.LatLng(39.539670, - 106.076260));
    point = new google.maps.LatLng(39.535390, - 106.060830);
    imarker765 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 3 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker765);
    google.maps.event.addListener(imarker765, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #739 received at: 08:40:39 AM (MDT) 07/24/13 <br /> (34 days, 3 hours, 43 minutes ago) (3:04:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 6.59 mi traveled at 5.5 mph<br />Route mile 402.73 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker762,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker768,"click");}>Next point >>></a>');
        infowindow.open(map, imarker765);
    });
    polypath.push(new google.maps.LatLng(39.535390, - 106.060830));
    point = new google.maps.LatLng(39.542420, - 106.035080);
    imarker768 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 3 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker768);
    google.maps.event.addListener(imarker768, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #742 received at: 08:55:37 AM (MDT) 07/24/13 <br /> (34 days, 3 hours, 28 minutes ago) (3:04:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.03 mi traveled at 5.7 mph<br />Route mile 406.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker765,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker771,"click");}>Next point >>></a>');
        infowindow.open(map, imarker768);
    });
    polypath.push(new google.maps.LatLng(39.542420, - 106.035080));
    point = new google.maps.LatLng(39.542200, - 106.025620);
    imarker771 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 3 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker771);
    google.maps.event.addListener(imarker771, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #745 received at: 09:10:36 AM (MDT) 07/24/13 <br /> (34 days, 3 hours, 13 minutes ago) (3:05:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.20 mi traveled at 3.7 mph<br />Route mile 406.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker768,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker774,"click");}>Next point >>></a>');
        infowindow.open(map, imarker771);
    });
    polypath.push(new google.maps.LatLng(39.542200, - 106.025620));
    point = new google.maps.LatLng(39.539680, - 105.999910);
    imarker774 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 2 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker774);
    google.maps.event.addListener(imarker774, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #748 received at: 09:25:37 AM (MDT) 07/24/13 <br /> (34 days, 2 hours, 58 minutes ago) (3:05:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.57 mi traveled at 8.8 mph<br />Route mile 409.13 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker771,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker777,"click");}>Next point >>></a>');
        infowindow.open(map, imarker774);
    });
    polypath.push(new google.maps.LatLng(39.539680, - 105.999910));
    point = new google.maps.LatLng(39.540520, - 105.991410);
    imarker777 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 2 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker777);
    google.maps.event.addListener(imarker777, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #751 received at: 09:40:38 AM (MDT) 07/24/13 <br /> (34 days, 2 hours, 43 minutes ago) (3:05:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.89 mi traveled at 2.6 mph<br />Route mile 409.13 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker774,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker780,"click");}>Next point >>></a>');
        infowindow.open(map, imarker777);
    });
    polypath.push(new google.maps.LatLng(39.540520, - 105.991410));
    point = new google.maps.LatLng(39.540100, - 105.981840);
    imarker780 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 2 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker780);
    google.maps.event.addListener(imarker780, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #754 received at: 09:55:37 AM (MDT) 07/24/13 <br /> (34 days, 2 hours, 28 minutes ago) (3:05:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.99 mi traveled at 2.4 mph<br />Route mile 410.20 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker777,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker783,"click");}>Next point >>></a>');
        infowindow.open(map, imarker780);
    });
    polypath.push(new google.maps.LatLng(39.540100, - 105.981840));
    point = new google.maps.LatLng(39.542100, - 105.967740);
    imarker783 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 2 hours, 13 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker783);
    google.maps.event.addListener(imarker783, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #757 received at: 10:10:32 AM (MDT) 07/24/13 <br /> (34 days, 2 hours, 13 minutes ago) (3:06:10 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.90 mi traveled at 1.7 mph<br />Route mile 411.86 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker780,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker786,"click");}>Next point >>></a>');
        infowindow.open(map, imarker783);
    });
    polypath.push(new google.maps.LatLng(39.542100, - 105.967740));
    point = new google.maps.LatLng(39.546960, - 105.967740);
    imarker786 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 1 hours, 58 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker786);
    google.maps.event.addListener(imarker786, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #760 received at: 10:25:29 AM (MDT) 07/24/13 <br /> (34 days, 1 hours, 58 minutes ago) (3:06:25 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.87 mi traveled at 0.5 mph<br />Route mile 412.14 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker783,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker789,"click");}>Next point >>></a>');
        infowindow.open(map, imarker786);
    });
    polypath.push(new google.maps.LatLng(39.546960, - 105.967740));
    point = new google.maps.LatLng(39.547130, - 105.961650);
    imarker789 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 1 hours, 43 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker789);
    google.maps.event.addListener(imarker789, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #763 received at: 10:40:27 AM (MDT) 07/24/13 <br /> (34 days, 1 hours, 43 minutes ago) (3:06:40 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.99 mi traveled at 0.6 mph<br />Route mile 412.14 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker786,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker792,"click");}>Next point >>></a>');
        infowindow.open(map, imarker789);
    });
    polypath.push(new google.maps.LatLng(39.547130, - 105.961650));
    point = new google.maps.LatLng(39.552170, - 105.959180);
    imarker792 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 1 hours, 28 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker792);
    google.maps.event.addListener(imarker792, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #766 received at: 10:55:26 AM (MDT) 07/24/13 <br /> (34 days, 1 hours, 28 minutes ago) (3:06:55 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.93 mi traveled at 1.0 mph<br />Route mile 413.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker789,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker795,"click");}>Next point >>></a>');
        infowindow.open(map, imarker792);
    });
    polypath.push(new google.maps.LatLng(39.552170, - 105.959180));
    point = new google.maps.LatLng(39.538060, - 105.932680);
    imarker795 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 1 hours, 8 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker795);
    google.maps.event.addListener(imarker795, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #769 received at: 11:15:27 AM (MDT) 07/24/13 <br /> (34 days, 1 hours, 8 minutes ago) (3:07:15 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.05 mi traveled at 7.8 mph<br />Route mile 417.55 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker792,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker798,"click");}>Next point >>></a>');
        infowindow.open(map, imarker795);
    });
    polypath.push(new google.maps.LatLng(39.538060, - 105.932680));
    point = new google.maps.LatLng(39.514670, - 105.936200);
    imarker798 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 0 hours, 53 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker798);
    google.maps.event.addListener(imarker798, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #772 received at: 11:30:26 AM (MDT) 07/24/13 <br /> (34 days, 0 hours, 53 minutes ago) (3:07:30 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.20 mi traveled at 6.1 mph<br />Route mile 418.89 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker795,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker801,"click");}>Next point >>></a>');
        infowindow.open(map, imarker798);
    });
    polypath.push(new google.maps.LatLng(39.514670, - 105.936200));
    point = new google.maps.LatLng(39.501810, - 105.938850);
    imarker801 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 0 hours, 39 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker801);
    google.maps.event.addListener(imarker801, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #775 received at: 11:45:21 AM (MDT) 07/24/13 <br /> (34 days, 0 hours, 39 minutes ago) (3:07:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.20 mi traveled at 2.6 mph<br />Route mile 418.89 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker798,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker804,"click");}>Next point >>></a>');
        infowindow.open(map, imarker801);
    });
    polypath.push(new google.maps.LatLng(39.501810, - 105.938850));
    point = new google.maps.LatLng(39.498190, - 105.925320);
    imarker804 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 34 days, 0 hours, 24 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker804);
    google.maps.event.addListener(imarker804, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #778 received at: 12:00:19 PM (MDT) 07/24/13 <br /> (34 days, 0 hours, 24 minutes ago) (3:08:00 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.74 mi traveled at 3.9 mph<br />Route mile 420.21 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker801,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker807,"click");}>Next point >>></a>');
        infowindow.open(map, imarker804);
    });
    polypath.push(new google.maps.LatLng(39.498190, - 105.925320));
    point = new google.maps.LatLng(39.491440, - 105.924620);
    imarker807 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 23 hours, 39 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker807);
    google.maps.event.addListener(imarker807, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #781 received at: 12:45:17 PM (MDT) 07/24/13 <br /> (33 days, 23 hours, 39 minutes ago) (3:08:45 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.64 mi traveled at 0.8 mph<br />Route mile 421.51 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker804,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker810,"click");}>Next point >>></a>');
        infowindow.open(map, imarker807);
    });
    polypath.push(new google.maps.LatLng(39.491440, - 105.924620));
    point = new google.maps.LatLng(39.483730, - 105.918490);
    imarker810 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 23 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker810);
    google.maps.event.addListener(imarker810, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #784 received at: 01:20:05 PM (MDT) 07/24/13 <br /> (33 days, 23 hours, 4 minutes ago) (3:09:20 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.39 mi traveled at 1.2 mph<br />Route mile 423.28 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker807,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker813,"click");}>Next point >>></a>');
        infowindow.open(map, imarker810);
    });
    polypath.push(new google.maps.LatLng(39.483730, - 105.918490));
    point = new google.maps.LatLng(39.482060, - 105.912410);
    imarker813 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 22 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker813);
    google.maps.event.addListener(imarker813, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #787 received at: 01:35:02 PM (MDT) 07/24/13 <br /> (33 days, 22 hours, 49 minutes ago) (3:09:35 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.18 mi traveled at 2.1 mph<br />Route mile 422.71 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker810,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker816,"click");}>Next point >>></a>');
        infowindow.open(map, imarker813);
    });
    polypath.push(new google.maps.LatLng(39.482060, - 105.912410));
    point = new google.maps.LatLng(39.481380, - 105.904510);
    imarker816 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 22 hours, 34 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker816);
    google.maps.event.addListener(imarker816, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #790 received at: 01:49:58 PM (MDT) 07/24/13 <br /> (33 days, 22 hours, 34 minutes ago) (3:09:49 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.18 mi traveled at 2.5 mph<br />Route mile 423.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker813,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker819,"click");}>Next point >>></a>');
        infowindow.open(map, imarker816);
    });
    polypath.push(new google.maps.LatLng(39.481380, - 105.904510));
    point = new google.maps.LatLng(39.462470, - 105.907210);
    imarker819 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 22 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker819);
    google.maps.event.addListener(imarker819, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #793 received at: 02:04:57 PM (MDT) 07/24/13 <br /> (33 days, 22 hours, 19 minutes ago) (3:10:04 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.97 mi traveled at 5.3 mph<br />Route mile 427.01 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker816,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker822,"click");}>Next point >>></a>');
        infowindow.open(map, imarker819);
    });
    polypath.push(new google.maps.LatLng(39.462470, - 105.907210));
    point = new google.maps.LatLng(39.451430, - 105.899870);
    imarker822 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 22 hours, 3 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker822);
    google.maps.event.addListener(imarker822, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #796 received at: 02:20:35 PM (MDT) 07/24/13 <br /> (33 days, 22 hours, 3 minutes ago) (3:10:20 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.55 mi traveled at 8.6 mph<br />Route mile 427.01 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker819,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker825,"click");}>Next point >>></a>');
        infowindow.open(map, imarker822);
    });
    polypath.push(new google.maps.LatLng(39.451430, - 105.899870));
    point = new google.maps.LatLng(39.433530, - 105.867780);
    imarker825 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 21 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker825);
    google.maps.event.addListener(imarker825, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #799 received at: 02:34:59 PM (MDT) 07/24/13 <br /> (33 days, 21 hours, 49 minutes ago) (3:10:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.20 mi traveled at 7.4 mph<br />Route mile 431.24 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker822,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker828,"click");}>Next point >>></a>');
        infowindow.open(map, imarker825);
    });
    polypath.push(new google.maps.LatLng(39.433530, - 105.867780));
    point = new google.maps.LatLng(39.428870, - 105.849170);
    imarker828 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 21 hours, 29 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker828);
    google.maps.event.addListener(imarker828, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #802 received at: 02:54:55 PM (MDT) 07/24/13 <br /> (33 days, 21 hours, 29 minutes ago) (3:10:54 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.03 mi traveled at 1.9 mph<br />Route mile 430.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker825,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker831,"click");}>Next point >>></a>');
        infowindow.open(map, imarker828);
    });
    polypath.push(new google.maps.LatLng(39.428870, - 105.849170));
    point = new google.maps.LatLng(39.429340, - 105.843200);
    imarker831 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 21 hours, 14 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker831);
    google.maps.event.addListener(imarker831, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #805 received at: 03:09:55 PM (MDT) 07/24/13 <br /> (33 days, 21 hours, 14 minutes ago) (3:11:09 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.69 mi traveled at 3.1 mph<br />Route mile 433.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker828,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker834,"click");}>Next point >>></a>');
        infowindow.open(map, imarker831);
    });
    polypath.push(new google.maps.LatLng(39.429340, - 105.843200));
    point = new google.maps.LatLng(39.427640, - 105.801670);
    imarker834 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 20 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker834);
    google.maps.event.addListener(imarker834, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #808 received at: 03:34:52 PM (MDT) 07/24/13 <br /> (33 days, 20 hours, 49 minutes ago) (3:11:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.13 mi traveled at 10.3 mph<br />Route mile 436.61 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker831,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker837,"click");}>Next point >>></a>');
        infowindow.open(map, imarker834);
    });
    polypath.push(new google.maps.LatLng(39.427640, - 105.801670));
    point = new google.maps.LatLng(39.424820, - 105.793300);
    imarker837 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 20 hours, 34 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker837);
    google.maps.event.addListener(imarker837, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #811 received at: 03:49:55 PM (MDT) 07/24/13 <br /> (33 days, 20 hours, 34 minutes ago) (3:11:49 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.90 mi traveled at 1.7 mph<br />Route mile 437.34 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker834,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker840,"click");}>Next point >>></a>');
        infowindow.open(map, imarker837);
    });
    polypath.push(new google.maps.LatLng(39.424820, - 105.793300));
    point = new google.maps.LatLng(39.403660, - 105.807850);
    imarker840 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 20 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker840);
    google.maps.event.addListener(imarker840, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #814 received at: 04:04:53 PM (MDT) 07/24/13 <br /> (33 days, 20 hours, 19 minutes ago) (3:12:04 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.96 mi traveled at 20.7 mph<br />Route mile 437.05 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker837,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker843,"click");}>Next point >>></a>');
        infowindow.open(map, imarker840);
    });
    polypath.push(new google.maps.LatLng(39.403660, - 105.807850));
    point = new google.maps.LatLng(39.407090, - 105.747150);
    imarker843 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 20 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker843);
    google.maps.event.addListener(imarker843, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #817 received at: 04:19:45 PM (MDT) 07/24/13 <br /> (33 days, 20 hours, 4 minutes ago) (3:12:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.16 mi traveled at 6.9 mph<br />Route mile 440.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker840,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker846,"click");}>Next point >>></a>');
        infowindow.open(map, imarker843);
    });
    polypath.push(new google.maps.LatLng(39.407090, - 105.747150));
    point = new google.maps.LatLng(39.395910, - 105.735580);
    imarker846 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 19 hours, 49 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker846);
    google.maps.event.addListener(imarker846, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #820 received at: 04:34:41 PM (MDT) 07/24/13 <br /> (33 days, 19 hours, 49 minutes ago) (3:12:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.10 mi traveled at 3.3 mph<br />Route mile 441.85 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker843,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker849,"click");}>Next point >>></a>');
        infowindow.open(map, imarker846);
    });
    polypath.push(new google.maps.LatLng(39.395910, - 105.735580));
    point = new google.maps.LatLng(39.380620, - 105.728930);
    imarker849 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 19 hours, 34 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker849);
    google.maps.event.addListener(imarker849, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #823 received at: 04:49:38 PM (MDT) 07/24/13 <br /> (33 days, 19 hours, 34 minutes ago) (3:12:49 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.41 mi traveled at 8.3 mph<br />Route mile 443.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker846,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker852,"click");}>Next point >>></a>');
        infowindow.open(map, imarker849);
    });
    polypath.push(new google.maps.LatLng(39.380620, - 105.728930));
    point = new google.maps.LatLng(39.362430, - 105.698670);
    imarker852 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 19 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker852);
    google.maps.event.addListener(imarker852, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #826 received at: 05:04:29 PM (MDT) 07/24/13 <br /> (33 days, 19 hours, 19 minutes ago) (3:13:04 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.02 mi traveled at 13.2 mph<br />Route mile 446.02 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker849,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker855,"click");}>Next point >>></a>');
        infowindow.open(map, imarker852);
    });
    polypath.push(new google.maps.LatLng(39.362430, - 105.698670));
    point = new google.maps.LatLng(39.360810, - 105.685940);
    imarker855 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 19 hours, 4 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker855);
    google.maps.event.addListener(imarker855, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #829 received at: 05:19:23 PM (MDT) 07/24/13 <br /> (33 days, 19 hours, 4 minutes ago) (3:13:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.56 mi traveled at 27.3 mph<br />Route mile 446.74 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker852,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker858,"click");}>Next point >>></a>');
        infowindow.open(map, imarker855);
    });
    polypath.push(new google.maps.LatLng(39.360810, - 105.685940));
    point = new google.maps.LatLng(39.355760, - 105.705280);
    imarker858 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 18 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker858);
    google.maps.event.addListener(imarker858, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #832 received at: 05:34:17 PM (MDT) 07/24/13 <br /> (33 days, 18 hours, 50 minutes ago) (3:13:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.34 mi traveled at 6.1 mph<br />Route mile 444.69 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker855,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker861,"click");}>Next point >>></a>');
        infowindow.open(map, imarker858);
    });
    polypath.push(new google.maps.LatLng(39.355760, - 105.705280));
    point = new google.maps.LatLng(39.352600, - 105.720920);
    imarker861 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 18 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker861);
    google.maps.event.addListener(imarker861, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #835 received at: 05:49:18 PM (MDT) 07/24/13 <br /> (33 days, 18 hours, 35 minutes ago) (3:13:49 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 23.62 mi traveled at 4.2 mph<br />Route mile 444.60 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker858,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker864,"click");}>Next point >>></a>');
        infowindow.open(map, imarker861);
    });
    polypath.push(new google.maps.LatLng(39.352600, - 105.720920));
    point = new google.maps.LatLng(39.338020, - 105.724760);
    imarker864 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 18 hours, 19 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker864);
    google.maps.event.addListener(imarker864, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #838 received at: 06:04:37 PM (MDT) 07/24/13 <br /> (33 days, 18 hours, 19 minutes ago) (3:14:04 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 20.06 mi traveled at 9.5 mph<br />Route mile 450.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker861,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker867,"click");}>Next point >>></a>');
        infowindow.open(map, imarker864);
    });
    polypath.push(new google.maps.LatLng(39.338020, - 105.724760));
    point = new google.maps.LatLng(39.307390, - 105.723390);
    imarker867 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 18 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker867);
    google.maps.event.addListener(imarker867, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #841 received at: 06:19:10 PM (MDT) 07/24/13 <br /> (33 days, 18 hours, 5 minutes ago) (3:14:19 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.60 mi traveled at 12.7 mph<br />Route mile 455.49 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker864,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker870,"click");}>Next point >>></a>');
        infowindow.open(map, imarker867);
    });
    polypath.push(new google.maps.LatLng(39.307390, - 105.723390));
    point = new google.maps.LatLng(39.285420, - 105.690220);
    imarker870 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 17 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker870);
    google.maps.event.addListener(imarker870, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #844 received at: 06:34:05 PM (MDT) 07/24/13 <br /> (33 days, 17 hours, 50 minutes ago) (3:14:34 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 19.45 mi traveled at 13.1 mph<br />Route mile 458.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker867,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker873,"click");}>Next point >>></a>');
        infowindow.open(map, imarker870);
    });
    polypath.push(new google.maps.LatLng(39.285420, - 105.690220));
    point = new google.maps.LatLng(39.252450, - 105.654100);
    imarker873 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 17 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker873);
    google.maps.event.addListener(imarker873, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #847 received at: 06:49:07 PM (MDT) 07/24/13 <br /> (33 days, 17 hours, 35 minutes ago) (3:14:49 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.12 mi traveled at 10.6 mph<br />Route mile 462.02 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker870,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker876,"click");}>Next point >>></a>');
        infowindow.open(map, imarker873);
    });
    polypath.push(new google.maps.LatLng(39.252450, - 105.654100));
    point = new google.maps.LatLng(39.227250, - 105.605440);
    imarker876 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 17 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker876);
    google.maps.event.addListener(imarker876, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #850 received at: 07:03:52 PM (MDT) 07/24/13 <br /> (33 days, 17 hours, 20 minutes ago) (3:15:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 23.55 mi traveled at 11.4 mph<br />Route mile 465.37 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker873,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker879,"click");}>Next point >>></a>');
        infowindow.open(map, imarker876);
    });
    polypath.push(new google.maps.LatLng(39.227250, - 105.605440));
    point = new google.maps.LatLng(39.205350, - 105.565550);
    imarker879 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 17 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker879);
    google.maps.event.addListener(imarker879, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #853 received at: 07:18:50 PM (MDT) 07/24/13 <br /> (33 days, 17 hours, 5 minutes ago) (3:15:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.52 mi traveled at 12.1 mph<br />Route mile 468.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker876,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker882,"click");}>Next point >>></a>');
        infowindow.open(map, imarker879);
    });
    polypath.push(new google.maps.LatLng(39.205350, - 105.565550));
    point = new google.maps.LatLng(39.190550, - 105.545750);
    imarker882 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 16 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker882);
    google.maps.event.addListener(imarker882, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #856 received at: 07:33:52 PM (MDT) 07/24/13 <br /> (33 days, 16 hours, 50 minutes ago) (3:15:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.99 mi traveled at 4.6 mph<br />Route mile 470.25 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker879,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker885,"click");}>Next point >>></a>');
        infowindow.open(map, imarker882);
    });
    polypath.push(new google.maps.LatLng(39.190550, - 105.545750));
    point = new google.maps.LatLng(39.166990, - 105.499390);
    imarker885 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 16 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker885);
    google.maps.event.addListener(imarker885, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #859 received at: 07:48:52 PM (MDT) 07/24/13 <br /> (33 days, 16 hours, 35 minutes ago) (3:15:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 21.25 mi traveled at 12.9 mph<br />Route mile 473.79 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker882,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker888,"click");}>Next point >>></a>');
        infowindow.open(map, imarker885);
    });
    polypath.push(new google.maps.LatLng(39.166990, - 105.499390));
    point = new google.maps.LatLng(39.136790, - 105.465910);
    imarker888 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 16 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker888);
    google.maps.event.addListener(imarker888, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #862 received at: 08:03:54 PM (MDT) 07/24/13 <br /> (33 days, 16 hours, 20 minutes ago) (3:16:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.94 mi traveled at 11.1 mph<br />Route mile 477.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker885,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker891,"click");}>Next point >>></a>');
        infowindow.open(map, imarker888);
    });
    polypath.push(new google.maps.LatLng(39.136790, - 105.465910));
    point = new google.maps.LatLng(39.107430, - 105.470660);
    imarker891 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 16 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker891);
    google.maps.event.addListener(imarker891, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #865 received at: 08:18:52 PM (MDT) 07/24/13 <br /> (33 days, 16 hours, 5 minutes ago) (3:16:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.10 mi traveled at 10.4 mph<br />Route mile 479.80 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker888,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker894,"click");}>Next point >>></a>');
        infowindow.open(map, imarker891);
    });
    polypath.push(new google.maps.LatLng(39.107430, - 105.470660));
    point = new google.maps.LatLng(39.078990, - 105.414400);
    imarker894 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 15 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker894);
    google.maps.event.addListener(imarker894, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #868 received at: 08:33:47 PM (MDT) 07/24/13 <br /> (33 days, 15 hours, 50 minutes ago) (3:16:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 25.77 mi traveled at 10.6 mph<br />Route mile 482.77 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker891,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker897,"click");}>Next point >>></a>');
        infowindow.open(map, imarker894);
    });
    polypath.push(new google.maps.LatLng(39.078990, - 105.414400));
    point = new google.maps.LatLng(39.094460, - 105.400090);
    imarker897 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 15 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker897);
    google.maps.event.addListener(imarker897, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #871 received at: 08:48:42 PM (MDT) 07/24/13 <br /> (33 days, 15 hours, 35 minutes ago) (3:16:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 24.51 mi traveled at 4.6 mph<br />Route mile 485.78 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker894,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker900,"click");}>Next point >>></a>');
        infowindow.open(map, imarker897);
    });
    polypath.push(new google.maps.LatLng(39.094460, - 105.400090));
    point = new google.maps.LatLng(39.103220, - 105.394550);
    imarker900 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 15 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker900);
    google.maps.event.addListener(imarker900, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #874 received at: 09:03:37 PM (MDT) 07/24/13 <br /> (33 days, 15 hours, 20 minutes ago) (3:17:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 22.04 mi traveled at 4.5 mph<br />Route mile 486.55 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker897,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker903,"click");}>Next point >>></a>');
        infowindow.open(map, imarker900);
    });
    polypath.push(new google.maps.LatLng(39.103220, - 105.394550));
    point = new google.maps.LatLng(39.095560, - 105.377680);
    imarker903 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 15 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker903);
    google.maps.event.addListener(imarker903, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #877 received at: 09:18:39 PM (MDT) 07/24/13 <br /> (33 days, 15 hours, 5 minutes ago) (3:17:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 20.44 mi traveled at 4.9 mph<br />Route mile 486.10 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker900,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker906,"click");}>Next point >>></a>');
        infowindow.open(map, imarker903);
    });
    polypath.push(new google.maps.LatLng(39.095560, - 105.377680));
    point = new google.maps.LatLng(39.102800, - 105.362060);
    imarker906 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 14 hours, 50 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker906);
    google.maps.event.addListener(imarker906, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #880 received at: 09:33:39 PM (MDT) 07/24/13 <br /> (33 days, 14 hours, 50 minutes ago) (3:17:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.95 mi traveled at 2.8 mph<br />Route mile 489.10 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker903,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker909,"click");}>Next point >>></a>');
        infowindow.open(map, imarker906);
    });
    polypath.push(new google.maps.LatLng(39.102800, - 105.362060));
    point = new google.maps.LatLng(39.130870, - 105.366130);
    imarker909 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 14 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker909);
    google.maps.event.addListener(imarker909, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #883 received at: 09:48:37 PM (MDT) 07/24/13 <br /> (33 days, 14 hours, 35 minutes ago) (3:17:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.82 mi traveled at 5.9 mph<br />Route mile 492.42 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker906,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker912,"click");}>Next point >>></a>');
        infowindow.open(map, imarker909);
    });
    polypath.push(new google.maps.LatLng(39.130870, - 105.366130));
    point = new google.maps.LatLng(39.160430, - 105.368330);
    imarker912 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 14 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker912);
    google.maps.event.addListener(imarker912, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #886 received at: 10:03:34 PM (MDT) 07/24/13 <br /> (33 days, 14 hours, 20 minutes ago) (3:18:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 18.53 mi traveled at 10.4 mph<br />Route mile 495.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker909,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker915,"click");}>Next point >>></a>');
        infowindow.open(map, imarker912);
    });
    polypath.push(new google.maps.LatLng(39.160430, - 105.368330));
    point = new google.maps.LatLng(39.175250, - 105.362630);
    imarker915 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 14 hours, 5 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker915);
    google.maps.event.addListener(imarker915, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #889 received at: 10:18:36 PM (MDT) 07/24/13 <br /> (33 days, 14 hours, 5 minutes ago) (3:18:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.94 mi traveled at 2.3 mph<br />Route mile 496.51 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker912,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker918,"click");}>Next point >>></a>');
        infowindow.open(map, imarker915);
    });
    polypath.push(new google.maps.LatLng(39.175250, - 105.362630));
    point = new google.maps.LatLng(39.188400, - 105.348160);
    imarker918 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 13 hours, 25 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker918);
    google.maps.event.addListener(imarker918, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #892 received at: 10:59:08 PM (MDT) 07/24/13 <br /> (33 days, 13 hours, 25 minutes ago) (3:18:59 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.01 mi traveled at 8.4 mph<br />Route mile 498.53 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker915,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker921,"click");}>Next point >>></a>');
        infowindow.open(map, imarker918);
    });
    polypath.push(new google.maps.LatLng(39.188400, - 105.348160));
    point = new google.maps.LatLng(39.202930, - 105.346270);
    imarker921 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 13 hours, 10 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker921);
    google.maps.event.addListener(imarker921, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #895 received at: 11:14:08 PM (MDT) 07/24/13 <br /> (33 days, 13 hours, 10 minutes ago) (3:19:14 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.34 mi traveled at 3.1 mph<br />Route mile 500.33 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker918,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker924,"click");}>Next point >>></a>');
        infowindow.open(map, imarker921);
    });
    polypath.push(new google.maps.LatLng(39.202930, - 105.346270));
    point = new google.maps.LatLng(39.214680, - 105.341570);
    imarker924 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 12 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker924);
    google.maps.event.addListener(imarker924, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #898 received at: 11:29:02 PM (MDT) 07/24/13 <br /> (33 days, 12 hours, 55 minutes ago) (3:19:29 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.39 mi traveled at 5.5 mph<br />Route mile 503.62 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker921,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker927,"click");}>Next point >>></a>');
        infowindow.open(map, imarker924);
    });
    polypath.push(new google.maps.LatLng(39.214680, - 105.341570));
    point = new google.maps.LatLng(39.228710, - 105.301210);
    imarker927 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 12 hours, 40 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker927);
    google.maps.event.addListener(imarker927, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #901 received at: 11:44:02 PM (MDT) 07/24/13 <br /> (33 days, 12 hours, 40 minutes ago) (3:19:44 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.28 mi traveled at 8.7 mph<br />Route mile 506.48 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker924,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker930,"click");}>Next point >>></a>');
        infowindow.open(map, imarker927);
    });
    polypath.push(new google.maps.LatLng(39.228710, - 105.301210));
    point = new google.maps.LatLng(39.234290, - 105.323720);
    imarker930 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 12 hours, 25 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker930);
    google.maps.event.addListener(imarker930, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #904 received at: 11:58:57 PM (MDT) 07/24/13 <br /> (33 days, 12 hours, 25 minutes ago) (3:19:58 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.10 mi traveled at 2.5 mph<br />Route mile 504.64 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker927,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker933,"click");}>Next point >>></a>');
        infowindow.open(map, imarker930);
    });
    polypath.push(new google.maps.LatLng(39.234290, - 105.323720));
    point = new google.maps.LatLng(39.244690, - 105.326520);
    imarker933 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 12 hours, 10 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker933);
    google.maps.event.addListener(imarker933, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #907 received at: 12:13:52 AM (MDT) 07/25/13 <br /> (33 days, 12 hours, 10 minutes ago) (3:20:13 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.53 mi traveled at 2.6 mph<br />Route mile 508.47 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker930,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker936,"click");}>Next point >>></a>');
        infowindow.open(map, imarker933);
    });
    polypath.push(new google.maps.LatLng(39.244690, - 105.326520));
    point = new google.maps.LatLng(39.257360, - 105.324370);
    imarker936 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 11 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker936);
    google.maps.event.addListener(imarker936, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #910 received at: 12:28:46 AM (MDT) 07/25/13 <br /> (33 days, 11 hours, 55 minutes ago) (3:20:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.34 mi traveled at 10.8 mph<br />Route mile 509.53 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker933,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker939,"click");}>Next point >>></a>');
        infowindow.open(map, imarker936);
    });
    polypath.push(new google.maps.LatLng(39.257360, - 105.324370));
    point = new google.maps.LatLng(39.286010, - 105.322380);
    imarker939 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 11 hours, 30 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker939);
    google.maps.event.addListener(imarker939, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #913 received at: 12:53:42 AM (MDT) 07/25/13 <br /> (33 days, 11 hours, 30 minutes ago) (3:20:53 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.83 mi traveled at 5.0 mph<br />Route mile 514.43 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker936,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker942,"click");}>Next point >>></a>');
        infowindow.open(map, imarker939);
    });
    polypath.push(new google.maps.LatLng(39.286010, - 105.322380));
    point = new google.maps.LatLng(39.307800, - 105.347780);
    imarker942 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 11 hours, 10 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker942);
    google.maps.event.addListener(imarker942, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #916 received at: 01:13:38 AM (MDT) 07/25/13 <br /> (33 days, 11 hours, 10 minutes ago) (3:21:13 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.87 mi traveled at 8.4 mph<br />Route mile 516.66 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker939,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker945,"click");}>Next point >>></a>');
        infowindow.open(map, imarker942);
    });
    polypath.push(new google.maps.LatLng(39.307800, - 105.347780));
    point = new google.maps.LatLng(39.323820, - 105.378430);
    imarker945 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 10 hours, 55 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker945);
    google.maps.event.addListener(imarker945, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #919 received at: 01:28:40 AM (MDT) 07/25/13 <br /> (33 days, 10 hours, 55 minutes ago) (3:21:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.08 mi traveled at 8.9 mph<br />Route mile 519.20 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker942,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker948,"click");}>Next point >>></a>');
        infowindow.open(map, imarker945);
    });
    polypath.push(new google.maps.LatLng(39.323820, - 105.378430));
    point = new google.maps.LatLng(39.337880, - 105.399960);
    imarker948 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 10 hours, 40 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker948);
    google.maps.event.addListener(imarker948, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #922 received at: 01:43:38 AM (MDT) 07/25/13 <br /> (33 days, 10 hours, 40 minutes ago) (3:21:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.09 mi traveled at 6.8 mph<br />Route mile 520.23 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker945,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker951,"click");}>Next point >>></a>');
        infowindow.open(map, imarker948);
    });
    polypath.push(new google.maps.LatLng(39.337880, - 105.399960));
    point = new google.maps.LatLng(39.343960, - 105.371190);
    imarker951 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 10 hours, 15 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker951);
    google.maps.event.addListener(imarker951, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #925 received at: 02:08:34 AM (MDT) 07/25/13 <br /> (33 days, 10 hours, 15 minutes ago) (3:22:08 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 16.07 mi traveled at 3.9 mph<br />Route mile 523.51 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker948,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker954,"click");}>Next point >>></a>');
        infowindow.open(map, imarker951);
    });
    polypath.push(new google.maps.LatLng(39.343960, - 105.371190));
    point = new google.maps.LatLng(39.340270, - 105.338320);
    imarker954 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 10 hours, 0 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker954);
    google.maps.event.addListener(imarker954, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #928 received at: 02:23:37 AM (MDT) 07/25/13 <br /> (33 days, 10 hours, 0 minutes ago) (3:22:23 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.53 mi traveled at 3.4 mph<br />Route mile 524.90 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker951,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker957,"click");}>Next point >>></a>');
        infowindow.open(map, imarker954);
    });
    polypath.push(new google.maps.LatLng(39.340270, - 105.338320));
    point = new google.maps.LatLng(39.333720, - 105.312490);
    imarker957 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 9 hours, 35 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker957);
    google.maps.event.addListener(imarker957, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #931 received at: 02:48:31 AM (MDT) 07/25/13 <br /> (33 days, 9 hours, 35 minutes ago) (3:22:48 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.19 mi traveled at 4.7 mph<br />Route mile 526.12 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker954,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker960,"click");}>Next point >>></a>');
        infowindow.open(map, imarker957);
    });
    polypath.push(new google.maps.LatLng(39.333720, - 105.312490));
    point = new google.maps.LatLng(39.329100, - 105.300260);
    imarker960 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 9 hours, 20 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker960);
    google.maps.event.addListener(imarker960, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #934 received at: 03:03:25 AM (MDT) 07/25/13 <br /> (33 days, 9 hours, 20 minutes ago) (3:23:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.24 mi traveled at 2.7 mph<br />Route mile 527.56 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker957,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker963,"click");}>Next point >>></a>');
        infowindow.open(map, imarker960);
    });
    polypath.push(new google.maps.LatLng(39.329100, - 105.300260));
    point = new google.maps.LatLng(39.333060, - 105.284220);
    imarker963 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker963);
    google.maps.event.addListener(imarker963, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #937 received at: 03:28:20 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 56 minutes ago) (3:23:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.53 mi traveled at 3.0 mph<br />Route mile 528.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker960,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker966,"click");}>Next point >>></a>');
        infowindow.open(map, imarker963);
    });
    polypath.push(new google.maps.LatLng(39.333060, - 105.284220));
    point = new google.maps.LatLng(39.340160, - 105.276400);
    imarker966 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker966);
    google.maps.event.addListener(imarker966, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #940 received at: 03:43:15 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 41 minutes ago) (3:23:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.75 mi traveled at 4.9 mph<br />Route mile 529.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker965,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker967,"click");}>Next point >>></a>');
        infowindow.open(map, imarker966);
    });
    polypath.push(new google.maps.LatLng(39.340160, - 105.276400));
    point = new google.maps.LatLng(39.350140, - 105.255550);
    imarker967 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker967);
    google.maps.event.addListener(imarker967, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #941 received at: 03:58:11 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 26 minutes ago) (3:23:58 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.82 mi traveled at 5.3 mph<br />Route mile 534.16 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker966,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker968,"click");}>Next point >>></a>');
        infowindow.open(map, imarker967);
    });
    polypath.push(new google.maps.LatLng(39.350140, - 105.255550));
    point = new google.maps.LatLng(39.356400, - 105.248740);
    imarker968 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker968);
    google.maps.event.addListener(imarker968, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #942 received at: 04:03:12 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 21 minutes ago) (4:00:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.21 mi traveled at 6.8 mph<br />Route mile 535.03 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker967,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker969,"click");}>Next point >>></a>');
        infowindow.open(map, imarker968);
    });
    polypath.push(new google.maps.LatLng(39.356400, - 105.248740));
    point = new google.maps.LatLng(39.359920, - 105.245390);
    imarker969 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker969);
    google.maps.event.addListener(imarker969, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #943 received at: 04:08:12 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 16 minutes ago) (4:00:08 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 15.04 mi traveled at 3.6 mph<br />Route mile 535.38 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker968,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker970,"click");}>Next point >>></a>');
        infowindow.open(map, imarker969);
    });
    polypath.push(new google.maps.LatLng(39.359920, - 105.245390));
    point = new google.maps.LatLng(39.362300, - 105.237470);
    imarker970 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker970);
    google.maps.event.addListener(imarker970, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #944 received at: 04:13:09 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 11 minutes ago) (4:00:13 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 14.10 mi traveled at 5.5 mph<br />Route mile 535.91 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker969,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker971,"click");}>Next point >>></a>');
        infowindow.open(map, imarker970);
    });
    polypath.push(new google.maps.LatLng(39.362300, - 105.237470));
    point = new google.maps.LatLng(39.367250, - 105.238890);
    imarker971 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker971);
    google.maps.event.addListener(imarker971, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #945 received at: 04:18:05 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 6 minutes ago) (4:00:18 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.89 mi traveled at 4.3 mph<br />Route mile 535.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker970,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker972,"click");}>Next point >>></a>');
        infowindow.open(map, imarker971);
    });
    polypath.push(new google.maps.LatLng(39.367250, - 105.238890));
    point = new google.maps.LatLng(39.370870, - 105.239000);
    imarker972 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 8 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker972);
    google.maps.event.addListener(imarker972, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #946 received at: 04:23:06 AM (MDT) 07/25/13 <br /> (33 days, 8 hours, 1 minutes ago) (4:00:23 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.40 mi traveled at 3.0 mph<br />Route mile 535.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker971,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker973,"click");}>Next point >>></a>');
        infowindow.open(map, imarker972);
    });
    polypath.push(new google.maps.LatLng(39.370870, - 105.239000));
    point = new google.maps.LatLng(39.373570, - 105.238830);
    imarker973 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker973);
    google.maps.event.addListener(imarker973, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #947 received at: 04:28:01 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 56 minutes ago) (4:00:28 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.84 mi traveled at 2.3 mph<br />Route mile 535.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker972,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker974,"click");}>Next point >>></a>');
        infowindow.open(map, imarker973);
    });
    polypath.push(new google.maps.LatLng(39.373570, - 105.238830));
    point = new google.maps.LatLng(39.373570, - 105.237970);
    imarker974 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker974);
    google.maps.event.addListener(imarker974, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #948 received at: 04:33:01 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 51 minutes ago) (4:00:33 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.52 mi traveled at 0.6 mph<br />Route mile 535.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker973,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker975,"click");}>Next point >>></a>');
        infowindow.open(map, imarker974);
    });
    polypath.push(new google.maps.LatLng(39.373570, - 105.237970));
    point = new google.maps.LatLng(39.374340, - 105.237880);
    imarker975 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker975);
    google.maps.event.addListener(imarker975, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #949 received at: 04:38:01 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 46 minutes ago) (4:00:38 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.98 mi traveled at 0.6 mph<br />Route mile 535.82 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker974,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker976,"click");}>Next point >>></a>');
        infowindow.open(map, imarker975);
    });
    polypath.push(new google.maps.LatLng(39.374340, - 105.237880));
    point = new google.maps.LatLng(39.381160, - 105.238160);
    imarker976 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker976);
    google.maps.event.addListener(imarker976, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #950 received at: 04:43:00 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 41 minutes ago) (4:00:43 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.88 mi traveled at 5.7 mph<br />Route mile 537.66 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker975,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker977,"click");}>Next point >>></a>');
        infowindow.open(map, imarker976);
    });
    polypath.push(new google.maps.LatLng(39.381160, - 105.238160));
    point = new google.maps.LatLng(39.400040, - 105.232640);
    imarker977 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker977);
    google.maps.event.addListener(imarker977, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #951 received at: 04:57:58 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 26 minutes ago) (4:00:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 13.04 mi traveled at 5.4 mph<br />Route mile 539.52 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker976,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker978,"click");}>Next point >>></a>');
        infowindow.open(map, imarker977);
    });
    polypath.push(new google.maps.LatLng(39.400040, - 105.232640));
    point = new google.maps.LatLng(39.401410, - 105.226900);
    imarker978 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker978);
    google.maps.event.addListener(imarker978, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #952 received at: 05:03:00 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 21 minutes ago) (4:01:03 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.21 mi traveled at 3.8 mph<br />Route mile 540.05 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker977,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker979,"click");}>Next point >>></a>');
        infowindow.open(map, imarker978);
    });
    polypath.push(new google.maps.LatLng(39.401410, - 105.226900));
    point = new google.maps.LatLng(39.404290, - 105.225100);
    imarker979 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker979);
    google.maps.event.addListener(imarker979, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #953 received at: 05:07:54 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 16 minutes ago) (4:01:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 12.11 mi traveled at 2.7 mph<br />Route mile 539.80 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker978,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker980,"click");}>Next point >>></a>');
        infowindow.open(map, imarker979);
    });
    polypath.push(new google.maps.LatLng(39.404290, - 105.225100));
    point = new google.maps.LatLng(39.402920, - 105.217910);
    imarker980 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker980);
    google.maps.event.addListener(imarker980, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #954 received at: 05:12:55 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 11 minutes ago) (4:01:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.71 mi traveled at 4.7 mph<br />Route mile 540.18 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker979,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker981,"click");}>Next point >>></a>');
        infowindow.open(map, imarker980);
    });
    polypath.push(new google.maps.LatLng(39.402920, - 105.217910));
    point = new google.maps.LatLng(39.405930, - 105.209770);
    imarker981 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker981);
    google.maps.event.addListener(imarker981, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #955 received at: 05:17:53 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 6 minutes ago) (4:01:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.49 mi traveled at 5.8 mph<br />Route mile 539.80 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker980,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker982,"click");}>Next point >>></a>');
        infowindow.open(map, imarker981);
    });
    polypath.push(new google.maps.LatLng(39.405930, - 105.209770));
    point = new google.maps.LatLng(39.403400, - 105.202730);
    imarker982 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 7 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker982);
    google.maps.event.addListener(imarker982, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #956 received at: 05:22:53 AM (MDT) 07/25/13 <br /> (33 days, 7 hours, 1 minutes ago) (4:01:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.62 mi traveled at 5.0 mph<br />Route mile 540.18 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker981,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker983,"click");}>Next point >>></a>');
        infowindow.open(map, imarker982);
    });
    polypath.push(new google.maps.LatLng(39.403400, - 105.202730));
    point = new google.maps.LatLng(39.401640, - 105.192260);
    imarker983 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker983);
    google.maps.event.addListener(imarker983, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #957 received at: 05:27:53 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 56 minutes ago) (4:01:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.94 mi traveled at 6.9 mph<br />Route mile 542.58 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker982,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker984,"click");}>Next point >>></a>');
        infowindow.open(map, imarker983);
    });
    polypath.push(new google.maps.LatLng(39.401640, - 105.192260));
    point = new google.maps.LatLng(39.400150, - 105.185640);
    imarker984 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker984);
    google.maps.event.addListener(imarker984, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #958 received at: 05:32:52 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 51 minutes ago) (4:01:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.48 mi traveled at 4.4 mph<br />Route mile 542.58 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker983,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker985,"click");}>Next point >>></a>');
        infowindow.open(map, imarker984);
    });
    polypath.push(new google.maps.LatLng(39.400150, - 105.185640));
    point = new google.maps.LatLng(39.398200, - 105.179210);
    imarker985 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker985);
    google.maps.event.addListener(imarker985, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #959 received at: 05:37:52 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 46 minutes ago) (4:01:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.46 mi traveled at 4.4 mph<br />Route mile 542.58 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker984,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker986,"click");}>Next point >>></a>');
        infowindow.open(map, imarker985);
    });
    polypath.push(new google.maps.LatLng(39.398200, - 105.179210));
    point = new google.maps.LatLng(39.396050, - 105.170470);
    imarker986 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker986);
    google.maps.event.addListener(imarker986, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #960 received at: 05:42:51 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 41 minutes ago) (4:01:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.67 mi traveled at 5.9 mph<br />Route mile 542.99 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker985,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker987,"click");}>Next point >>></a>');
        infowindow.open(map, imarker986);
    });
    polypath.push(new google.maps.LatLng(39.396050, - 105.170470));
    point = new google.maps.LatLng(39.398480, - 105.167420);
    imarker987 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker987);
    google.maps.event.addListener(imarker987, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #961 received at: 05:47:49 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 36 minutes ago) (4:01:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.62 mi traveled at 2.8 mph<br />Route mile 544.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker986,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker988,"click");}>Next point >>></a>');
        infowindow.open(map, imarker987);
    });
    polypath.push(new google.maps.LatLng(39.398480, - 105.167420));
    point = new google.maps.LatLng(39.401010, - 105.166890);
    imarker988 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker988);
    google.maps.event.addListener(imarker988, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #962 received at: 05:52:52 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 31 minutes ago) (4:01:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.57 mi traveled at 2.1 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker987,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker989,"click");}>Next point >>></a>');
        infowindow.open(map, imarker988);
    });
    polypath.push(new google.maps.LatLng(39.401010, - 105.166890));
    point = new google.maps.LatLng(39.402000, - 105.165740);
    imarker989 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 26 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker989);
    google.maps.event.addListener(imarker989, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #963 received at: 05:57:52 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 26 minutes ago) (4:01:57 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.50 mi traveled at 1.1 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker988,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker990,"click");}>Next point >>></a>');
        infowindow.open(map, imarker989);
    });
    polypath.push(new google.maps.LatLng(39.402000, - 105.165740));
    point = new google.maps.LatLng(39.404410, - 105.164100);
    imarker990 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker990);
    google.maps.event.addListener(imarker990, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #964 received at: 06:07:53 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 16 minutes ago) (4:02:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.45 mi traveled at 1.1 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker989,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker991,"click");}>Next point >>></a>');
        infowindow.open(map, imarker990);
    });
    polypath.push(new google.maps.LatLng(39.404410, - 105.164100));
    point = new google.maps.LatLng(39.404320, - 105.163410);
    imarker991 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker991);
    google.maps.event.addListener(imarker991, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #965 received at: 06:12:53 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 11 minutes ago) (4:02:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.75 mi traveled at 0.4 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker990,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker992,"click");}>Next point >>></a>');
        infowindow.open(map, imarker991);
    });
    polypath.push(new google.maps.LatLng(39.404320, - 105.163410));
    point = new google.maps.LatLng(39.404280, - 105.162980);
    imarker992 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 6 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker992);
    google.maps.event.addListener(imarker992, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #966 received at: 06:17:53 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 6 minutes ago) (4:02:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.36 mi traveled at 0.3 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker991,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker993,"click");}>Next point >>></a>');
        infowindow.open(map, imarker992);
    });
    polypath.push(new google.maps.LatLng(39.404280, - 105.162980));
    point = new google.maps.LatLng(39.406070, - 105.162730);
    imarker993 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 6 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker993);
    google.maps.event.addListener(imarker993, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #967 received at: 06:22:50 AM (MDT) 07/25/13 <br /> (33 days, 6 hours, 1 minutes ago) (4:02:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.24 mi traveled at 1.5 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker992,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker994,"click");}>Next point >>></a>');
        infowindow.open(map, imarker993);
    });
    polypath.push(new google.maps.LatLng(39.406070, - 105.162730));
    point = new google.maps.LatLng(39.406850, - 105.162530);
    imarker994 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker994);
    google.maps.event.addListener(imarker994, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #968 received at: 06:27:41 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 56 minutes ago) (4:02:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.89 mi traveled at 0.7 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker993,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker995,"click");}>Next point >>></a>');
        infowindow.open(map, imarker994);
    });
    polypath.push(new google.maps.LatLng(39.406850, - 105.162530));
    point = new google.maps.LatLng(39.408910, - 105.160040);
    imarker995 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker995);
    google.maps.event.addListener(imarker995, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #969 received at: 06:32:41 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 51 minutes ago) (4:02:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.77 mi traveled at 2.3 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker994,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker996,"click");}>Next point >>></a>');
        infowindow.open(map, imarker995);
    });
    polypath.push(new google.maps.LatLng(39.408910, - 105.160040));
    point = new google.maps.LatLng(39.408310, - 105.159610);
    imarker996 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker996);
    google.maps.event.addListener(imarker996, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #970 received at: 06:37:41 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 46 minutes ago) (4:02:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.26 mi traveled at 0.6 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker995,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker997,"click");}>Next point >>></a>');
        infowindow.open(map, imarker996);
    });
    polypath.push(new google.maps.LatLng(39.408310, - 105.159610));
    point = new google.maps.LatLng(39.406480, - 105.158400);
    imarker997 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker997);
    google.maps.event.addListener(imarker997, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #971 received at: 06:42:39 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 41 minutes ago) (4:02:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.10 mi traveled at 1.7 mph<br />Route mile 544.09 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker996,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker998,"click");}>Next point >>></a>');
        infowindow.open(map, imarker997);
    });
    polypath.push(new google.maps.LatLng(39.406480, - 105.158400));
    point = new google.maps.LatLng(39.403210, - 105.154950);
    imarker998 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker998);
    google.maps.event.addListener(imarker998, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #972 received at: 06:52:33 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 31 minutes ago) (4:02:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.93 mi traveled at 1.8 mph<br />Route mile 544.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker997,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker999,"click");}>Next point >>></a>');
        infowindow.open(map, imarker998);
    });
    polypath.push(new google.maps.LatLng(39.403210, - 105.154950));
    point = new google.maps.LatLng(39.410310, - 105.147190);
    imarker999 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 16 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker999);
    google.maps.event.addListener(imarker999, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #973 received at: 07:07:31 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 16 minutes ago) (4:03:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.23 mi traveled at 2.6 mph<br />Route mile 545.97 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker998,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1000,"click");}>Next point >>></a>');
        infowindow.open(map, imarker999);
    });
    polypath.push(new google.maps.LatLng(39.410310, - 105.147190));
    point = new google.maps.LatLng(39.410510, - 105.130290);
    imarker1000 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 5 hours, 1 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1000);
    google.maps.event.addListener(imarker1000, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #974 received at: 07:22:32 AM (MDT) 07/25/13 <br /> (33 days, 5 hours, 1 minutes ago) (4:03:22 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 8.88 mi traveled at 3.6 mph<br />Route mile 548.92 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker999,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1001,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1000);
    });
    polypath.push(new google.maps.LatLng(39.410510, - 105.130290));
    point = new google.maps.LatLng(39.415750, - 105.126050);
    imarker1001 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 56 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1001);
    google.maps.event.addListener(imarker1001, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #975 received at: 07:27:29 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 56 minutes ago) (4:03:27 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.12 mi traveled at 5.2 mph<br />Route mile 550.58 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1000,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1002,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1001);
    });
    polypath.push(new google.maps.LatLng(39.415750, - 105.126050));
    point = new google.maps.LatLng(39.419530, - 105.124590);
    imarker1002 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 51 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1002);
    google.maps.event.addListener(imarker1002, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #976 received at: 07:32:29 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 51 minutes ago) (4:03:32 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.35 mi traveled at 3.3 mph<br />Route mile 550.22 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1001,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1003,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1002);
    });
    polypath.push(new google.maps.LatLng(39.419530, - 105.124590));
    point = new google.maps.LatLng(39.421550, - 105.122100);
    imarker1003 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 46 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1003);
    google.maps.event.addListener(imarker1003, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #977 received at: 07:37:29 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 46 minutes ago) (4:03:37 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.49 mi traveled at 2.3 mph<br />Route mile 551.16 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1002,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1004,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1003);
    });
    polypath.push(new google.maps.LatLng(39.421550, - 105.122100));
    point = new google.maps.LatLng(39.421370, - 105.121330);
    imarker1004 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 41 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1004);
    google.maps.event.addListener(imarker1004, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #978 received at: 07:42:26 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 41 minutes ago) (4:03:42 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 9.06 mi traveled at 0.5 mph<br />Route mile 551.16 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1003,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1005,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1004);
    });
    polypath.push(new google.maps.LatLng(39.421370, - 105.121330));
    point = new google.maps.LatLng(39.423940, - 105.120730);
    imarker1005 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 36 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1005);
    google.maps.event.addListener(imarker1005, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #979 received at: 07:47:26 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 36 minutes ago) (4:03:47 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.90 mi traveled at 2.2 mph<br />Route mile 551.16 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1004,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1006,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1005);
    });
    polypath.push(new google.maps.LatLng(39.423940, - 105.120730));
    point = new google.maps.LatLng(39.425480, - 105.118930);
    imarker1006 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 31 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1006);
    google.maps.event.addListener(imarker1006, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #980 received at: 07:52:26 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 31 minutes ago) (4:03:52 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 7.73 mi traveled at 1.7 mph<br />Route mile 552.63 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1005,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1007,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1006);
    });
    polypath.push(new google.maps.LatLng(39.425480, - 105.118930));
    point = new google.maps.LatLng(39.460700, - 105.131990);
    imarker1007 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 21 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1007);
    google.maps.event.addListener(imarker1007, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #981 received at: 08:02:30 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 21 minutes ago) (4:04:02 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.03 mi traveled at 15.1 mph<br />Route mile 557.95 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1006,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1008,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1007);
    });
    polypath.push(new google.maps.LatLng(39.460700, - 105.131990));
    point = new google.maps.LatLng(39.479530, - 105.124530);
    imarker1008 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 17 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1008);
    google.maps.event.addListener(imarker1008, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #982 received at: 08:07:20 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 17 minutes ago) (4:04:07 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 10.99 mi traveled at 16.9 mph<br />Route mile 559.81 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1007,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1009,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1008);
    });
    polypath.push(new google.maps.LatLng(39.479530, - 105.124530));
    point = new google.maps.LatLng(39.484860, - 105.106930);
    imarker1009 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 11 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1009);
    google.maps.event.addListener(imarker1009, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #983 received at: 08:12:22 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 11 minutes ago) (4:04:12 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.52 mi traveled at 12.0 mph<br />Route mile 560.36 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1008,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1010,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1009);
    });
    polypath.push(new google.maps.LatLng(39.484860, - 105.106930));
    point = new google.maps.LatLng(39.491460, - 105.093640);
    imarker1010 = new google.maps.Marker({
        position: point,
        map: map,
        title: "Jefe Branham - 33 days, 4 hours, 7 minutes ago",
        animation: google.maps.Animation.DROP,
        icon: iconDot
    });
    imarkers.push(imarker1010);
    google.maps.event.addListener(imarker1010, 'click', function() {
        infowindow.setContent('<span style=font-size:16px;><b>Jefe Branham</b></span> <br />Point #984 received at: 08:17:18 AM (MDT) 07/25/13 <br /> (33 days, 4 hours, 7 minutes ago) (4:04:17 since start)  <br /> <img class=avatar align=left hspace=5 height=50 src=http://trackleaders.com/spot/ctr13/avatars/Jefe_Branham.jpg> 11.95 mi traveled at 10.3 mph<br />Route mile 562.43 mi<br /> <a href=javascript:{google.maps.event.trigger(imarker1009,"click");}> <<< Previous point</a> ------ <a href=javascript:{google.maps.event.trigger(imarker1011,"click");}>Next point >>></a>');
        infowindow.open(map, imarker1010);
    });
    polypath.push(new google.maps.LatLng(39.491460, - 105.093640));
    map.setCenter(point);
    polyoptions = {
        clickable: true,
        path: polypath,
        strokeColor: "#66b2dd",
        strokeOpacity: 0.8
    }
    polyline = new google.maps.Polyline(polyoptions);
    polyline.setMap(map);
}

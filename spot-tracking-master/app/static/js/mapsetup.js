define(['gmaps'], function mapsetup(gmaps) {
  'use strict';

  var mapOptions = {
      center: { lat: 36.771, lng: -104.482}, // The whittington center
      mapTypeId: gmaps.MapTypeId.TERRAIN,
      zoom: 8
    };

  return new gmaps.Map(document.getElementById('map-canvas'), mapOptions);


});

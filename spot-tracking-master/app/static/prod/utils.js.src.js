define(['jquery', 'lodash', 'gmaps', 'mapsetup', 'smarker'], function mapsetup($, _, gmaps, map, sm) {
  'use strict';

  var utils, templates, ev = $('#map-canvas').data('event');

  _.templateSettings.variable = 'data';

  templates = {
    racerInfoBox: _.template(['<div class="info-box"><span class="info-points"><%= data.name %></span>',
                         '<span class="info-points"><a href="<%= data.bio %>"><%= data.nickname %></a></span></div>'].join('')),
    eventInfoBox: _.template(['<div class="info-box"><span class="info-points"><%= data.name %></span>',
                         '<span class="info-points"><%= data.description %></span></div>'].join(''))
  };

  utils = {
    getObjects: function getObjects(url) {
      return $.getJSON(url, {'event': ev});
    },
    fixDates: function fixDates(obj) {
      // This is a mutable mess, welcome to javascript
      obj.timestamp = new Date(obj.timestamp);
    },
    logger: function logger(msg, _type) {
      var type = _type || 'error';
      console[type](msg);
    },
    addLatLon: function addLatLon(obj) {
      obj.latLng = new gmaps.LatLng(obj.latitude, obj.longitude);
    },
    createRacerPoint: function createRacerPoint(obj) {
      var si = new sm.StyledIcon(sm.StyledIconTypes.BUBBLE, {color: obj.color, text: obj.nickname});
      obj.marker = new sm.StyledMarker({
        styleIcon: si,
        position: obj.latLng,
        map: map,
        title: obj.nickname
      });
      // The info box only needs to be created once per user
      obj.infowindow = new gmaps.InfoWindow({
        content: templates.racerInfoBox(obj)
      });

      gmaps.event.addListener(obj.marker, 'click', function cl() {
        obj.infowindow.open(map, obj.marker);
      });
    },
    createEventPoint: function createEventPoint(obj) {
      utils.addLatLon(obj);
      var si = new sm.StyledIcon(sm.StyledIconTypes.BUBBLE, {color: '#FCC200', text: obj.name});
      obj.marker = new sm.StyledMarker({
        styleIcon: si,
        position: obj.latLng,
        map: map,
        title: obj.name
      });
      // The info box only needs to be created once per user
      obj.infowindow = new gmaps.InfoWindow({
        content: templates.eventInfoBox(obj)
      });

      gmaps.event.addListener(obj.marker, 'click', function cl() {
        obj.infowindow.open(map, obj.marker);
      });
    },
    drawTrack: function drawTrack(obj) {
      // polyline draws points, marker shows checkins
      var track = new gmaps.Polyline({
        path: _.map(obj, function (o) { return o.latLng; }),
        geodesic: true,
        strokeColor: obj[0].color,
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      track.setMap(map);
      obj.track = track;
    }
  };

  return utils;

});

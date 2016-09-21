define(['lodash', 'utils'], function addracers(_, utils) {
  'use strict';

  var api, internal;

  internal = {
    markers: [],
    cleanMarkers: function cleanMarkers(xs) {
      _.forEach(internal.markers, function (o) {
        o.setMap(null);
      });
      internal.markers = xs;
    }
  };

  api = {
    parseResponse: function parseResponse(obj) {
      var i, l, key, inObj, newest, markers = [],
          comp = _.groupBy(obj.competitors, function (o) { return o.spotId; });
      for (key in comp) {
        if (comp.hasOwnProperty(key)) {
          newest = null;
          for (i = 0, l = comp[key].length;  i < l; i += 1) {
            inObj = comp[key][i];
            utils.fixDates(inObj);
            utils.addLatLon(inObj);
            if (newest === null || inObj.timestamp > newest.timestamp) {
              newest = inObj;
            }
          }
          //utils.drawTrack(comp[key]);
        }
        utils.createRacerPoint(newest);
        markers.push(newest.marker);
      }
      internal.cleanMarkers(markers);

      // Export for debugging
      window.competitors = comp;
      internal.compStore = comp;
    },
    poll: function poll() {
      utils.logger('polling', 'info');
      utils.getObjects('/location').then(api.parseResponse, utils.logger);
    }
  };

  function init() {
    utils.getObjects('/location').then(api.parseResponse, utils.logger);
    internal.__poll = setInterval(api.poll, 300000);
    window.__DEBUG_RACERS__ = {internal: internal, api: api};
  }

  return {init: init};

});

define(['utils'], function addracers(utils) {
  'use strict';

  var api, internal;

  internal = {};

  api = {
    parseResponse: function parseResponse(obj) {
      var i, l;

      for (i = 0, l = obj.race_points.length; i < l; i += 1) {
        utils.createEventPoint(obj.race_points[i]);
      }

      // Export for debugging
      window.obstacles = obj.race_points;
      internal.obstacles = obj.race_points;
    }
  };

  function init() {
    utils.getObjects('/racepoints').then(api.parseResponse, utils.logger);
    window.__DEBUG_EVENTS__ = {internal: internal, api: api};
  }

  return {init: init};
});

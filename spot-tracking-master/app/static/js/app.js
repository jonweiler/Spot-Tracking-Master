(function app() {
  'use strict';

  requirejs.config({
    // change base url to static/js for devel
    baseUrl: '/static/prod',
    paths: {
      jquery: 'lib/jquery',
      react: 'lib/react',
      lodash: 'lib/lodash',
      async: 'lib/require-async'
    }
  });

  define('gmaps', ['async!https://maps.googleapis.com/maps/api/js?key=AIzaSyDz4PRne46-U1AMqaoTmmplgTTOMNREixc'], function () {
    return window.google.maps;
  });

  requirejs(['thirdparty'], function () {
    require(['addracers', 'addevents', 'sidebar'], function (r, e, s) {
      s.load();
      e.init();
      r.init();
    });
  });

}());

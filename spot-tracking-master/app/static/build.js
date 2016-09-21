({
  mainConfigFile: 'js/app.js',
  baseUrl: 'js',
  removeCompbined: true,
  findNestedDependencies: true,
  optimize: "uglify2",
  generateSourceMaps: true,
  preserveLicenseComments: false,
  dir: 'prod',
  modules: [{
    name: 'app',
    exclude: [
      'thirdparty'
    ]
  },{
    name: 'thirdparty'
  }]
})

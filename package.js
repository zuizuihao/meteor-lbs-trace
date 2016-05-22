Package.describe({
  name: 'roadshr:meteor-lbs-trace',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.2.4');
  api.use('ecmascript');
  api.export('LBSTraceMobileAPI', 'client');
  api.addFiles('meteor-lbs-trace.js', 'client');
});

Cordova.depends({
  "com.roadshr.cordova.lbs_trace": "https://github.com/zuizuihao/lbs_trace-phonegap-plugin.git#edc717fd9e20b5ac04daaf599c830d1bd4ed28f7",
  "cordova-plugin-device": "1.1.2"
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('roadshr:meteor-lbs-trace');
  api.mainModule('meteor-lbs-trace-tests.js');
});

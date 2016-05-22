var setting = Meteor.settings.public.lbs;
if (!setting) {
  console.log('error', 'Please Add lbs setting.');
}

LBSTraceMobileAPI = {};

LBSTraceMobileAPI.configure = function (entityName) {
  if (!Meteor.isCordova) {
    console.log('LBSTraceMobileAPI only for mobile platform.');
    return;
  }

  LBSTracePlugin.configure(setting.serviceId, entityName, setting.traceType, function (data) {
    console.log('backgroundGeoLocation configure success', '');
  }, function (error) {
    console.log('error: ' + error, '');
  });

  console.log('configure');
}

LBSTraceMobileAPI.startTrace = function () {
  if (!Meteor.isCordova) {
    console.log('LBSTraceMobileAPI only for mobile platform.');
    return;
  }

  LBSTracePlugin.startTrace(function (data) {
    console.log('startTrace android success', '');
  }, function (error) {
    console.log('error: ' + error, '');
  });

  console.log('start trace');
};

LBSTraceMobileAPI.stopTrace = function (callback) {
  if (!Meteor.isCordova) {
    console.log('LBSTraceMobileAPI only for mobile platform.');
    return;
  }

  LBSTracePlugin.stopTrace(function (data) {
    console.log('stopTrace android success', '');
  }, function (error) {
    console.log('error: ' + error, '');
  });

  console.log('stop trace');
};

LBSTraceMobileAPI.queryRealtimeLoc = function (callback) {
  if (!Meteor.isCordova) {
    console.log('LBSTraceMobileAPI only for mobile platform.');
    return;
  }

  LBSTracePlugin.queryRealtimeLoc(function (data) {
    console.log('queryRealtimeLoc android success', '');
  }, function (error) {
    console.log('error: ' + error, '');
  });

  console.log('stop trace');
};
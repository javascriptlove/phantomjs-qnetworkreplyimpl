//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var _ = Package.underscore._;
var Accounts = Package['accounts-base'].Accounts;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"apollo":{"main-client.js":["./check-npm.js","apollo-client","apollo-client/queries/queryTransform","meteor/accounts-base","meteor/underscore",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/apollo/main-client.js                                                       //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
module.export({createMeteorNetworkInterface:function(){return createMeteorNetworkInterface},meteorClientConfig:function(){return meteorClientConfig}});module.import('./check-npm.js');var createNetworkInterface;module.import('apollo-client',{"createNetworkInterface":function(v){createNetworkInterface=v}});var addTypenameToSelectionSet;module.import('apollo-client/queries/queryTransform',{"addTypenameToSelectionSet":function(v){addTypenameToSelectionSet=v}});var Accounts;module.import('meteor/accounts-base',{"Accounts":function(v){Accounts=v}});var _;module.import('meteor/underscore',{"_":function(v){_=v}});
                                                                                        //
                                                                                        // 3
                                                                                        // 4
                                                                                        // 5
                                                                                        // 6
                                                                                        //
var defaultNetworkInterfaceConfig = {                                                   // 8
  path: '/graphql',                                                                     // 9
  options: {},                                                                          // 10
  useMeteorAccounts: true                                                               // 11
};                                                                                      // 8
                                                                                        //
var createMeteorNetworkInterface = function createMeteorNetworkInterface(givenConfig) {
  var config = _.extend(defaultNetworkInterfaceConfig, givenConfig);                    // 15
                                                                                        //
  // absoluteUrl adds a '/', so let's remove it first                                   //
  var path = config.path;                                                               // 18
  if (path[0] === '/') {                                                                // 19
    path = path.slice(1);                                                               // 20
  }                                                                                     // 21
                                                                                        //
  // For SSR                                                                            //
  var url = Meteor.absoluteUrl(path);                                                   // 24
  var networkInterface = createNetworkInterface(url);                                   // 25
                                                                                        //
  if (config.useMeteorAccounts) {                                                       // 27
    networkInterface.use([{                                                             // 28
      applyMiddleware: function () {                                                    // 29
        function applyMiddleware(request, next) {                                       // 28
          var currentUserToken = Accounts._storedLoginToken();                          // 30
                                                                                        //
          if (!currentUserToken) {                                                      // 32
            next();                                                                     // 33
            return;                                                                     // 34
          }                                                                             // 35
                                                                                        //
          if (!request.options.headers) {                                               // 37
            request.options.headers = new Headers();                                    // 38
          }                                                                             // 39
                                                                                        //
          request.options.headers.Authorization = currentUserToken;                     // 41
                                                                                        //
          next();                                                                       // 43
        }                                                                               // 44
                                                                                        //
        return applyMiddleware;                                                         // 28
      }()                                                                               // 28
    }]);                                                                                // 28
  }                                                                                     // 46
                                                                                        //
  return networkInterface;                                                              // 48
};                                                                                      // 49
                                                                                        //
var meteorClientConfig = function meteorClientConfig(networkInterfaceConfig) {          // 51
  return {                                                                              // 52
    networkInterface: createMeteorNetworkInterface(networkInterfaceConfig),             // 53
    queryTransformer: addTypenameToSelectionSet,                                        // 54
                                                                                        //
    // Default to using Mongo _id, must use _id for queries.                            //
    dataIdFromObject: function () {                                                     // 57
      function dataIdFromObject(result) {                                               // 57
        if (result._id && result.__typename) {                                          // 58
          var dataId = result.__typename + result._id;                                  // 59
          return dataId;                                                                // 60
        }                                                                               // 61
      }                                                                                 // 62
                                                                                        //
      return dataIdFromObject;                                                          // 57
    }()                                                                                 // 57
  };                                                                                    // 52
};                                                                                      // 64
//////////////////////////////////////////////////////////////////////////////////////////

}],"check-npm.js":["meteor/meteor","meteor/tmeasday:check-npm-versions",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////
//                                                                                      //
// packages/apollo/check-npm.js                                                         //
//                                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////
                                                                                        //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});var checkNpmVersions;module.import('meteor/tmeasday:check-npm-versions',{"checkNpmVersions":function(v){checkNpmVersions=v}});
                                                                                        // 2
                                                                                        //
if (Meteor.isClient) {                                                                  // 4
  checkNpmVersions({                                                                    // 5
    'apollo-client': '^0.4.11'                                                          // 6
  }, 'apollo');                                                                         // 5
} else {                                                                                // 8
  checkNpmVersions({                                                                    // 9
    'apollo-server': '^0.2.1',                                                          // 10
    "body-parser": "^1.15.2",                                                           // 11
    "express": "^4.14.0",                                                               // 12
    "graphql": "^0.6.2",                                                                // 13
    "graphql-tools": "^0.6.2"                                                           // 14
  }, 'apollo');                                                                         // 9
}                                                                                       // 16
//////////////////////////////////////////////////////////////////////////////////////////

}]}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/apollo/main-client.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package.apollo = exports;

})();

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
var Random = Package.random.Random;
var check = Package.check.check;
var Match = Package.check.Match;
var Session = Package.session.Session;
var Reload = Package.reload.Reload;
var Mongo = Package.mongo.Mongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;

/* Package-scope variables */
var Utils, Store, startTime, StoreManager, BlazeProvider, FlowRouterProvider, IronRouterProvider, DDPProvider, EventLoopLag, KadiraDebug, KadiraInfo;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/utils.js                                                      //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
Utils = Utils || {};                                                                       // 1
                                                                                           // 2
Utils.getAppEnv = function() {                                                             // 3
  var env = 'development';                                                                 // 4
  if(!Package['kadira:runtime-dev']) {                                                     // 5
    env = 'production';                                                                    // 6
  }                                                                                        // 7
  return env;                                                                              // 8
};                                                                                         // 9
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/utils.js                                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
Utils = Utils || {};                                                                       // 1
                                                                                           // 2
Utils.findBlazeViewName = function(view) {                                                 // 3
  var name = view.name;                                                                    // 4
  // if this is a template we can simply send the name                                     // 5
  if(view.template) {                                                                      // 6
    return name;                                                                           // 7
  }                                                                                        // 8
                                                                                           // 9
  var parent = view.parentView;                                                            // 10
  // if not, let's try to find out a name which is easy to debug                           // 11
  for(var lc=0; lc<5; lc++) {                                                              // 12
    if(!parent) {                                                                          // 13
      break;                                                                               // 14
    }                                                                                      // 15
                                                                                           // 16
    name = parent.name + '.' + name;                                                       // 17
    // if we found the parent, we are good to go                                           // 18
    if(parent.template) {                                                                  // 19
      break;                                                                               // 20
    }                                                                                      // 21
                                                                                           // 22
    // try to get the next parent                                                          // 23
    parent = parent.parentView;                                                            // 24
  }                                                                                        // 25
                                                                                           // 26
  return name;                                                                             // 27
};                                                                                         // 28
                                                                                           // 29
// This is a simple helper to override namespaces in our code                              // 30
// Buy using this way, it helps us to write unit test for our overriden code               // 31
// @param namespace - this is the Object used for overriding                               // 32
// @param funcName - name of the function in this namespace                                // 33
// @param generator - function which creates the overriding logic                          // 34
// eg:-                                                                                    // 35
//    var genFunction = function(original) {                                               // 36
//      return function(view, which) {                                                     // 37
//        var name = Utils.findBlazeViewName(view);                                        // 38
//        var done = StoreManager.trackActivity('view.' + which, name);                    // 39
//        var response = original.call(this, view, which);                                 // 40
//        done();                                                                          // 41
//        return response;                                                                 // 42
//      };                                                                                 // 43
//    };                                                                                   // 44
//    Utils.override(Blaze, '_fireCallbacks', genFunction);                                // 45
                                                                                           // 46
Utils.override = function(namespace, funcName, generator) {                                // 47
  var original = namespace[funcName];                                                      // 48
  namespace[funcName] = generator(original);                                               // 49
};                                                                                         // 50
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/store.js                                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
var isPerformanceExists = typeof window.performance !== 'undefined';                       // 1
                                                                                           // 2
Store = function(options) {                                                                // 3
  var self = this;                                                                         // 4
  options = options || {};                                                                 // 5
                                                                                           // 6
  this._serverPushInterval = options.serverPushInterval || 1000;                           // 7
  this.currentDataBlocks = {};                                                             // 8
  this._oldDataBlock = null;                                                               // 9
  this._browserId = null;                                                                  // 10
  this._clientId = null;                                                                   // 11
  this._startFns = [];                                                                     // 12
  this._beforePushFns = [];                                                                // 13
  this._beforeBlockCloseFns = [];                                                          // 14
  // Random id for this session                                                            // 15
  this._sessionKey = Random.id();                                                          // 16
                                                                                           // 17
  this._yesTracking = new Meteor.EnvironmentVariable();                                    // 18
};                                                                                         // 19
                                                                                           // 20
Store.prototype.onTracking = function(fn) {                                                // 21
  return this._yesTracking.withValue(true, fn);                                            // 22
};                                                                                         // 23
                                                                                           // 24
Store.prototype.start = function(browserId, clientId) {                                    // 25
  if(!browserId || !clientId) {                                                            // 26
    throw new Error("browserId or clientId can't be empty.");                              // 27
  }                                                                                        // 28
                                                                                           // 29
  // if Store already started                                                              // 30
  // return without do anything                                                            // 31
  if(this._isStarted()) {                                                                  // 32
    return;                                                                                // 33
  }                                                                                        // 34
                                                                                           // 35
  this.stop();                                                                             // 36
  this._browserId = browserId;                                                             // 37
  this._clientId = clientId;                                                               // 38
  this._pushToServer();                                                                    // 39
                                                                                           // 40
  // trigger startfns                                                                      // 41
  this._runCallbacks(this._startFns);                                                      // 42
  this._startFns = [];                                                                     // 43
};                                                                                         // 44
                                                                                           // 45
Store.prototype.stop = function() {                                                        // 46
  this._browserId = null;                                                                  // 47
  this._clientId = null;                                                                   // 48
  clearTimeout(this._pushToServerHandler);                                                 // 49
  this._pushToServerHandler = null;                                                        // 50
};                                                                                         // 51
                                                                                           // 52
Store.prototype.now = function() {                                                         // 53
  if (isPerformanceExists) {                                                               // 54
    return performance.now();                                                              // 55
  }                                                                                        // 56
                                                                                           // 57
  return (new Date()).getTime();                                                           // 58
};                                                                                         // 59
                                                                                           // 60
Store.prototype._getCurrentDataBlock = function(timestamp) {                               // 61
  var startTimeInSec = this._normalizeDateToSec(timestamp);                                // 62
  var block = this.currentDataBlocks[startTimeInSec];                                      // 63
  if(!block) {                                                                             // 64
    if(this._oldDataBlock) {                                                               // 65
      this._closeBlock(this._oldDataBlock);                                                // 66
    }                                                                                      // 67
    block = this.currentDataBlocks[startTimeInSec] = this._buildDataBlock(startTimeInSec);
    this._oldDataBlock = block;                                                            // 69
  }                                                                                        // 70
                                                                                           // 71
  return block;                                                                            // 72
};                                                                                         // 73
                                                                                           // 74
Store.prototype.trackEvent = function(type, data, startTime) {                             // 75
  if(!this._isStarted()) {                                                                 // 76
    return function() {};                                                                  // 77
  }                                                                                        // 78
                                                                                           // 79
  startTime = startTime || Date.now();                                                     // 80
  var currentDataBlock = this._getCurrentDataBlock(startTime);                             // 81
                                                                                           // 82
  var item = [startTime, type, data];                                                      // 83
  currentDataBlock.events.push(item);                                                      // 84
};                                                                                         // 85
                                                                                           // 86
Store.prototype.trackActivity = function(type, name) {                                     // 87
  var self = this;                                                                         // 88
  if(!self._isStarted()) {                                                                 // 89
    return function() {};                                                                  // 90
  }                                                                                        // 91
                                                                                           // 92
  var alreadyTracking = false;                                                             // 93
  if(self._yesTracking.get()) {                                                            // 94
    alreadyTracking = true;                                                                // 95
  }                                                                                        // 96
                                                                                           // 97
  var start = self.now();                                                                  // 98
  var marked = false;                                                                      // 99
  function done() {                                                                        // 100
    if(marked) {                                                                           // 101
      return;                                                                              // 102
    }                                                                                      // 103
    var elapsedTime = (alreadyTracking)? 0 : self.now() - start;                           // 104
    self._updateActivity(type, name, elapsedTime);                                         // 105
    marked = true;                                                                         // 106
  }                                                                                        // 107
                                                                                           // 108
  return done;                                                                             // 109
};                                                                                         // 110
                                                                                           // 111
Store.prototype.trackGuage = function(key, value, options) {                               // 112
  if(!this._isStarted()) {                                                                 // 113
    return function() {};                                                                  // 114
  }                                                                                        // 115
                                                                                           // 116
  options = options || {};                                                                 // 117
  startTime = options.startTime || (new Date()).getTime();                                 // 118
  var currentDataBlock = this._getCurrentDataBlock(startTime);                             // 119
                                                                                           // 120
  currentDataBlock.gauges[key] = currentDataBlock.gauges[key] || 0;                        // 121
  if(options.sum) {                                                                        // 122
    currentDataBlock.gauges[key] += value;                                                 // 123
  } else {                                                                                 // 124
    currentDataBlock.gauges[key] = value;                                                  // 125
  }                                                                                        // 126
};                                                                                         // 127
                                                                                           // 128
/*                                                                                         // 129
  Tracks time related metrics for DDP messages                                             // 130
  (but possible for others as well)                                                        // 131
                                                                                           // 132
  @param type - type of the message (pubsub, method)                                       // 133
  @param id - id of the message                                                            // 134
  @param event - event we are tracking the time (eg:- start, end)                          // 135
  @timestamp [optional] - timestamp of the event in milliseconds                           // 136
  @info [optional] - an object containing some special information                         // 137
*/                                                                                         // 138
Store.prototype.trackTime = function(type, id, event, timestamp, info) {                   // 139
  if(typeof timestamp === "object") {                                                      // 140
    info = timestamp;                                                                      // 141
    timestamp = null;                                                                      // 142
  }                                                                                        // 143
                                                                                           // 144
  timestamp = timestamp || Date.now();                                                     // 145
                                                                                           // 146
  var currentDataBlock = this._getCurrentDataBlock(timestamp);                             // 147
                                                                                           // 148
  var item = {                                                                             // 149
    type: type,                                                                            // 150
    id: id,                                                                                // 151
    event: event,                                                                          // 152
    timestamp: timestamp                                                                   // 153
  };                                                                                       // 154
                                                                                           // 155
  if(info) {                                                                               // 156
    item.info = info;                                                                      // 157
  }                                                                                        // 158
                                                                                           // 159
  currentDataBlock.times.push(item);                                                       // 160
};                                                                                         // 161
                                                                                           // 162
Store.prototype._buildDataBlock = function(timestamp) {                                    // 163
  var block = {                                                                            // 164
    timestamp: timestamp,                                                                  // 165
    events: [],                                                                            // 166
    activities: {},                                                                        // 167
    gauges: {},                                                                            // 168
    times: [],                                                                             // 169
    // Used to identify a unique session. This does not prevent the key                    // 170
    // between HCR.                                                                        // 171
    sessionKey: this._sessionKey                                                           // 172
  };                                                                                       // 173
                                                                                           // 174
  return block;                                                                            // 175
};                                                                                         // 176
                                                                                           // 177
Store.prototype._updateActivity = function(type, name, elapsedTime) {                      // 178
  var key = type + "::" + name;                                                            // 179
  var currentDataBlock = this._getCurrentDataBlock(Date.now());                            // 180
                                                                                           // 181
  var activity = currentDataBlock.activities[key];                                         // 182
  if(!activity) {                                                                          // 183
    activity = currentDataBlock.activities[key] = {                                        // 184
      type: type,                                                                          // 185
      name: name,                                                                          // 186
      count: 0,                                                                            // 187
      elapsedTime: 0                                                                       // 188
    };                                                                                     // 189
  }                                                                                        // 190
                                                                                           // 191
  activity.count++;                                                                        // 192
  activity.elapsedTime += elapsedTime;                                                     // 193
};                                                                                         // 194
                                                                                           // 195
Store.prototype._pushToServer = function pushToServer() {                                  // 196
  var self = this;                                                                         // 197
  if(!self._clientId) {                                                                    // 198
    return;                                                                                // 199
  }                                                                                        // 200
                                                                                           // 201
  // running flush callbacks                                                               // 202
  this._runCallbacks(this._beforePushFns);                                                 // 203
                                                                                           // 204
  var blocks = this.currentDataBlocks;                                                     // 205
  this.currentDataBlocks = {};                                                             // 206
                                                                                           // 207
  _.each(blocks, function(block) {                                                         // 208
    if(!block.closed) {                                                                    // 209
      self._closeBlock(block);                                                             // 210
    }                                                                                      // 211
                                                                                           // 212
    Meteor.call(                                                                           // 213
      'kadira.debug.client.updateTimeline', self._browserId,                               // 214
      self._clientId, block                                                                // 215
    );                                                                                     // 216
  });                                                                                      // 217
                                                                                           // 218
  function runAgain() {                                                                    // 219
    self._pushToServer();                                                                  // 220
  }                                                                                        // 221
                                                                                           // 222
  this._pushToServerHandler = setTimeout(runAgain, this._serverPushInterval);              // 223
};                                                                                         // 224
                                                                                           // 225
Store.prototype._closeBlock = function(block) {                                            // 226
  this._runCallbacks(this._beforeBlockCloseFns, block);                                    // 227
  block.closed = true;                                                                     // 228
};                                                                                         // 229
                                                                                           // 230
Store.prototype.beforePush = function(fn) {                                                // 231
  this._beforePushFns.push(fn);                                                            // 232
};                                                                                         // 233
                                                                                           // 234
Store.prototype.beforeBlockClose = function(fn) {                                          // 235
  this._beforeBlockCloseFns.push(fn);                                                      // 236
};                                                                                         // 237
                                                                                           // 238
Store.prototype.startup = function(fn) {                                                   // 239
  if(this._browserId) {                                                                    // 240
    fn();                                                                                  // 241
  } else {                                                                                 // 242
    this._startFns.push(fn);                                                               // 243
  }                                                                                        // 244
};                                                                                         // 245
                                                                                           // 246
Store.prototype._normalizeDateToSec = function(timestamp) {                                // 247
  var diff = timestamp % 1000;                                                             // 248
  return timestamp - diff;                                                                 // 249
};                                                                                         // 250
                                                                                           // 251
Store.prototype._runCallbacks = function(callbacks) {                                      // 252
  var args = _.toArray(arguments).slice(1);                                                // 253
  _.each(callbacks, function(fn) {                                                         // 254
    fn.apply(null, args);                                                                  // 255
  });                                                                                      // 256
};                                                                                         // 257
                                                                                           // 258
Store.prototype._isStarted = function() {                                                  // 259
  if(this._clientId) {                                                                     // 260
    return true;                                                                           // 261
  }                                                                                        // 262
};                                                                                         // 263
                                                                                           // 264
StoreManager = window.StoreManager = new Store();                                          // 265
                                                                                           // 266
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/blaze.js                                     //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
BlazeProvider = {};                                                                        // 1
                                                                                           // 2
// Events                                                                                  // 3
BlazeProvider.events = function(original) {                                                // 4
  return function(dict) {                                                                  // 5
    var self = this;                                                                       // 6
    _.each(dict, function(fn, name) {                                                      // 7
      dict[name] = function() {                                                            // 8
        var that = this;                                                                   // 9
        var args = arguments;                                                              // 10
        var info = {                                                                       // 11
          name: name,                                                                      // 12
          view: self.viewName                                                              // 13
        };                                                                                 // 14
        StoreManager.trackEvent('event', info);                                            // 15
        return fn.apply(that, args);                                                       // 16
      };                                                                                   // 17
    });                                                                                    // 18
                                                                                           // 19
    return original.call(self, dict);                                                      // 20
  };                                                                                       // 21
};                                                                                         // 22
                                                                                           // 23
if (Package['templating']) {                                                               // 24
  var Template = Package['templating'].Template;                                           // 25
  Utils.override(Template.prototype, 'events', BlazeProvider.events);                      // 26
}                                                                                          // 27
                                                                                           // 28
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/flow_router.js                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
FlowRouterProvider = {};                                                                   // 1
FlowRouterProvider.track = function(flowRouter) {                                          // 2
  var info = {                                                                             // 3
    provider: 'flow-router'                                                                // 4
  };                                                                                       // 5
                                                                                           // 6
  flowRouter.triggers.enter([function(context) {                                           // 7
    info.path = context.path;                                                              // 8
    StoreManager.trackEvent('route', info);                                                // 9
  }]);                                                                                     // 10
};                                                                                         // 11
                                                                                           // 12
if(Package['kadira:flow-router']) {                                                        // 13
  var FlowRouter = Package['kadira:flow-router'].FlowRouter;                               // 14
  FlowRouterProvider.track(FlowRouter);                                                    // 15
}                                                                                          // 16
                                                                                           // 17
if(Package['kadira:flow-router-ssr']) {                                                    // 18
  var FlowRouter = Package['kadira:flow-router-ssr'].FlowRouter;                           // 19
  FlowRouterProvider.track(FlowRouter);                                                    // 20
}                                                                                          // 21
                                                                                           // 22
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/iron_router.js                               //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
IronRouterProvider = {};                                                                   // 1
IronRouterProvider.track = function(ironRouter) {                                          // 2
  ironRouter.onBeforeAction(function() {                                                   // 3
    var url = Tracker.nonreactive(function() {                                             // 4
      return ironRouter.current().url;                                                     // 5
    });                                                                                    // 6
    var info = {                                                                           // 7
      path: url,                                                                           // 8
      provider: 'iron-router'                                                              // 9
    };                                                                                     // 10
    StoreManager.trackEvent('route', info);                                                // 11
    this.next();                                                                           // 12
  })                                                                                       // 13
};                                                                                         // 14
                                                                                           // 15
if(Package['iron:router']) {                                                               // 16
  IronRouterProvider.track(Package['iron:router'].Router);                                 // 17
}                                                                                          // 18
                                                                                           // 19
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/ddp.js                                       //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
DDPProvider = {                                                                            // 1
  ignoringMethods: {                                                                       // 2
    "kadira.debug.client.updateTimeline": true                                             // 3
  },                                                                                       // 4
  ignoringMethodIds: {}                                                                    // 5
};                                                                                         // 6
                                                                                           // 7
var conn = Meteor.connection;                                                              // 8
                                                                                           // 9
// watch incoming messages                                                                 // 10
DDPProvider._livedata_data = function(original) {                                          // 11
  var currentLiveUpdateMessageBlock = null;                                                // 12
  var flushScheduleHandler = null;                                                         // 13
                                                                                           // 14
  // flush live updates just before sending data to the server                             // 15
  StoreManager.beforePush(flushLiveUpdates);                                               // 16
                                                                                           // 17
  return function(msg) {                                                                   // 18
    var info = {};                                                                         // 19
    var eventName = null;                                                                  // 20
                                                                                           // 21
    trackLiveUpdates(msg);                                                                 // 22
                                                                                           // 23
    switch(msg.msg) {                                                                      // 24
      case "ready":                                                                        // 25
        eventName = "ddp-ready";                                                           // 26
        info.subs = msg.subs;                                                              // 27
        _.each(info.subs, function(sub) {                                                  // 28
          StoreManager.trackTime('pubsub', sub, 'ready');                                  // 29
        });                                                                                // 30
        break;                                                                             // 31
      case "updated":                                                                      // 32
        var methods = [];                                                                  // 33
        // removing ignoring methods                                                       // 34
        _.each(msg.methods, function(id) {                                                 // 35
          if(DDPProvider.ignoringMethodIds[id]) {                                          // 36
            if(--DDPProvider.ignoringMethodIds[id] === 0) {                                // 37
              delete DDPProvider.ignoringMethodIds[id];                                    // 38
            }                                                                              // 39
          } else {                                                                         // 40
            methods.push(id);                                                              // 41
            StoreManager.trackTime('method', id, 'updated');                               // 42
          }                                                                                // 43
        });                                                                                // 44
                                                                                           // 45
        if(methods.length === 0) {                                                         // 46
          break;                                                                           // 47
        }                                                                                  // 48
                                                                                           // 49
        eventName = "ddp-updated";                                                         // 50
        info.methods = methods;                                                            // 51
        break;                                                                             // 52
    }                                                                                      // 53
                                                                                           // 54
    if(eventName) {                                                                        // 55
      StoreManager.trackEvent(eventName, info);                                            // 56
    }                                                                                      // 57
    return original.call(conn, msg);                                                       // 58
  };                                                                                       // 59
                                                                                           // 60
  function trackLiveUpdates(msg) {                                                         // 61
    if(msg.msg == "added" || msg.msg == "removed" || msg.msg == "changed") {               // 62
      // decide whether to flush or not                                                    // 63
      // we don't need to flush if we are getting same type of message                     // 64
      // fortunately, DDP send similar messages together.                                  // 65
      // so we can group them easily                                                       // 66
      var canFlush =                                                                       // 67
        !currentLiveUpdateMessageBlock ||                                                  // 68
        currentLiveUpdateMessageBlock.type != msg.msg ||                                   // 69
        currentLiveUpdateMessageBlock.collection != msg.collection;                        // 70
      if(canFlush) {                                                                       // 71
        flushLiveUpdates();                                                                // 72
      }                                                                                    // 73
                                                                                           // 74
      // add the block for first time after reset when flushing                            // 75
      if(!currentLiveUpdateMessageBlock) {                                                 // 76
        currentLiveUpdateMessageBlock = {                                                  // 77
          type: msg.msg,                                                                   // 78
          collection: msg.collection,                                                      // 79
          startTime: Date.now(),                                                           // 80
          count: 0,                                                                        // 81
          lastUpdatedAt: Date.now(),                                                       // 82
          sampleMessages: [],                                                              // 83
        };                                                                                 // 84
      }                                                                                    // 85
                                                                                           // 86
      currentLiveUpdateMessageBlock.sampleMessages.push(msg);                              // 87
      // Only keep upto 5 ddp messages.                                                    // 88
      // This is to avoid sending too many data                                            // 89
      // XXX: We may also need to check for the size of the individual                     // 90
      // message also                                                                      // 91
      if(currentLiveUpdateMessageBlock.sampleMessages.length > 5) {                        // 92
        currentLiveUpdateMessageBlock.sampleMessages.shift();                              // 93
      }                                                                                    // 94
                                                                                           // 95
      // increment the block                                                               // 96
      currentLiveUpdateMessageBlock.count++;                                               // 97
      currentLiveUpdateMessageBlock.lastUpdatedAt = Date.now();                            // 98
      // scheduleForFlush();                                                               // 99
    } else {                                                                               // 100
      // flush tracking directly for other messages                                        // 101
      flushLiveUpdates();                                                                  // 102
    }                                                                                      // 103
  }                                                                                        // 104
                                                                                           // 105
  function flushLiveUpdates() {                                                            // 106
    if(!currentLiveUpdateMessageBlock) {                                                   // 107
      return;                                                                              // 108
    }                                                                                      // 109
                                                                                           // 110
    var info = currentLiveUpdateMessageBlock;                                              // 111
    var startAt = info.startTime;                                                          // 112
    StoreManager.trackEvent('live-updates', info, startAt);                                // 113
                                                                                           // 114
    // reset the current block                                                             // 115
    currentLiveUpdateMessageBlock = null;                                                  // 116
  }                                                                                        // 117
};                                                                                         // 118
Utils.override(conn, '_livedata_data', DDPProvider._livedata_data);                        // 119
                                                                                           // 120
DDPProvider._livedata_result = function(original) {                                        // 121
  // XXX: Track result as an event                                                         // 122
  // It has the whether this message is an error or not                                    // 123
  return function(msg) {                                                                   // 124
    if(DDPProvider.ignoringMethodIds[msg.id]) {                                            // 125
      if(--DDPProvider.ignoringMethodIds[msg.id] === 0) {                                  // 126
        delete DDPProvider.ignoringMethodIds[msg.id];                                      // 127
      }                                                                                    // 128
    } else {                                                                               // 129
      StoreManager.trackTime('method', msg.id, 'result');                                  // 130
    }                                                                                      // 131
                                                                                           // 132
    original.call(conn, msg);                                                              // 133
  };                                                                                       // 134
};                                                                                         // 135
Utils.override(conn, '_livedata_result', DDPProvider._livedata_result);                    // 136
                                                                                           // 137
DDPProvider._livedata_nosub = function(original) {                                         // 138
  return function(msg) {                                                                   // 139
    var eventName = "ddp-nosub";                                                           // 140
    var info = _.pick(msg, 'id', 'error');                                                 // 141
    StoreManager.trackTime('pubsub', msg.id, 'nosub');                                     // 142
    StoreManager.trackEvent(eventName, info);                                              // 143
                                                                                           // 144
    original.call(conn, msg);                                                              // 145
  };                                                                                       // 146
};                                                                                         // 147
Utils.override(conn, '_livedata_nosub', DDPProvider._livedata_nosub);                      // 148
                                                                                           // 149
// watch outgoing messages                                                                 // 150
DDPProvider._send = function(original) {                                                   // 151
  return function(msg) {                                                                   // 152
    var info = {};                                                                         // 153
    var eventName = null;                                                                  // 154
    switch(msg.msg) {                                                                      // 155
      case "method":                                                                       // 156
        if(DDPProvider.ignoringMethods[msg.method]) {                                      // 157
          DDPProvider.ignoringMethodIds["" + msg.id] = 2;                                  // 158
          break;                                                                           // 159
        }                                                                                  // 160
        info.name = msg.method;                                                            // 161
        info.id = msg.id;                                                                  // 162
        eventName = "ddp-method";                                                          // 163
        var timeInfo = {name: msg.method};                                                 // 164
        StoreManager.trackTime('method', msg.id, 'start', timeInfo);                       // 165
        break;                                                                             // 166
      case "sub":                                                                          // 167
        info.name = msg.name;                                                              // 168
        info.id = msg.id;                                                                  // 169
        eventName = "ddp-sub";                                                             // 170
        var timeInfo = {name: msg.name};                                                   // 171
        StoreManager.trackTime('pubsub', msg.id, 'start', timeInfo);                       // 172
        break;                                                                             // 173
      case "unsub":                                                                        // 174
        info.id = msg.id;                                                                  // 175
        eventName = "ddp-unsub";                                                           // 176
        StoreManager.trackTime('pubsub', msg.id, 'unsub');                                 // 177
        break;                                                                             // 178
    }                                                                                      // 179
                                                                                           // 180
    if(eventName) {                                                                        // 181
      StoreManager.trackEvent(eventName, info);                                            // 182
    }                                                                                      // 183
    return original.call(conn, msg);                                                       // 184
  };                                                                                       // 185
};                                                                                         // 186
Utils.override(conn, '_send', DDPProvider._send);                                          // 187
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/hcr.js                                       //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
// Hot Code Reload Detection                                                               // 1
                                                                                           // 2
Reload._onMigrate('kadiraDebug', function() {                                              // 3
  Meteor._localStorage.setItem('hcrAt', Date.now());                                       // 4
  return [true];                                                                           // 5
});                                                                                        // 6
                                                                                           // 7
var hcrAt = Meteor._localStorage.getItem('hcrAt');                                         // 8
if(hcrAt) {                                                                                // 9
  hcrAt = parseInt(hcrAt);                                                                 // 10
  var elapsedTime = Date.now() - hcrAt;                                                    // 11
  var info = {                                                                             // 12
    elapsedTime: elapsedTime                                                               // 13
  };                                                                                       // 14
  Meteor._localStorage.removeItem('hcrAt');                                                // 15
                                                                                           // 16
  // store manager is not started yet.                                                     // 17
  // So we need to run register it to run when it started.                                 // 18
  StoreManager.startup(function() {                                                        // 19
    StoreManager.trackEvent('hcr', info, hcrAt);                                           // 20
  });                                                                                      // 21
}                                                                                          // 22
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/providers/system.js                                    //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
EventLoopLag = function(timeoutMillis, callback) {                                         // 1
  function startLoop () {                                                                  // 2
    var start = StoreManager.now();                                                        // 3
    setTimeout(function() {                                                                // 4
      var end = StoreManager.now();                                                        // 5
      var lag  = Math.max(0, end - start - timeoutMillis);                                 // 6
      callback(lag);                                                                       // 7
      startLoop();                                                                         // 8
    }, timeoutMillis);                                                                     // 9
  }                                                                                        // 10
                                                                                           // 11
  startLoop();                                                                             // 12
};                                                                                         // 13
                                                                                           // 14
var intervalTime = 100;                                                                    // 15
var loopStartTime = Date.now();                                                            // 16
var totalLag = 0;                                                                          // 17
EventLoopLag(intervalTime, function(lag) {                                                 // 18
  totalLag += lag;                                                                         // 19
});                                                                                        // 20
                                                                                           // 21
// this is a dummy guage tracking to send data                                             // 22
// to the server always                                                                    // 23
setInterval(function() {                                                                   // 24
  StoreManager.trackGuage('dummy', 100);                                                   // 25
}, 500);                                                                                   // 26
                                                                                           // 27
StoreManager.beforeBlockClose(function(block) {                                            // 28
  var now = Date.now();                                                                    // 29
  var loopTime = now - loopStartTime;                                                      // 30
  var lagPct = (totalLag/loopTime) * 100;                                                  // 31
                                                                                           // 32
  block.gauges['eventloop-blockness'] = lagPct;                                            // 33
  loopStartTime = now;                                                                     // 34
  totalLag = 0;                                                                            // 35
                                                                                           // 36
  if(typeof performance !== 'undefined' && performance.memory) {                           // 37
    block.gauges['memory'] = performance.memory.usedJSHeapSize;                            // 38
  }                                                                                        // 39
});                                                                                        // 40
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

/////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                         //
// packages/kadira_debug/lib/client/connect.js                                             //
//                                                                                         //
/////////////////////////////////////////////////////////////////////////////////////////////
                                                                                           //
KadiraDebug = window.KadiraDebug = {};                                                     // 1
KadiraInfo = new Mongo.Collection('kdInfo');                                               // 2
                                                                                           // 3
var env = Utils.getAppEnv();                                                               // 4
                                                                                           // 5
var debug = getQueryParamFromURI('kadira_debug');                                          // 6
var accessToken = (debug)? (getQueryParamFromURI('access_token') || null) : null;          // 7
                                                                                           // 8
if(env === 'production' && !accessToken) {                                                 // 9
  return;                                                                                  // 10
}                                                                                          // 11
                                                                                           // 12
Meteor.subscribe('kadira.debug.client.auth', accessToken, {                                // 13
  onReady: function () {                                                                   // 14
    // create a unique client for this client                                              // 15
    // works accross hot code reloads as well                                              // 16
    var clientId = Session.get('kdClientId');                                              // 17
    if(!clientId) {                                                                        // 18
      clientId = Random.id(8);                                                             // 19
      Session.set('kdClientId', clientId);                                                 // 20
    }                                                                                      // 21
    KadiraDebug.clientId = clientId;                                                       // 22
                                                                                           // 23
    // create a unique Id for the browser                                                  // 24
    var browserId = Meteor._localStorage.getItem('kdBrowserId');                           // 25
    if(!browserId) {                                                                       // 26
      function setName(err, name) {                                                        // 27
        if(err) {                                                                          // 28
          browserId = Random.id(8);                                                        // 29
        } else {                                                                           // 30
          browserId = name;                                                                // 31
        }                                                                                  // 32
        Meteor._localStorage.setItem('kdBrowserId', browserId);                            // 33
        // invoke the starting process                                                     // 34
        KadiraDebug._init(browserId, clientId);                                            // 35
      }                                                                                    // 36
                                                                                           // 37
      Meteor.call('kadira.debug.client.getBrowserName', navigator.userAgent, setName);     // 38
    } else {                                                                               // 39
      // invoke the starting process                                                       // 40
      KadiraDebug._init(browserId, clientId);                                              // 41
    }                                                                                      // 42
  },                                                                                       // 43
  onStop: function (err) {                                                                 // 44
    if(err) {                                                                              // 45
      throw new Meteor.Error('401', 'Unauthorized.');                                      // 46
    }                                                                                      // 47
  }                                                                                        // 48
});                                                                                        // 49
                                                                                           // 50
KadiraDebug._init = function(browserId, clientId) {                                        // 51
  // Watch remopte admin listeners for this app.                                           // 52
  Meteor.subscribe('kadira.debug.client.listeners');                                       // 53
                                                                                           // 54
  Meteor.subscribe('kadira.debug.client.init', browserId, clientId);                       // 55
                                                                                           // 56
  // If there are one or more listeners, then we start the StoreManager                    // 57
  // and send data                                                                         // 58
  Tracker.autorun(function(c) {                                                            // 59
    var docListeners = KadiraInfo.findOne({_id: "listeners-count"});                       // 60
    if(docListeners && docListeners.count > 0) {                                           // 61
      StoreManager.start(browserId, clientId);                                             // 62
    } else {                                                                               // 63
      StoreManager.stop();                                                                 // 64
    }                                                                                      // 65
  });                                                                                      // 66
};                                                                                         // 67
                                                                                           // 68
function getQueryParamFromURI(q) {                                                         // 69
  q = q.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");                                     // 70
  var regex = new RegExp("[\\?&]" + q + "=([^&#]*)"),                                      // 71
      results = regex.exec(location.search);                                               // 72
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));       // 73
}                                                                                          // 74
/////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['kadira:debug'] = {}, {
  KadiraDebug: KadiraDebug
});

})();

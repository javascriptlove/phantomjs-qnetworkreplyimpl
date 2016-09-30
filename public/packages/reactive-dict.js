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
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EJSON = Package.ejson.EJSON;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var ReactiveDict;

var require = meteorInstall({"node_modules":{"meteor":{"reactive-dict":{"reactive-dict.js":["babel-runtime/helpers/typeof",function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/reactive-dict/reactive-dict.js                                                                        //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});                     //
// XXX come up with a serialization method which canonicalizes object key                                         //
// order, which would allow us to use objects as values for equals.                                               //
var stringify = function stringify(value) {                                                                       // 3
  if (value === undefined) return 'undefined';                                                                    // 4
  return EJSON.stringify(value);                                                                                  // 6
};                                                                                                                // 7
var parse = function parse(serialized) {                                                                          // 8
  if (serialized === undefined || serialized === 'undefined') return undefined;                                   // 9
  return EJSON.parse(serialized);                                                                                 // 11
};                                                                                                                // 12
                                                                                                                  //
var changed = function changed(v) {                                                                               // 14
  v && v.changed();                                                                                               // 15
};                                                                                                                // 16
                                                                                                                  //
// XXX COMPAT WITH 0.9.1 : accept migrationData instead of dictName                                               //
ReactiveDict = function (_ReactiveDict) {                                                                         // 19
  function ReactiveDict(_x) {                                                                                     // 19
    return _ReactiveDict.apply(this, arguments);                                                                  // 19
  }                                                                                                               // 19
                                                                                                                  //
  ReactiveDict.toString = function () {                                                                           // 19
    return _ReactiveDict.toString();                                                                              // 19
  };                                                                                                              // 19
                                                                                                                  //
  return ReactiveDict;                                                                                            // 19
}(function (dictName) {                                                                                           // 19
  // this.keys: key -> value                                                                                      //
  if (dictName) {                                                                                                 // 21
    if (typeof dictName === 'string') {                                                                           // 22
      // the normal case, argument is a string name.                                                              //
      // _registerDictForMigrate will throw an error on duplicate name.                                           //
      ReactiveDict._registerDictForMigrate(dictName, this);                                                       // 25
      this.keys = ReactiveDict._loadMigratedDict(dictName) || {};                                                 // 26
      this.name = dictName;                                                                                       // 27
    } else if ((typeof dictName === 'undefined' ? 'undefined' : _typeof(dictName)) === 'object') {                // 28
      // back-compat case: dictName is actually migrationData                                                     //
      this.keys = dictName;                                                                                       // 30
    } else {                                                                                                      // 31
      throw new Error("Invalid ReactiveDict argument: " + dictName);                                              // 32
    }                                                                                                             // 33
  } else {                                                                                                        // 34
    // no name given; no migration will be performed                                                              //
    this.keys = {};                                                                                               // 36
  }                                                                                                               // 37
                                                                                                                  //
  this.allDeps = new Tracker.Dependency();                                                                        // 39
  this.keyDeps = {}; // key -> Dependency                                                                         // 40
  this.keyValueDeps = {}; // key -> Dependency                                                                    // 41
});                                                                                                               // 42
                                                                                                                  //
_.extend(ReactiveDict.prototype, {                                                                                // 44
  // set() began as a key/value method, but we are now overloading it                                             //
  // to take an object of key/value pairs, similar to backbone                                                    //
  // http://backbonejs.org/#Model-set                                                                             //
                                                                                                                  //
  set: function () {                                                                                              // 49
    function set(keyOrObject, value) {                                                                            // 49
      var self = this;                                                                                            // 50
                                                                                                                  //
      if ((typeof keyOrObject === 'undefined' ? 'undefined' : _typeof(keyOrObject)) === 'object' && value === undefined) {
        // Called as `dict.set({...})`                                                                            //
        self._setObject(keyOrObject);                                                                             // 54
        return;                                                                                                   // 55
      }                                                                                                           // 56
      // the input isn't an object, so it must be a key                                                           //
      // and we resume with the rest of the function                                                              //
      var key = keyOrObject;                                                                                      // 59
                                                                                                                  //
      value = stringify(value);                                                                                   // 61
                                                                                                                  //
      var keyExisted = _.has(self.keys, key);                                                                     // 63
      var oldSerializedValue = keyExisted ? self.keys[key] : 'undefined';                                         // 64
      var isNewValue = value !== oldSerializedValue;                                                              // 65
                                                                                                                  //
      self.keys[key] = value;                                                                                     // 67
                                                                                                                  //
      if (isNewValue || !keyExisted) {                                                                            // 69
        self.allDeps.changed();                                                                                   // 70
      }                                                                                                           // 71
                                                                                                                  //
      if (isNewValue) {                                                                                           // 73
        changed(self.keyDeps[key]);                                                                               // 74
        if (self.keyValueDeps[key]) {                                                                             // 75
          changed(self.keyValueDeps[key][oldSerializedValue]);                                                    // 76
          changed(self.keyValueDeps[key][value]);                                                                 // 77
        }                                                                                                         // 78
      }                                                                                                           // 79
    }                                                                                                             // 80
                                                                                                                  //
    return set;                                                                                                   // 49
  }(),                                                                                                            // 49
                                                                                                                  //
  setDefault: function () {                                                                                       // 82
    function setDefault(key, value) {                                                                             // 82
      var self = this;                                                                                            // 83
      if (!_.has(self.keys, key)) {                                                                               // 84
        self.set(key, value);                                                                                     // 85
      }                                                                                                           // 86
    }                                                                                                             // 87
                                                                                                                  //
    return setDefault;                                                                                            // 82
  }(),                                                                                                            // 82
                                                                                                                  //
  get: function () {                                                                                              // 89
    function get(key) {                                                                                           // 89
      var self = this;                                                                                            // 90
      self._ensureKey(key);                                                                                       // 91
      self.keyDeps[key].depend();                                                                                 // 92
      return parse(self.keys[key]);                                                                               // 93
    }                                                                                                             // 94
                                                                                                                  //
    return get;                                                                                                   // 89
  }(),                                                                                                            // 89
                                                                                                                  //
  equals: function () {                                                                                           // 96
    function equals(key, value) {                                                                                 // 96
      var self = this;                                                                                            // 97
                                                                                                                  //
      // Mongo.ObjectID is in the 'mongo' package                                                                 //
      var ObjectID = null;                                                                                        // 100
      if (Package.mongo) {                                                                                        // 101
        ObjectID = Package.mongo.Mongo.ObjectID;                                                                  // 102
      }                                                                                                           // 103
                                                                                                                  //
      // We don't allow objects (or arrays that might include objects) for                                        //
      // .equals, because JSON.stringify doesn't canonicalize object key                                          //
      // order. (We can make equals have the right return value by parsing the                                    //
      // current value and using EJSON.equals, but we won't have a canonical                                      //
      // element of keyValueDeps[key] to store the dependency.) You can still use                                 //
      // "EJSON.equals(reactiveDict.get(key), value)".                                                            //
      //                                                                                                          //
      // XXX we could allow arrays as long as we recursively check that there                                     //
      // are no objects                                                                                           //
      if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean' && typeof value !== 'undefined' && !(value instanceof Date) && !(ObjectID && value instanceof ObjectID) && value !== null) {
        throw new Error("ReactiveDict.equals: value must be scalar");                                             // 121
      }                                                                                                           // 122
      var serializedValue = stringify(value);                                                                     // 123
                                                                                                                  //
      if (Tracker.active) {                                                                                       // 125
        self._ensureKey(key);                                                                                     // 126
                                                                                                                  //
        if (!_.has(self.keyValueDeps[key], serializedValue)) self.keyValueDeps[key][serializedValue] = new Tracker.Dependency();
                                                                                                                  //
        var isNew = self.keyValueDeps[key][serializedValue].depend();                                             // 131
        if (isNew) {                                                                                              // 132
          Tracker.onInvalidate(function () {                                                                      // 133
            // clean up [key][serializedValue] if it's now empty, so we don't                                     //
            // use O(n) memory for n = values seen ever                                                           //
            if (!self.keyValueDeps[key][serializedValue].hasDependents()) delete self.keyValueDeps[key][serializedValue];
          });                                                                                                     // 138
        }                                                                                                         // 139
      }                                                                                                           // 140
                                                                                                                  //
      var oldValue = undefined;                                                                                   // 142
      if (_.has(self.keys, key)) oldValue = parse(self.keys[key]);                                                // 143
      return EJSON.equals(oldValue, value);                                                                       // 144
    }                                                                                                             // 145
                                                                                                                  //
    return equals;                                                                                                // 96
  }(),                                                                                                            // 96
                                                                                                                  //
  all: function () {                                                                                              // 147
    function all() {                                                                                              // 147
      this.allDeps.depend();                                                                                      // 148
      var ret = {};                                                                                               // 149
      _.each(this.keys, function (value, key) {                                                                   // 150
        ret[key] = parse(value);                                                                                  // 151
      });                                                                                                         // 152
      return ret;                                                                                                 // 153
    }                                                                                                             // 154
                                                                                                                  //
    return all;                                                                                                   // 147
  }(),                                                                                                            // 147
                                                                                                                  //
  clear: function () {                                                                                            // 156
    function clear() {                                                                                            // 156
      var self = this;                                                                                            // 157
                                                                                                                  //
      var oldKeys = self.keys;                                                                                    // 159
      self.keys = {};                                                                                             // 160
                                                                                                                  //
      self.allDeps.changed();                                                                                     // 162
                                                                                                                  //
      _.each(oldKeys, function (value, key) {                                                                     // 164
        changed(self.keyDeps[key]);                                                                               // 165
        if (self.keyValueDeps[key]) {                                                                             // 166
          changed(self.keyValueDeps[key][value]);                                                                 // 167
          changed(self.keyValueDeps[key]['undefined']);                                                           // 168
        }                                                                                                         // 169
      });                                                                                                         // 170
    }                                                                                                             // 172
                                                                                                                  //
    return clear;                                                                                                 // 156
  }(),                                                                                                            // 156
                                                                                                                  //
  'delete': function () {                                                                                         // 174
    function _delete(key) {                                                                                       // 174
      var self = this;                                                                                            // 175
      var didRemove = false;                                                                                      // 176
                                                                                                                  //
      if (_.has(self.keys, key)) {                                                                                // 178
        var oldValue = self.keys[key];                                                                            // 179
        delete self.keys[key];                                                                                    // 180
        changed(self.keyDeps[key]);                                                                               // 181
        if (self.keyValueDeps[key]) {                                                                             // 182
          changed(self.keyValueDeps[key][oldValue]);                                                              // 183
          changed(self.keyValueDeps[key]['undefined']);                                                           // 184
        }                                                                                                         // 185
        self.allDeps.changed();                                                                                   // 186
        didRemove = true;                                                                                         // 187
      }                                                                                                           // 188
                                                                                                                  //
      return didRemove;                                                                                           // 190
    }                                                                                                             // 191
                                                                                                                  //
    return _delete;                                                                                               // 174
  }(),                                                                                                            // 174
                                                                                                                  //
  _setObject: function () {                                                                                       // 193
    function _setObject(object) {                                                                                 // 193
      var self = this;                                                                                            // 194
                                                                                                                  //
      _.each(object, function (value, key) {                                                                      // 196
        self.set(key, value);                                                                                     // 197
      });                                                                                                         // 198
    }                                                                                                             // 199
                                                                                                                  //
    return _setObject;                                                                                            // 193
  }(),                                                                                                            // 193
                                                                                                                  //
  _ensureKey: function () {                                                                                       // 201
    function _ensureKey(key) {                                                                                    // 201
      var self = this;                                                                                            // 202
      if (!(key in self.keyDeps)) {                                                                               // 203
        self.keyDeps[key] = new Tracker.Dependency();                                                             // 204
        self.keyValueDeps[key] = {};                                                                              // 205
      }                                                                                                           // 206
    }                                                                                                             // 207
                                                                                                                  //
    return _ensureKey;                                                                                            // 201
  }(),                                                                                                            // 201
                                                                                                                  //
  // Get a JSON value that can be passed to the constructor to                                                    //
  // create a new ReactiveDict with the same contents as this one                                                 //
  _getMigrationData: function () {                                                                                // 211
    function _getMigrationData() {                                                                                // 211
      // XXX sanitize and make sure it's JSONible?                                                                //
      return this.keys;                                                                                           // 213
    }                                                                                                             // 214
                                                                                                                  //
    return _getMigrationData;                                                                                     // 211
  }()                                                                                                             // 211
});                                                                                                               // 44
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"migration.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/reactive-dict/migration.js                                                                            //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
ReactiveDict._migratedDictData = {}; // name -> data                                                              // 1
ReactiveDict._dictsToMigrate = {}; // name -> ReactiveDict                                                        // 2
                                                                                                                  //
ReactiveDict._loadMigratedDict = function (dictName) {                                                            // 4
  if (_.has(ReactiveDict._migratedDictData, dictName)) return ReactiveDict._migratedDictData[dictName];           // 5
                                                                                                                  //
  return null;                                                                                                    // 8
};                                                                                                                // 9
                                                                                                                  //
ReactiveDict._registerDictForMigrate = function (dictName, dict) {                                                // 11
  if (_.has(ReactiveDict._dictsToMigrate, dictName)) throw new Error("Duplicate ReactiveDict name: " + dictName);
                                                                                                                  //
  ReactiveDict._dictsToMigrate[dictName] = dict;                                                                  // 15
};                                                                                                                // 16
                                                                                                                  //
if (Meteor.isClient && Package.reload) {                                                                          // 18
  // Put old migrated data into ReactiveDict._migratedDictData,                                                   //
  // where it can be accessed by ReactiveDict._loadMigratedDict.                                                  //
  var migrationData = Package.reload.Reload._migrationData('reactive-dict');                                      // 21
  if (migrationData && migrationData.dicts) ReactiveDict._migratedDictData = migrationData.dicts;                 // 22
                                                                                                                  //
  // On migration, assemble the data from all the dicts that have been                                            //
  // registered.                                                                                                  //
  Package.reload.Reload._onMigrate('reactive-dict', function () {                                                 // 27
    var dictsToMigrate = ReactiveDict._dictsToMigrate;                                                            // 28
    var dataToMigrate = {};                                                                                       // 29
                                                                                                                  //
    for (var dictName in meteorBabelHelpers.sanitizeForInObject(dictsToMigrate)) {                                // 31
      dataToMigrate[dictName] = dictsToMigrate[dictName]._getMigrationData();                                     // 32
    }return [true, { dicts: dataToMigrate }];                                                                     // 31
  });                                                                                                             // 35
}                                                                                                                 // 36
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/reactive-dict/reactive-dict.js");
require("./node_modules/meteor/reactive-dict/migration.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['reactive-dict'] = {}, {
  ReactiveDict: ReactiveDict
});

})();

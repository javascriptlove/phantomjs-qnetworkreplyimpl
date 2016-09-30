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
var LocalCollection = Package.minimongo.LocalCollection;
var Minimongo = Package.minimongo.Minimongo;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var UniUtils, UniConfig;

var require = meteorInstall({"node_modules":{"meteor":{"universe:utilities":{"UniUtils.js":["babel-runtime/helpers/typeof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/UniUtils.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});             // 1
                                                                                                                       //
/* global UniUtils: true */                                                                                            //
                                                                                                                       //
                                                                                                                       //
UniUtils = {                                                                                                           // 5
    /**                                                                                                                //
     * Creates an empty object inside namespace if not existent.                                                       //
     * @param object                                                                                                   //
     * @param {String} key                                                                                             //
     * @param {*} value in key. default is object if no matches in key                                                 //
     * @example var obj = {};                                                                                          //
     * set(obj, 'foo.bar'); // {}                                                                                      //
     * console.log(obj);  // {foo:{bar:{}}}                                                                            //
     * @returns {*} it'll return created object or existing object.                                                    //
     */                                                                                                                //
    set: function () {                                                                                                 // 16
        function set(object, key, value) {                                                                             // 16
            if (typeof key !== 'string') {                                                                             // 17
                console.warn('Key must be string.');                                                                   // 18
                return object;                                                                                         // 19
            }                                                                                                          // 20
                                                                                                                       //
            var keys = key.split('.');                                                                                 // 22
            var copy = object;                                                                                         // 23
                                                                                                                       //
            while (key = keys.shift()) {                                                                               // 25
                if (copy[key] === undefined) {                                                                         // 26
                    if (+keys[0] === +keys[0]) {                                                                       // 27
                        copy[key] = [];                                                                                // 28
                    } else {                                                                                           // 29
                        copy[key] = {};                                                                                // 30
                    }                                                                                                  // 31
                }                                                                                                      // 32
                                                                                                                       //
                if (value !== undefined && keys.length === 0) {                                                        // 34
                    copy[key] = value;                                                                                 // 35
                }                                                                                                      // 36
                                                                                                                       //
                copy = copy[key];                                                                                      // 38
            }                                                                                                          // 39
                                                                                                                       //
            return object;                                                                                             // 41
        }                                                                                                              // 42
                                                                                                                       //
        return set;                                                                                                    // 16
    }(),                                                                                                               // 16
                                                                                                                       //
    /**                                                                                                                //
     * Returns nested property value.                                                                                  //
     * @param obj                                                                                                      //
     * @param key                                                                                                      //
     * @param defaultValue {*=undefined}                                                                               //
     * @example var obj = {                                                                                            //
        foo : {                                                                                                        //
            bar : 11                                                                                                   //
        }                                                                                                              //
    };                                                                                                                 //
      get(obj, 'foo.bar'); // "11"                                                                                     //
     get(obj, 'ipsum.dolorem.sit');  // undefined                                                                      //
     * @returns {*} found property or undefined if property doesn't exist.                                             //
     */                                                                                                                //
    get: function () {                                                                                                 // 59
        function get(object, key, defaultValue) {                                                                      // 59
            if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || object === null) {     // 60
                return defaultValue;                                                                                   // 61
            }                                                                                                          // 62
                                                                                                                       //
            if (typeof key !== 'string') {                                                                             // 64
                throw new Error('Key must be string.');                                                                // 65
            }                                                                                                          // 66
                                                                                                                       //
            var keys = key.split('.');                                                                                 // 68
            var last = keys.pop();                                                                                     // 69
                                                                                                                       //
            while (key = keys.shift()) {                                                                               // 71
                object = object[key];                                                                                  // 72
                                                                                                                       //
                if ((typeof object === 'undefined' ? 'undefined' : _typeof(object)) !== 'object' || object === null) {
                    return defaultValue;                                                                               // 75
                }                                                                                                      // 76
            }                                                                                                          // 77
                                                                                                                       //
            return object && object[last] !== undefined ? object[last] : defaultValue;                                 // 79
        }                                                                                                              // 80
                                                                                                                       //
        return get;                                                                                                    // 59
    }(),                                                                                                               // 59
                                                                                                                       //
    /**                                                                                                                //
     * Checks if object contains a child property.                                                                     //
     * Useful for cases where you need to check if an object contain a nested property.                                //
     * @param obj                                                                                                      //
     * @param prop                                                                                                     //
     * @returns {boolean}                                                                                              //
     */                                                                                                                //
    has: function () {                                                                                                 // 89
        function has(obj, prop, hasOwnProperty) {                                                                      // 89
            if (!_.isString(prop)) {                                                                                   // 90
                throw new Error('Parameter prop must be type of String');                                              // 91
            }                                                                                                          // 92
            var parts = prop.split('.');                                                                               // 93
                                                                                                                       //
            if (_.isArray(parts)) {                                                                                    // 95
                var last = parts.pop();                                                                                // 96
                while (prop = parts.shift()) {                                                                         // 97
                    obj = obj[prop];                                                                                   // 98
                    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {      // 99
                        return false;                                                                                  // 100
                    }                                                                                                  // 101
                }                                                                                                      // 102
                if (hasOwnProperty) {                                                                                  // 103
                    return _.has(obj, last);                                                                           // 104
                }                                                                                                      // 105
                return !!(obj && obj[last]);                                                                           // 106
            } else {                                                                                                   // 107
                if (hasOwnProperty) {                                                                                  // 108
                    return _.has(obj, prop);                                                                           // 109
                }                                                                                                      // 110
                return !!(obj && obj[prop]);                                                                           // 111
            }                                                                                                          // 112
        }                                                                                                              // 113
                                                                                                                       //
        return has;                                                                                                    // 89
    }(),                                                                                                               // 89
                                                                                                                       //
    /**                                                                                                                //
     * Search key in object or array                                                                                   //
     * @param obj or array                                                                                             //
     * @param search predicate function or value                                                                       //
     * @param context                                                                                                  //
     */                                                                                                                //
    findKey: function () {                                                                                             // 122
        function findKey(obj, search, context) {                                                                       // 122
            var result,                                                                                                // 123
                isFunction = _.isFunction(search);                                                                     // 123
                                                                                                                       //
            _.any(obj, function (value, key) {                                                                         // 126
                var match = isFunction ? search.call(context, value, key, obj) : value === search;                     // 127
                if (match) {                                                                                           // 128
                    result = key;                                                                                      // 129
                    return true;                                                                                       // 130
                }                                                                                                      // 131
            });                                                                                                        // 132
            return result;                                                                                             // 133
        }                                                                                                              // 134
                                                                                                                       //
        return findKey;                                                                                                // 122
    }(),                                                                                                               // 122
    getIdIfDocument: function () {                                                                                     // 135
        function getIdIfDocument(docId) {                                                                              // 135
            if (_.isObject(docId)) {                                                                                   // 136
                return docId._id;                                                                                      // 137
            }                                                                                                          // 138
            return docId;                                                                                              // 139
        }                                                                                                              // 140
                                                                                                                       //
        return getIdIfDocument;                                                                                        // 135
    }(),                                                                                                               // 135
    /**                                                                                                                //
     * @deprecated getUniUserObject is deprecated, please use ensureUniUser instead                                    //
     */                                                                                                                //
    getUniUserObject: function () {                                                                                    // 144
        function getUniUserObject(user, withoutLoggedIn) {                                                             // 144
            if (!withoutLoggedIn) {                                                                                    // 145
                return UniUsers.ensureUniUser(user, Match.Any);                                                        // 146
            }                                                                                                          // 147
            return UniUsers.ensureUniUser(user || null, Match.Any);                                                    // 148
        }                                                                                                              // 149
                                                                                                                       //
        return getUniUserObject;                                                                                       // 144
    }(),                                                                                                               // 144
    /**                                                                                                                //
     * Compares documents and returns diff                                                                             //
     * @param doc1 document will be compared against to document in doc2 parameter.                                    //
     * @param doc2 against to.                                                                                         //
     * @returns {{}}                                                                                                   //
     */                                                                                                                //
    docDiff: function () {                                                                                             // 156
        function docDiff(doc1, doc2) {                                                                                 // 156
            var diff = {};                                                                                             // 157
            for (var k1 in meteorBabelHelpers.sanitizeForInObject(doc1)) {                                             // 158
                if (!EJSON.equals(doc1[k1], doc2[k1])) {                                                               // 159
                    diff[k1] = doc2[k1];                                                                               // 160
                }                                                                                                      // 161
            }                                                                                                          // 162
            for (var k2 in meteorBabelHelpers.sanitizeForInObject(doc2)) {                                             // 163
                if (!doc1[k2]) {                                                                                       // 164
                    diff[k2] = doc2[k2];                                                                               // 165
                }                                                                                                      // 166
            }                                                                                                          // 167
            return diff;                                                                                               // 168
        }                                                                                                              // 169
                                                                                                                       //
        return docDiff;                                                                                                // 156
    }(),                                                                                                               // 156
                                                                                                                       //
    /**                                                                                                                //
     * Formatting currency                                                                                             //
     * @param number{number}                                                                                           //
     * @param sections{string}                                                                                         //
     * @param decimals{string}                                                                                         //
     * @returns {string}                                                                                               //
     */                                                                                                                //
    formatCurrency: function () {                                                                                      // 178
        function formatCurrency(number, sections, decimals) {                                                          // 178
            var numberFormatMap = {                                                                                    // 179
                'a': '\'',                                                                                             // 180
                'c': ',',                                                                                              // 181
                'd': '.',                                                                                              // 182
                's': ' '                                                                                               // 183
            };                                                                                                         // 179
                                                                                                                       //
            decimals = numberFormatMap[decimals] ? numberFormatMap[decimals] : decimals;                               // 186
            sections = numberFormatMap[sections] ? numberFormatMap[sections] : sections;                               // 187
                                                                                                                       //
            return number.toFixed(2).replace('.', decimals).replace(/./g, function (digit, index, digits) {            // 189
                if (index && digit !== decimals && (digits.length - index) % 3 === 0) {                                // 190
                    return sections + digit;                                                                           // 191
                }                                                                                                      // 192
                                                                                                                       //
                return digit;                                                                                          // 194
            });                                                                                                        // 195
        }                                                                                                              // 196
                                                                                                                       //
        return formatCurrency;                                                                                         // 178
    }(),                                                                                                               // 178
    /**                                                                                                                //
     * Gets array of top-level fields, which will be changed by modifier (this from update method)                     //
     * @param updateModifier modifier from update method                                                               //
     * @returns {Array} list of top-level from doc                                                                     //
     */                                                                                                                //
    getFieldsFromUpdateModifier: function () {                                                                         // 202
        function getFieldsFromUpdateModifier(updateModifier) {                                                         // 202
            var fields = [];                                                                                           // 203
            Object.keys(updateModifier).forEach(function (op) {                                                        // 204
                if (ALLOWED_UPDATE_OPERATIONS[op] === 1) {                                                             // 205
                    Object.keys(updateModifier[op]).forEach(function (field) {                                         // 206
                        if (field.indexOf('.') !== -1) {                                                               // 207
                            field = field.substring(0, field.indexOf('.'));                                            // 208
                        }                                                                                              // 209
                        if (!_.contains(fields, field)) {                                                              // 210
                            fields.push(field);                                                                        // 211
                        }                                                                                              // 212
                    });                                                                                                // 213
                } else {                                                                                               // 214
                    fields.push(op);                                                                                   // 215
                }                                                                                                      // 216
            });                                                                                                        // 217
            return fields;                                                                                             // 218
        }                                                                                                              // 219
                                                                                                                       //
        return getFieldsFromUpdateModifier;                                                                            // 202
    }(),                                                                                                               // 202
    /**                                                                                                                //
     * Gets simulation of new version of document passed as a second argument                                          //
     * @param updateModifier modifier from update method                                                               //
     * @param oldDoc default empty object                                                                              //
     * @returns {*}                                                                                                    //
     */                                                                                                                //
    getPreviewOfDocumentAfterUpdate: function () {                                                                     // 226
        function getPreviewOfDocumentAfterUpdate(updateModifier, oldDoc) {                                             // 226
            oldDoc = oldDoc || {};                                                                                     // 227
            var id = tmpCollection.insert(oldDoc);                                                                     // 228
            tmpCollection.update(id, updateModifier);                                                                  // 229
            var newDoc = tmpCollection.findOne(id);                                                                    // 230
            if (id !== oldDoc._id) {                                                                                   // 231
                delete newDoc._id;                                                                                     // 232
            }                                                                                                          // 233
            tmpCollection.remove(id);                                                                                  // 234
            return newDoc;                                                                                             // 235
        }                                                                                                              // 236
                                                                                                                       //
        return getPreviewOfDocumentAfterUpdate;                                                                        // 226
    }(),                                                                                                               // 226
    /**                                                                                                                //
     * @deprecated please use Object assign instead.                                                                   //
     */                                                                                                                //
    assign: Object.assign.bind(Object)                                                                                 // 240
};                                                                                                                     // 5
                                                                                                                       //
// piece of code from: meteor/packages/mongo/collection.js                                                             //
var ALLOWED_UPDATE_OPERATIONS = {                                                                                      // 244
    $inc: 1, $set: 1, $unset: 1, $addToSet: 1, $pop: 1, $pullAll: 1, $pull: 1,                                         // 245
    $pushAll: 1, $push: 1, $bit: 1                                                                                     // 246
};                                                                                                                     // 244
                                                                                                                       //
var tmpCollection = new LocalCollection(null);                                                                         // 249
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"RecursiveIterator.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/toConsumableArray","babel-runtime/helpers/classCallCheck",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/RecursiveIterator.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _toConsumableArray;module.import('babel-runtime/helpers/toConsumableArray',{"default":function(v){_toConsumableArray=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});
                                                                                                                       //
                                                                                                                       //
// PRIVATE PROPERTIES                                                                                                  //
var BYPASS_MODE = '__bypassMode';                                                                                      // 2
var IGNORE_CIRCULAR = '__ignoreCircular';                                                                              // 3
var MAX_DEEP = '__maxDeep';                                                                                            // 4
var CACHE = '__cache';                                                                                                 // 5
var QUEUE = '__queue';                                                                                                 // 6
var STATE = '__state';                                                                                                 // 7
var floor = Math.floor;                                                                                                //
var keys = Object.keys;                                                                                                //
                                                                                                                       //
                                                                                                                       //
var EMPTY_STATE = {};                                                                                                  // 11
                                                                                                                       //
UniUtils.RecursiveIterator = function () {                                                                             // 14
    /**                                                                                                                //
     * @param {Object|Array} root                                                                                      //
     * @param {Number} [bypassMode='vertical']                                                                         //
     * @param {Boolean} [ignoreCircular=false]                                                                         //
     * @param {Number} [maxDeep=100]                                                                                   //
     */                                                                                                                //
                                                                                                                       //
    function RecursiveIterator(root) {                                                                                 // 21
        var bypassMode = arguments.length <= 1 || arguments[1] === undefined ? 'vertical' : arguments[1];              // 21
        var ignoreCircular = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];               // 21
        var maxDeep = arguments.length <= 3 || arguments[3] === undefined ? 100 : arguments[3];                        // 21
                                                                                                                       //
        _classCallCheck(this, RecursiveIterator);                                                                      // 21
                                                                                                                       //
        this[BYPASS_MODE] = bypassMode === 'horizontal' || bypassMode === 1;                                           // 22
        this[IGNORE_CIRCULAR] = ignoreCircular;                                                                        // 23
        this[MAX_DEEP] = maxDeep;                                                                                      // 24
        this[CACHE] = [];                                                                                              // 25
        this[QUEUE] = [];                                                                                              // 26
        this[STATE] = this.getState(undefined, root);                                                                  // 27
        this.__makeIterable();                                                                                         // 28
    }                                                                                                                  // 29
    /**                                                                                                                //
     * @returns {Object}                                                                                               //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.next = function () {                                                                   // 14
        function next() {                                                                                              // 14
            var _ref = this[STATE] || EMPTY_STATE;                                                                     // 33
                                                                                                                       //
            var node = _ref.node;                                                                                      // 33
            var path = _ref.path;                                                                                      // 33
            var deep = _ref.deep;                                                                                      // 33
                                                                                                                       //
                                                                                                                       //
            if (this[MAX_DEEP] > deep) {                                                                               // 36
                if (this.isNode(node)) {                                                                               // 37
                    if (this.isCircular(node)) {                                                                       // 38
                        if (this[IGNORE_CIRCULAR]) {                                                                   // 39
                            // skip                                                                                    //
                        } else {                                                                                       // 41
                                throw new Error('Circular reference');                                                 // 42
                            }                                                                                          // 43
                    } else {                                                                                           // 44
                        if (this.onStepInto(this[STATE])) {                                                            // 45
                            var _QUEUE;                                                                                // 45
                                                                                                                       //
                            var descriptors = this.getStatesOfChildNodes(node, path, deep);                            // 46
                            var method = this[BYPASS_MODE] ? 'push' : 'unshift';                                       // 47
                            (_QUEUE = this[QUEUE])[method].apply(_QUEUE, _toConsumableArray(descriptors));             // 48
                            this[CACHE].push(node);                                                                    // 49
                        }                                                                                              // 50
                    }                                                                                                  // 51
                }                                                                                                      // 52
            }                                                                                                          // 53
                                                                                                                       //
            var value = this[QUEUE].shift();                                                                           // 55
            var done = !value;                                                                                         // 56
                                                                                                                       //
            this[STATE] = value;                                                                                       // 58
                                                                                                                       //
            if (done) this.destroy();                                                                                  // 60
                                                                                                                       //
            return { value: value, done: done };                                                                       // 62
        }                                                                                                              // 63
                                                                                                                       //
        return next;                                                                                                   // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     *                                                                                                                 //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.destroy = function () {                                                                // 14
        function destroy() {                                                                                           // 14
            this[QUEUE].length = 0;                                                                                    // 68
            this[CACHE].length = 0;                                                                                    // 69
            this[STATE] = null;                                                                                        // 70
        }                                                                                                              // 71
                                                                                                                       //
        return destroy;                                                                                                // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * @param {*} any                                                                                                  //
     * @returns {Boolean}                                                                                              //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.isNode = function () {                                                                 // 14
        function isNode(any) {                                                                                         // 14
            return isTrueObject(any);                                                                                  // 77
        }                                                                                                              // 78
                                                                                                                       //
        return isNode;                                                                                                 // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * @param {*} any                                                                                                  //
     * @returns {Boolean}                                                                                              //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.isLeaf = function () {                                                                 // 14
        function isLeaf(any) {                                                                                         // 14
            return !this.isNode(any);                                                                                  // 84
        }                                                                                                              // 85
                                                                                                                       //
        return isLeaf;                                                                                                 // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * @param {*} any                                                                                                  //
     * @returns {Boolean}                                                                                              //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.isCircular = function () {                                                             // 14
        function isCircular(any) {                                                                                     // 14
            return this[CACHE].indexOf(any) !== -1;                                                                    // 91
        }                                                                                                              // 92
                                                                                                                       //
        return isCircular;                                                                                             // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * Returns states of child nodes                                                                                   //
     * @param {Object} node                                                                                            //
     * @param {Array} path                                                                                             //
     * @param {Number} deep                                                                                            //
     * @returns {Array<Object>}                                                                                        //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.getStatesOfChildNodes = function () {                                                  // 14
        function getStatesOfChildNodes(node, path, deep) {                                                             // 14
            var _this = this;                                                                                          // 100
                                                                                                                       //
            return getKeys(node).map(function (key) {                                                                  // 101
                return _this.getState(node, node[key], key, path.concat(key), deep + 1);                               // 101
            });                                                                                                        // 101
        }                                                                                                              // 104
                                                                                                                       //
        return getStatesOfChildNodes;                                                                                  // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * Returns state of node. Calls for each node                                                                      //
     * @param {Object} [parent]                                                                                        //
     * @param {*} [node]                                                                                               //
     * @param {String} [key]                                                                                           //
     * @param {Array} [path]                                                                                           //
     * @param {Number} [deep]                                                                                          //
     * @returns {Object}                                                                                               //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.getState = function () {                                                               // 14
        function getState(parent, node, key) {                                                                         // 14
            var path = arguments.length <= 3 || arguments[3] === undefined ? [] : arguments[3];                        // 114
            var deep = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];                         // 114
                                                                                                                       //
            return { parent: parent, node: node, key: key, path: path, deep: deep };                                   // 115
        }                                                                                                              // 116
                                                                                                                       //
        return getState;                                                                                               // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * Callback                                                                                                        //
     * @param {Object} state                                                                                           //
     * @returns {Boolean}                                                                                              //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.onStepInto = function () {                                                             // 14
        function onStepInto(state) {                                                                                   // 14
            return true;                                                                                               // 123
        }                                                                                                              // 124
                                                                                                                       //
        return onStepInto;                                                                                             // 14
    }();                                                                                                               // 14
    /**                                                                                                                //
     * Only for es6                                                                                                    //
     * @private                                                                                                        //
     */                                                                                                                //
                                                                                                                       //
                                                                                                                       //
    RecursiveIterator.prototype.__makeIterable = function () {                                                         // 14
        function __makeIterable() {                                                                                    // 14
            var _this2 = this;                                                                                         // 129
                                                                                                                       //
            try {                                                                                                      // 130
                this[Symbol.iterator] = function () {                                                                  // 131
                    return _this2;                                                                                     // 131
                };                                                                                                     // 131
            } catch (e) {}                                                                                             // 132
        }                                                                                                              // 133
                                                                                                                       //
        return __makeIterable;                                                                                         // 14
    }();                                                                                                               // 14
                                                                                                                       //
    return RecursiveIterator;                                                                                          // 14
}();                                                                                                                   // 14
                                                                                                                       //
var GLOBAL_OBJECT = Meteor.isServer ? global : window;                                                                 // 136
                                                                                                                       //
/**                                                                                                                    //
 * @param {*} any                                                                                                      //
 * @returns {Boolean}                                                                                                  //
 */                                                                                                                    //
function isGlobal(any) {                                                                                               // 142
    return any === GLOBAL_OBJECT;                                                                                      // 143
}                                                                                                                      // 144
                                                                                                                       //
function isTrueObject(any) {                                                                                           // 146
    return any !== null && (typeof any === 'undefined' ? 'undefined' : _typeof(any)) === 'object';                     // 147
}                                                                                                                      // 148
                                                                                                                       //
/**                                                                                                                    //
 * @param {*} any                                                                                                      //
 * @returns {Boolean}                                                                                                  //
 */                                                                                                                    //
function isArrayLike(any) {                                                                                            // 155
    if (!isTrueObject(any)) return false;                                                                              // 156
    if (isGlobal(any)) return false;                                                                                   // 157
    if (!('length' in any)) return false;                                                                              // 158
    var length = any.length;                                                                                           // 159
    if (length === 0) return true;                                                                                     // 160
    return length - 1 in any;                                                                                          // 161
}                                                                                                                      // 162
                                                                                                                       //
/**                                                                                                                    //
 * @param {Object|Array} object                                                                                        //
 * @returns {Array<String>}                                                                                            //
 */                                                                                                                    //
function getKeys(object) {                                                                                             // 169
    var keys_ = keys(object);                                                                                          // 170
    if (Array.isArray(object)) {                                                                                       // 171
        // skip sort                                                                                                   //
    } else if (isArrayLike(object)) {                                                                                  // 173
            // only integer values                                                                                     //
            keys_ = keys_.filter(function (key) {                                                                      // 175
                return floor(Number(key)) == key;                                                                      // 175
            });                                                                                                        // 175
            // skip sort                                                                                               //
        } else {                                                                                                       // 177
                // sort                                                                                                //
                keys_ = keys_.sort();                                                                                  // 179
            }                                                                                                          // 180
    return keys_;                                                                                                      // 181
}                                                                                                                      // 182
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"deepExtend.js":["babel-runtime/helpers/typeof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/deepExtend.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});                          //
/*!                                                                                                                    //
 * @description Recursive object extending                                                                             //
 * @author Viacheslav Lotsmanov <lotsmanov89@gmail.com>                                                                //
 * @license MIT                                                                                                        //
 *                                                                                                                     //
 * The MIT License (MIT)                                                                                               //
 *                                                                                                                     //
 * Copyright (c) 2013-2015 Viacheslav Lotsmanov                                                                        //
 *                                                                                                                     //
 * Permission is hereby granted, free of charge, to any person obtaining a copy of                                     //
 * this software and associated documentation files (the "Software"), to deal in                                       //
 * the Software without restriction, including without limitation the rights to                                        //
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of                                    //
 * the Software, and to permit persons to whom the Software is furnished to do so,                                     //
 * subject to the following conditions:                                                                                //
 *                                                                                                                     //
 * The above copyright notice and this permission notice shall be included in all                                      //
 * copies or substantial portions of the Software.                                                                     //
 *                                                                                                                     //
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR                                          //
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS                                    //
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR                                      //
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER                                      //
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN                                             //
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.                                          //
 */                                                                                                                    //
                                                                                                                       //
var isBuffer = typeof Buffer !== 'undefined';                                                                          // 28
                                                                                                                       //
function isSpecificValue(val) {                                                                                        // 30
    return !!(isBuffer && val instanceof Buffer || val instanceof Date || val instanceof RegExp);                      // 31
}                                                                                                                      // 36
                                                                                                                       //
function cloneSpecificValue(val) {                                                                                     // 38
    if (isBuffer && val instanceof Buffer) {                                                                           // 39
        var x = new Buffer(val.length);                                                                                // 40
        val.copy(x);                                                                                                   // 41
        return x;                                                                                                      // 42
    } else if (val instanceof Date) {                                                                                  // 43
        return new Date(val.getTime());                                                                                // 44
    } else if (val instanceof RegExp) {                                                                                // 45
        return new RegExp(val);                                                                                        // 46
    } else {                                                                                                           // 47
        throw new Error('Unexpected situation');                                                                       // 48
    }                                                                                                                  // 49
}                                                                                                                      // 50
                                                                                                                       //
/**                                                                                                                    //
 * Recursive cloning array.                                                                                            //
 */                                                                                                                    //
function deepCloneArray(arr) {                                                                                         // 55
    var clone = [];                                                                                                    // 56
    arr.forEach(function (item, index) {                                                                               // 57
        if ((typeof item === 'undefined' ? 'undefined' : _typeof(item)) === 'object' && item !== null) {               // 58
            if (Array.isArray(item)) {                                                                                 // 59
                clone[index] = deepCloneArray(item);                                                                   // 60
            } else if (isSpecificValue(item)) {                                                                        // 61
                clone[index] = cloneSpecificValue(item);                                                               // 62
            } else {                                                                                                   // 63
                clone[index] = deepExtend({}, item);                                                                   // 64
            }                                                                                                          // 65
        } else {                                                                                                       // 66
            clone[index] = item;                                                                                       // 67
        }                                                                                                              // 68
    });                                                                                                                // 69
    return clone;                                                                                                      // 70
}                                                                                                                      // 71
                                                                                                                       //
/**                                                                                                                    //
 * Extening object that entered in first argument.                                                                     //
 *                                                                                                                     //
 * Returns extended object or false if have no target object or incorrect type.                                        //
 *                                                                                                                     //
 * If you wish to clone source object (without modify it), just use empty new                                          //
 * object as first argument, like this:                                                                                //
 *   deepExtend({}, yourObj_1, [yourObj_N]);                                                                           //
 */                                                                                                                    //
function deepExtend() /*obj_1, [obj_2], [obj_N]*/{                                                                     // 82
    if (arguments.length < 1 || _typeof(arguments[0]) !== 'object') {                                                  // 83
        return false;                                                                                                  // 84
    }                                                                                                                  // 85
                                                                                                                       //
    if (arguments.length < 2) {                                                                                        // 87
        return arguments[0];                                                                                           // 88
    }                                                                                                                  // 89
                                                                                                                       //
    var target = arguments[0];                                                                                         // 91
                                                                                                                       //
    // convert arguments to array and cut off target object                                                            //
    var args = Array.prototype.slice.call(arguments, 1);                                                               // 94
                                                                                                                       //
    var val, src, clone;                                                                                               // 96
                                                                                                                       //
    args.forEach(function (obj) {                                                                                      // 98
        // skip argument if it is array or isn't object                                                                //
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || Array.isArray(obj)) {            // 100
            return;                                                                                                    // 101
        }                                                                                                              // 102
                                                                                                                       //
        Object.keys(obj).forEach(function (key) {                                                                      // 104
            src = target[key]; // source value                                                                         // 105
            val = obj[key]; // new value                                                                               // 106
                                                                                                                       //
            // recursion prevention                                                                                    //
            if (val === target) {                                                                                      // 109
                return;                                                                                                // 110
                                                                                                                       //
                /**                                                                                                    //
                 * if new value isn't object then just overwrite by new value                                          //
                 * instead of extending.                                                                               //
                 */                                                                                                    //
            } else if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) !== 'object' || val === null) {       // 116
                    target[key] = val;                                                                                 // 117
                    return;                                                                                            // 118
                                                                                                                       //
                    // just clone arrays (and recursive clone objects inside)                                          //
                } else if (Array.isArray(val)) {                                                                       // 121
                        target[key] = deepCloneArray(val);                                                             // 122
                        return;                                                                                        // 123
                                                                                                                       //
                        // custom cloning and overwrite for specific objects                                           //
                    } else if (isSpecificValue(val)) {                                                                 // 126
                            target[key] = cloneSpecificValue(val);                                                     // 127
                            return;                                                                                    // 128
                                                                                                                       //
                            // overwrite by new value if source isn't object or array                                  //
                        } else if ((typeof src === 'undefined' ? 'undefined' : _typeof(src)) !== 'object' || src === null || Array.isArray(src)) {
                                target[key] = deepExtend({}, val);                                                     // 132
                                return;                                                                                // 133
                                                                                                                       //
                                // source value and new value is objects both, extending...                            //
                            } else {                                                                                   // 136
                                    target[key] = deepExtend(src, val);                                                // 137
                                    return;                                                                            // 138
                                }                                                                                      // 139
        });                                                                                                            // 140
    });                                                                                                                // 141
                                                                                                                       //
    return target;                                                                                                     // 143
}                                                                                                                      // 144
                                                                                                                       //
UniUtils.deepExtend = deepExtend;                                                                                      // 146
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"deepEqual.js":["babel-runtime/helpers/typeof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/deepEqual.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});                          //
var pSlice = Array.prototype.slice;                                                                                    // 1
var objectKeys = Object.keys;                                                                                          // 2
                                                                                                                       //
function isArguments(object) {                                                                                         // 4
    return Object.prototype.toString.call(object) == '[object Arguments]';                                             // 5
}                                                                                                                      // 6
                                                                                                                       //
var deepEqual = function deepEqual(actual, expected, opts) {                                                           // 8
    if (!opts) opts = {};                                                                                              // 9
    // 7.1. All identical values are equivalent, as determined by ===.                                                 //
    if (actual === expected) {                                                                                         // 11
        return true;                                                                                                   // 12
    } else if (actual instanceof Date && expected instanceof Date) {                                                   // 14
        return actual.getTime() === expected.getTime();                                                                // 15
                                                                                                                       //
        // 7.3. Other pairs that do not both pass typeof value == 'object',                                            //
        // equivalence is determined by ==.                                                                            //
    } else if ((typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
            return opts.strict ? actual === expected : actual == expected;                                             // 20
                                                                                                                       //
            // 7.4. For all other Object pairs, including Array objects, equivalence is                                //
            // determined by having the same number of owned properties (as verified                                   //
            // with Object.prototype.hasOwnProperty.call), the same set of keys                                        //
            // (although not necessarily the same order), equivalent values for every                                  //
            // corresponding key, and an identical 'prototype' property. Note: this                                    //
            // accounts for both named and indexed properties on Arrays.                                               //
        } else {                                                                                                       // 28
                return objEquiv(actual, expected, opts);                                                               // 29
            }                                                                                                          // 30
};                                                                                                                     // 31
                                                                                                                       //
function isUndefinedOrNull(value) {                                                                                    // 33
    return value === null || value === undefined;                                                                      // 34
}                                                                                                                      // 35
                                                                                                                       //
function isBuffer(x) {                                                                                                 // 37
    if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
    if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {                                               // 39
        return false;                                                                                                  // 40
    }                                                                                                                  // 41
    if (x.length > 0 && typeof x[0] !== 'number') return false;                                                        // 42
    return true;                                                                                                       // 43
}                                                                                                                      // 44
                                                                                                                       //
function objEquiv(a, b, opts) {                                                                                        // 46
    var i, key;                                                                                                        // 47
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;                                                    // 48
    // an identical 'prototype' property.                                                                              //
    if (a.prototype !== b.prototype) return false;                                                                     // 51
    //~~~I've managed to break Object.keys through screwy arguments passing.                                           //
    //   Converting to array solves the problem.                                                                       //
    if (isArguments(a)) {                                                                                              // 54
        if (!isArguments(b)) {                                                                                         // 55
            return false;                                                                                              // 56
        }                                                                                                              // 57
        a = pSlice.call(a);                                                                                            // 58
        b = pSlice.call(b);                                                                                            // 59
        return deepEqual(a, b, opts);                                                                                  // 60
    }                                                                                                                  // 61
    if (isBuffer(a)) {                                                                                                 // 62
        if (!isBuffer(b)) {                                                                                            // 63
            return false;                                                                                              // 64
        }                                                                                                              // 65
        if (a.length !== b.length) return false;                                                                       // 66
        for (i = 0; i < a.length; i++) {                                                                               // 67
            if (a[i] !== b[i]) return false;                                                                           // 68
        }                                                                                                              // 69
        return true;                                                                                                   // 70
    }                                                                                                                  // 71
    try {                                                                                                              // 72
        var ka = objectKeys(a),                                                                                        // 73
            kb = objectKeys(b);                                                                                        // 73
    } catch (e) {                                                                                                      // 75
        //happens when one is a string literal and the other isn't                                                     //
        return false;                                                                                                  // 76
    }                                                                                                                  // 77
    // having the same number of owned properties (keys incorporates                                                   //
    // hasOwnProperty)                                                                                                 //
    if (ka.length != kb.length) return false;                                                                          // 80
    //the same set of keys (although not necessarily the same order),                                                  //
    ka.sort();                                                                                                         // 83
    kb.sort();                                                                                                         // 84
    //~~~cheap key test                                                                                                //
    for (i = ka.length - 1; i >= 0; i--) {                                                                             // 86
        if (ka[i] != kb[i]) return false;                                                                              // 87
    }                                                                                                                  // 89
    //equivalent values for every corresponding key, and                                                               //
    //~~~possibly expensive deep test                                                                                  //
    for (i = ka.length - 1; i >= 0; i--) {                                                                             // 92
        key = ka[i];                                                                                                   // 93
        if (!deepEqual(a[key], b[key], opts)) return false;                                                            // 94
    }                                                                                                                  // 95
    return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
}                                                                                                                      // 97
                                                                                                                       //
UniUtils.deepEqual = deepEqual;                                                                                        // 100
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"UniUtilsStrings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/UniUtilsStrings.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';                                                                                                          // 1
                                                                                                                       //
/**                                                                                                                    //
 * Capitalize a string                                                                                                 //
 * @alias Vazco.capitalize                                                                                             //
 * @param {string} string String to capitalize                                                                         //
 * @returns {string}                                                                                                   //
 */                                                                                                                    //
                                                                                                                       //
UniUtils.capitalize = function (string) {                                                                              // 10
    return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();                                         // 11
};                                                                                                                     // 12
                                                                                                                       //
/**                                                                                                                    //
 * Capitalize a first letter                                                                                           //
 * @alias Vazco.capitalizeFirst                                                                                        //
 * @param {string} string String to capitalize first letter                                                            //
 * @returns {string}                                                                                                   //
 */                                                                                                                    //
UniUtils.capitalizeFirst = function (string) {                                                                         // 21
    return string.charAt(0).toUpperCase() + string.slice(1);                                                           // 22
};                                                                                                                     // 23
                                                                                                                       //
/**                                                                                                                    //
 * Transform string into insensitive Regexp without flag i                                                             //
 * This can help you with searching in minimongo                                                                       //
 * @param term {String}                                                                                                //
 * @returns {RegExp}                                                                                                   //
 */                                                                                                                    //
UniUtils.getInSensitiveRegExpForTerm = function (term) {                                                               // 31
    check(term, String);                                                                                               // 32
    term = _.map(term, function (v) {                                                                                  // 33
        var n = v.toLowerCase();                                                                                       // 34
        n += v.toUpperCase();                                                                                          // 35
        return '[' + n + ']';                                                                                          // 36
    });                                                                                                                // 37
    term = term.join('');                                                                                              // 38
    return new RegExp(term);                                                                                           // 39
};                                                                                                                     // 40
                                                                                                                       //
/**                                                                                                                    //
 * Generates random string hash                                                                                        //
 * @alias Vazco.randomString                                                                                           //
 * @param {number} length length of generated hash @default 5                                                          //
 * @param {number} base @default 36                                                                                    //
 * @returns {string}                                                                                                   //
 */                                                                                                                    //
UniUtils.randomString = function (length, base) {                                                                      // 50
    return (Math.random() + 1).toString(base || 36).substr(2, length || 5);                                            // 51
};                                                                                                                     // 52
                                                                                                                       //
/**                                                                                                                    //
 * camelCase a string                                                                                                  //
 * @alias Vazco.camelCase                                                                                              //
 * @param {string} string String to camelCase                                                                          //
 * @returns {string}                                                                                                   //
 */                                                                                                                    //
UniUtils.camelCase = function (string) {                                                                               // 61
    return string.toLowerCase().replace(/ (.)/g, function (match, group1) {                                            // 62
        return group1.toUpperCase();                                                                                   // 63
    });                                                                                                                // 64
};                                                                                                                     // 65
                                                                                                                       //
/**                                                                                                                    //
 * remove international special characters - replaceSpecialChars a string                                              //
 * @alias Vazco.replaceSpecialChars                                                                                    //
 * @param {string} string String                                                                                       //
 * @returns {string}                                                                                                   //
 */                                                                                                                    //
UniUtils.replaceSpecialChars = function (string) {                                                                     // 74
    var _specialChars = {                                                                                              // 75
        'á': 'a',                                                                                                      // 76
        'Á': 'A',                                                                                                      // 77
        'é': 'e',                                                                                                      // 78
        'É': 'E',                                                                                                      // 79
        'í': 'i',                                                                                                      // 80
        'Í': 'I',                                                                                                      // 81
        'ö': 'o',                                                                                                      // 82
        'Ö': 'O',                                                                                                      // 83
        'ő': 'o',                                                                                                      // 84
        'Ő': 'O',                                                                                                      // 85
        'ó': 'o',                                                                                                      // 86
        'Ó': 'O',                                                                                                      // 87
        'ü': 'u',                                                                                                      // 88
        'Ü': 'U',                                                                                                      // 89
        'ű': 'u',                                                                                                      // 90
        'Ű': 'U',                                                                                                      // 91
        'ú': 'u',                                                                                                      // 92
        'Ú': 'U',                                                                                                      // 93
                                                                                                                       //
        'à': 'a',                                                                                                      // 95
        'è': 'e',                                                                                                      // 96
        'ì': 'i',                                                                                                      // 97
                                                                                                                       //
        'ò': 'o',                                                                                                      // 99
        'ù': 'u',                                                                                                      // 100
        'À': 'A',                                                                                                      // 101
        'È': 'E',                                                                                                      // 102
        'Ì': 'I',                                                                                                      // 103
                                                                                                                       //
        'Ò': 'O',                                                                                                      // 105
        'Ù': 'U',                                                                                                      // 106
        'â': 'a',                                                                                                      // 107
        'ê': 'e',                                                                                                      // 108
        'î': 'i',                                                                                                      // 109
        'ô': 'o',                                                                                                      // 110
        'û': 'u',                                                                                                      // 111
                                                                                                                       //
        'Â': 'A',                                                                                                      // 113
        'Ê': 'E',                                                                                                      // 114
        'Î': 'I',                                                                                                      // 115
        'Ô': 'O',                                                                                                      // 116
        'Û': 'U',                                                                                                      // 117
                                                                                                                       //
        'ã': 'a',                                                                                                      // 119
        'ñ': 'n',                                                                                                      // 120
        'õ': 'o',                                                                                                      // 121
        'Ã': 'A',                                                                                                      // 122
        'Ñ': 'N',                                                                                                      // 123
        'Õ': 'O',                                                                                                      // 124
                                                                                                                       //
        'ä': 'a',                                                                                                      // 126
        'ë': 'e',                                                                                                      // 127
        'ï': 'i',                                                                                                      // 128
        'ÿ': 'y',                                                                                                      // 129
                                                                                                                       //
        'Ä': 'A',                                                                                                      // 131
        'Ë': 'E',                                                                                                      // 132
        'Ï': 'I',                                                                                                      // 133
        'Ÿ': 'Y',                                                                                                      // 134
                                                                                                                       //
        'ą': 'a',                                                                                                      // 136
        'Ą': 'A',                                                                                                      // 137
        'ę': 'e',                                                                                                      // 138
        'Ę': 'E',                                                                                                      // 139
        'ł': 'l',                                                                                                      // 140
        'Ł': 'L',                                                                                                      // 141
        'ś': 's',                                                                                                      // 142
        'Ś': 'S',                                                                                                      // 143
        'ń': 'n',                                                                                                      // 144
        'Ń': 'N',                                                                                                      // 145
        'ż': 'z',                                                                                                      // 146
        'Ż': 'Z',                                                                                                      // 147
        'ź': 'z',                                                                                                      // 148
        'Ź': 'Z',                                                                                                      // 149
                                                                                                                       //
        'å': 'a',                                                                                                      // 151
        'Å': 'A',                                                                                                      // 152
        'ß': 'ss'                                                                                                      // 153
    };                                                                                                                 // 75
    return string.replace(/[áÁéÉíÍöÖőŐóÓüÜűŰúÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛãñõÃÑÕäëïÿÄËÏŸąĄęĘłŁśŚńŃżŻźŹåÅ]/g, function (c) {    // 155
        return _specialChars[c];                                                                                       // 157
    });                                                                                                                // 157
};                                                                                                                     // 159
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UniConfig.js":["babel-runtime/helpers/typeof",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/UniConfig.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
'use strict';var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});             // 1
/* global UniConfig: true */                                                                                           //
                                                                                                                       //
                                                                                                                       //
var _configCollection = new Meteor.Collection('universe_configs');                                                     // 3
UniConfig = {                                                                                                          // 4
    'public': {                                                                                                        // 5
        set: function () {                                                                                             // 6
            function set(name, value, isServerWriteOnly) {                                                             // 6
                var row = { name: name, value: value, access: 'public', lastModified: new Date() };                    // 7
                if (isServerWriteOnly) {                                                                               // 8
                    row.isServerWriteOnly = isServerWriteOnly;                                                         // 9
                }                                                                                                      // 10
                                                                                                                       //
                if (Meteor.isClient) {                                                                                 // 12
                    return _set(row);                                                                                  // 13
                }                                                                                                      // 14
                                                                                                                       //
                return !!_configCollection.upsert({ name: name, access: 'public' }, row);                              // 16
            }                                                                                                          // 20
                                                                                                                       //
            return set;                                                                                                // 6
        }(),                                                                                                           // 6
        get: function () {                                                                                             // 21
            function get(name, defaultValue) {                                                                         // 21
                var obj = _configCollection.findOne({ name: name, access: 'public' });                                 // 22
                if (_.isUndefined(obj)) {                                                                              // 23
                    return defaultValue;                                                                               // 24
                }                                                                                                      // 25
                return obj.value;                                                                                      // 26
            }                                                                                                          // 27
                                                                                                                       //
            return get;                                                                                                // 21
        }(),                                                                                                           // 21
        getRow: function () {                                                                                          // 28
            function getRow(name) {                                                                                    // 28
                return _configCollection.findOne({ name: name, access: 'public' });                                    // 29
            }                                                                                                          // 30
                                                                                                                       //
            return getRow;                                                                                             // 28
        }(),                                                                                                           // 28
        find: function () {                                                                                            // 31
            function find(selector, options) {                                                                         // 31
                options = options || {};                                                                               // 32
                selector = _.extend({ access: 'public' }, selector || {});                                             // 33
                return _configCollection.find(selector, options);                                                      // 34
            }                                                                                                          // 35
                                                                                                                       //
            return find;                                                                                               // 31
        }()                                                                                                            // 31
    },                                                                                                                 // 5
    users: {                                                                                                           // 37
        set: function () {                                                                                             // 38
            function set(name, value, userId) {                                                                        // 38
                if (!userId) {                                                                                         // 39
                    userId = Meteor.userId();                                                                          // 40
                }                                                                                                      // 41
                userId = UniUtils.getIdIfDocument(userId);                                                             // 42
                if (!userId) {                                                                                         // 43
                    throw Meteor.Error(404, 'Missing userId');                                                         // 44
                }                                                                                                      // 45
                var row = { name: name, value: value, access: userId, lastModified: new Date() };                      // 46
                if (Meteor.isClient) {                                                                                 // 47
                    return _set(row);                                                                                  // 48
                }                                                                                                      // 49
                                                                                                                       //
                if (_.isUndefined(value)) {                                                                            // 51
                    return !!_configCollection.remove({ name: name, access: userId });                                 // 52
                }                                                                                                      // 53
                                                                                                                       //
                return !!_configCollection.upsert({ name: name, access: userId }, row);                                // 55
            }                                                                                                          // 59
                                                                                                                       //
            return set;                                                                                                // 38
        }(),                                                                                                           // 38
        get: function () {                                                                                             // 60
            function get(name, defaultValue, userId) {                                                                 // 60
                if (!userId) {                                                                                         // 61
                    userId = Meteor.userId();                                                                          // 62
                }                                                                                                      // 63
                userId = UniUtils.getIdIfDocument(userId);                                                             // 64
                if (!userId) {                                                                                         // 65
                    throw Meteor.Error(404, 'Missing userId');                                                         // 66
                }                                                                                                      // 67
                var obj = _configCollection.findOne({ name: name, access: userId });                                   // 68
                if (_.isUndefined(obj)) {                                                                              // 69
                    return defaultValue;                                                                               // 70
                }                                                                                                      // 71
                return obj.value;                                                                                      // 72
            }                                                                                                          // 73
                                                                                                                       //
            return get;                                                                                                // 60
        }(),                                                                                                           // 60
        getRow: function () {                                                                                          // 74
            function getRow(name, userId) {                                                                            // 74
                return _configCollection.findOne({ name: name, access: userId });                                      // 75
            }                                                                                                          // 76
                                                                                                                       //
            return getRow;                                                                                             // 74
        }(),                                                                                                           // 74
        find: function () {                                                                                            // 77
            function find(selector, options) {                                                                         // 77
                options = options || {};                                                                               // 78
                selector = _.extend({ access: 'public' }, selector || {});                                             // 79
                return _configCollection.find(selector, options);                                                      // 80
            }                                                                                                          // 81
                                                                                                                       //
            return find;                                                                                               // 77
        }()                                                                                                            // 77
    },                                                                                                                 // 37
    onReady: function () {                                                                                             // 83
        function onReady(cb) {                                                                                         // 83
            if (!_.isFunction(cb)) {                                                                                   // 84
                throw new Meteor.Error(500, 'Function was expected but gets: ' + (typeof cb === 'undefined' ? 'undefined' : _typeof(cb)));
            }                                                                                                          // 86
            if (Meteor.isServer) {                                                                                     // 87
                cb.call(this);                                                                                         // 88
            } else {                                                                                                   // 89
                var self = this;                                                                                       // 90
                Tracker.autorun(function (c) {                                                                         // 91
                    if (UniConfig.ready()) {                                                                           // 92
                        cb.call(self);                                                                                 // 93
                        c.stop();                                                                                      // 94
                    }                                                                                                  // 95
                });                                                                                                    // 96
            }                                                                                                          // 97
        }                                                                                                              // 98
                                                                                                                       //
        return onReady;                                                                                                // 83
    }()                                                                                                                // 83
};                                                                                                                     // 4
                                                                                                                       //
var _set = function _set(row) {                                                                                        // 101
    UniConfig.onReady(function () {                                                                                    // 102
        var doc = _configCollection.findOne({ name: row.name, access: row.access });                                   // 103
        if (doc) {                                                                                                     // 104
            if (_.isUndefined(row.value)) {                                                                            // 105
                return !!_configCollection.remove({ name: row.name, access: row.access });                             // 106
            }                                                                                                          // 107
            _configCollection.update({ _id: doc._id }, { $set: row });                                                 // 108
        } else {                                                                                                       // 112
            _configCollection.insert(row);                                                                             // 113
        }                                                                                                              // 114
    });                                                                                                                // 115
    return true;                                                                                                       // 116
};                                                                                                                     // 117
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 119
    UniConfig.ready = function () {                                                                                    // 120
        return true;                                                                                                   // 120
    };                                                                                                                 // 120
    UniConfig['private'] = {                                                                                           // 121
        set: function () {                                                                                             // 122
            function set(name, value) {                                                                                // 121
                if (_.isUndefined(value)) {                                                                            // 123
                    return !!_configCollection.remove({ name: name, access: 'private' });                              // 124
                }                                                                                                      // 125
                return !!_configCollection.upsert({ name: name, access: 'private' }, { name: name, value: value, access: 'private', lastModified: new Date() });
            }                                                                                                          // 130
                                                                                                                       //
            return set;                                                                                                // 121
        }(),                                                                                                           // 121
        get: function () {                                                                                             // 131
            function get(name, defaultValue) {                                                                         // 121
                var obj = _configCollection.findOne({ name: name, access: 'private' });                                // 132
                if (_.isUndefined(obj)) {                                                                              // 133
                    return defaultValue;                                                                               // 134
                }                                                                                                      // 135
                return obj.value;                                                                                      // 136
            }                                                                                                          // 137
                                                                                                                       //
            return get;                                                                                                // 121
        }(),                                                                                                           // 121
        getRow: function () {                                                                                          // 138
            function getRow(name) {                                                                                    // 121
                return _configCollection.findOne({ name: name, access: 'private' });                                   // 139
            }                                                                                                          // 140
                                                                                                                       //
            return getRow;                                                                                             // 121
        }(),                                                                                                           // 121
        find: function () {                                                                                            // 141
            function find(selector, options) {                                                                         // 121
                options = options || {};                                                                               // 142
                selector = _.extend({ access: 'public' }, selector || {});                                             // 143
                return _configCollection.find(selector, options);                                                      // 144
            }                                                                                                          // 145
                                                                                                                       //
            return find;                                                                                               // 121
        }(),                                                                                                           // 121
        runOnce: function () {                                                                                         // 146
            function runOnce(name, callback, isAsync) {                                                                // 121
                if (!UniConfig['private'].get('runOne_' + name)) {                                                     // 147
                    var result,                                                                                        // 148
                        asyncWay = function () {                                                                       // 148
                        function asyncWay(err) {                                                                       // 148
                            if (err) {                                                                                 // 149
                                UniConfig['private'].set('runOne_' + name);                                            // 150
                            } else {                                                                                   // 151
                                UniConfig['private'].set('runOne_' + name, new Date());                                // 152
                            }                                                                                          // 153
                            isAsync = true;                                                                            // 154
                            console.log('Running once:', name, 'status: ' + (err ? 'FAILED' : 'OK'), '(from async callback)');
                        }                                                                                              // 156
                                                                                                                       //
                        return asyncWay;                                                                               // 148
                    }();                                                                                               // 148
                    try {                                                                                              // 157
                        result = callback(asyncWay);                                                                   // 158
                        if (result && typeof result.then === 'function') {                                             // 159
                            isAsync = true;                                                                            // 160
                            result.then(function () {                                                                  // 161
                                UniConfig['private'].set('runOne_' + name, new Date());                                // 163
                                console.log('Running once:', name, 'status: OK', '(from promise)');                    // 164
                            }, function () {                                                                           // 165
                                isAsync = true;                                                                        // 167
                                UniConfig['private'].set('runOne_' + name);                                            // 168
                                console.log('Running once:', name, 'status: FAILED', '(from promise)');                // 169
                            });                                                                                        // 170
                        }                                                                                              // 172
                    } catch (e) {                                                                                      // 173
                        console.error(e);                                                                              // 174
                        result = false;                                                                                // 175
                    }                                                                                                  // 176
                    if (isAsync) {                                                                                     // 177
                        return;                                                                                        // 178
                    }                                                                                                  // 179
                    if (result !== false) {                                                                            // 180
                        UniConfig['private'].set('runOne_' + name, new Date());                                        // 181
                    }                                                                                                  // 182
                    console.log('Running once:', name, 'status: ' + (result !== false ? 'OK' : 'FAILED'));             // 183
                }                                                                                                      // 184
            }                                                                                                          // 185
                                                                                                                       //
            return runOnce;                                                                                            // 121
        }()                                                                                                            // 121
    };                                                                                                                 // 121
    // short access                                                                                                    //
    UniConfig.runOnce = UniConfig['private'].runOnce;                                                                  // 188
                                                                                                                       //
    Meteor.publish('UniConfig', function () {                                                                          // 190
        var query = { access: 'public' };                                                                              // 191
        if (_.isString(this.userId) && this.userId !== 'private') {                                                    // 192
            query = { $or: [query, { access: this.userId }] };                                                         // 193
        }                                                                                                              // 194
        return _configCollection.find(query);                                                                          // 195
    });                                                                                                                // 196
                                                                                                                       //
    _configCollection._ensureIndex({ name: 1, access: 1 }, { unique: 1 });                                             // 198
    UniConfig['public']._accessValidators = [];                                                                        // 199
    UniConfig['public'].onAccessValidation = function () {                                                             // 200
        function onAccessValidation(accessValidator) {                                                                 // 200
            if (accessValidator !== 'function') {                                                                      // 201
                throw new Error('Access Validator must be a function');                                                // 202
            }                                                                                                          // 203
            UniConfig['public']._accessValidators.push(accessValidator);                                               // 204
        }                                                                                                              // 205
                                                                                                                       //
        return onAccessValidation;                                                                                     // 200
    }();                                                                                                               // 200
                                                                                                                       //
    var _checkRights = function _checkRights(userId, doc) {                                                            // 207
        if (doc.isServerWriteOnly) {                                                                                   // 208
            return false;                                                                                              // 209
        }                                                                                                              // 210
        switch (doc.access) {                                                                                          // 211
            case 'public':                                                                                             // 212
                //For non universe environment we grant access for all                                                 //
                var result = true;                                                                                     // 214
                if (typeof UniUsers !== 'undefined') {                                                                 // 215
                    result = UniUsers.isAdminLoggedIn();                                                               // 216
                }                                                                                                      // 217
                                                                                                                       //
                if (UniConfig['public']._accessValidators.length) {                                                    // 219
                    result = UniConfig['public']._accessValidators.every(function (fn) {                               // 220
                        var res = fn(userId, doc, result);                                                             // 221
                        return res || res === undefined;                                                               // 222
                    });                                                                                                // 223
                }                                                                                                      // 224
                                                                                                                       //
                return result;                                                                                         // 226
            case 'private':                                                                                            // 227
                return false;                                                                                          // 228
        }                                                                                                              // 211
        return doc.access === userId;                                                                                  // 230
    };                                                                                                                 // 231
                                                                                                                       //
    _configCollection.allow({                                                                                          // 233
        insert: _checkRights,                                                                                          // 234
        update: _checkRights,                                                                                          // 235
        remove: _checkRights                                                                                           // 236
    });                                                                                                                // 233
} else {                                                                                                               // 239
    var _handleSub = Meteor.subscribe('UniConfig');                                                                    // 240
    UniConfig.ready = _handleSub.ready;                                                                                // 241
}                                                                                                                      // 242
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"UniEmitter.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_utilities/UniEmitter.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
UniUtils.Emitter = function () {                                                                                       // 1
    function UniEmitter() {                                                                                            // 1
        this._listeners = {};                                                                                          // 2
    }                                                                                                                  // 3
                                                                                                                       //
    return UniEmitter;                                                                                                 // 1
}();                                                                                                                   // 1
                                                                                                                       //
UniUtils.Emitter.prototype.emit = function () {                                                                        // 5
    function emit(eventType) {                                                                                         // 5
        if (!Array.isArray(this._listeners[eventType])) {                                                              // 6
            return this;                                                                                               // 7
        }                                                                                                              // 8
        var args = Array.prototype.slice.call(arguments, 1);                                                           // 9
        this._listeners[eventType].forEach(function () {                                                               // 10
            function _emit(listener) {                                                                                 // 10
                listener.apply(this, args);                                                                            // 11
            }                                                                                                          // 12
                                                                                                                       //
            return _emit;                                                                                              // 10
        }(), this);                                                                                                    // 10
                                                                                                                       //
        return this;                                                                                                   // 14
    }                                                                                                                  // 15
                                                                                                                       //
    return emit;                                                                                                       // 5
}();                                                                                                                   // 5
                                                                                                                       //
UniUtils.Emitter.prototype.on = function () {                                                                          // 17
    function on(eventType, listener) {                                                                                 // 17
        if (!Array.isArray(this._listeners[eventType])) {                                                              // 18
            this._listeners[eventType] = [];                                                                           // 19
        }                                                                                                              // 20
                                                                                                                       //
        if (this._listeners[eventType].indexOf(listener) === -1) {                                                     // 22
            this._listeners[eventType].push(listener);                                                                 // 23
        }                                                                                                              // 24
                                                                                                                       //
        return this;                                                                                                   // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return on;                                                                                                         // 17
}();                                                                                                                   // 17
                                                                                                                       //
UniUtils.Emitter.prototype.once = function () {                                                                        // 29
    function once(eventType, listener) {                                                                               // 29
        var self = this;                                                                                               // 30
        function _once() {                                                                                             // 31
            var args = Array.prototype.slice.call(arguments, 0);                                                       // 32
            self.off(eventType, _once);                                                                                // 33
            listener.apply(self, args);                                                                                // 34
        }                                                                                                              // 35
        _once.listener = listener;                                                                                     // 36
        return this.on(eventType, _once);                                                                              // 37
    }                                                                                                                  // 38
                                                                                                                       //
    return once;                                                                                                       // 29
}();                                                                                                                   // 29
                                                                                                                       //
UniUtils.Emitter.prototype.off = function () {                                                                         // 40
    function off(eventType, listener) {                                                                                // 40
        if (!Array.isArray(this._listeners[eventType])) {                                                              // 41
            return this;                                                                                               // 42
        }                                                                                                              // 43
        if (typeof listener === 'undefined') {                                                                         // 44
            this._listeners[eventType] = [];                                                                           // 45
            return this;                                                                                               // 46
        }                                                                                                              // 47
        var index = this._listeners[eventType].indexOf(listener);                                                      // 48
        if (index === -1) {                                                                                            // 49
            for (var i = 0; i < this._listeners[eventType].length; i += 1) {                                           // 50
                if (this._listeners[eventType][i].listener === listener) {                                             // 51
                    index = i;                                                                                         // 52
                    break;                                                                                             // 53
                }                                                                                                      // 54
            }                                                                                                          // 55
        }                                                                                                              // 56
        this._listeners[eventType].splice(index, 1);                                                                   // 57
        return this;                                                                                                   // 58
    }                                                                                                                  // 59
                                                                                                                       //
    return off;                                                                                                        // 40
}();                                                                                                                   // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{"extensions":[".js",".json"]});
require("./node_modules/meteor/universe:utilities/UniUtils.js");
require("./node_modules/meteor/universe:utilities/RecursiveIterator.js");
require("./node_modules/meteor/universe:utilities/deepExtend.js");
require("./node_modules/meteor/universe:utilities/deepEqual.js");
require("./node_modules/meteor/universe:utilities/UniUtilsStrings.js");
require("./node_modules/meteor/universe:utilities/UniConfig.js");
require("./node_modules/meteor/universe:utilities/UniEmitter.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['universe:utilities'] = {}, {
  UniUtils: UniUtils,
  UniConfig: UniConfig
});

})();

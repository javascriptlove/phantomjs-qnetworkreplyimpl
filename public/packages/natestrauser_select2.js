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
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                 //
// packages/natestrauser_select2/lib/select2/dist/js/select2.js                                                    //
// This file is in bare mode and is not in its own closure.                                                        //
//                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                   //
/*!                                                                                                                // 1
 * Select2 4.0.2                                                                                                   // 2
 * https://select2.github.io                                                                                       // 3
 *                                                                                                                 // 4
 * Released under the MIT license                                                                                  // 5
 * https://github.com/select2/select2/blob/master/LICENSE.md                                                       // 6
 */                                                                                                                // 7
(function (factory) {                                                                                              // 8
  if (typeof define === 'function' && define.amd) {                                                                // 9
    // AMD. Register as an anonymous module.                                                                       // 10
    define(['jquery'], factory);                                                                                   // 11
  } else if (typeof exports === 'object') {                                                                        // 12
    // Node/CommonJS                                                                                               // 13
    factory(require('jquery'));                                                                                    // 14
  } else {                                                                                                         // 15
    // Browser globals                                                                                             // 16
    factory(jQuery);                                                                                               // 17
  }                                                                                                                // 18
}(function (jQuery) {                                                                                              // 19
  // This is needed so we can catch the AMD loader configuration and use it                                        // 20
  // The inner file should be wrapped (by `banner.start.js`) in a function that                                    // 21
  // returns the AMD loader references.                                                                            // 22
  var S2 =                                                                                                         // 23
(function () {                                                                                                     // 24
  // Restore the Select2 AMD loader so it can be used                                                              // 25
  // Needed mostly in the language files, where the loader is not inserted                                         // 26
  if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {                                         // 27
    var S2 = jQuery.fn.select2.amd;                                                                                // 28
  }                                                                                                                // 29
var S2;(function () { if (!S2 || !S2.requirejs) {                                                                  // 30
if (!S2) { S2 = {}; } else { require = S2; }                                                                       // 31
/**                                                                                                                // 32
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.                         // 33
 * Available via the MIT or new BSD license.                                                                       // 34
 * see: http://github.com/jrburke/almond for details                                                               // 35
 */                                                                                                                // 36
//Going sloppy to avoid 'use strict' string cost, but strict practices should                                      // 37
//be followed.                                                                                                     // 38
/*jslint sloppy: true */                                                                                           // 39
/*global setTimeout: false */                                                                                      // 40
                                                                                                                   // 41
var requirejs, require, define;                                                                                    // 42
(function (undef) {                                                                                                // 43
    var main, req, makeMap, handlers,                                                                              // 44
        defined = {},                                                                                              // 45
        waiting = {},                                                                                              // 46
        config = {},                                                                                               // 47
        defining = {},                                                                                             // 48
        hasOwn = Object.prototype.hasOwnProperty,                                                                  // 49
        aps = [].slice,                                                                                            // 50
        jsSuffixRegExp = /\.js$/;                                                                                  // 51
                                                                                                                   // 52
    function hasProp(obj, prop) {                                                                                  // 53
        return hasOwn.call(obj, prop);                                                                             // 54
    }                                                                                                              // 55
                                                                                                                   // 56
    /**                                                                                                            // 57
     * Given a relative module name, like ./something, normalize it to                                             // 58
     * a real name that can be mapped to a path.                                                                   // 59
     * @param {String} name the relative name                                                                      // 60
     * @param {String} baseName a real name that the name arg is relative                                          // 61
     * to.                                                                                                         // 62
     * @returns {String} normalized name                                                                           // 63
     */                                                                                                            // 64
    function normalize(name, baseName) {                                                                           // 65
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,                                                 // 66
            foundI, foundStarMap, starI, i, j, part,                                                               // 67
            baseParts = baseName && baseName.split("/"),                                                           // 68
            map = config.map,                                                                                      // 69
            starMap = (map && map['*']) || {};                                                                     // 70
                                                                                                                   // 71
        //Adjust any relative paths.                                                                               // 72
        if (name && name.charAt(0) === ".") {                                                                      // 73
            //If have a base name, try to normalize against it,                                                    // 74
            //otherwise, assume it is a top-level require that will                                                // 75
            //be relative to baseUrl in the end.                                                                   // 76
            if (baseName) {                                                                                        // 77
                name = name.split('/');                                                                            // 78
                lastIndex = name.length - 1;                                                                       // 79
                                                                                                                   // 80
                // Node .js allowance:                                                                             // 81
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {                                 // 82
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');                                 // 83
                }                                                                                                  // 84
                                                                                                                   // 85
                //Lop off the last part of baseParts, so that . matches the                                        // 86
                //"directory" and not name of the baseName's module. For instance,                                 // 87
                //baseName of "one/two/three", maps to "one/two/three.js", but we                                  // 88
                //want the directory, "one/two" for this normalization.                                            // 89
                name = baseParts.slice(0, baseParts.length - 1).concat(name);                                      // 90
                                                                                                                   // 91
                //start trimDots                                                                                   // 92
                for (i = 0; i < name.length; i += 1) {                                                             // 93
                    part = name[i];                                                                                // 94
                    if (part === ".") {                                                                            // 95
                        name.splice(i, 1);                                                                         // 96
                        i -= 1;                                                                                    // 97
                    } else if (part === "..") {                                                                    // 98
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {                                   // 99
                            //End of the line. Keep at least one non-dot                                           // 100
                            //path segment at the front so it can be mapped                                        // 101
                            //correctly to disk. Otherwise, there is likely                                        // 102
                            //no path mapping for a path starting with '..'.                                       // 103
                            //This can still fail, but catches the most reasonable                                 // 104
                            //uses of ..                                                                           // 105
                            break;                                                                                 // 106
                        } else if (i > 0) {                                                                        // 107
                            name.splice(i - 1, 2);                                                                 // 108
                            i -= 2;                                                                                // 109
                        }                                                                                          // 110
                    }                                                                                              // 111
                }                                                                                                  // 112
                //end trimDots                                                                                     // 113
                                                                                                                   // 114
                name = name.join("/");                                                                             // 115
            } else if (name.indexOf('./') === 0) {                                                                 // 116
                // No baseName, so this is ID is resolved relative                                                 // 117
                // to baseUrl, pull off the leading dot.                                                           // 118
                name = name.substring(2);                                                                          // 119
            }                                                                                                      // 120
        }                                                                                                          // 121
                                                                                                                   // 122
        //Apply map config if available.                                                                           // 123
        if ((baseParts || starMap) && map) {                                                                       // 124
            nameParts = name.split('/');                                                                           // 125
                                                                                                                   // 126
            for (i = nameParts.length; i > 0; i -= 1) {                                                            // 127
                nameSegment = nameParts.slice(0, i).join("/");                                                     // 128
                                                                                                                   // 129
                if (baseParts) {                                                                                   // 130
                    //Find the longest baseName segment match in the config.                                       // 131
                    //So, do joins on the biggest to smallest lengths of baseParts.                                // 132
                    for (j = baseParts.length; j > 0; j -= 1) {                                                    // 133
                        mapValue = map[baseParts.slice(0, j).join('/')];                                           // 134
                                                                                                                   // 135
                        //baseName segment has  config, find if it has one for                                     // 136
                        //this name.                                                                               // 137
                        if (mapValue) {                                                                            // 138
                            mapValue = mapValue[nameSegment];                                                      // 139
                            if (mapValue) {                                                                        // 140
                                //Match, update name to the new value.                                             // 141
                                foundMap = mapValue;                                                               // 142
                                foundI = i;                                                                        // 143
                                break;                                                                             // 144
                            }                                                                                      // 145
                        }                                                                                          // 146
                    }                                                                                              // 147
                }                                                                                                  // 148
                                                                                                                   // 149
                if (foundMap) {                                                                                    // 150
                    break;                                                                                         // 151
                }                                                                                                  // 152
                                                                                                                   // 153
                //Check for a star map match, but just hold on to it,                                              // 154
                //if there is a shorter segment match later in a matching                                          // 155
                //config, then favor over this star map.                                                           // 156
                if (!foundStarMap && starMap && starMap[nameSegment]) {                                            // 157
                    foundStarMap = starMap[nameSegment];                                                           // 158
                    starI = i;                                                                                     // 159
                }                                                                                                  // 160
            }                                                                                                      // 161
                                                                                                                   // 162
            if (!foundMap && foundStarMap) {                                                                       // 163
                foundMap = foundStarMap;                                                                           // 164
                foundI = starI;                                                                                    // 165
            }                                                                                                      // 166
                                                                                                                   // 167
            if (foundMap) {                                                                                        // 168
                nameParts.splice(0, foundI, foundMap);                                                             // 169
                name = nameParts.join('/');                                                                        // 170
            }                                                                                                      // 171
        }                                                                                                          // 172
                                                                                                                   // 173
        return name;                                                                                               // 174
    }                                                                                                              // 175
                                                                                                                   // 176
    function makeRequire(relName, forceSync) {                                                                     // 177
        return function () {                                                                                       // 178
            //A version of a require function that passes a moduleName                                             // 179
            //value for items that may need to                                                                     // 180
            //look up paths relative to the moduleName                                                             // 181
            var args = aps.call(arguments, 0);                                                                     // 182
                                                                                                                   // 183
            //If first arg is not require('string'), and there is only                                             // 184
            //one arg, it is the array form without a callback. Insert                                             // 185
            //a null so that the following concat is correct.                                                      // 186
            if (typeof args[0] !== 'string' && args.length === 1) {                                                // 187
                args.push(null);                                                                                   // 188
            }                                                                                                      // 189
            return req.apply(undef, args.concat([relName, forceSync]));                                            // 190
        };                                                                                                         // 191
    }                                                                                                              // 192
                                                                                                                   // 193
    function makeNormalize(relName) {                                                                              // 194
        return function (name) {                                                                                   // 195
            return normalize(name, relName);                                                                       // 196
        };                                                                                                         // 197
    }                                                                                                              // 198
                                                                                                                   // 199
    function makeLoad(depName) {                                                                                   // 200
        return function (value) {                                                                                  // 201
            defined[depName] = value;                                                                              // 202
        };                                                                                                         // 203
    }                                                                                                              // 204
                                                                                                                   // 205
    function callDep(name) {                                                                                       // 206
        if (hasProp(waiting, name)) {                                                                              // 207
            var args = waiting[name];                                                                              // 208
            delete waiting[name];                                                                                  // 209
            defining[name] = true;                                                                                 // 210
            main.apply(undef, args);                                                                               // 211
        }                                                                                                          // 212
                                                                                                                   // 213
        if (!hasProp(defined, name) && !hasProp(defining, name)) {                                                 // 214
            throw new Error('No ' + name);                                                                         // 215
        }                                                                                                          // 216
        return defined[name];                                                                                      // 217
    }                                                                                                              // 218
                                                                                                                   // 219
    //Turns a plugin!resource to [plugin, resource]                                                                // 220
    //with the plugin being undefined if the name                                                                  // 221
    //did not have a plugin prefix.                                                                                // 222
    function splitPrefix(name) {                                                                                   // 223
        var prefix,                                                                                                // 224
            index = name ? name.indexOf('!') : -1;                                                                 // 225
        if (index > -1) {                                                                                          // 226
            prefix = name.substring(0, index);                                                                     // 227
            name = name.substring(index + 1, name.length);                                                         // 228
        }                                                                                                          // 229
        return [prefix, name];                                                                                     // 230
    }                                                                                                              // 231
                                                                                                                   // 232
    /**                                                                                                            // 233
     * Makes a name map, normalizing the name, and using a plugin                                                  // 234
     * for normalization if necessary. Grabs a ref to plugin                                                       // 235
     * too, as an optimization.                                                                                    // 236
     */                                                                                                            // 237
    makeMap = function (name, relName) {                                                                           // 238
        var plugin,                                                                                                // 239
            parts = splitPrefix(name),                                                                             // 240
            prefix = parts[0];                                                                                     // 241
                                                                                                                   // 242
        name = parts[1];                                                                                           // 243
                                                                                                                   // 244
        if (prefix) {                                                                                              // 245
            prefix = normalize(prefix, relName);                                                                   // 246
            plugin = callDep(prefix);                                                                              // 247
        }                                                                                                          // 248
                                                                                                                   // 249
        //Normalize according                                                                                      // 250
        if (prefix) {                                                                                              // 251
            if (plugin && plugin.normalize) {                                                                      // 252
                name = plugin.normalize(name, makeNormalize(relName));                                             // 253
            } else {                                                                                               // 254
                name = normalize(name, relName);                                                                   // 255
            }                                                                                                      // 256
        } else {                                                                                                   // 257
            name = normalize(name, relName);                                                                       // 258
            parts = splitPrefix(name);                                                                             // 259
            prefix = parts[0];                                                                                     // 260
            name = parts[1];                                                                                       // 261
            if (prefix) {                                                                                          // 262
                plugin = callDep(prefix);                                                                          // 263
            }                                                                                                      // 264
        }                                                                                                          // 265
                                                                                                                   // 266
        //Using ridiculous property names for space reasons                                                        // 267
        return {                                                                                                   // 268
            f: prefix ? prefix + '!' + name : name, //fullName                                                     // 269
            n: name,                                                                                               // 270
            pr: prefix,                                                                                            // 271
            p: plugin                                                                                              // 272
        };                                                                                                         // 273
    };                                                                                                             // 274
                                                                                                                   // 275
    function makeConfig(name) {                                                                                    // 276
        return function () {                                                                                       // 277
            return (config && config.config && config.config[name]) || {};                                         // 278
        };                                                                                                         // 279
    }                                                                                                              // 280
                                                                                                                   // 281
    handlers = {                                                                                                   // 282
        require: function (name) {                                                                                 // 283
            return makeRequire(name);                                                                              // 284
        },                                                                                                         // 285
        exports: function (name) {                                                                                 // 286
            var e = defined[name];                                                                                 // 287
            if (typeof e !== 'undefined') {                                                                        // 288
                return e;                                                                                          // 289
            } else {                                                                                               // 290
                return (defined[name] = {});                                                                       // 291
            }                                                                                                      // 292
        },                                                                                                         // 293
        module: function (name) {                                                                                  // 294
            return {                                                                                               // 295
                id: name,                                                                                          // 296
                uri: '',                                                                                           // 297
                exports: defined[name],                                                                            // 298
                config: makeConfig(name)                                                                           // 299
            };                                                                                                     // 300
        }                                                                                                          // 301
    };                                                                                                             // 302
                                                                                                                   // 303
    main = function (name, deps, callback, relName) {                                                              // 304
        var cjsModule, depName, ret, map, i,                                                                       // 305
            args = [],                                                                                             // 306
            callbackType = typeof callback,                                                                        // 307
            usingExports;                                                                                          // 308
                                                                                                                   // 309
        //Use name if no relName                                                                                   // 310
        relName = relName || name;                                                                                 // 311
                                                                                                                   // 312
        //Call the callback to define the module, if necessary.                                                    // 313
        if (callbackType === 'undefined' || callbackType === 'function') {                                         // 314
            //Pull out the defined dependencies and pass the ordered                                               // 315
            //values to the callback.                                                                              // 316
            //Default to [require, exports, module] if no deps                                                     // 317
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;                      // 318
            for (i = 0; i < deps.length; i += 1) {                                                                 // 319
                map = makeMap(deps[i], relName);                                                                   // 320
                depName = map.f;                                                                                   // 321
                                                                                                                   // 322
                //Fast path CommonJS standard dependencies.                                                        // 323
                if (depName === "require") {                                                                       // 324
                    args[i] = handlers.require(name);                                                              // 325
                } else if (depName === "exports") {                                                                // 326
                    //CommonJS module spec 1.1                                                                     // 327
                    args[i] = handlers.exports(name);                                                              // 328
                    usingExports = true;                                                                           // 329
                } else if (depName === "module") {                                                                 // 330
                    //CommonJS module spec 1.1                                                                     // 331
                    cjsModule = args[i] = handlers.module(name);                                                   // 332
                } else if (hasProp(defined, depName) ||                                                            // 333
                           hasProp(waiting, depName) ||                                                            // 334
                           hasProp(defining, depName)) {                                                           // 335
                    args[i] = callDep(depName);                                                                    // 336
                } else if (map.p) {                                                                                // 337
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});                          // 338
                    args[i] = defined[depName];                                                                    // 339
                } else {                                                                                           // 340
                    throw new Error(name + ' missing ' + depName);                                                 // 341
                }                                                                                                  // 342
            }                                                                                                      // 343
                                                                                                                   // 344
            ret = callback ? callback.apply(defined[name], args) : undefined;                                      // 345
                                                                                                                   // 346
            if (name) {                                                                                            // 347
                //If setting exports via "module" is in play,                                                      // 348
                //favor that over return value and exports. After that,                                            // 349
                //favor a non-undefined return value over exports use.                                             // 350
                if (cjsModule && cjsModule.exports !== undef &&                                                    // 351
                        cjsModule.exports !== defined[name]) {                                                     // 352
                    defined[name] = cjsModule.exports;                                                             // 353
                } else if (ret !== undef || !usingExports) {                                                       // 354
                    //Use the return value from the function.                                                      // 355
                    defined[name] = ret;                                                                           // 356
                }                                                                                                  // 357
            }                                                                                                      // 358
        } else if (name) {                                                                                         // 359
            //May just be an object definition for the module. Only                                                // 360
            //worry about defining if have a module name.                                                          // 361
            defined[name] = callback;                                                                              // 362
        }                                                                                                          // 363
    };                                                                                                             // 364
                                                                                                                   // 365
    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {                               // 366
        if (typeof deps === "string") {                                                                            // 367
            if (handlers[deps]) {                                                                                  // 368
                //callback in this case is really relName                                                          // 369
                return handlers[deps](callback);                                                                   // 370
            }                                                                                                      // 371
            //Just return the module wanted. In this scenario, the                                                 // 372
            //deps arg is the module name, and second arg (if passed)                                              // 373
            //is just the relName.                                                                                 // 374
            //Normalize module name, if it contains . or ..                                                        // 375
            return callDep(makeMap(deps, callback).f);                                                             // 376
        } else if (!deps.splice) {                                                                                 // 377
            //deps is a config object, not an array.                                                               // 378
            config = deps;                                                                                         // 379
            if (config.deps) {                                                                                     // 380
                req(config.deps, config.callback);                                                                 // 381
            }                                                                                                      // 382
            if (!callback) {                                                                                       // 383
                return;                                                                                            // 384
            }                                                                                                      // 385
                                                                                                                   // 386
            if (callback.splice) {                                                                                 // 387
                //callback is an array, which means it is a dependency list.                                       // 388
                //Adjust args if there are dependencies                                                            // 389
                deps = callback;                                                                                   // 390
                callback = relName;                                                                                // 391
                relName = null;                                                                                    // 392
            } else {                                                                                               // 393
                deps = undef;                                                                                      // 394
            }                                                                                                      // 395
        }                                                                                                          // 396
                                                                                                                   // 397
        //Support require(['a'])                                                                                   // 398
        callback = callback || function () {};                                                                     // 399
                                                                                                                   // 400
        //If relName is a function, it is an errback handler,                                                      // 401
        //so remove it.                                                                                            // 402
        if (typeof relName === 'function') {                                                                       // 403
            relName = forceSync;                                                                                   // 404
            forceSync = alt;                                                                                       // 405
        }                                                                                                          // 406
                                                                                                                   // 407
        //Simulate async callback;                                                                                 // 408
        if (forceSync) {                                                                                           // 409
            main(undef, deps, callback, relName);                                                                  // 410
        } else {                                                                                                   // 411
            //Using a non-zero value because of concern for what old browsers                                      // 412
            //do, and latest browsers "upgrade" to 4 if lower value is used:                                       // 413
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something                                  // 415
            //that works in almond on the global level, but not guaranteed and                                     // 416
            //unlikely to work in other AMD implementations.                                                       // 417
            setTimeout(function () {                                                                               // 418
                main(undef, deps, callback, relName);                                                              // 419
            }, 4);                                                                                                 // 420
        }                                                                                                          // 421
                                                                                                                   // 422
        return req;                                                                                                // 423
    };                                                                                                             // 424
                                                                                                                   // 425
    /**                                                                                                            // 426
     * Just drops the config on the floor, but returns req in case                                                 // 427
     * the config return value is used.                                                                            // 428
     */                                                                                                            // 429
    req.config = function (cfg) {                                                                                  // 430
        return req(cfg);                                                                                           // 431
    };                                                                                                             // 432
                                                                                                                   // 433
    /**                                                                                                            // 434
     * Expose module registry for debugging and tooling                                                            // 435
     */                                                                                                            // 436
    requirejs._defined = defined;                                                                                  // 437
                                                                                                                   // 438
    define = function (name, deps, callback) {                                                                     // 439
        if (typeof name !== 'string') {                                                                            // 440
            throw new Error('See almond README: incorrect module build, no module name');                          // 441
        }                                                                                                          // 442
                                                                                                                   // 443
        //This module may not have dependencies                                                                    // 444
        if (!deps.splice) {                                                                                        // 445
            //deps is not an array, so probably means                                                              // 446
            //an object literal or factory function for                                                            // 447
            //the value. Adjust args.                                                                              // 448
            callback = deps;                                                                                       // 449
            deps = [];                                                                                             // 450
        }                                                                                                          // 451
                                                                                                                   // 452
        if (!hasProp(defined, name) && !hasProp(waiting, name)) {                                                  // 453
            waiting[name] = [name, deps, callback];                                                                // 454
        }                                                                                                          // 455
    };                                                                                                             // 456
                                                                                                                   // 457
    define.amd = {                                                                                                 // 458
        jQuery: true                                                                                               // 459
    };                                                                                                             // 460
}());                                                                                                              // 461
                                                                                                                   // 462
S2.requirejs = requirejs;S2.require = require;S2.define = define;                                                  // 463
}                                                                                                                  // 464
}());                                                                                                              // 465
S2.define("almond", function(){});                                                                                 // 466
                                                                                                                   // 467
/* global jQuery:false, $:false */                                                                                 // 468
S2.define('jquery',[],function () {                                                                                // 469
  var _$ = jQuery || $;                                                                                            // 470
                                                                                                                   // 471
  if (_$ == null && console && console.error) {                                                                    // 472
    console.error(                                                                                                 // 473
      'Select2: An instance of jQuery or a jQuery-compatible library was not ' +                                   // 474
      'found. Make sure that you are including jQuery before Select2 on your ' +                                   // 475
      'web page.'                                                                                                  // 476
    );                                                                                                             // 477
  }                                                                                                                // 478
                                                                                                                   // 479
  return _$;                                                                                                       // 480
});                                                                                                                // 481
                                                                                                                   // 482
S2.define('select2/utils',[                                                                                        // 483
  'jquery'                                                                                                         // 484
], function ($) {                                                                                                  // 485
  var Utils = {};                                                                                                  // 486
                                                                                                                   // 487
  Utils.Extend = function (ChildClass, SuperClass) {                                                               // 488
    var __hasProp = {}.hasOwnProperty;                                                                             // 489
                                                                                                                   // 490
    function BaseConstructor () {                                                                                  // 491
      this.constructor = ChildClass;                                                                               // 492
    }                                                                                                              // 493
                                                                                                                   // 494
    for (var key in SuperClass) {                                                                                  // 495
      if (__hasProp.call(SuperClass, key)) {                                                                       // 496
        ChildClass[key] = SuperClass[key];                                                                         // 497
      }                                                                                                            // 498
    }                                                                                                              // 499
                                                                                                                   // 500
    BaseConstructor.prototype = SuperClass.prototype;                                                              // 501
    ChildClass.prototype = new BaseConstructor();                                                                  // 502
    ChildClass.__super__ = SuperClass.prototype;                                                                   // 503
                                                                                                                   // 504
    return ChildClass;                                                                                             // 505
  };                                                                                                               // 506
                                                                                                                   // 507
  function getMethods (theClass) {                                                                                 // 508
    var proto = theClass.prototype;                                                                                // 509
                                                                                                                   // 510
    var methods = [];                                                                                              // 511
                                                                                                                   // 512
    for (var methodName in proto) {                                                                                // 513
      var m = proto[methodName];                                                                                   // 514
                                                                                                                   // 515
      if (typeof m !== 'function') {                                                                               // 516
        continue;                                                                                                  // 517
      }                                                                                                            // 518
                                                                                                                   // 519
      if (methodName === 'constructor') {                                                                          // 520
        continue;                                                                                                  // 521
      }                                                                                                            // 522
                                                                                                                   // 523
      methods.push(methodName);                                                                                    // 524
    }                                                                                                              // 525
                                                                                                                   // 526
    return methods;                                                                                                // 527
  }                                                                                                                // 528
                                                                                                                   // 529
  Utils.Decorate = function (SuperClass, DecoratorClass) {                                                         // 530
    var decoratedMethods = getMethods(DecoratorClass);                                                             // 531
    var superMethods = getMethods(SuperClass);                                                                     // 532
                                                                                                                   // 533
    function DecoratedClass () {                                                                                   // 534
      var unshift = Array.prototype.unshift;                                                                       // 535
                                                                                                                   // 536
      var argCount = DecoratorClass.prototype.constructor.length;                                                  // 537
                                                                                                                   // 538
      var calledConstructor = SuperClass.prototype.constructor;                                                    // 539
                                                                                                                   // 540
      if (argCount > 0) {                                                                                          // 541
        unshift.call(arguments, SuperClass.prototype.constructor);                                                 // 542
                                                                                                                   // 543
        calledConstructor = DecoratorClass.prototype.constructor;                                                  // 544
      }                                                                                                            // 545
                                                                                                                   // 546
      calledConstructor.apply(this, arguments);                                                                    // 547
    }                                                                                                              // 548
                                                                                                                   // 549
    DecoratorClass.displayName = SuperClass.displayName;                                                           // 550
                                                                                                                   // 551
    function ctr () {                                                                                              // 552
      this.constructor = DecoratedClass;                                                                           // 553
    }                                                                                                              // 554
                                                                                                                   // 555
    DecoratedClass.prototype = new ctr();                                                                          // 556
                                                                                                                   // 557
    for (var m = 0; m < superMethods.length; m++) {                                                                // 558
        var superMethod = superMethods[m];                                                                         // 559
                                                                                                                   // 560
        DecoratedClass.prototype[superMethod] =                                                                    // 561
          SuperClass.prototype[superMethod];                                                                       // 562
    }                                                                                                              // 563
                                                                                                                   // 564
    var calledMethod = function (methodName) {                                                                     // 565
      // Stub out the original method if it's not decorating an actual method                                      // 566
      var originalMethod = function () {};                                                                         // 567
                                                                                                                   // 568
      if (methodName in DecoratedClass.prototype) {                                                                // 569
        originalMethod = DecoratedClass.prototype[methodName];                                                     // 570
      }                                                                                                            // 571
                                                                                                                   // 572
      var decoratedMethod = DecoratorClass.prototype[methodName];                                                  // 573
                                                                                                                   // 574
      return function () {                                                                                         // 575
        var unshift = Array.prototype.unshift;                                                                     // 576
                                                                                                                   // 577
        unshift.call(arguments, originalMethod);                                                                   // 578
                                                                                                                   // 579
        return decoratedMethod.apply(this, arguments);                                                             // 580
      };                                                                                                           // 581
    };                                                                                                             // 582
                                                                                                                   // 583
    for (var d = 0; d < decoratedMethods.length; d++) {                                                            // 584
      var decoratedMethod = decoratedMethods[d];                                                                   // 585
                                                                                                                   // 586
      DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);                                   // 587
    }                                                                                                              // 588
                                                                                                                   // 589
    return DecoratedClass;                                                                                         // 590
  };                                                                                                               // 591
                                                                                                                   // 592
  var Observable = function () {                                                                                   // 593
    this.listeners = {};                                                                                           // 594
  };                                                                                                               // 595
                                                                                                                   // 596
  Observable.prototype.on = function (event, callback) {                                                           // 597
    this.listeners = this.listeners || {};                                                                         // 598
                                                                                                                   // 599
    if (event in this.listeners) {                                                                                 // 600
      this.listeners[event].push(callback);                                                                        // 601
    } else {                                                                                                       // 602
      this.listeners[event] = [callback];                                                                          // 603
    }                                                                                                              // 604
  };                                                                                                               // 605
                                                                                                                   // 606
  Observable.prototype.trigger = function (event) {                                                                // 607
    var slice = Array.prototype.slice;                                                                             // 608
                                                                                                                   // 609
    this.listeners = this.listeners || {};                                                                         // 610
                                                                                                                   // 611
    if (event in this.listeners) {                                                                                 // 612
      this.invoke(this.listeners[event], slice.call(arguments, 1));                                                // 613
    }                                                                                                              // 614
                                                                                                                   // 615
    if ('*' in this.listeners) {                                                                                   // 616
      this.invoke(this.listeners['*'], arguments);                                                                 // 617
    }                                                                                                              // 618
  };                                                                                                               // 619
                                                                                                                   // 620
  Observable.prototype.invoke = function (listeners, params) {                                                     // 621
    for (var i = 0, len = listeners.length; i < len; i++) {                                                        // 622
      listeners[i].apply(this, params);                                                                            // 623
    }                                                                                                              // 624
  };                                                                                                               // 625
                                                                                                                   // 626
  Utils.Observable = Observable;                                                                                   // 627
                                                                                                                   // 628
  Utils.generateChars = function (length) {                                                                        // 629
    var chars = '';                                                                                                // 630
                                                                                                                   // 631
    for (var i = 0; i < length; i++) {                                                                             // 632
      var randomChar = Math.floor(Math.random() * 36);                                                             // 633
      chars += randomChar.toString(36);                                                                            // 634
    }                                                                                                              // 635
                                                                                                                   // 636
    return chars;                                                                                                  // 637
  };                                                                                                               // 638
                                                                                                                   // 639
  Utils.bind = function (func, context) {                                                                          // 640
    return function () {                                                                                           // 641
      func.apply(context, arguments);                                                                              // 642
    };                                                                                                             // 643
  };                                                                                                               // 644
                                                                                                                   // 645
  Utils._convertData = function (data) {                                                                           // 646
    for (var originalKey in data) {                                                                                // 647
      var keys = originalKey.split('-');                                                                           // 648
                                                                                                                   // 649
      var dataLevel = data;                                                                                        // 650
                                                                                                                   // 651
      if (keys.length === 1) {                                                                                     // 652
        continue;                                                                                                  // 653
      }                                                                                                            // 654
                                                                                                                   // 655
      for (var k = 0; k < keys.length; k++) {                                                                      // 656
        var key = keys[k];                                                                                         // 657
                                                                                                                   // 658
        // Lowercase the first letter                                                                              // 659
        // By default, dash-separated becomes camelCase                                                            // 660
        key = key.substring(0, 1).toLowerCase() + key.substring(1);                                                // 661
                                                                                                                   // 662
        if (!(key in dataLevel)) {                                                                                 // 663
          dataLevel[key] = {};                                                                                     // 664
        }                                                                                                          // 665
                                                                                                                   // 666
        if (k == keys.length - 1) {                                                                                // 667
          dataLevel[key] = data[originalKey];                                                                      // 668
        }                                                                                                          // 669
                                                                                                                   // 670
        dataLevel = dataLevel[key];                                                                                // 671
      }                                                                                                            // 672
                                                                                                                   // 673
      delete data[originalKey];                                                                                    // 674
    }                                                                                                              // 675
                                                                                                                   // 676
    return data;                                                                                                   // 677
  };                                                                                                               // 678
                                                                                                                   // 679
  Utils.hasScroll = function (index, el) {                                                                         // 680
    // Adapted from the function created by @ShadowScripter                                                        // 681
    // and adapted by @BillBarry on the Stack Exchange Code Review website.                                        // 682
    // The original code can be found at                                                                           // 683
    // http://codereview.stackexchange.com/q/13338                                                                 // 684
    // and was designed to be used with the Sizzle selector engine.                                                // 685
                                                                                                                   // 686
    var $el = $(el);                                                                                               // 687
    var overflowX = el.style.overflowX;                                                                            // 688
    var overflowY = el.style.overflowY;                                                                            // 689
                                                                                                                   // 690
    //Check both x and y declarations                                                                              // 691
    if (overflowX === overflowY &&                                                                                 // 692
        (overflowY === 'hidden' || overflowY === 'visible')) {                                                     // 693
      return false;                                                                                                // 694
    }                                                                                                              // 695
                                                                                                                   // 696
    if (overflowX === 'scroll' || overflowY === 'scroll') {                                                        // 697
      return true;                                                                                                 // 698
    }                                                                                                              // 699
                                                                                                                   // 700
    return ($el.innerHeight() < el.scrollHeight ||                                                                 // 701
      $el.innerWidth() < el.scrollWidth);                                                                          // 702
  };                                                                                                               // 703
                                                                                                                   // 704
  Utils.escapeMarkup = function (markup) {                                                                         // 705
    var replaceMap = {                                                                                             // 706
      '\\': '&#92;',                                                                                               // 707
      '&': '&amp;',                                                                                                // 708
      '<': '&lt;',                                                                                                 // 709
      '>': '&gt;',                                                                                                 // 710
      '"': '&quot;',                                                                                               // 711
      '\'': '&#39;',                                                                                               // 712
      '/': '&#47;'                                                                                                 // 713
    };                                                                                                             // 714
                                                                                                                   // 715
    // Do not try to escape the markup if it's not a string                                                        // 716
    if (typeof markup !== 'string') {                                                                              // 717
      return markup;                                                                                               // 718
    }                                                                                                              // 719
                                                                                                                   // 720
    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {                                               // 721
      return replaceMap[match];                                                                                    // 722
    });                                                                                                            // 723
  };                                                                                                               // 724
                                                                                                                   // 725
  // Append an array of jQuery nodes to a given element.                                                           // 726
  Utils.appendMany = function ($element, $nodes) {                                                                 // 727
    // jQuery 1.7.x does not support $.fn.append() with an array                                                   // 728
    // Fall back to a jQuery object collection using $.fn.add()                                                    // 729
    if ($.fn.jquery.substr(0, 3) === '1.7') {                                                                      // 730
      var $jqNodes = $();                                                                                          // 731
                                                                                                                   // 732
      $.map($nodes, function (node) {                                                                              // 733
        $jqNodes = $jqNodes.add(node);                                                                             // 734
      });                                                                                                          // 735
                                                                                                                   // 736
      $nodes = $jqNodes;                                                                                           // 737
    }                                                                                                              // 738
                                                                                                                   // 739
    $element.append($nodes);                                                                                       // 740
  };                                                                                                               // 741
                                                                                                                   // 742
  return Utils;                                                                                                    // 743
});                                                                                                                // 744
                                                                                                                   // 745
S2.define('select2/results',[                                                                                      // 746
  'jquery',                                                                                                        // 747
  './utils'                                                                                                        // 748
], function ($, Utils) {                                                                                           // 749
  function Results ($element, options, dataAdapter) {                                                              // 750
    this.$element = $element;                                                                                      // 751
    this.data = dataAdapter;                                                                                       // 752
    this.options = options;                                                                                        // 753
                                                                                                                   // 754
    Results.__super__.constructor.call(this);                                                                      // 755
  }                                                                                                                // 756
                                                                                                                   // 757
  Utils.Extend(Results, Utils.Observable);                                                                         // 758
                                                                                                                   // 759
  Results.prototype.render = function () {                                                                         // 760
    var $results = $(                                                                                              // 761
      '<ul class="select2-results__options" role="tree"></ul>'                                                     // 762
    );                                                                                                             // 763
                                                                                                                   // 764
    if (this.options.get('multiple')) {                                                                            // 765
      $results.attr('aria-multiselectable', 'true');                                                               // 766
    }                                                                                                              // 767
                                                                                                                   // 768
    this.$results = $results;                                                                                      // 769
                                                                                                                   // 770
    return $results;                                                                                               // 771
  };                                                                                                               // 772
                                                                                                                   // 773
  Results.prototype.clear = function () {                                                                          // 774
    this.$results.empty();                                                                                         // 775
  };                                                                                                               // 776
                                                                                                                   // 777
  Results.prototype.displayMessage = function (params) {                                                           // 778
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 779
                                                                                                                   // 780
    this.clear();                                                                                                  // 781
    this.hideLoading();                                                                                            // 782
                                                                                                                   // 783
    var $message = $(                                                                                              // 784
      '<li role="treeitem" aria-live="assertive"' +                                                                // 785
      ' class="select2-results__option"></li>'                                                                     // 786
    );                                                                                                             // 787
                                                                                                                   // 788
    var message = this.options.get('translations').get(params.message);                                            // 789
                                                                                                                   // 790
    $message.append(                                                                                               // 791
      escapeMarkup(                                                                                                // 792
        message(params.args)                                                                                       // 793
      )                                                                                                            // 794
    );                                                                                                             // 795
                                                                                                                   // 796
    $message[0].className += ' select2-results__message';                                                          // 797
                                                                                                                   // 798
    this.$results.append($message);                                                                                // 799
  };                                                                                                               // 800
                                                                                                                   // 801
  Results.prototype.hideMessages = function () {                                                                   // 802
    this.$results.find('.select2-results__message').remove();                                                      // 803
  };                                                                                                               // 804
                                                                                                                   // 805
  Results.prototype.append = function (data) {                                                                     // 806
    this.hideLoading();                                                                                            // 807
                                                                                                                   // 808
    var $options = [];                                                                                             // 809
                                                                                                                   // 810
    if (data.results == null || data.results.length === 0) {                                                       // 811
      if (this.$results.children().length === 0) {                                                                 // 812
        this.trigger('results:message', {                                                                          // 813
          message: 'noResults'                                                                                     // 814
        });                                                                                                        // 815
      }                                                                                                            // 816
                                                                                                                   // 817
      return;                                                                                                      // 818
    }                                                                                                              // 819
                                                                                                                   // 820
    data.results = this.sort(data.results);                                                                        // 821
                                                                                                                   // 822
    for (var d = 0; d < data.results.length; d++) {                                                                // 823
      var item = data.results[d];                                                                                  // 824
                                                                                                                   // 825
      var $option = this.option(item);                                                                             // 826
                                                                                                                   // 827
      $options.push($option);                                                                                      // 828
    }                                                                                                              // 829
                                                                                                                   // 830
    this.$results.append($options);                                                                                // 831
  };                                                                                                               // 832
                                                                                                                   // 833
  Results.prototype.position = function ($results, $dropdown) {                                                    // 834
    var $resultsContainer = $dropdown.find('.select2-results');                                                    // 835
    $resultsContainer.append($results);                                                                            // 836
  };                                                                                                               // 837
                                                                                                                   // 838
  Results.prototype.sort = function (data) {                                                                       // 839
    var sorter = this.options.get('sorter');                                                                       // 840
                                                                                                                   // 841
    return sorter(data);                                                                                           // 842
  };                                                                                                               // 843
                                                                                                                   // 844
  Results.prototype.setClasses = function () {                                                                     // 845
    var self = this;                                                                                               // 846
                                                                                                                   // 847
    this.data.current(function (selected) {                                                                        // 848
      var selectedIds = $.map(selected, function (s) {                                                             // 849
        return s.id.toString();                                                                                    // 850
      });                                                                                                          // 851
                                                                                                                   // 852
      var $options = self.$results                                                                                 // 853
        .find('.select2-results__option[aria-selected]');                                                          // 854
                                                                                                                   // 855
      $options.each(function () {                                                                                  // 856
        var $option = $(this);                                                                                     // 857
                                                                                                                   // 858
        var item = $.data(this, 'data');                                                                           // 859
                                                                                                                   // 860
        // id needs to be converted to a string when comparing                                                     // 861
        var id = '' + item.id;                                                                                     // 862
                                                                                                                   // 863
        if ((item.element != null && item.element.selected) ||                                                     // 864
            (item.element == null && $.inArray(id, selectedIds) > -1)) {                                           // 865
          $option.attr('aria-selected', 'true');                                                                   // 866
        } else {                                                                                                   // 867
          $option.attr('aria-selected', 'false');                                                                  // 868
        }                                                                                                          // 869
      });                                                                                                          // 870
                                                                                                                   // 871
      var $selected = $options.filter('[aria-selected=true]');                                                     // 872
                                                                                                                   // 873
      // Check if there are any selected options                                                                   // 874
      if ($selected.length > 0) {                                                                                  // 875
        // If there are selected options, highlight the first                                                      // 876
        $selected.first().trigger('mouseenter');                                                                   // 877
      } else {                                                                                                     // 878
        // If there are no selected options, highlight the first option                                            // 879
        // in the dropdown                                                                                         // 880
        $options.first().trigger('mouseenter');                                                                    // 881
      }                                                                                                            // 882
    });                                                                                                            // 883
  };                                                                                                               // 884
                                                                                                                   // 885
  Results.prototype.showLoading = function (params) {                                                              // 886
    this.hideLoading();                                                                                            // 887
                                                                                                                   // 888
    var loadingMore = this.options.get('translations').get('searching');                                           // 889
                                                                                                                   // 890
    var loading = {                                                                                                // 891
      disabled: true,                                                                                              // 892
      loading: true,                                                                                               // 893
      text: loadingMore(params)                                                                                    // 894
    };                                                                                                             // 895
    var $loading = this.option(loading);                                                                           // 896
    $loading.className += ' loading-results';                                                                      // 897
                                                                                                                   // 898
    this.$results.prepend($loading);                                                                               // 899
  };                                                                                                               // 900
                                                                                                                   // 901
  Results.prototype.hideLoading = function () {                                                                    // 902
    this.$results.find('.loading-results').remove();                                                               // 903
  };                                                                                                               // 904
                                                                                                                   // 905
  Results.prototype.option = function (data) {                                                                     // 906
    var option = document.createElement('li');                                                                     // 907
    option.className = 'select2-results__option';                                                                  // 908
                                                                                                                   // 909
    var attrs = {                                                                                                  // 910
      'role': 'treeitem',                                                                                          // 911
      'aria-selected': 'false'                                                                                     // 912
    };                                                                                                             // 913
                                                                                                                   // 914
    if (data.disabled) {                                                                                           // 915
      delete attrs['aria-selected'];                                                                               // 916
      attrs['aria-disabled'] = 'true';                                                                             // 917
    }                                                                                                              // 918
                                                                                                                   // 919
    if (data.id == null) {                                                                                         // 920
      delete attrs['aria-selected'];                                                                               // 921
    }                                                                                                              // 922
                                                                                                                   // 923
    if (data._resultId != null) {                                                                                  // 924
      option.id = data._resultId;                                                                                  // 925
    }                                                                                                              // 926
                                                                                                                   // 927
    if (data.title) {                                                                                              // 928
      option.title = data.title;                                                                                   // 929
    }                                                                                                              // 930
                                                                                                                   // 931
    if (data.children) {                                                                                           // 932
      attrs.role = 'group';                                                                                        // 933
      attrs['aria-label'] = data.text;                                                                             // 934
      delete attrs['aria-selected'];                                                                               // 935
    }                                                                                                              // 936
                                                                                                                   // 937
    for (var attr in attrs) {                                                                                      // 938
      var val = attrs[attr];                                                                                       // 939
                                                                                                                   // 940
      option.setAttribute(attr, val);                                                                              // 941
    }                                                                                                              // 942
                                                                                                                   // 943
    if (data.children) {                                                                                           // 944
      var $option = $(option);                                                                                     // 945
                                                                                                                   // 946
      var label = document.createElement('strong');                                                                // 947
      label.className = 'select2-results__group';                                                                  // 948
                                                                                                                   // 949
      var $label = $(label);                                                                                       // 950
      this.template(data, label);                                                                                  // 951
                                                                                                                   // 952
      var $children = [];                                                                                          // 953
                                                                                                                   // 954
      for (var c = 0; c < data.children.length; c++) {                                                             // 955
        var child = data.children[c];                                                                              // 956
                                                                                                                   // 957
        var $child = this.option(child);                                                                           // 958
                                                                                                                   // 959
        $children.push($child);                                                                                    // 960
      }                                                                                                            // 961
                                                                                                                   // 962
      var $childrenContainer = $('<ul></ul>', {                                                                    // 963
        'class': 'select2-results__options select2-results__options--nested'                                       // 964
      });                                                                                                          // 965
                                                                                                                   // 966
      $childrenContainer.append($children);                                                                        // 967
                                                                                                                   // 968
      $option.append(label);                                                                                       // 969
      $option.append($childrenContainer);                                                                          // 970
    } else {                                                                                                       // 971
      this.template(data, option);                                                                                 // 972
    }                                                                                                              // 973
                                                                                                                   // 974
    $.data(option, 'data', data);                                                                                  // 975
                                                                                                                   // 976
    return option;                                                                                                 // 977
  };                                                                                                               // 978
                                                                                                                   // 979
  Results.prototype.bind = function (container, $container) {                                                      // 980
    var self = this;                                                                                               // 981
                                                                                                                   // 982
    var id = container.id + '-results';                                                                            // 983
                                                                                                                   // 984
    this.$results.attr('id', id);                                                                                  // 985
                                                                                                                   // 986
    container.on('results:all', function (params) {                                                                // 987
      self.clear();                                                                                                // 988
      self.append(params.data);                                                                                    // 989
                                                                                                                   // 990
      if (container.isOpen()) {                                                                                    // 991
        self.setClasses();                                                                                         // 992
      }                                                                                                            // 993
    });                                                                                                            // 994
                                                                                                                   // 995
    container.on('results:append', function (params) {                                                             // 996
      self.append(params.data);                                                                                    // 997
                                                                                                                   // 998
      if (container.isOpen()) {                                                                                    // 999
        self.setClasses();                                                                                         // 1000
      }                                                                                                            // 1001
    });                                                                                                            // 1002
                                                                                                                   // 1003
    container.on('query', function (params) {                                                                      // 1004
      self.hideMessages();                                                                                         // 1005
      self.showLoading(params);                                                                                    // 1006
    });                                                                                                            // 1007
                                                                                                                   // 1008
    container.on('select', function () {                                                                           // 1009
      if (!container.isOpen()) {                                                                                   // 1010
        return;                                                                                                    // 1011
      }                                                                                                            // 1012
                                                                                                                   // 1013
      self.setClasses();                                                                                           // 1014
    });                                                                                                            // 1015
                                                                                                                   // 1016
    container.on('unselect', function () {                                                                         // 1017
      if (!container.isOpen()) {                                                                                   // 1018
        return;                                                                                                    // 1019
      }                                                                                                            // 1020
                                                                                                                   // 1021
      self.setClasses();                                                                                           // 1022
    });                                                                                                            // 1023
                                                                                                                   // 1024
    container.on('open', function () {                                                                             // 1025
      // When the dropdown is open, aria-expended="true"                                                           // 1026
      self.$results.attr('aria-expanded', 'true');                                                                 // 1027
      self.$results.attr('aria-hidden', 'false');                                                                  // 1028
                                                                                                                   // 1029
      self.setClasses();                                                                                           // 1030
      self.ensureHighlightVisible();                                                                               // 1031
    });                                                                                                            // 1032
                                                                                                                   // 1033
    container.on('close', function () {                                                                            // 1034
      // When the dropdown is closed, aria-expended="false"                                                        // 1035
      self.$results.attr('aria-expanded', 'false');                                                                // 1036
      self.$results.attr('aria-hidden', 'true');                                                                   // 1037
      self.$results.removeAttr('aria-activedescendant');                                                           // 1038
    });                                                                                                            // 1039
                                                                                                                   // 1040
    container.on('results:toggle', function () {                                                                   // 1041
      var $highlighted = self.getHighlightedResults();                                                             // 1042
                                                                                                                   // 1043
      if ($highlighted.length === 0) {                                                                             // 1044
        return;                                                                                                    // 1045
      }                                                                                                            // 1046
                                                                                                                   // 1047
      $highlighted.trigger('mouseup');                                                                             // 1048
    });                                                                                                            // 1049
                                                                                                                   // 1050
    container.on('results:select', function () {                                                                   // 1051
      var $highlighted = self.getHighlightedResults();                                                             // 1052
                                                                                                                   // 1053
      if ($highlighted.length === 0) {                                                                             // 1054
        return;                                                                                                    // 1055
      }                                                                                                            // 1056
                                                                                                                   // 1057
      var data = $highlighted.data('data');                                                                        // 1058
                                                                                                                   // 1059
      if ($highlighted.attr('aria-selected') == 'true') {                                                          // 1060
        self.trigger('close', {});                                                                                 // 1061
      } else {                                                                                                     // 1062
        self.trigger('select', {                                                                                   // 1063
          data: data                                                                                               // 1064
        });                                                                                                        // 1065
      }                                                                                                            // 1066
    });                                                                                                            // 1067
                                                                                                                   // 1068
    container.on('results:previous', function () {                                                                 // 1069
      var $highlighted = self.getHighlightedResults();                                                             // 1070
                                                                                                                   // 1071
      var $options = self.$results.find('[aria-selected]');                                                        // 1072
                                                                                                                   // 1073
      var currentIndex = $options.index($highlighted);                                                             // 1074
                                                                                                                   // 1075
      // If we are already at te top, don't move further                                                           // 1076
      if (currentIndex === 0) {                                                                                    // 1077
        return;                                                                                                    // 1078
      }                                                                                                            // 1079
                                                                                                                   // 1080
      var nextIndex = currentIndex - 1;                                                                            // 1081
                                                                                                                   // 1082
      // If none are highlighted, highlight the first                                                              // 1083
      if ($highlighted.length === 0) {                                                                             // 1084
        nextIndex = 0;                                                                                             // 1085
      }                                                                                                            // 1086
                                                                                                                   // 1087
      var $next = $options.eq(nextIndex);                                                                          // 1088
                                                                                                                   // 1089
      $next.trigger('mouseenter');                                                                                 // 1090
                                                                                                                   // 1091
      var currentOffset = self.$results.offset().top;                                                              // 1092
      var nextTop = $next.offset().top;                                                                            // 1093
      var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);                                      // 1094
                                                                                                                   // 1095
      if (nextIndex === 0) {                                                                                       // 1096
        self.$results.scrollTop(0);                                                                                // 1097
      } else if (nextTop - currentOffset < 0) {                                                                    // 1098
        self.$results.scrollTop(nextOffset);                                                                       // 1099
      }                                                                                                            // 1100
    });                                                                                                            // 1101
                                                                                                                   // 1102
    container.on('results:next', function () {                                                                     // 1103
      var $highlighted = self.getHighlightedResults();                                                             // 1104
                                                                                                                   // 1105
      var $options = self.$results.find('[aria-selected]');                                                        // 1106
                                                                                                                   // 1107
      var currentIndex = $options.index($highlighted);                                                             // 1108
                                                                                                                   // 1109
      var nextIndex = currentIndex + 1;                                                                            // 1110
                                                                                                                   // 1111
      // If we are at the last option, stay there                                                                  // 1112
      if (nextIndex >= $options.length) {                                                                          // 1113
        return;                                                                                                    // 1114
      }                                                                                                            // 1115
                                                                                                                   // 1116
      var $next = $options.eq(nextIndex);                                                                          // 1117
                                                                                                                   // 1118
      $next.trigger('mouseenter');                                                                                 // 1119
                                                                                                                   // 1120
      var currentOffset = self.$results.offset().top +                                                             // 1121
        self.$results.outerHeight(false);                                                                          // 1122
      var nextBottom = $next.offset().top + $next.outerHeight(false);                                              // 1123
      var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;                                     // 1124
                                                                                                                   // 1125
      if (nextIndex === 0) {                                                                                       // 1126
        self.$results.scrollTop(0);                                                                                // 1127
      } else if (nextBottom > currentOffset) {                                                                     // 1128
        self.$results.scrollTop(nextOffset);                                                                       // 1129
      }                                                                                                            // 1130
    });                                                                                                            // 1131
                                                                                                                   // 1132
    container.on('results:focus', function (params) {                                                              // 1133
      params.element.addClass('select2-results__option--highlighted');                                             // 1134
    });                                                                                                            // 1135
                                                                                                                   // 1136
    container.on('results:message', function (params) {                                                            // 1137
      self.displayMessage(params);                                                                                 // 1138
    });                                                                                                            // 1139
                                                                                                                   // 1140
    if ($.fn.mousewheel) {                                                                                         // 1141
      this.$results.on('mousewheel', function (e) {                                                                // 1142
        var top = self.$results.scrollTop();                                                                       // 1143
                                                                                                                   // 1144
        var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;                                           // 1145
                                                                                                                   // 1146
        var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;                                                         // 1147
        var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();                                         // 1148
                                                                                                                   // 1149
        if (isAtTop) {                                                                                             // 1150
          self.$results.scrollTop(0);                                                                              // 1151
                                                                                                                   // 1152
          e.preventDefault();                                                                                      // 1153
          e.stopPropagation();                                                                                     // 1154
        } else if (isAtBottom) {                                                                                   // 1155
          self.$results.scrollTop(                                                                                 // 1156
            self.$results.get(0).scrollHeight - self.$results.height()                                             // 1157
          );                                                                                                       // 1158
                                                                                                                   // 1159
          e.preventDefault();                                                                                      // 1160
          e.stopPropagation();                                                                                     // 1161
        }                                                                                                          // 1162
      });                                                                                                          // 1163
    }                                                                                                              // 1164
                                                                                                                   // 1165
    this.$results.on('mouseup', '.select2-results__option[aria-selected]',                                         // 1166
      function (evt) {                                                                                             // 1167
      var $this = $(this);                                                                                         // 1168
                                                                                                                   // 1169
      var data = $this.data('data');                                                                               // 1170
                                                                                                                   // 1171
      if ($this.attr('aria-selected') === 'true') {                                                                // 1172
        if (self.options.get('multiple')) {                                                                        // 1173
          self.trigger('unselect', {                                                                               // 1174
            originalEvent: evt,                                                                                    // 1175
            data: data                                                                                             // 1176
          });                                                                                                      // 1177
        } else {                                                                                                   // 1178
          self.trigger('close', {});                                                                               // 1179
        }                                                                                                          // 1180
                                                                                                                   // 1181
        return;                                                                                                    // 1182
      }                                                                                                            // 1183
                                                                                                                   // 1184
      self.trigger('select', {                                                                                     // 1185
        originalEvent: evt,                                                                                        // 1186
        data: data                                                                                                 // 1187
      });                                                                                                          // 1188
    });                                                                                                            // 1189
                                                                                                                   // 1190
    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',                                      // 1191
      function (evt) {                                                                                             // 1192
      var data = $(this).data('data');                                                                             // 1193
                                                                                                                   // 1194
      self.getHighlightedResults()                                                                                 // 1195
          .removeClass('select2-results__option--highlighted');                                                    // 1196
                                                                                                                   // 1197
      self.trigger('results:focus', {                                                                              // 1198
        data: data,                                                                                                // 1199
        element: $(this)                                                                                           // 1200
      });                                                                                                          // 1201
    });                                                                                                            // 1202
  };                                                                                                               // 1203
                                                                                                                   // 1204
  Results.prototype.getHighlightedResults = function () {                                                          // 1205
    var $highlighted = this.$results                                                                               // 1206
    .find('.select2-results__option--highlighted');                                                                // 1207
                                                                                                                   // 1208
    return $highlighted;                                                                                           // 1209
  };                                                                                                               // 1210
                                                                                                                   // 1211
  Results.prototype.destroy = function () {                                                                        // 1212
    this.$results.remove();                                                                                        // 1213
  };                                                                                                               // 1214
                                                                                                                   // 1215
  Results.prototype.ensureHighlightVisible = function () {                                                         // 1216
    var $highlighted = this.getHighlightedResults();                                                               // 1217
                                                                                                                   // 1218
    if ($highlighted.length === 0) {                                                                               // 1219
      return;                                                                                                      // 1220
    }                                                                                                              // 1221
                                                                                                                   // 1222
    var $options = this.$results.find('[aria-selected]');                                                          // 1223
                                                                                                                   // 1224
    var currentIndex = $options.index($highlighted);                                                               // 1225
                                                                                                                   // 1226
    var currentOffset = this.$results.offset().top;                                                                // 1227
    var nextTop = $highlighted.offset().top;                                                                       // 1228
    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);                                        // 1229
                                                                                                                   // 1230
    var offsetDelta = nextTop - currentOffset;                                                                     // 1231
    nextOffset -= $highlighted.outerHeight(false) * 2;                                                             // 1232
                                                                                                                   // 1233
    if (currentIndex <= 2) {                                                                                       // 1234
      this.$results.scrollTop(0);                                                                                  // 1235
    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {                                     // 1236
      this.$results.scrollTop(nextOffset);                                                                         // 1237
    }                                                                                                              // 1238
  };                                                                                                               // 1239
                                                                                                                   // 1240
  Results.prototype.template = function (result, container) {                                                      // 1241
    var template = this.options.get('templateResult');                                                             // 1242
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1243
                                                                                                                   // 1244
    var content = template(result, container);                                                                     // 1245
                                                                                                                   // 1246
    if (content == null) {                                                                                         // 1247
      container.style.display = 'none';                                                                            // 1248
    } else if (typeof content === 'string') {                                                                      // 1249
      container.innerHTML = escapeMarkup(content);                                                                 // 1250
    } else {                                                                                                       // 1251
      $(container).append(content);                                                                                // 1252
    }                                                                                                              // 1253
  };                                                                                                               // 1254
                                                                                                                   // 1255
  return Results;                                                                                                  // 1256
});                                                                                                                // 1257
                                                                                                                   // 1258
S2.define('select2/keys',[                                                                                         // 1259
                                                                                                                   // 1260
], function () {                                                                                                   // 1261
  var KEYS = {                                                                                                     // 1262
    BACKSPACE: 8,                                                                                                  // 1263
    TAB: 9,                                                                                                        // 1264
    ENTER: 13,                                                                                                     // 1265
    SHIFT: 16,                                                                                                     // 1266
    CTRL: 17,                                                                                                      // 1267
    ALT: 18,                                                                                                       // 1268
    ESC: 27,                                                                                                       // 1269
    SPACE: 32,                                                                                                     // 1270
    PAGE_UP: 33,                                                                                                   // 1271
    PAGE_DOWN: 34,                                                                                                 // 1272
    END: 35,                                                                                                       // 1273
    HOME: 36,                                                                                                      // 1274
    LEFT: 37,                                                                                                      // 1275
    UP: 38,                                                                                                        // 1276
    RIGHT: 39,                                                                                                     // 1277
    DOWN: 40,                                                                                                      // 1278
    DELETE: 46                                                                                                     // 1279
  };                                                                                                               // 1280
                                                                                                                   // 1281
  return KEYS;                                                                                                     // 1282
});                                                                                                                // 1283
                                                                                                                   // 1284
S2.define('select2/selection/base',[                                                                               // 1285
  'jquery',                                                                                                        // 1286
  '../utils',                                                                                                      // 1287
  '../keys'                                                                                                        // 1288
], function ($, Utils, KEYS) {                                                                                     // 1289
  function BaseSelection ($element, options) {                                                                     // 1290
    this.$element = $element;                                                                                      // 1291
    this.options = options;                                                                                        // 1292
                                                                                                                   // 1293
    BaseSelection.__super__.constructor.call(this);                                                                // 1294
  }                                                                                                                // 1295
                                                                                                                   // 1296
  Utils.Extend(BaseSelection, Utils.Observable);                                                                   // 1297
                                                                                                                   // 1298
  BaseSelection.prototype.render = function () {                                                                   // 1299
    var $selection = $(                                                                                            // 1300
      '<span class="select2-selection" role="combobox" ' +                                                         // 1301
      ' aria-haspopup="true" aria-expanded="false">' +                                                             // 1302
      '</span>'                                                                                                    // 1303
    );                                                                                                             // 1304
                                                                                                                   // 1305
    this._tabindex = 0;                                                                                            // 1306
                                                                                                                   // 1307
    if (this.$element.data('old-tabindex') != null) {                                                              // 1308
      this._tabindex = this.$element.data('old-tabindex');                                                         // 1309
    } else if (this.$element.attr('tabindex') != null) {                                                           // 1310
      this._tabindex = this.$element.attr('tabindex');                                                             // 1311
    }                                                                                                              // 1312
                                                                                                                   // 1313
    $selection.attr('title', this.$element.attr('title'));                                                         // 1314
    $selection.attr('tabindex', this._tabindex);                                                                   // 1315
                                                                                                                   // 1316
    this.$selection = $selection;                                                                                  // 1317
                                                                                                                   // 1318
    return $selection;                                                                                             // 1319
  };                                                                                                               // 1320
                                                                                                                   // 1321
  BaseSelection.prototype.bind = function (container, $container) {                                                // 1322
    var self = this;                                                                                               // 1323
                                                                                                                   // 1324
    var id = container.id + '-container';                                                                          // 1325
    var resultsId = container.id + '-results';                                                                     // 1326
                                                                                                                   // 1327
    this.container = container;                                                                                    // 1328
                                                                                                                   // 1329
    this.$selection.on('focus', function (evt) {                                                                   // 1330
      self.trigger('focus', evt);                                                                                  // 1331
    });                                                                                                            // 1332
                                                                                                                   // 1333
    this.$selection.on('blur', function (evt) {                                                                    // 1334
      self._handleBlur(evt);                                                                                       // 1335
    });                                                                                                            // 1336
                                                                                                                   // 1337
    this.$selection.on('keydown', function (evt) {                                                                 // 1338
      self.trigger('keypress', evt);                                                                               // 1339
                                                                                                                   // 1340
      if (evt.which === KEYS.SPACE) {                                                                              // 1341
        evt.preventDefault();                                                                                      // 1342
      }                                                                                                            // 1343
    });                                                                                                            // 1344
                                                                                                                   // 1345
    container.on('results:focus', function (params) {                                                              // 1346
      self.$selection.attr('aria-activedescendant', params.data._resultId);                                        // 1347
    });                                                                                                            // 1348
                                                                                                                   // 1349
    container.on('selection:update', function (params) {                                                           // 1350
      self.update(params.data);                                                                                    // 1351
    });                                                                                                            // 1352
                                                                                                                   // 1353
    container.on('open', function () {                                                                             // 1354
      // When the dropdown is open, aria-expanded="true"                                                           // 1355
      self.$selection.attr('aria-expanded', 'true');                                                               // 1356
      self.$selection.attr('aria-owns', resultsId);                                                                // 1357
                                                                                                                   // 1358
      self._attachCloseHandler(container);                                                                         // 1359
    });                                                                                                            // 1360
                                                                                                                   // 1361
    container.on('close', function () {                                                                            // 1362
      // When the dropdown is closed, aria-expanded="false"                                                        // 1363
      self.$selection.attr('aria-expanded', 'false');                                                              // 1364
      self.$selection.removeAttr('aria-activedescendant');                                                         // 1365
      self.$selection.removeAttr('aria-owns');                                                                     // 1366
                                                                                                                   // 1367
      self.$selection.focus();                                                                                     // 1368
                                                                                                                   // 1369
      self._detachCloseHandler(container);                                                                         // 1370
    });                                                                                                            // 1371
                                                                                                                   // 1372
    container.on('enable', function () {                                                                           // 1373
      self.$selection.attr('tabindex', self._tabindex);                                                            // 1374
    });                                                                                                            // 1375
                                                                                                                   // 1376
    container.on('disable', function () {                                                                          // 1377
      self.$selection.attr('tabindex', '-1');                                                                      // 1378
    });                                                                                                            // 1379
  };                                                                                                               // 1380
                                                                                                                   // 1381
  BaseSelection.prototype._handleBlur = function (evt) {                                                           // 1382
    var self = this;                                                                                               // 1383
                                                                                                                   // 1384
    // This needs to be delayed as the active element is the body when the tab                                     // 1385
    // key is pressed, possibly along with others.                                                                 // 1386
    window.setTimeout(function () {                                                                                // 1387
      // Don't trigger `blur` if the focus is still in the selection                                               // 1388
      if (                                                                                                         // 1389
        (document.activeElement == self.$selection[0]) ||                                                          // 1390
        ($.contains(self.$selection[0], document.activeElement))                                                   // 1391
      ) {                                                                                                          // 1392
        return;                                                                                                    // 1393
      }                                                                                                            // 1394
                                                                                                                   // 1395
      self.trigger('blur', evt);                                                                                   // 1396
    }, 1);                                                                                                         // 1397
  };                                                                                                               // 1398
                                                                                                                   // 1399
  BaseSelection.prototype._attachCloseHandler = function (container) {                                             // 1400
    var self = this;                                                                                               // 1401
                                                                                                                   // 1402
    $(document.body).on('mousedown.select2.' + container.id, function (e) {                                        // 1403
      var $target = $(e.target);                                                                                   // 1404
                                                                                                                   // 1405
      var $select = $target.closest('.select2');                                                                   // 1406
                                                                                                                   // 1407
      var $all = $('.select2.select2-container--open');                                                            // 1408
                                                                                                                   // 1409
      $all.each(function () {                                                                                      // 1410
        var $this = $(this);                                                                                       // 1411
                                                                                                                   // 1412
        if (this == $select[0]) {                                                                                  // 1413
          return;                                                                                                  // 1414
        }                                                                                                          // 1415
                                                                                                                   // 1416
        var $element = $this.data('element');                                                                      // 1417
                                                                                                                   // 1418
        $element.select2('close');                                                                                 // 1419
      });                                                                                                          // 1420
    });                                                                                                            // 1421
  };                                                                                                               // 1422
                                                                                                                   // 1423
  BaseSelection.prototype._detachCloseHandler = function (container) {                                             // 1424
    $(document.body).off('mousedown.select2.' + container.id);                                                     // 1425
  };                                                                                                               // 1426
                                                                                                                   // 1427
  BaseSelection.prototype.position = function ($selection, $container) {                                           // 1428
    var $selectionContainer = $container.find('.selection');                                                       // 1429
    $selectionContainer.append($selection);                                                                        // 1430
  };                                                                                                               // 1431
                                                                                                                   // 1432
  BaseSelection.prototype.destroy = function () {                                                                  // 1433
    this._detachCloseHandler(this.container);                                                                      // 1434
  };                                                                                                               // 1435
                                                                                                                   // 1436
  BaseSelection.prototype.update = function (data) {                                                               // 1437
    throw new Error('The `update` method must be defined in child classes.');                                      // 1438
  };                                                                                                               // 1439
                                                                                                                   // 1440
  return BaseSelection;                                                                                            // 1441
});                                                                                                                // 1442
                                                                                                                   // 1443
S2.define('select2/selection/single',[                                                                             // 1444
  'jquery',                                                                                                        // 1445
  './base',                                                                                                        // 1446
  '../utils',                                                                                                      // 1447
  '../keys'                                                                                                        // 1448
], function ($, BaseSelection, Utils, KEYS) {                                                                      // 1449
  function SingleSelection () {                                                                                    // 1450
    SingleSelection.__super__.constructor.apply(this, arguments);                                                  // 1451
  }                                                                                                                // 1452
                                                                                                                   // 1453
  Utils.Extend(SingleSelection, BaseSelection);                                                                    // 1454
                                                                                                                   // 1455
  SingleSelection.prototype.render = function () {                                                                 // 1456
    var $selection = SingleSelection.__super__.render.call(this);                                                  // 1457
                                                                                                                   // 1458
    $selection.addClass('select2-selection--single');                                                              // 1459
                                                                                                                   // 1460
    $selection.html(                                                                                               // 1461
      '<span class="select2-selection__rendered"></span>' +                                                        // 1462
      '<span class="select2-selection__arrow" role="presentation">' +                                              // 1463
        '<b role="presentation"></b>' +                                                                            // 1464
      '</span>'                                                                                                    // 1465
    );                                                                                                             // 1466
                                                                                                                   // 1467
    return $selection;                                                                                             // 1468
  };                                                                                                               // 1469
                                                                                                                   // 1470
  SingleSelection.prototype.bind = function (container, $container) {                                              // 1471
    var self = this;                                                                                               // 1472
                                                                                                                   // 1473
    SingleSelection.__super__.bind.apply(this, arguments);                                                         // 1474
                                                                                                                   // 1475
    var id = container.id + '-container';                                                                          // 1476
                                                                                                                   // 1477
    this.$selection.find('.select2-selection__rendered').attr('id', id);                                           // 1478
    this.$selection.attr('aria-labelledby', id);                                                                   // 1479
                                                                                                                   // 1480
    this.$selection.on('mousedown', function (evt) {                                                               // 1481
      // Only respond to left clicks                                                                               // 1482
      if (evt.which !== 1) {                                                                                       // 1483
        return;                                                                                                    // 1484
      }                                                                                                            // 1485
                                                                                                                   // 1486
      self.trigger('toggle', {                                                                                     // 1487
        originalEvent: evt                                                                                         // 1488
      });                                                                                                          // 1489
    });                                                                                                            // 1490
                                                                                                                   // 1491
    this.$selection.on('focus', function (evt) {                                                                   // 1492
      // User focuses on the container                                                                             // 1493
    });                                                                                                            // 1494
                                                                                                                   // 1495
    this.$selection.on('blur', function (evt) {                                                                    // 1496
      // User exits the container                                                                                  // 1497
    });                                                                                                            // 1498
                                                                                                                   // 1499
    container.on('selection:update', function (params) {                                                           // 1500
      self.update(params.data);                                                                                    // 1501
    });                                                                                                            // 1502
  };                                                                                                               // 1503
                                                                                                                   // 1504
  SingleSelection.prototype.clear = function () {                                                                  // 1505
    this.$selection.find('.select2-selection__rendered').empty();                                                  // 1506
  };                                                                                                               // 1507
                                                                                                                   // 1508
  SingleSelection.prototype.display = function (data, container) {                                                 // 1509
    var template = this.options.get('templateSelection');                                                          // 1510
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1511
                                                                                                                   // 1512
    return escapeMarkup(template(data, container));                                                                // 1513
  };                                                                                                               // 1514
                                                                                                                   // 1515
  SingleSelection.prototype.selectionContainer = function () {                                                     // 1516
    return $('<span></span>');                                                                                     // 1517
  };                                                                                                               // 1518
                                                                                                                   // 1519
  SingleSelection.prototype.update = function (data) {                                                             // 1520
    if (data.length === 0) {                                                                                       // 1521
      this.clear();                                                                                                // 1522
      return;                                                                                                      // 1523
    }                                                                                                              // 1524
                                                                                                                   // 1525
    var selection = data[0];                                                                                       // 1526
                                                                                                                   // 1527
    var $rendered = this.$selection.find('.select2-selection__rendered');                                          // 1528
    var formatted = this.display(selection, $rendered);                                                            // 1529
                                                                                                                   // 1530
    $rendered.empty().append(formatted);                                                                           // 1531
    $rendered.prop('title', selection.title || selection.text);                                                    // 1532
  };                                                                                                               // 1533
                                                                                                                   // 1534
  return SingleSelection;                                                                                          // 1535
});                                                                                                                // 1536
                                                                                                                   // 1537
S2.define('select2/selection/multiple',[                                                                           // 1538
  'jquery',                                                                                                        // 1539
  './base',                                                                                                        // 1540
  '../utils'                                                                                                       // 1541
], function ($, BaseSelection, Utils) {                                                                            // 1542
  function MultipleSelection ($element, options) {                                                                 // 1543
    MultipleSelection.__super__.constructor.apply(this, arguments);                                                // 1544
  }                                                                                                                // 1545
                                                                                                                   // 1546
  Utils.Extend(MultipleSelection, BaseSelection);                                                                  // 1547
                                                                                                                   // 1548
  MultipleSelection.prototype.render = function () {                                                               // 1549
    var $selection = MultipleSelection.__super__.render.call(this);                                                // 1550
                                                                                                                   // 1551
    $selection.addClass('select2-selection--multiple');                                                            // 1552
                                                                                                                   // 1553
    $selection.html(                                                                                               // 1554
      '<ul class="select2-selection__rendered"></ul>'                                                              // 1555
    );                                                                                                             // 1556
                                                                                                                   // 1557
    return $selection;                                                                                             // 1558
  };                                                                                                               // 1559
                                                                                                                   // 1560
  MultipleSelection.prototype.bind = function (container, $container) {                                            // 1561
    var self = this;                                                                                               // 1562
                                                                                                                   // 1563
    MultipleSelection.__super__.bind.apply(this, arguments);                                                       // 1564
                                                                                                                   // 1565
    this.$selection.on('click', function (evt) {                                                                   // 1566
      self.trigger('toggle', {                                                                                     // 1567
        originalEvent: evt                                                                                         // 1568
      });                                                                                                          // 1569
    });                                                                                                            // 1570
                                                                                                                   // 1571
    this.$selection.on(                                                                                            // 1572
      'click',                                                                                                     // 1573
      '.select2-selection__choice__remove',                                                                        // 1574
      function (evt) {                                                                                             // 1575
        // Ignore the event if it is disabled                                                                      // 1576
        if (self.options.get('disabled')) {                                                                        // 1577
          return;                                                                                                  // 1578
        }                                                                                                          // 1579
                                                                                                                   // 1580
        var $remove = $(this);                                                                                     // 1581
        var $selection = $remove.parent();                                                                         // 1582
                                                                                                                   // 1583
        var data = $selection.data('data');                                                                        // 1584
                                                                                                                   // 1585
        self.trigger('unselect', {                                                                                 // 1586
          originalEvent: evt,                                                                                      // 1587
          data: data                                                                                               // 1588
        });                                                                                                        // 1589
      }                                                                                                            // 1590
    );                                                                                                             // 1591
  };                                                                                                               // 1592
                                                                                                                   // 1593
  MultipleSelection.prototype.clear = function () {                                                                // 1594
    this.$selection.find('.select2-selection__rendered').empty();                                                  // 1595
  };                                                                                                               // 1596
                                                                                                                   // 1597
  MultipleSelection.prototype.display = function (data, container) {                                               // 1598
    var template = this.options.get('templateSelection');                                                          // 1599
    var escapeMarkup = this.options.get('escapeMarkup');                                                           // 1600
                                                                                                                   // 1601
    return escapeMarkup(template(data, container));                                                                // 1602
  };                                                                                                               // 1603
                                                                                                                   // 1604
  MultipleSelection.prototype.selectionContainer = function () {                                                   // 1605
    var $container = $(                                                                                            // 1606
      '<li class="select2-selection__choice">' +                                                                   // 1607
        '<span class="select2-selection__choice__remove" role="presentation">' +                                   // 1608
          '&times;' +                                                                                              // 1609
        '</span>' +                                                                                                // 1610
      '</li>'                                                                                                      // 1611
    );                                                                                                             // 1612
                                                                                                                   // 1613
    return $container;                                                                                             // 1614
  };                                                                                                               // 1615
                                                                                                                   // 1616
  MultipleSelection.prototype.update = function (data) {                                                           // 1617
    this.clear();                                                                                                  // 1618
                                                                                                                   // 1619
    if (data.length === 0) {                                                                                       // 1620
      return;                                                                                                      // 1621
    }                                                                                                              // 1622
                                                                                                                   // 1623
    var $selections = [];                                                                                          // 1624
                                                                                                                   // 1625
    for (var d = 0; d < data.length; d++) {                                                                        // 1626
      var selection = data[d];                                                                                     // 1627
                                                                                                                   // 1628
      var $selection = this.selectionContainer();                                                                  // 1629
      var formatted = this.display(selection, $selection);                                                         // 1630
                                                                                                                   // 1631
      $selection.append(formatted);                                                                                // 1632
      $selection.prop('title', selection.title || selection.text);                                                 // 1633
                                                                                                                   // 1634
      $selection.data('data', selection);                                                                          // 1635
                                                                                                                   // 1636
      $selections.push($selection);                                                                                // 1637
    }                                                                                                              // 1638
                                                                                                                   // 1639
    var $rendered = this.$selection.find('.select2-selection__rendered');                                          // 1640
                                                                                                                   // 1641
    Utils.appendMany($rendered, $selections);                                                                      // 1642
  };                                                                                                               // 1643
                                                                                                                   // 1644
  return MultipleSelection;                                                                                        // 1645
});                                                                                                                // 1646
                                                                                                                   // 1647
S2.define('select2/selection/placeholder',[                                                                        // 1648
  '../utils'                                                                                                       // 1649
], function (Utils) {                                                                                              // 1650
  function Placeholder (decorated, $element, options) {                                                            // 1651
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));                                      // 1652
                                                                                                                   // 1653
    decorated.call(this, $element, options);                                                                       // 1654
  }                                                                                                                // 1655
                                                                                                                   // 1656
  Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {                                         // 1657
    if (typeof placeholder === 'string') {                                                                         // 1658
      placeholder = {                                                                                              // 1659
        id: '',                                                                                                    // 1660
        text: placeholder                                                                                          // 1661
      };                                                                                                           // 1662
    }                                                                                                              // 1663
                                                                                                                   // 1664
    return placeholder;                                                                                            // 1665
  };                                                                                                               // 1666
                                                                                                                   // 1667
  Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {                                    // 1668
    var $placeholder = this.selectionContainer();                                                                  // 1669
                                                                                                                   // 1670
    $placeholder.html(this.display(placeholder));                                                                  // 1671
    $placeholder.addClass('select2-selection__placeholder')                                                        // 1672
                .removeClass('select2-selection__choice');                                                         // 1673
                                                                                                                   // 1674
    return $placeholder;                                                                                           // 1675
  };                                                                                                               // 1676
                                                                                                                   // 1677
  Placeholder.prototype.update = function (decorated, data) {                                                      // 1678
    var singlePlaceholder = (                                                                                      // 1679
      data.length == 1 && data[0].id != this.placeholder.id                                                        // 1680
    );                                                                                                             // 1681
    var multipleSelections = data.length > 1;                                                                      // 1682
                                                                                                                   // 1683
    if (multipleSelections || singlePlaceholder) {                                                                 // 1684
      return decorated.call(this, data);                                                                           // 1685
    }                                                                                                              // 1686
                                                                                                                   // 1687
    this.clear();                                                                                                  // 1688
                                                                                                                   // 1689
    var $placeholder = this.createPlaceholder(this.placeholder);                                                   // 1690
                                                                                                                   // 1691
    this.$selection.find('.select2-selection__rendered').append($placeholder);                                     // 1692
  };                                                                                                               // 1693
                                                                                                                   // 1694
  return Placeholder;                                                                                              // 1695
});                                                                                                                // 1696
                                                                                                                   // 1697
S2.define('select2/selection/allowClear',[                                                                         // 1698
  'jquery',                                                                                                        // 1699
  '../keys'                                                                                                        // 1700
], function ($, KEYS) {                                                                                            // 1701
  function AllowClear () { }                                                                                       // 1702
                                                                                                                   // 1703
  AllowClear.prototype.bind = function (decorated, container, $container) {                                        // 1704
    var self = this;                                                                                               // 1705
                                                                                                                   // 1706
    decorated.call(this, container, $container);                                                                   // 1707
                                                                                                                   // 1708
    if (this.placeholder == null) {                                                                                // 1709
      if (this.options.get('debug') && window.console && console.error) {                                          // 1710
        console.error(                                                                                             // 1711
          'Select2: The `allowClear` option should be used in combination ' +                                      // 1712
          'with the `placeholder` option.'                                                                         // 1713
        );                                                                                                         // 1714
      }                                                                                                            // 1715
    }                                                                                                              // 1716
                                                                                                                   // 1717
    this.$selection.on('mousedown', '.select2-selection__clear',                                                   // 1718
      function (evt) {                                                                                             // 1719
        self._handleClear(evt);                                                                                    // 1720
    });                                                                                                            // 1721
                                                                                                                   // 1722
    container.on('keypress', function (evt) {                                                                      // 1723
      self._handleKeyboardClear(evt, container);                                                                   // 1724
    });                                                                                                            // 1725
  };                                                                                                               // 1726
                                                                                                                   // 1727
  AllowClear.prototype._handleClear = function (_, evt) {                                                          // 1728
    // Ignore the event if it is disabled                                                                          // 1729
    if (this.options.get('disabled')) {                                                                            // 1730
      return;                                                                                                      // 1731
    }                                                                                                              // 1732
                                                                                                                   // 1733
    var $clear = this.$selection.find('.select2-selection__clear');                                                // 1734
                                                                                                                   // 1735
    // Ignore the event if nothing has been selected                                                               // 1736
    if ($clear.length === 0) {                                                                                     // 1737
      return;                                                                                                      // 1738
    }                                                                                                              // 1739
                                                                                                                   // 1740
    evt.stopPropagation();                                                                                         // 1741
                                                                                                                   // 1742
    var data = $clear.data('data');                                                                                // 1743
                                                                                                                   // 1744
    for (var d = 0; d < data.length; d++) {                                                                        // 1745
      var unselectData = {                                                                                         // 1746
        data: data[d]                                                                                              // 1747
      };                                                                                                           // 1748
                                                                                                                   // 1749
      // Trigger the `unselect` event, so people can prevent it from being                                         // 1750
      // cleared.                                                                                                  // 1751
      this.trigger('unselect', unselectData);                                                                      // 1752
                                                                                                                   // 1753
      // If the event was prevented, don't clear it out.                                                           // 1754
      if (unselectData.prevented) {                                                                                // 1755
        return;                                                                                                    // 1756
      }                                                                                                            // 1757
    }                                                                                                              // 1758
                                                                                                                   // 1759
    this.$element.val(this.placeholder.id).trigger('change');                                                      // 1760
                                                                                                                   // 1761
    this.trigger('toggle', {});                                                                                    // 1762
  };                                                                                                               // 1763
                                                                                                                   // 1764
  AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {                                       // 1765
    if (container.isOpen()) {                                                                                      // 1766
      return;                                                                                                      // 1767
    }                                                                                                              // 1768
                                                                                                                   // 1769
    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {                                                 // 1770
      this._handleClear(evt);                                                                                      // 1771
    }                                                                                                              // 1772
  };                                                                                                               // 1773
                                                                                                                   // 1774
  AllowClear.prototype.update = function (decorated, data) {                                                       // 1775
    decorated.call(this, data);                                                                                    // 1776
                                                                                                                   // 1777
    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||                                      // 1778
        data.length === 0) {                                                                                       // 1779
      return;                                                                                                      // 1780
    }                                                                                                              // 1781
                                                                                                                   // 1782
    var $remove = $(                                                                                               // 1783
      '<span class="select2-selection__clear">' +                                                                  // 1784
        '&times;' +                                                                                                // 1785
      '</span>'                                                                                                    // 1786
    );                                                                                                             // 1787
    $remove.data('data', data);                                                                                    // 1788
                                                                                                                   // 1789
    this.$selection.find('.select2-selection__rendered').prepend($remove);                                         // 1790
  };                                                                                                               // 1791
                                                                                                                   // 1792
  return AllowClear;                                                                                               // 1793
});                                                                                                                // 1794
                                                                                                                   // 1795
S2.define('select2/selection/search',[                                                                             // 1796
  'jquery',                                                                                                        // 1797
  '../utils',                                                                                                      // 1798
  '../keys'                                                                                                        // 1799
], function ($, Utils, KEYS) {                                                                                     // 1800
  function Search (decorated, $element, options) {                                                                 // 1801
    decorated.call(this, $element, options);                                                                       // 1802
  }                                                                                                                // 1803
                                                                                                                   // 1804
  Search.prototype.render = function (decorated) {                                                                 // 1805
    var $search = $(                                                                                               // 1806
      '<li class="select2-search select2-search--inline">' +                                                       // 1807
        '<input class="select2-search__field" type="search" tabindex="-1"' +                                       // 1808
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +                                             // 1809
        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +                                         // 1810
      '</li>'                                                                                                      // 1811
    );                                                                                                             // 1812
                                                                                                                   // 1813
    this.$searchContainer = $search;                                                                               // 1814
    this.$search = $search.find('input');                                                                          // 1815
                                                                                                                   // 1816
    var $rendered = decorated.call(this);                                                                          // 1817
                                                                                                                   // 1818
    this._transferTabIndex();                                                                                      // 1819
                                                                                                                   // 1820
    return $rendered;                                                                                              // 1821
  };                                                                                                               // 1822
                                                                                                                   // 1823
  Search.prototype.bind = function (decorated, container, $container) {                                            // 1824
    var self = this;                                                                                               // 1825
                                                                                                                   // 1826
    decorated.call(this, container, $container);                                                                   // 1827
                                                                                                                   // 1828
    container.on('open', function () {                                                                             // 1829
      self.$search.trigger('focus');                                                                               // 1830
    });                                                                                                            // 1831
                                                                                                                   // 1832
    container.on('close', function () {                                                                            // 1833
      self.$search.val('');                                                                                        // 1834
      self.$search.removeAttr('aria-activedescendant');                                                            // 1835
      self.$search.trigger('focus');                                                                               // 1836
    });                                                                                                            // 1837
                                                                                                                   // 1838
    container.on('enable', function () {                                                                           // 1839
      self.$search.prop('disabled', false);                                                                        // 1840
                                                                                                                   // 1841
      self._transferTabIndex();                                                                                    // 1842
    });                                                                                                            // 1843
                                                                                                                   // 1844
    container.on('disable', function () {                                                                          // 1845
      self.$search.prop('disabled', true);                                                                         // 1846
    });                                                                                                            // 1847
                                                                                                                   // 1848
    container.on('focus', function (evt) {                                                                         // 1849
      self.$search.trigger('focus');                                                                               // 1850
    });                                                                                                            // 1851
                                                                                                                   // 1852
    container.on('results:focus', function (params) {                                                              // 1853
      self.$search.attr('aria-activedescendant', params.id);                                                       // 1854
    });                                                                                                            // 1855
                                                                                                                   // 1856
    this.$selection.on('focusin', '.select2-search--inline', function (evt) {                                      // 1857
      self.trigger('focus', evt);                                                                                  // 1858
    });                                                                                                            // 1859
                                                                                                                   // 1860
    this.$selection.on('focusout', '.select2-search--inline', function (evt) {                                     // 1861
      self._handleBlur(evt);                                                                                       // 1862
    });                                                                                                            // 1863
                                                                                                                   // 1864
    this.$selection.on('keydown', '.select2-search--inline', function (evt) {                                      // 1865
      evt.stopPropagation();                                                                                       // 1866
                                                                                                                   // 1867
      self.trigger('keypress', evt);                                                                               // 1868
                                                                                                                   // 1869
      self._keyUpPrevented = evt.isDefaultPrevented();                                                             // 1870
                                                                                                                   // 1871
      var key = evt.which;                                                                                         // 1872
                                                                                                                   // 1873
      if (key === KEYS.BACKSPACE && self.$search.val() === '') {                                                   // 1874
        var $previousChoice = self.$searchContainer                                                                // 1875
          .prev('.select2-selection__choice');                                                                     // 1876
                                                                                                                   // 1877
        if ($previousChoice.length > 0) {                                                                          // 1878
          var item = $previousChoice.data('data');                                                                 // 1879
                                                                                                                   // 1880
          self.searchRemoveChoice(item);                                                                           // 1881
                                                                                                                   // 1882
          evt.preventDefault();                                                                                    // 1883
        }                                                                                                          // 1884
      }                                                                                                            // 1885
    });                                                                                                            // 1886
                                                                                                                   // 1887
    // Try to detect the IE version should the `documentMode` property that                                        // 1888
    // is stored on the document. This is only implemented in IE and is                                            // 1889
    // slightly cleaner than doing a user agent check.                                                             // 1890
    // This property is not available in Edge, but Edge also doesn't have                                          // 1891
    // this bug.                                                                                                   // 1892
    var msie = document.documentMode;                                                                              // 1893
    var disableInputEvents = msie && msie <= 11;                                                                   // 1894
                                                                                                                   // 1895
    // Workaround for browsers which do not support the `input` event                                              // 1896
    // This will prevent double-triggering of events for browsers which support                                    // 1897
    // both the `keyup` and `input` events.                                                                        // 1898
    this.$selection.on(                                                                                            // 1899
      'input.searchcheck',                                                                                         // 1900
      '.select2-search--inline',                                                                                   // 1901
      function (evt) {                                                                                             // 1902
        // IE will trigger the `input` event when a placeholder is used on a                                       // 1903
        // search box. To get around this issue, we are forced to ignore all                                       // 1904
        // `input` events in IE and keep using `keyup`.                                                            // 1905
        if (disableInputEvents) {                                                                                  // 1906
          self.$selection.off('input.search input.searchcheck');                                                   // 1907
          return;                                                                                                  // 1908
        }                                                                                                          // 1909
                                                                                                                   // 1910
        // Unbind the duplicated `keyup` event                                                                     // 1911
        self.$selection.off('keyup.search');                                                                       // 1912
      }                                                                                                            // 1913
    );                                                                                                             // 1914
                                                                                                                   // 1915
    this.$selection.on(                                                                                            // 1916
      'keyup.search input.search',                                                                                 // 1917
      '.select2-search--inline',                                                                                   // 1918
      function (evt) {                                                                                             // 1919
        // IE will trigger the `input` event when a placeholder is used on a                                       // 1920
        // search box. To get around this issue, we are forced to ignore all                                       // 1921
        // `input` events in IE and keep using `keyup`.                                                            // 1922
        if (disableInputEvents && evt.type === 'input') {                                                          // 1923
          self.$selection.off('input.search input.searchcheck');                                                   // 1924
          return;                                                                                                  // 1925
        }                                                                                                          // 1926
                                                                                                                   // 1927
        var key = evt.which;                                                                                       // 1928
                                                                                                                   // 1929
        // We can freely ignore events from modifier keys                                                          // 1930
        if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {                                            // 1931
          return;                                                                                                  // 1932
        }                                                                                                          // 1933
                                                                                                                   // 1934
        // Tabbing will be handled during the `keydown` phase                                                      // 1935
        if (key == KEYS.TAB) {                                                                                     // 1936
          return;                                                                                                  // 1937
        }                                                                                                          // 1938
                                                                                                                   // 1939
        self.handleSearch(evt);                                                                                    // 1940
      }                                                                                                            // 1941
    );                                                                                                             // 1942
  };                                                                                                               // 1943
                                                                                                                   // 1944
  /**                                                                                                              // 1945
   * This method will transfer the tabindex attribute from the rendered                                            // 1946
   * selection to the search box. This allows for the search box to be used as                                     // 1947
   * the primary focus instead of the selection container.                                                         // 1948
   *                                                                                                               // 1949
   * @private                                                                                                      // 1950
   */                                                                                                              // 1951
  Search.prototype._transferTabIndex = function (decorated) {                                                      // 1952
    this.$search.attr('tabindex', this.$selection.attr('tabindex'));                                               // 1953
    this.$selection.attr('tabindex', '-1');                                                                        // 1954
  };                                                                                                               // 1955
                                                                                                                   // 1956
  Search.prototype.createPlaceholder = function (decorated, placeholder) {                                         // 1957
    this.$search.attr('placeholder', placeholder.text);                                                            // 1958
  };                                                                                                               // 1959
                                                                                                                   // 1960
  Search.prototype.update = function (decorated, data) {                                                           // 1961
    var searchHadFocus = this.$search[0] == document.activeElement;                                                // 1962
                                                                                                                   // 1963
    this.$search.attr('placeholder', '');                                                                          // 1964
                                                                                                                   // 1965
    decorated.call(this, data);                                                                                    // 1966
                                                                                                                   // 1967
    this.$selection.find('.select2-selection__rendered')                                                           // 1968
                   .append(this.$searchContainer);                                                                 // 1969
                                                                                                                   // 1970
    this.resizeSearch();                                                                                           // 1971
    if (searchHadFocus) {                                                                                          // 1972
      this.$search.focus();                                                                                        // 1973
    }                                                                                                              // 1974
  };                                                                                                               // 1975
                                                                                                                   // 1976
  Search.prototype.handleSearch = function () {                                                                    // 1977
    this.resizeSearch();                                                                                           // 1978
                                                                                                                   // 1979
    if (!this._keyUpPrevented) {                                                                                   // 1980
      var input = this.$search.val();                                                                              // 1981
                                                                                                                   // 1982
      this.trigger('query', {                                                                                      // 1983
        term: input                                                                                                // 1984
      });                                                                                                          // 1985
    }                                                                                                              // 1986
                                                                                                                   // 1987
    this._keyUpPrevented = false;                                                                                  // 1988
  };                                                                                                               // 1989
                                                                                                                   // 1990
  Search.prototype.searchRemoveChoice = function (decorated, item) {                                               // 1991
    this.trigger('unselect', {                                                                                     // 1992
      data: item                                                                                                   // 1993
    });                                                                                                            // 1994
                                                                                                                   // 1995
    this.$search.val(item.text);                                                                                   // 1996
    this.handleSearch();                                                                                           // 1997
  };                                                                                                               // 1998
                                                                                                                   // 1999
  Search.prototype.resizeSearch = function () {                                                                    // 2000
    this.$search.css('width', '25px');                                                                             // 2001
                                                                                                                   // 2002
    var width = '';                                                                                                // 2003
                                                                                                                   // 2004
    if (this.$search.attr('placeholder') !== '') {                                                                 // 2005
      width = this.$selection.find('.select2-selection__rendered').innerWidth();                                   // 2006
    } else {                                                                                                       // 2007
      var minimumWidth = this.$search.val().length + 1;                                                            // 2008
                                                                                                                   // 2009
      width = (minimumWidth * 0.75) + 'em';                                                                        // 2010
    }                                                                                                              // 2011
                                                                                                                   // 2012
    this.$search.css('width', width);                                                                              // 2013
  };                                                                                                               // 2014
                                                                                                                   // 2015
  return Search;                                                                                                   // 2016
});                                                                                                                // 2017
                                                                                                                   // 2018
S2.define('select2/selection/eventRelay',[                                                                         // 2019
  'jquery'                                                                                                         // 2020
], function ($) {                                                                                                  // 2021
  function EventRelay () { }                                                                                       // 2022
                                                                                                                   // 2023
  EventRelay.prototype.bind = function (decorated, container, $container) {                                        // 2024
    var self = this;                                                                                               // 2025
    var relayEvents = [                                                                                            // 2026
      'open', 'opening',                                                                                           // 2027
      'close', 'closing',                                                                                          // 2028
      'select', 'selecting',                                                                                       // 2029
      'unselect', 'unselecting'                                                                                    // 2030
    ];                                                                                                             // 2031
                                                                                                                   // 2032
    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];                                    // 2033
                                                                                                                   // 2034
    decorated.call(this, container, $container);                                                                   // 2035
                                                                                                                   // 2036
    container.on('*', function (name, params) {                                                                    // 2037
      // Ignore events that should not be relayed                                                                  // 2038
      if ($.inArray(name, relayEvents) === -1) {                                                                   // 2039
        return;                                                                                                    // 2040
      }                                                                                                            // 2041
                                                                                                                   // 2042
      // The parameters should always be an object                                                                 // 2043
      params = params || {};                                                                                       // 2044
                                                                                                                   // 2045
      // Generate the jQuery event for the Select2 event                                                           // 2046
      var evt = $.Event('select2:' + name, {                                                                       // 2047
        params: params                                                                                             // 2048
      });                                                                                                          // 2049
                                                                                                                   // 2050
      self.$element.trigger(evt);                                                                                  // 2051
                                                                                                                   // 2052
      // Only handle preventable events if it was one                                                              // 2053
      if ($.inArray(name, preventableEvents) === -1) {                                                             // 2054
        return;                                                                                                    // 2055
      }                                                                                                            // 2056
                                                                                                                   // 2057
      params.prevented = evt.isDefaultPrevented();                                                                 // 2058
    });                                                                                                            // 2059
  };                                                                                                               // 2060
                                                                                                                   // 2061
  return EventRelay;                                                                                               // 2062
});                                                                                                                // 2063
                                                                                                                   // 2064
S2.define('select2/translation',[                                                                                  // 2065
  'jquery',                                                                                                        // 2066
  'require'                                                                                                        // 2067
], function ($, require) {                                                                                         // 2068
  function Translation (dict) {                                                                                    // 2069
    this.dict = dict || {};                                                                                        // 2070
  }                                                                                                                // 2071
                                                                                                                   // 2072
  Translation.prototype.all = function () {                                                                        // 2073
    return this.dict;                                                                                              // 2074
  };                                                                                                               // 2075
                                                                                                                   // 2076
  Translation.prototype.get = function (key) {                                                                     // 2077
    return this.dict[key];                                                                                         // 2078
  };                                                                                                               // 2079
                                                                                                                   // 2080
  Translation.prototype.extend = function (translation) {                                                          // 2081
    this.dict = $.extend({}, translation.all(), this.dict);                                                        // 2082
  };                                                                                                               // 2083
                                                                                                                   // 2084
  // Static functions                                                                                              // 2085
                                                                                                                   // 2086
  Translation._cache = {};                                                                                         // 2087
                                                                                                                   // 2088
  Translation.loadPath = function (path) {                                                                         // 2089
    if (!(path in Translation._cache)) {                                                                           // 2090
      var translations = require(path);                                                                            // 2091
                                                                                                                   // 2092
      Translation._cache[path] = translations;                                                                     // 2093
    }                                                                                                              // 2094
                                                                                                                   // 2095
    return new Translation(Translation._cache[path]);                                                              // 2096
  };                                                                                                               // 2097
                                                                                                                   // 2098
  return Translation;                                                                                              // 2099
});                                                                                                                // 2100
                                                                                                                   // 2101
S2.define('select2/diacritics',[                                                                                   // 2102
                                                                                                                   // 2103
], function () {                                                                                                   // 2104
  var diacritics = {                                                                                               // 2105
    '\u24B6': 'A',                                                                                                 // 2106
    '\uFF21': 'A',                                                                                                 // 2107
    '\u00C0': 'A',                                                                                                 // 2108
    '\u00C1': 'A',                                                                                                 // 2109
    '\u00C2': 'A',                                                                                                 // 2110
    '\u1EA6': 'A',                                                                                                 // 2111
    '\u1EA4': 'A',                                                                                                 // 2112
    '\u1EAA': 'A',                                                                                                 // 2113
    '\u1EA8': 'A',                                                                                                 // 2114
    '\u00C3': 'A',                                                                                                 // 2115
    '\u0100': 'A',                                                                                                 // 2116
    '\u0102': 'A',                                                                                                 // 2117
    '\u1EB0': 'A',                                                                                                 // 2118
    '\u1EAE': 'A',                                                                                                 // 2119
    '\u1EB4': 'A',                                                                                                 // 2120
    '\u1EB2': 'A',                                                                                                 // 2121
    '\u0226': 'A',                                                                                                 // 2122
    '\u01E0': 'A',                                                                                                 // 2123
    '\u00C4': 'A',                                                                                                 // 2124
    '\u01DE': 'A',                                                                                                 // 2125
    '\u1EA2': 'A',                                                                                                 // 2126
    '\u00C5': 'A',                                                                                                 // 2127
    '\u01FA': 'A',                                                                                                 // 2128
    '\u01CD': 'A',                                                                                                 // 2129
    '\u0200': 'A',                                                                                                 // 2130
    '\u0202': 'A',                                                                                                 // 2131
    '\u1EA0': 'A',                                                                                                 // 2132
    '\u1EAC': 'A',                                                                                                 // 2133
    '\u1EB6': 'A',                                                                                                 // 2134
    '\u1E00': 'A',                                                                                                 // 2135
    '\u0104': 'A',                                                                                                 // 2136
    '\u023A': 'A',                                                                                                 // 2137
    '\u2C6F': 'A',                                                                                                 // 2138
    '\uA732': 'AA',                                                                                                // 2139
    '\u00C6': 'AE',                                                                                                // 2140
    '\u01FC': 'AE',                                                                                                // 2141
    '\u01E2': 'AE',                                                                                                // 2142
    '\uA734': 'AO',                                                                                                // 2143
    '\uA736': 'AU',                                                                                                // 2144
    '\uA738': 'AV',                                                                                                // 2145
    '\uA73A': 'AV',                                                                                                // 2146
    '\uA73C': 'AY',                                                                                                // 2147
    '\u24B7': 'B',                                                                                                 // 2148
    '\uFF22': 'B',                                                                                                 // 2149
    '\u1E02': 'B',                                                                                                 // 2150
    '\u1E04': 'B',                                                                                                 // 2151
    '\u1E06': 'B',                                                                                                 // 2152
    '\u0243': 'B',                                                                                                 // 2153
    '\u0182': 'B',                                                                                                 // 2154
    '\u0181': 'B',                                                                                                 // 2155
    '\u24B8': 'C',                                                                                                 // 2156
    '\uFF23': 'C',                                                                                                 // 2157
    '\u0106': 'C',                                                                                                 // 2158
    '\u0108': 'C',                                                                                                 // 2159
    '\u010A': 'C',                                                                                                 // 2160
    '\u010C': 'C',                                                                                                 // 2161
    '\u00C7': 'C',                                                                                                 // 2162
    '\u1E08': 'C',                                                                                                 // 2163
    '\u0187': 'C',                                                                                                 // 2164
    '\u023B': 'C',                                                                                                 // 2165
    '\uA73E': 'C',                                                                                                 // 2166
    '\u24B9': 'D',                                                                                                 // 2167
    '\uFF24': 'D',                                                                                                 // 2168
    '\u1E0A': 'D',                                                                                                 // 2169
    '\u010E': 'D',                                                                                                 // 2170
    '\u1E0C': 'D',                                                                                                 // 2171
    '\u1E10': 'D',                                                                                                 // 2172
    '\u1E12': 'D',                                                                                                 // 2173
    '\u1E0E': 'D',                                                                                                 // 2174
    '\u0110': 'D',                                                                                                 // 2175
    '\u018B': 'D',                                                                                                 // 2176
    '\u018A': 'D',                                                                                                 // 2177
    '\u0189': 'D',                                                                                                 // 2178
    '\uA779': 'D',                                                                                                 // 2179
    '\u01F1': 'DZ',                                                                                                // 2180
    '\u01C4': 'DZ',                                                                                                // 2181
    '\u01F2': 'Dz',                                                                                                // 2182
    '\u01C5': 'Dz',                                                                                                // 2183
    '\u24BA': 'E',                                                                                                 // 2184
    '\uFF25': 'E',                                                                                                 // 2185
    '\u00C8': 'E',                                                                                                 // 2186
    '\u00C9': 'E',                                                                                                 // 2187
    '\u00CA': 'E',                                                                                                 // 2188
    '\u1EC0': 'E',                                                                                                 // 2189
    '\u1EBE': 'E',                                                                                                 // 2190
    '\u1EC4': 'E',                                                                                                 // 2191
    '\u1EC2': 'E',                                                                                                 // 2192
    '\u1EBC': 'E',                                                                                                 // 2193
    '\u0112': 'E',                                                                                                 // 2194
    '\u1E14': 'E',                                                                                                 // 2195
    '\u1E16': 'E',                                                                                                 // 2196
    '\u0114': 'E',                                                                                                 // 2197
    '\u0116': 'E',                                                                                                 // 2198
    '\u00CB': 'E',                                                                                                 // 2199
    '\u1EBA': 'E',                                                                                                 // 2200
    '\u011A': 'E',                                                                                                 // 2201
    '\u0204': 'E',                                                                                                 // 2202
    '\u0206': 'E',                                                                                                 // 2203
    '\u1EB8': 'E',                                                                                                 // 2204
    '\u1EC6': 'E',                                                                                                 // 2205
    '\u0228': 'E',                                                                                                 // 2206
    '\u1E1C': 'E',                                                                                                 // 2207
    '\u0118': 'E',                                                                                                 // 2208
    '\u1E18': 'E',                                                                                                 // 2209
    '\u1E1A': 'E',                                                                                                 // 2210
    '\u0190': 'E',                                                                                                 // 2211
    '\u018E': 'E',                                                                                                 // 2212
    '\u24BB': 'F',                                                                                                 // 2213
    '\uFF26': 'F',                                                                                                 // 2214
    '\u1E1E': 'F',                                                                                                 // 2215
    '\u0191': 'F',                                                                                                 // 2216
    '\uA77B': 'F',                                                                                                 // 2217
    '\u24BC': 'G',                                                                                                 // 2218
    '\uFF27': 'G',                                                                                                 // 2219
    '\u01F4': 'G',                                                                                                 // 2220
    '\u011C': 'G',                                                                                                 // 2221
    '\u1E20': 'G',                                                                                                 // 2222
    '\u011E': 'G',                                                                                                 // 2223
    '\u0120': 'G',                                                                                                 // 2224
    '\u01E6': 'G',                                                                                                 // 2225
    '\u0122': 'G',                                                                                                 // 2226
    '\u01E4': 'G',                                                                                                 // 2227
    '\u0193': 'G',                                                                                                 // 2228
    '\uA7A0': 'G',                                                                                                 // 2229
    '\uA77D': 'G',                                                                                                 // 2230
    '\uA77E': 'G',                                                                                                 // 2231
    '\u24BD': 'H',                                                                                                 // 2232
    '\uFF28': 'H',                                                                                                 // 2233
    '\u0124': 'H',                                                                                                 // 2234
    '\u1E22': 'H',                                                                                                 // 2235
    '\u1E26': 'H',                                                                                                 // 2236
    '\u021E': 'H',                                                                                                 // 2237
    '\u1E24': 'H',                                                                                                 // 2238
    '\u1E28': 'H',                                                                                                 // 2239
    '\u1E2A': 'H',                                                                                                 // 2240
    '\u0126': 'H',                                                                                                 // 2241
    '\u2C67': 'H',                                                                                                 // 2242
    '\u2C75': 'H',                                                                                                 // 2243
    '\uA78D': 'H',                                                                                                 // 2244
    '\u24BE': 'I',                                                                                                 // 2245
    '\uFF29': 'I',                                                                                                 // 2246
    '\u00CC': 'I',                                                                                                 // 2247
    '\u00CD': 'I',                                                                                                 // 2248
    '\u00CE': 'I',                                                                                                 // 2249
    '\u0128': 'I',                                                                                                 // 2250
    '\u012A': 'I',                                                                                                 // 2251
    '\u012C': 'I',                                                                                                 // 2252
    '\u0130': 'I',                                                                                                 // 2253
    '\u00CF': 'I',                                                                                                 // 2254
    '\u1E2E': 'I',                                                                                                 // 2255
    '\u1EC8': 'I',                                                                                                 // 2256
    '\u01CF': 'I',                                                                                                 // 2257
    '\u0208': 'I',                                                                                                 // 2258
    '\u020A': 'I',                                                                                                 // 2259
    '\u1ECA': 'I',                                                                                                 // 2260
    '\u012E': 'I',                                                                                                 // 2261
    '\u1E2C': 'I',                                                                                                 // 2262
    '\u0197': 'I',                                                                                                 // 2263
    '\u24BF': 'J',                                                                                                 // 2264
    '\uFF2A': 'J',                                                                                                 // 2265
    '\u0134': 'J',                                                                                                 // 2266
    '\u0248': 'J',                                                                                                 // 2267
    '\u24C0': 'K',                                                                                                 // 2268
    '\uFF2B': 'K',                                                                                                 // 2269
    '\u1E30': 'K',                                                                                                 // 2270
    '\u01E8': 'K',                                                                                                 // 2271
    '\u1E32': 'K',                                                                                                 // 2272
    '\u0136': 'K',                                                                                                 // 2273
    '\u1E34': 'K',                                                                                                 // 2274
    '\u0198': 'K',                                                                                                 // 2275
    '\u2C69': 'K',                                                                                                 // 2276
    '\uA740': 'K',                                                                                                 // 2277
    '\uA742': 'K',                                                                                                 // 2278
    '\uA744': 'K',                                                                                                 // 2279
    '\uA7A2': 'K',                                                                                                 // 2280
    '\u24C1': 'L',                                                                                                 // 2281
    '\uFF2C': 'L',                                                                                                 // 2282
    '\u013F': 'L',                                                                                                 // 2283
    '\u0139': 'L',                                                                                                 // 2284
    '\u013D': 'L',                                                                                                 // 2285
    '\u1E36': 'L',                                                                                                 // 2286
    '\u1E38': 'L',                                                                                                 // 2287
    '\u013B': 'L',                                                                                                 // 2288
    '\u1E3C': 'L',                                                                                                 // 2289
    '\u1E3A': 'L',                                                                                                 // 2290
    '\u0141': 'L',                                                                                                 // 2291
    '\u023D': 'L',                                                                                                 // 2292
    '\u2C62': 'L',                                                                                                 // 2293
    '\u2C60': 'L',                                                                                                 // 2294
    '\uA748': 'L',                                                                                                 // 2295
    '\uA746': 'L',                                                                                                 // 2296
    '\uA780': 'L',                                                                                                 // 2297
    '\u01C7': 'LJ',                                                                                                // 2298
    '\u01C8': 'Lj',                                                                                                // 2299
    '\u24C2': 'M',                                                                                                 // 2300
    '\uFF2D': 'M',                                                                                                 // 2301
    '\u1E3E': 'M',                                                                                                 // 2302
    '\u1E40': 'M',                                                                                                 // 2303
    '\u1E42': 'M',                                                                                                 // 2304
    '\u2C6E': 'M',                                                                                                 // 2305
    '\u019C': 'M',                                                                                                 // 2306
    '\u24C3': 'N',                                                                                                 // 2307
    '\uFF2E': 'N',                                                                                                 // 2308
    '\u01F8': 'N',                                                                                                 // 2309
    '\u0143': 'N',                                                                                                 // 2310
    '\u00D1': 'N',                                                                                                 // 2311
    '\u1E44': 'N',                                                                                                 // 2312
    '\u0147': 'N',                                                                                                 // 2313
    '\u1E46': 'N',                                                                                                 // 2314
    '\u0145': 'N',                                                                                                 // 2315
    '\u1E4A': 'N',                                                                                                 // 2316
    '\u1E48': 'N',                                                                                                 // 2317
    '\u0220': 'N',                                                                                                 // 2318
    '\u019D': 'N',                                                                                                 // 2319
    '\uA790': 'N',                                                                                                 // 2320
    '\uA7A4': 'N',                                                                                                 // 2321
    '\u01CA': 'NJ',                                                                                                // 2322
    '\u01CB': 'Nj',                                                                                                // 2323
    '\u24C4': 'O',                                                                                                 // 2324
    '\uFF2F': 'O',                                                                                                 // 2325
    '\u00D2': 'O',                                                                                                 // 2326
    '\u00D3': 'O',                                                                                                 // 2327
    '\u00D4': 'O',                                                                                                 // 2328
    '\u1ED2': 'O',                                                                                                 // 2329
    '\u1ED0': 'O',                                                                                                 // 2330
    '\u1ED6': 'O',                                                                                                 // 2331
    '\u1ED4': 'O',                                                                                                 // 2332
    '\u00D5': 'O',                                                                                                 // 2333
    '\u1E4C': 'O',                                                                                                 // 2334
    '\u022C': 'O',                                                                                                 // 2335
    '\u1E4E': 'O',                                                                                                 // 2336
    '\u014C': 'O',                                                                                                 // 2337
    '\u1E50': 'O',                                                                                                 // 2338
    '\u1E52': 'O',                                                                                                 // 2339
    '\u014E': 'O',                                                                                                 // 2340
    '\u022E': 'O',                                                                                                 // 2341
    '\u0230': 'O',                                                                                                 // 2342
    '\u00D6': 'O',                                                                                                 // 2343
    '\u022A': 'O',                                                                                                 // 2344
    '\u1ECE': 'O',                                                                                                 // 2345
    '\u0150': 'O',                                                                                                 // 2346
    '\u01D1': 'O',                                                                                                 // 2347
    '\u020C': 'O',                                                                                                 // 2348
    '\u020E': 'O',                                                                                                 // 2349
    '\u01A0': 'O',                                                                                                 // 2350
    '\u1EDC': 'O',                                                                                                 // 2351
    '\u1EDA': 'O',                                                                                                 // 2352
    '\u1EE0': 'O',                                                                                                 // 2353
    '\u1EDE': 'O',                                                                                                 // 2354
    '\u1EE2': 'O',                                                                                                 // 2355
    '\u1ECC': 'O',                                                                                                 // 2356
    '\u1ED8': 'O',                                                                                                 // 2357
    '\u01EA': 'O',                                                                                                 // 2358
    '\u01EC': 'O',                                                                                                 // 2359
    '\u00D8': 'O',                                                                                                 // 2360
    '\u01FE': 'O',                                                                                                 // 2361
    '\u0186': 'O',                                                                                                 // 2362
    '\u019F': 'O',                                                                                                 // 2363
    '\uA74A': 'O',                                                                                                 // 2364
    '\uA74C': 'O',                                                                                                 // 2365
    '\u01A2': 'OI',                                                                                                // 2366
    '\uA74E': 'OO',                                                                                                // 2367
    '\u0222': 'OU',                                                                                                // 2368
    '\u24C5': 'P',                                                                                                 // 2369
    '\uFF30': 'P',                                                                                                 // 2370
    '\u1E54': 'P',                                                                                                 // 2371
    '\u1E56': 'P',                                                                                                 // 2372
    '\u01A4': 'P',                                                                                                 // 2373
    '\u2C63': 'P',                                                                                                 // 2374
    '\uA750': 'P',                                                                                                 // 2375
    '\uA752': 'P',                                                                                                 // 2376
    '\uA754': 'P',                                                                                                 // 2377
    '\u24C6': 'Q',                                                                                                 // 2378
    '\uFF31': 'Q',                                                                                                 // 2379
    '\uA756': 'Q',                                                                                                 // 2380
    '\uA758': 'Q',                                                                                                 // 2381
    '\u024A': 'Q',                                                                                                 // 2382
    '\u24C7': 'R',                                                                                                 // 2383
    '\uFF32': 'R',                                                                                                 // 2384
    '\u0154': 'R',                                                                                                 // 2385
    '\u1E58': 'R',                                                                                                 // 2386
    '\u0158': 'R',                                                                                                 // 2387
    '\u0210': 'R',                                                                                                 // 2388
    '\u0212': 'R',                                                                                                 // 2389
    '\u1E5A': 'R',                                                                                                 // 2390
    '\u1E5C': 'R',                                                                                                 // 2391
    '\u0156': 'R',                                                                                                 // 2392
    '\u1E5E': 'R',                                                                                                 // 2393
    '\u024C': 'R',                                                                                                 // 2394
    '\u2C64': 'R',                                                                                                 // 2395
    '\uA75A': 'R',                                                                                                 // 2396
    '\uA7A6': 'R',                                                                                                 // 2397
    '\uA782': 'R',                                                                                                 // 2398
    '\u24C8': 'S',                                                                                                 // 2399
    '\uFF33': 'S',                                                                                                 // 2400
    '\u1E9E': 'S',                                                                                                 // 2401
    '\u015A': 'S',                                                                                                 // 2402
    '\u1E64': 'S',                                                                                                 // 2403
    '\u015C': 'S',                                                                                                 // 2404
    '\u1E60': 'S',                                                                                                 // 2405
    '\u0160': 'S',                                                                                                 // 2406
    '\u1E66': 'S',                                                                                                 // 2407
    '\u1E62': 'S',                                                                                                 // 2408
    '\u1E68': 'S',                                                                                                 // 2409
    '\u0218': 'S',                                                                                                 // 2410
    '\u015E': 'S',                                                                                                 // 2411
    '\u2C7E': 'S',                                                                                                 // 2412
    '\uA7A8': 'S',                                                                                                 // 2413
    '\uA784': 'S',                                                                                                 // 2414
    '\u24C9': 'T',                                                                                                 // 2415
    '\uFF34': 'T',                                                                                                 // 2416
    '\u1E6A': 'T',                                                                                                 // 2417
    '\u0164': 'T',                                                                                                 // 2418
    '\u1E6C': 'T',                                                                                                 // 2419
    '\u021A': 'T',                                                                                                 // 2420
    '\u0162': 'T',                                                                                                 // 2421
    '\u1E70': 'T',                                                                                                 // 2422
    '\u1E6E': 'T',                                                                                                 // 2423
    '\u0166': 'T',                                                                                                 // 2424
    '\u01AC': 'T',                                                                                                 // 2425
    '\u01AE': 'T',                                                                                                 // 2426
    '\u023E': 'T',                                                                                                 // 2427
    '\uA786': 'T',                                                                                                 // 2428
    '\uA728': 'TZ',                                                                                                // 2429
    '\u24CA': 'U',                                                                                                 // 2430
    '\uFF35': 'U',                                                                                                 // 2431
    '\u00D9': 'U',                                                                                                 // 2432
    '\u00DA': 'U',                                                                                                 // 2433
    '\u00DB': 'U',                                                                                                 // 2434
    '\u0168': 'U',                                                                                                 // 2435
    '\u1E78': 'U',                                                                                                 // 2436
    '\u016A': 'U',                                                                                                 // 2437
    '\u1E7A': 'U',                                                                                                 // 2438
    '\u016C': 'U',                                                                                                 // 2439
    '\u00DC': 'U',                                                                                                 // 2440
    '\u01DB': 'U',                                                                                                 // 2441
    '\u01D7': 'U',                                                                                                 // 2442
    '\u01D5': 'U',                                                                                                 // 2443
    '\u01D9': 'U',                                                                                                 // 2444
    '\u1EE6': 'U',                                                                                                 // 2445
    '\u016E': 'U',                                                                                                 // 2446
    '\u0170': 'U',                                                                                                 // 2447
    '\u01D3': 'U',                                                                                                 // 2448
    '\u0214': 'U',                                                                                                 // 2449
    '\u0216': 'U',                                                                                                 // 2450
    '\u01AF': 'U',                                                                                                 // 2451
    '\u1EEA': 'U',                                                                                                 // 2452
    '\u1EE8': 'U',                                                                                                 // 2453
    '\u1EEE': 'U',                                                                                                 // 2454
    '\u1EEC': 'U',                                                                                                 // 2455
    '\u1EF0': 'U',                                                                                                 // 2456
    '\u1EE4': 'U',                                                                                                 // 2457
    '\u1E72': 'U',                                                                                                 // 2458
    '\u0172': 'U',                                                                                                 // 2459
    '\u1E76': 'U',                                                                                                 // 2460
    '\u1E74': 'U',                                                                                                 // 2461
    '\u0244': 'U',                                                                                                 // 2462
    '\u24CB': 'V',                                                                                                 // 2463
    '\uFF36': 'V',                                                                                                 // 2464
    '\u1E7C': 'V',                                                                                                 // 2465
    '\u1E7E': 'V',                                                                                                 // 2466
    '\u01B2': 'V',                                                                                                 // 2467
    '\uA75E': 'V',                                                                                                 // 2468
    '\u0245': 'V',                                                                                                 // 2469
    '\uA760': 'VY',                                                                                                // 2470
    '\u24CC': 'W',                                                                                                 // 2471
    '\uFF37': 'W',                                                                                                 // 2472
    '\u1E80': 'W',                                                                                                 // 2473
    '\u1E82': 'W',                                                                                                 // 2474
    '\u0174': 'W',                                                                                                 // 2475
    '\u1E86': 'W',                                                                                                 // 2476
    '\u1E84': 'W',                                                                                                 // 2477
    '\u1E88': 'W',                                                                                                 // 2478
    '\u2C72': 'W',                                                                                                 // 2479
    '\u24CD': 'X',                                                                                                 // 2480
    '\uFF38': 'X',                                                                                                 // 2481
    '\u1E8A': 'X',                                                                                                 // 2482
    '\u1E8C': 'X',                                                                                                 // 2483
    '\u24CE': 'Y',                                                                                                 // 2484
    '\uFF39': 'Y',                                                                                                 // 2485
    '\u1EF2': 'Y',                                                                                                 // 2486
    '\u00DD': 'Y',                                                                                                 // 2487
    '\u0176': 'Y',                                                                                                 // 2488
    '\u1EF8': 'Y',                                                                                                 // 2489
    '\u0232': 'Y',                                                                                                 // 2490
    '\u1E8E': 'Y',                                                                                                 // 2491
    '\u0178': 'Y',                                                                                                 // 2492
    '\u1EF6': 'Y',                                                                                                 // 2493
    '\u1EF4': 'Y',                                                                                                 // 2494
    '\u01B3': 'Y',                                                                                                 // 2495
    '\u024E': 'Y',                                                                                                 // 2496
    '\u1EFE': 'Y',                                                                                                 // 2497
    '\u24CF': 'Z',                                                                                                 // 2498
    '\uFF3A': 'Z',                                                                                                 // 2499
    '\u0179': 'Z',                                                                                                 // 2500
    '\u1E90': 'Z',                                                                                                 // 2501
    '\u017B': 'Z',                                                                                                 // 2502
    '\u017D': 'Z',                                                                                                 // 2503
    '\u1E92': 'Z',                                                                                                 // 2504
    '\u1E94': 'Z',                                                                                                 // 2505
    '\u01B5': 'Z',                                                                                                 // 2506
    '\u0224': 'Z',                                                                                                 // 2507
    '\u2C7F': 'Z',                                                                                                 // 2508
    '\u2C6B': 'Z',                                                                                                 // 2509
    '\uA762': 'Z',                                                                                                 // 2510
    '\u24D0': 'a',                                                                                                 // 2511
    '\uFF41': 'a',                                                                                                 // 2512
    '\u1E9A': 'a',                                                                                                 // 2513
    '\u00E0': 'a',                                                                                                 // 2514
    '\u00E1': 'a',                                                                                                 // 2515
    '\u00E2': 'a',                                                                                                 // 2516
    '\u1EA7': 'a',                                                                                                 // 2517
    '\u1EA5': 'a',                                                                                                 // 2518
    '\u1EAB': 'a',                                                                                                 // 2519
    '\u1EA9': 'a',                                                                                                 // 2520
    '\u00E3': 'a',                                                                                                 // 2521
    '\u0101': 'a',                                                                                                 // 2522
    '\u0103': 'a',                                                                                                 // 2523
    '\u1EB1': 'a',                                                                                                 // 2524
    '\u1EAF': 'a',                                                                                                 // 2525
    '\u1EB5': 'a',                                                                                                 // 2526
    '\u1EB3': 'a',                                                                                                 // 2527
    '\u0227': 'a',                                                                                                 // 2528
    '\u01E1': 'a',                                                                                                 // 2529
    '\u00E4': 'a',                                                                                                 // 2530
    '\u01DF': 'a',                                                                                                 // 2531
    '\u1EA3': 'a',                                                                                                 // 2532
    '\u00E5': 'a',                                                                                                 // 2533
    '\u01FB': 'a',                                                                                                 // 2534
    '\u01CE': 'a',                                                                                                 // 2535
    '\u0201': 'a',                                                                                                 // 2536
    '\u0203': 'a',                                                                                                 // 2537
    '\u1EA1': 'a',                                                                                                 // 2538
    '\u1EAD': 'a',                                                                                                 // 2539
    '\u1EB7': 'a',                                                                                                 // 2540
    '\u1E01': 'a',                                                                                                 // 2541
    '\u0105': 'a',                                                                                                 // 2542
    '\u2C65': 'a',                                                                                                 // 2543
    '\u0250': 'a',                                                                                                 // 2544
    '\uA733': 'aa',                                                                                                // 2545
    '\u00E6': 'ae',                                                                                                // 2546
    '\u01FD': 'ae',                                                                                                // 2547
    '\u01E3': 'ae',                                                                                                // 2548
    '\uA735': 'ao',                                                                                                // 2549
    '\uA737': 'au',                                                                                                // 2550
    '\uA739': 'av',                                                                                                // 2551
    '\uA73B': 'av',                                                                                                // 2552
    '\uA73D': 'ay',                                                                                                // 2553
    '\u24D1': 'b',                                                                                                 // 2554
    '\uFF42': 'b',                                                                                                 // 2555
    '\u1E03': 'b',                                                                                                 // 2556
    '\u1E05': 'b',                                                                                                 // 2557
    '\u1E07': 'b',                                                                                                 // 2558
    '\u0180': 'b',                                                                                                 // 2559
    '\u0183': 'b',                                                                                                 // 2560
    '\u0253': 'b',                                                                                                 // 2561
    '\u24D2': 'c',                                                                                                 // 2562
    '\uFF43': 'c',                                                                                                 // 2563
    '\u0107': 'c',                                                                                                 // 2564
    '\u0109': 'c',                                                                                                 // 2565
    '\u010B': 'c',                                                                                                 // 2566
    '\u010D': 'c',                                                                                                 // 2567
    '\u00E7': 'c',                                                                                                 // 2568
    '\u1E09': 'c',                                                                                                 // 2569
    '\u0188': 'c',                                                                                                 // 2570
    '\u023C': 'c',                                                                                                 // 2571
    '\uA73F': 'c',                                                                                                 // 2572
    '\u2184': 'c',                                                                                                 // 2573
    '\u24D3': 'd',                                                                                                 // 2574
    '\uFF44': 'd',                                                                                                 // 2575
    '\u1E0B': 'd',                                                                                                 // 2576
    '\u010F': 'd',                                                                                                 // 2577
    '\u1E0D': 'd',                                                                                                 // 2578
    '\u1E11': 'd',                                                                                                 // 2579
    '\u1E13': 'd',                                                                                                 // 2580
    '\u1E0F': 'd',                                                                                                 // 2581
    '\u0111': 'd',                                                                                                 // 2582
    '\u018C': 'd',                                                                                                 // 2583
    '\u0256': 'd',                                                                                                 // 2584
    '\u0257': 'd',                                                                                                 // 2585
    '\uA77A': 'd',                                                                                                 // 2586
    '\u01F3': 'dz',                                                                                                // 2587
    '\u01C6': 'dz',                                                                                                // 2588
    '\u24D4': 'e',                                                                                                 // 2589
    '\uFF45': 'e',                                                                                                 // 2590
    '\u00E8': 'e',                                                                                                 // 2591
    '\u00E9': 'e',                                                                                                 // 2592
    '\u00EA': 'e',                                                                                                 // 2593
    '\u1EC1': 'e',                                                                                                 // 2594
    '\u1EBF': 'e',                                                                                                 // 2595
    '\u1EC5': 'e',                                                                                                 // 2596
    '\u1EC3': 'e',                                                                                                 // 2597
    '\u1EBD': 'e',                                                                                                 // 2598
    '\u0113': 'e',                                                                                                 // 2599
    '\u1E15': 'e',                                                                                                 // 2600
    '\u1E17': 'e',                                                                                                 // 2601
    '\u0115': 'e',                                                                                                 // 2602
    '\u0117': 'e',                                                                                                 // 2603
    '\u00EB': 'e',                                                                                                 // 2604
    '\u1EBB': 'e',                                                                                                 // 2605
    '\u011B': 'e',                                                                                                 // 2606
    '\u0205': 'e',                                                                                                 // 2607
    '\u0207': 'e',                                                                                                 // 2608
    '\u1EB9': 'e',                                                                                                 // 2609
    '\u1EC7': 'e',                                                                                                 // 2610
    '\u0229': 'e',                                                                                                 // 2611
    '\u1E1D': 'e',                                                                                                 // 2612
    '\u0119': 'e',                                                                                                 // 2613
    '\u1E19': 'e',                                                                                                 // 2614
    '\u1E1B': 'e',                                                                                                 // 2615
    '\u0247': 'e',                                                                                                 // 2616
    '\u025B': 'e',                                                                                                 // 2617
    '\u01DD': 'e',                                                                                                 // 2618
    '\u24D5': 'f',                                                                                                 // 2619
    '\uFF46': 'f',                                                                                                 // 2620
    '\u1E1F': 'f',                                                                                                 // 2621
    '\u0192': 'f',                                                                                                 // 2622
    '\uA77C': 'f',                                                                                                 // 2623
    '\u24D6': 'g',                                                                                                 // 2624
    '\uFF47': 'g',                                                                                                 // 2625
    '\u01F5': 'g',                                                                                                 // 2626
    '\u011D': 'g',                                                                                                 // 2627
    '\u1E21': 'g',                                                                                                 // 2628
    '\u011F': 'g',                                                                                                 // 2629
    '\u0121': 'g',                                                                                                 // 2630
    '\u01E7': 'g',                                                                                                 // 2631
    '\u0123': 'g',                                                                                                 // 2632
    '\u01E5': 'g',                                                                                                 // 2633
    '\u0260': 'g',                                                                                                 // 2634
    '\uA7A1': 'g',                                                                                                 // 2635
    '\u1D79': 'g',                                                                                                 // 2636
    '\uA77F': 'g',                                                                                                 // 2637
    '\u24D7': 'h',                                                                                                 // 2638
    '\uFF48': 'h',                                                                                                 // 2639
    '\u0125': 'h',                                                                                                 // 2640
    '\u1E23': 'h',                                                                                                 // 2641
    '\u1E27': 'h',                                                                                                 // 2642
    '\u021F': 'h',                                                                                                 // 2643
    '\u1E25': 'h',                                                                                                 // 2644
    '\u1E29': 'h',                                                                                                 // 2645
    '\u1E2B': 'h',                                                                                                 // 2646
    '\u1E96': 'h',                                                                                                 // 2647
    '\u0127': 'h',                                                                                                 // 2648
    '\u2C68': 'h',                                                                                                 // 2649
    '\u2C76': 'h',                                                                                                 // 2650
    '\u0265': 'h',                                                                                                 // 2651
    '\u0195': 'hv',                                                                                                // 2652
    '\u24D8': 'i',                                                                                                 // 2653
    '\uFF49': 'i',                                                                                                 // 2654
    '\u00EC': 'i',                                                                                                 // 2655
    '\u00ED': 'i',                                                                                                 // 2656
    '\u00EE': 'i',                                                                                                 // 2657
    '\u0129': 'i',                                                                                                 // 2658
    '\u012B': 'i',                                                                                                 // 2659
    '\u012D': 'i',                                                                                                 // 2660
    '\u00EF': 'i',                                                                                                 // 2661
    '\u1E2F': 'i',                                                                                                 // 2662
    '\u1EC9': 'i',                                                                                                 // 2663
    '\u01D0': 'i',                                                                                                 // 2664
    '\u0209': 'i',                                                                                                 // 2665
    '\u020B': 'i',                                                                                                 // 2666
    '\u1ECB': 'i',                                                                                                 // 2667
    '\u012F': 'i',                                                                                                 // 2668
    '\u1E2D': 'i',                                                                                                 // 2669
    '\u0268': 'i',                                                                                                 // 2670
    '\u0131': 'i',                                                                                                 // 2671
    '\u24D9': 'j',                                                                                                 // 2672
    '\uFF4A': 'j',                                                                                                 // 2673
    '\u0135': 'j',                                                                                                 // 2674
    '\u01F0': 'j',                                                                                                 // 2675
    '\u0249': 'j',                                                                                                 // 2676
    '\u24DA': 'k',                                                                                                 // 2677
    '\uFF4B': 'k',                                                                                                 // 2678
    '\u1E31': 'k',                                                                                                 // 2679
    '\u01E9': 'k',                                                                                                 // 2680
    '\u1E33': 'k',                                                                                                 // 2681
    '\u0137': 'k',                                                                                                 // 2682
    '\u1E35': 'k',                                                                                                 // 2683
    '\u0199': 'k',                                                                                                 // 2684
    '\u2C6A': 'k',                                                                                                 // 2685
    '\uA741': 'k',                                                                                                 // 2686
    '\uA743': 'k',                                                                                                 // 2687
    '\uA745': 'k',                                                                                                 // 2688
    '\uA7A3': 'k',                                                                                                 // 2689
    '\u24DB': 'l',                                                                                                 // 2690
    '\uFF4C': 'l',                                                                                                 // 2691
    '\u0140': 'l',                                                                                                 // 2692
    '\u013A': 'l',                                                                                                 // 2693
    '\u013E': 'l',                                                                                                 // 2694
    '\u1E37': 'l',                                                                                                 // 2695
    '\u1E39': 'l',                                                                                                 // 2696
    '\u013C': 'l',                                                                                                 // 2697
    '\u1E3D': 'l',                                                                                                 // 2698
    '\u1E3B': 'l',                                                                                                 // 2699
    '\u017F': 'l',                                                                                                 // 2700
    '\u0142': 'l',                                                                                                 // 2701
    '\u019A': 'l',                                                                                                 // 2702
    '\u026B': 'l',                                                                                                 // 2703
    '\u2C61': 'l',                                                                                                 // 2704
    '\uA749': 'l',                                                                                                 // 2705
    '\uA781': 'l',                                                                                                 // 2706
    '\uA747': 'l',                                                                                                 // 2707
    '\u01C9': 'lj',                                                                                                // 2708
    '\u24DC': 'm',                                                                                                 // 2709
    '\uFF4D': 'm',                                                                                                 // 2710
    '\u1E3F': 'm',                                                                                                 // 2711
    '\u1E41': 'm',                                                                                                 // 2712
    '\u1E43': 'm',                                                                                                 // 2713
    '\u0271': 'm',                                                                                                 // 2714
    '\u026F': 'm',                                                                                                 // 2715
    '\u24DD': 'n',                                                                                                 // 2716
    '\uFF4E': 'n',                                                                                                 // 2717
    '\u01F9': 'n',                                                                                                 // 2718
    '\u0144': 'n',                                                                                                 // 2719
    '\u00F1': 'n',                                                                                                 // 2720
    '\u1E45': 'n',                                                                                                 // 2721
    '\u0148': 'n',                                                                                                 // 2722
    '\u1E47': 'n',                                                                                                 // 2723
    '\u0146': 'n',                                                                                                 // 2724
    '\u1E4B': 'n',                                                                                                 // 2725
    '\u1E49': 'n',                                                                                                 // 2726
    '\u019E': 'n',                                                                                                 // 2727
    '\u0272': 'n',                                                                                                 // 2728
    '\u0149': 'n',                                                                                                 // 2729
    '\uA791': 'n',                                                                                                 // 2730
    '\uA7A5': 'n',                                                                                                 // 2731
    '\u01CC': 'nj',                                                                                                // 2732
    '\u24DE': 'o',                                                                                                 // 2733
    '\uFF4F': 'o',                                                                                                 // 2734
    '\u00F2': 'o',                                                                                                 // 2735
    '\u00F3': 'o',                                                                                                 // 2736
    '\u00F4': 'o',                                                                                                 // 2737
    '\u1ED3': 'o',                                                                                                 // 2738
    '\u1ED1': 'o',                                                                                                 // 2739
    '\u1ED7': 'o',                                                                                                 // 2740
    '\u1ED5': 'o',                                                                                                 // 2741
    '\u00F5': 'o',                                                                                                 // 2742
    '\u1E4D': 'o',                                                                                                 // 2743
    '\u022D': 'o',                                                                                                 // 2744
    '\u1E4F': 'o',                                                                                                 // 2745
    '\u014D': 'o',                                                                                                 // 2746
    '\u1E51': 'o',                                                                                                 // 2747
    '\u1E53': 'o',                                                                                                 // 2748
    '\u014F': 'o',                                                                                                 // 2749
    '\u022F': 'o',                                                                                                 // 2750
    '\u0231': 'o',                                                                                                 // 2751
    '\u00F6': 'o',                                                                                                 // 2752
    '\u022B': 'o',                                                                                                 // 2753
    '\u1ECF': 'o',                                                                                                 // 2754
    '\u0151': 'o',                                                                                                 // 2755
    '\u01D2': 'o',                                                                                                 // 2756
    '\u020D': 'o',                                                                                                 // 2757
    '\u020F': 'o',                                                                                                 // 2758
    '\u01A1': 'o',                                                                                                 // 2759
    '\u1EDD': 'o',                                                                                                 // 2760
    '\u1EDB': 'o',                                                                                                 // 2761
    '\u1EE1': 'o',                                                                                                 // 2762
    '\u1EDF': 'o',                                                                                                 // 2763
    '\u1EE3': 'o',                                                                                                 // 2764
    '\u1ECD': 'o',                                                                                                 // 2765
    '\u1ED9': 'o',                                                                                                 // 2766
    '\u01EB': 'o',                                                                                                 // 2767
    '\u01ED': 'o',                                                                                                 // 2768
    '\u00F8': 'o',                                                                                                 // 2769
    '\u01FF': 'o',                                                                                                 // 2770
    '\u0254': 'o',                                                                                                 // 2771
    '\uA74B': 'o',                                                                                                 // 2772
    '\uA74D': 'o',                                                                                                 // 2773
    '\u0275': 'o',                                                                                                 // 2774
    '\u01A3': 'oi',                                                                                                // 2775
    '\u0223': 'ou',                                                                                                // 2776
    '\uA74F': 'oo',                                                                                                // 2777
    '\u24DF': 'p',                                                                                                 // 2778
    '\uFF50': 'p',                                                                                                 // 2779
    '\u1E55': 'p',                                                                                                 // 2780
    '\u1E57': 'p',                                                                                                 // 2781
    '\u01A5': 'p',                                                                                                 // 2782
    '\u1D7D': 'p',                                                                                                 // 2783
    '\uA751': 'p',                                                                                                 // 2784
    '\uA753': 'p',                                                                                                 // 2785
    '\uA755': 'p',                                                                                                 // 2786
    '\u24E0': 'q',                                                                                                 // 2787
    '\uFF51': 'q',                                                                                                 // 2788
    '\u024B': 'q',                                                                                                 // 2789
    '\uA757': 'q',                                                                                                 // 2790
    '\uA759': 'q',                                                                                                 // 2791
    '\u24E1': 'r',                                                                                                 // 2792
    '\uFF52': 'r',                                                                                                 // 2793
    '\u0155': 'r',                                                                                                 // 2794
    '\u1E59': 'r',                                                                                                 // 2795
    '\u0159': 'r',                                                                                                 // 2796
    '\u0211': 'r',                                                                                                 // 2797
    '\u0213': 'r',                                                                                                 // 2798
    '\u1E5B': 'r',                                                                                                 // 2799
    '\u1E5D': 'r',                                                                                                 // 2800
    '\u0157': 'r',                                                                                                 // 2801
    '\u1E5F': 'r',                                                                                                 // 2802
    '\u024D': 'r',                                                                                                 // 2803
    '\u027D': 'r',                                                                                                 // 2804
    '\uA75B': 'r',                                                                                                 // 2805
    '\uA7A7': 'r',                                                                                                 // 2806
    '\uA783': 'r',                                                                                                 // 2807
    '\u24E2': 's',                                                                                                 // 2808
    '\uFF53': 's',                                                                                                 // 2809
    '\u00DF': 's',                                                                                                 // 2810
    '\u015B': 's',                                                                                                 // 2811
    '\u1E65': 's',                                                                                                 // 2812
    '\u015D': 's',                                                                                                 // 2813
    '\u1E61': 's',                                                                                                 // 2814
    '\u0161': 's',                                                                                                 // 2815
    '\u1E67': 's',                                                                                                 // 2816
    '\u1E63': 's',                                                                                                 // 2817
    '\u1E69': 's',                                                                                                 // 2818
    '\u0219': 's',                                                                                                 // 2819
    '\u015F': 's',                                                                                                 // 2820
    '\u023F': 's',                                                                                                 // 2821
    '\uA7A9': 's',                                                                                                 // 2822
    '\uA785': 's',                                                                                                 // 2823
    '\u1E9B': 's',                                                                                                 // 2824
    '\u24E3': 't',                                                                                                 // 2825
    '\uFF54': 't',                                                                                                 // 2826
    '\u1E6B': 't',                                                                                                 // 2827
    '\u1E97': 't',                                                                                                 // 2828
    '\u0165': 't',                                                                                                 // 2829
    '\u1E6D': 't',                                                                                                 // 2830
    '\u021B': 't',                                                                                                 // 2831
    '\u0163': 't',                                                                                                 // 2832
    '\u1E71': 't',                                                                                                 // 2833
    '\u1E6F': 't',                                                                                                 // 2834
    '\u0167': 't',                                                                                                 // 2835
    '\u01AD': 't',                                                                                                 // 2836
    '\u0288': 't',                                                                                                 // 2837
    '\u2C66': 't',                                                                                                 // 2838
    '\uA787': 't',                                                                                                 // 2839
    '\uA729': 'tz',                                                                                                // 2840
    '\u24E4': 'u',                                                                                                 // 2841
    '\uFF55': 'u',                                                                                                 // 2842
    '\u00F9': 'u',                                                                                                 // 2843
    '\u00FA': 'u',                                                                                                 // 2844
    '\u00FB': 'u',                                                                                                 // 2845
    '\u0169': 'u',                                                                                                 // 2846
    '\u1E79': 'u',                                                                                                 // 2847
    '\u016B': 'u',                                                                                                 // 2848
    '\u1E7B': 'u',                                                                                                 // 2849
    '\u016D': 'u',                                                                                                 // 2850
    '\u00FC': 'u',                                                                                                 // 2851
    '\u01DC': 'u',                                                                                                 // 2852
    '\u01D8': 'u',                                                                                                 // 2853
    '\u01D6': 'u',                                                                                                 // 2854
    '\u01DA': 'u',                                                                                                 // 2855
    '\u1EE7': 'u',                                                                                                 // 2856
    '\u016F': 'u',                                                                                                 // 2857
    '\u0171': 'u',                                                                                                 // 2858
    '\u01D4': 'u',                                                                                                 // 2859
    '\u0215': 'u',                                                                                                 // 2860
    '\u0217': 'u',                                                                                                 // 2861
    '\u01B0': 'u',                                                                                                 // 2862
    '\u1EEB': 'u',                                                                                                 // 2863
    '\u1EE9': 'u',                                                                                                 // 2864
    '\u1EEF': 'u',                                                                                                 // 2865
    '\u1EED': 'u',                                                                                                 // 2866
    '\u1EF1': 'u',                                                                                                 // 2867
    '\u1EE5': 'u',                                                                                                 // 2868
    '\u1E73': 'u',                                                                                                 // 2869
    '\u0173': 'u',                                                                                                 // 2870
    '\u1E77': 'u',                                                                                                 // 2871
    '\u1E75': 'u',                                                                                                 // 2872
    '\u0289': 'u',                                                                                                 // 2873
    '\u24E5': 'v',                                                                                                 // 2874
    '\uFF56': 'v',                                                                                                 // 2875
    '\u1E7D': 'v',                                                                                                 // 2876
    '\u1E7F': 'v',                                                                                                 // 2877
    '\u028B': 'v',                                                                                                 // 2878
    '\uA75F': 'v',                                                                                                 // 2879
    '\u028C': 'v',                                                                                                 // 2880
    '\uA761': 'vy',                                                                                                // 2881
    '\u24E6': 'w',                                                                                                 // 2882
    '\uFF57': 'w',                                                                                                 // 2883
    '\u1E81': 'w',                                                                                                 // 2884
    '\u1E83': 'w',                                                                                                 // 2885
    '\u0175': 'w',                                                                                                 // 2886
    '\u1E87': 'w',                                                                                                 // 2887
    '\u1E85': 'w',                                                                                                 // 2888
    '\u1E98': 'w',                                                                                                 // 2889
    '\u1E89': 'w',                                                                                                 // 2890
    '\u2C73': 'w',                                                                                                 // 2891
    '\u24E7': 'x',                                                                                                 // 2892
    '\uFF58': 'x',                                                                                                 // 2893
    '\u1E8B': 'x',                                                                                                 // 2894
    '\u1E8D': 'x',                                                                                                 // 2895
    '\u24E8': 'y',                                                                                                 // 2896
    '\uFF59': 'y',                                                                                                 // 2897
    '\u1EF3': 'y',                                                                                                 // 2898
    '\u00FD': 'y',                                                                                                 // 2899
    '\u0177': 'y',                                                                                                 // 2900
    '\u1EF9': 'y',                                                                                                 // 2901
    '\u0233': 'y',                                                                                                 // 2902
    '\u1E8F': 'y',                                                                                                 // 2903
    '\u00FF': 'y',                                                                                                 // 2904
    '\u1EF7': 'y',                                                                                                 // 2905
    '\u1E99': 'y',                                                                                                 // 2906
    '\u1EF5': 'y',                                                                                                 // 2907
    '\u01B4': 'y',                                                                                                 // 2908
    '\u024F': 'y',                                                                                                 // 2909
    '\u1EFF': 'y',                                                                                                 // 2910
    '\u24E9': 'z',                                                                                                 // 2911
    '\uFF5A': 'z',                                                                                                 // 2912
    '\u017A': 'z',                                                                                                 // 2913
    '\u1E91': 'z',                                                                                                 // 2914
    '\u017C': 'z',                                                                                                 // 2915
    '\u017E': 'z',                                                                                                 // 2916
    '\u1E93': 'z',                                                                                                 // 2917
    '\u1E95': 'z',                                                                                                 // 2918
    '\u01B6': 'z',                                                                                                 // 2919
    '\u0225': 'z',                                                                                                 // 2920
    '\u0240': 'z',                                                                                                 // 2921
    '\u2C6C': 'z',                                                                                                 // 2922
    '\uA763': 'z',                                                                                                 // 2923
    '\u0386': '\u0391',                                                                                            // 2924
    '\u0388': '\u0395',                                                                                            // 2925
    '\u0389': '\u0397',                                                                                            // 2926
    '\u038A': '\u0399',                                                                                            // 2927
    '\u03AA': '\u0399',                                                                                            // 2928
    '\u038C': '\u039F',                                                                                            // 2929
    '\u038E': '\u03A5',                                                                                            // 2930
    '\u03AB': '\u03A5',                                                                                            // 2931
    '\u038F': '\u03A9',                                                                                            // 2932
    '\u03AC': '\u03B1',                                                                                            // 2933
    '\u03AD': '\u03B5',                                                                                            // 2934
    '\u03AE': '\u03B7',                                                                                            // 2935
    '\u03AF': '\u03B9',                                                                                            // 2936
    '\u03CA': '\u03B9',                                                                                            // 2937
    '\u0390': '\u03B9',                                                                                            // 2938
    '\u03CC': '\u03BF',                                                                                            // 2939
    '\u03CD': '\u03C5',                                                                                            // 2940
    '\u03CB': '\u03C5',                                                                                            // 2941
    '\u03B0': '\u03C5',                                                                                            // 2942
    '\u03C9': '\u03C9',                                                                                            // 2943
    '\u03C2': '\u03C3'                                                                                             // 2944
  };                                                                                                               // 2945
                                                                                                                   // 2946
  return diacritics;                                                                                               // 2947
});                                                                                                                // 2948
                                                                                                                   // 2949
S2.define('select2/data/base',[                                                                                    // 2950
  '../utils'                                                                                                       // 2951
], function (Utils) {                                                                                              // 2952
  function BaseAdapter ($element, options) {                                                                       // 2953
    BaseAdapter.__super__.constructor.call(this);                                                                  // 2954
  }                                                                                                                // 2955
                                                                                                                   // 2956
  Utils.Extend(BaseAdapter, Utils.Observable);                                                                     // 2957
                                                                                                                   // 2958
  BaseAdapter.prototype.current = function (callback) {                                                            // 2959
    throw new Error('The `current` method must be defined in child classes.');                                     // 2960
  };                                                                                                               // 2961
                                                                                                                   // 2962
  BaseAdapter.prototype.query = function (params, callback) {                                                      // 2963
    throw new Error('The `query` method must be defined in child classes.');                                       // 2964
  };                                                                                                               // 2965
                                                                                                                   // 2966
  BaseAdapter.prototype.bind = function (container, $container) {                                                  // 2967
    // Can be implemented in subclasses                                                                            // 2968
  };                                                                                                               // 2969
                                                                                                                   // 2970
  BaseAdapter.prototype.destroy = function () {                                                                    // 2971
    // Can be implemented in subclasses                                                                            // 2972
  };                                                                                                               // 2973
                                                                                                                   // 2974
  BaseAdapter.prototype.generateResultId = function (container, data) {                                            // 2975
    var id = container.id + '-result-';                                                                            // 2976
                                                                                                                   // 2977
    id += Utils.generateChars(4);                                                                                  // 2978
                                                                                                                   // 2979
    if (data.id != null) {                                                                                         // 2980
      id += '-' + data.id.toString();                                                                              // 2981
    } else {                                                                                                       // 2982
      id += '-' + Utils.generateChars(4);                                                                          // 2983
    }                                                                                                              // 2984
    return id;                                                                                                     // 2985
  };                                                                                                               // 2986
                                                                                                                   // 2987
  return BaseAdapter;                                                                                              // 2988
});                                                                                                                // 2989
                                                                                                                   // 2990
S2.define('select2/data/select',[                                                                                  // 2991
  './base',                                                                                                        // 2992
  '../utils',                                                                                                      // 2993
  'jquery'                                                                                                         // 2994
], function (BaseAdapter, Utils, $) {                                                                              // 2995
  function SelectAdapter ($element, options) {                                                                     // 2996
    this.$element = $element;                                                                                      // 2997
    this.options = options;                                                                                        // 2998
                                                                                                                   // 2999
    SelectAdapter.__super__.constructor.call(this);                                                                // 3000
  }                                                                                                                // 3001
                                                                                                                   // 3002
  Utils.Extend(SelectAdapter, BaseAdapter);                                                                        // 3003
                                                                                                                   // 3004
  SelectAdapter.prototype.current = function (callback) {                                                          // 3005
    var data = [];                                                                                                 // 3006
    var self = this;                                                                                               // 3007
                                                                                                                   // 3008
    this.$element.find(':selected').each(function () {                                                             // 3009
      var $option = $(this);                                                                                       // 3010
                                                                                                                   // 3011
      var option = self.item($option);                                                                             // 3012
                                                                                                                   // 3013
      data.push(option);                                                                                           // 3014
    });                                                                                                            // 3015
                                                                                                                   // 3016
    callback(data);                                                                                                // 3017
  };                                                                                                               // 3018
                                                                                                                   // 3019
  SelectAdapter.prototype.select = function (data) {                                                               // 3020
    var self = this;                                                                                               // 3021
                                                                                                                   // 3022
    data.selected = true;                                                                                          // 3023
                                                                                                                   // 3024
    // If data.element is a DOM node, use it instead                                                               // 3025
    if ($(data.element).is('option')) {                                                                            // 3026
      data.element.selected = true;                                                                                // 3027
                                                                                                                   // 3028
      this.$element.trigger('change');                                                                             // 3029
                                                                                                                   // 3030
      return;                                                                                                      // 3031
    }                                                                                                              // 3032
                                                                                                                   // 3033
    if (this.$element.prop('multiple')) {                                                                          // 3034
      this.current(function (currentData) {                                                                        // 3035
        var val = [];                                                                                              // 3036
                                                                                                                   // 3037
        data = [data];                                                                                             // 3038
        data.push.apply(data, currentData);                                                                        // 3039
                                                                                                                   // 3040
        for (var d = 0; d < data.length; d++) {                                                                    // 3041
          var id = data[d].id;                                                                                     // 3042
                                                                                                                   // 3043
          if ($.inArray(id, val) === -1) {                                                                         // 3044
            val.push(id);                                                                                          // 3045
          }                                                                                                        // 3046
        }                                                                                                          // 3047
                                                                                                                   // 3048
        self.$element.val(val);                                                                                    // 3049
        self.$element.trigger('change');                                                                           // 3050
      });                                                                                                          // 3051
    } else {                                                                                                       // 3052
      var val = data.id;                                                                                           // 3053
                                                                                                                   // 3054
      this.$element.val(val);                                                                                      // 3055
      this.$element.trigger('change');                                                                             // 3056
    }                                                                                                              // 3057
  };                                                                                                               // 3058
                                                                                                                   // 3059
  SelectAdapter.prototype.unselect = function (data) {                                                             // 3060
    var self = this;                                                                                               // 3061
                                                                                                                   // 3062
    if (!this.$element.prop('multiple')) {                                                                         // 3063
      return;                                                                                                      // 3064
    }                                                                                                              // 3065
                                                                                                                   // 3066
    data.selected = false;                                                                                         // 3067
                                                                                                                   // 3068
    if ($(data.element).is('option')) {                                                                            // 3069
      data.element.selected = false;                                                                               // 3070
                                                                                                                   // 3071
      this.$element.trigger('change');                                                                             // 3072
                                                                                                                   // 3073
      return;                                                                                                      // 3074
    }                                                                                                              // 3075
                                                                                                                   // 3076
    this.current(function (currentData) {                                                                          // 3077
      var val = [];                                                                                                // 3078
                                                                                                                   // 3079
      for (var d = 0; d < currentData.length; d++) {                                                               // 3080
        var id = currentData[d].id;                                                                                // 3081
                                                                                                                   // 3082
        if (id !== data.id && $.inArray(id, val) === -1) {                                                         // 3083
          val.push(id);                                                                                            // 3084
        }                                                                                                          // 3085
      }                                                                                                            // 3086
                                                                                                                   // 3087
      self.$element.val(val);                                                                                      // 3088
                                                                                                                   // 3089
      self.$element.trigger('change');                                                                             // 3090
    });                                                                                                            // 3091
  };                                                                                                               // 3092
                                                                                                                   // 3093
  SelectAdapter.prototype.bind = function (container, $container) {                                                // 3094
    var self = this;                                                                                               // 3095
                                                                                                                   // 3096
    this.container = container;                                                                                    // 3097
                                                                                                                   // 3098
    container.on('select', function (params) {                                                                     // 3099
      self.select(params.data);                                                                                    // 3100
    });                                                                                                            // 3101
                                                                                                                   // 3102
    container.on('unselect', function (params) {                                                                   // 3103
      self.unselect(params.data);                                                                                  // 3104
    });                                                                                                            // 3105
  };                                                                                                               // 3106
                                                                                                                   // 3107
  SelectAdapter.prototype.destroy = function () {                                                                  // 3108
    // Remove anything added to child elements                                                                     // 3109
    this.$element.find('*').each(function () {                                                                     // 3110
      // Remove any custom data set by Select2                                                                     // 3111
      $.removeData(this, 'data');                                                                                  // 3112
    });                                                                                                            // 3113
  };                                                                                                               // 3114
                                                                                                                   // 3115
  SelectAdapter.prototype.query = function (params, callback) {                                                    // 3116
    var data = [];                                                                                                 // 3117
    var self = this;                                                                                               // 3118
                                                                                                                   // 3119
    var $options = this.$element.children();                                                                       // 3120
                                                                                                                   // 3121
    $options.each(function () {                                                                                    // 3122
      var $option = $(this);                                                                                       // 3123
                                                                                                                   // 3124
      if (!$option.is('option') && !$option.is('optgroup')) {                                                      // 3125
        return;                                                                                                    // 3126
      }                                                                                                            // 3127
                                                                                                                   // 3128
      var option = self.item($option);                                                                             // 3129
                                                                                                                   // 3130
      var matches = self.matches(params, option);                                                                  // 3131
                                                                                                                   // 3132
      if (matches !== null) {                                                                                      // 3133
        data.push(matches);                                                                                        // 3134
      }                                                                                                            // 3135
    });                                                                                                            // 3136
                                                                                                                   // 3137
    callback({                                                                                                     // 3138
      results: data                                                                                                // 3139
    });                                                                                                            // 3140
  };                                                                                                               // 3141
                                                                                                                   // 3142
  SelectAdapter.prototype.addOptions = function ($options) {                                                       // 3143
    Utils.appendMany(this.$element, $options);                                                                     // 3144
  };                                                                                                               // 3145
                                                                                                                   // 3146
  SelectAdapter.prototype.option = function (data) {                                                               // 3147
    var option;                                                                                                    // 3148
                                                                                                                   // 3149
    if (data.children) {                                                                                           // 3150
      option = document.createElement('optgroup');                                                                 // 3151
      option.label = data.text;                                                                                    // 3152
    } else {                                                                                                       // 3153
      option = document.createElement('option');                                                                   // 3154
                                                                                                                   // 3155
      if (option.textContent !== undefined) {                                                                      // 3156
        option.textContent = data.text;                                                                            // 3157
      } else {                                                                                                     // 3158
        option.innerText = data.text;                                                                              // 3159
      }                                                                                                            // 3160
    }                                                                                                              // 3161
                                                                                                                   // 3162
    if (data.id) {                                                                                                 // 3163
      option.value = data.id;                                                                                      // 3164
    }                                                                                                              // 3165
                                                                                                                   // 3166
    if (data.disabled) {                                                                                           // 3167
      option.disabled = true;                                                                                      // 3168
    }                                                                                                              // 3169
                                                                                                                   // 3170
    if (data.selected) {                                                                                           // 3171
      option.selected = true;                                                                                      // 3172
    }                                                                                                              // 3173
                                                                                                                   // 3174
    if (data.title) {                                                                                              // 3175
      option.title = data.title;                                                                                   // 3176
    }                                                                                                              // 3177
                                                                                                                   // 3178
    var $option = $(option);                                                                                       // 3179
                                                                                                                   // 3180
    var normalizedData = this._normalizeItem(data);                                                                // 3181
    normalizedData.element = option;                                                                               // 3182
                                                                                                                   // 3183
    // Override the option's data with the combined data                                                           // 3184
    $.data(option, 'data', normalizedData);                                                                        // 3185
                                                                                                                   // 3186
    return $option;                                                                                                // 3187
  };                                                                                                               // 3188
                                                                                                                   // 3189
  SelectAdapter.prototype.item = function ($option) {                                                              // 3190
    var data = {};                                                                                                 // 3191
                                                                                                                   // 3192
    data = $.data($option[0], 'data');                                                                             // 3193
                                                                                                                   // 3194
    if (data != null) {                                                                                            // 3195
      return data;                                                                                                 // 3196
    }                                                                                                              // 3197
                                                                                                                   // 3198
    if ($option.is('option')) {                                                                                    // 3199
      data = {                                                                                                     // 3200
        id: $option.val(),                                                                                         // 3201
        text: $option.text(),                                                                                      // 3202
        disabled: $option.prop('disabled'),                                                                        // 3203
        selected: $option.prop('selected'),                                                                        // 3204
        title: $option.prop('title')                                                                               // 3205
      };                                                                                                           // 3206
    } else if ($option.is('optgroup')) {                                                                           // 3207
      data = {                                                                                                     // 3208
        text: $option.prop('label'),                                                                               // 3209
        children: [],                                                                                              // 3210
        title: $option.prop('title')                                                                               // 3211
      };                                                                                                           // 3212
                                                                                                                   // 3213
      var $children = $option.children('option');                                                                  // 3214
      var children = [];                                                                                           // 3215
                                                                                                                   // 3216
      for (var c = 0; c < $children.length; c++) {                                                                 // 3217
        var $child = $($children[c]);                                                                              // 3218
                                                                                                                   // 3219
        var child = this.item($child);                                                                             // 3220
                                                                                                                   // 3221
        children.push(child);                                                                                      // 3222
      }                                                                                                            // 3223
                                                                                                                   // 3224
      data.children = children;                                                                                    // 3225
    }                                                                                                              // 3226
                                                                                                                   // 3227
    data = this._normalizeItem(data);                                                                              // 3228
    data.element = $option[0];                                                                                     // 3229
                                                                                                                   // 3230
    $.data($option[0], 'data', data);                                                                              // 3231
                                                                                                                   // 3232
    return data;                                                                                                   // 3233
  };                                                                                                               // 3234
                                                                                                                   // 3235
  SelectAdapter.prototype._normalizeItem = function (item) {                                                       // 3236
    if (!$.isPlainObject(item)) {                                                                                  // 3237
      item = {                                                                                                     // 3238
        id: item,                                                                                                  // 3239
        text: item                                                                                                 // 3240
      };                                                                                                           // 3241
    }                                                                                                              // 3242
                                                                                                                   // 3243
    item = $.extend({}, {                                                                                          // 3244
      text: ''                                                                                                     // 3245
    }, item);                                                                                                      // 3246
                                                                                                                   // 3247
    var defaults = {                                                                                               // 3248
      selected: false,                                                                                             // 3249
      disabled: false                                                                                              // 3250
    };                                                                                                             // 3251
                                                                                                                   // 3252
    if (item.id != null) {                                                                                         // 3253
      item.id = item.id.toString();                                                                                // 3254
    }                                                                                                              // 3255
                                                                                                                   // 3256
    if (item.text != null) {                                                                                       // 3257
      item.text = item.text.toString();                                                                            // 3258
    }                                                                                                              // 3259
                                                                                                                   // 3260
    if (item._resultId == null && item.id && this.container != null) {                                             // 3261
      item._resultId = this.generateResultId(this.container, item);                                                // 3262
    }                                                                                                              // 3263
                                                                                                                   // 3264
    return $.extend({}, defaults, item);                                                                           // 3265
  };                                                                                                               // 3266
                                                                                                                   // 3267
  SelectAdapter.prototype.matches = function (params, data) {                                                      // 3268
    var matcher = this.options.get('matcher');                                                                     // 3269
                                                                                                                   // 3270
    return matcher(params, data);                                                                                  // 3271
  };                                                                                                               // 3272
                                                                                                                   // 3273
  return SelectAdapter;                                                                                            // 3274
});                                                                                                                // 3275
                                                                                                                   // 3276
S2.define('select2/data/array',[                                                                                   // 3277
  './select',                                                                                                      // 3278
  '../utils',                                                                                                      // 3279
  'jquery'                                                                                                         // 3280
], function (SelectAdapter, Utils, $) {                                                                            // 3281
  function ArrayAdapter ($element, options) {                                                                      // 3282
    var data = options.get('data') || [];                                                                          // 3283
                                                                                                                   // 3284
    ArrayAdapter.__super__.constructor.call(this, $element, options);                                              // 3285
                                                                                                                   // 3286
    this.addOptions(this.convertToOptions(data));                                                                  // 3287
  }                                                                                                                // 3288
                                                                                                                   // 3289
  Utils.Extend(ArrayAdapter, SelectAdapter);                                                                       // 3290
                                                                                                                   // 3291
  ArrayAdapter.prototype.select = function (data) {                                                                // 3292
    var $option = this.$element.find('option').filter(function (i, elm) {                                          // 3293
      return elm.value == data.id.toString();                                                                      // 3294
    });                                                                                                            // 3295
                                                                                                                   // 3296
    if ($option.length === 0) {                                                                                    // 3297
      $option = this.option(data);                                                                                 // 3298
                                                                                                                   // 3299
      this.addOptions($option);                                                                                    // 3300
    }                                                                                                              // 3301
                                                                                                                   // 3302
    ArrayAdapter.__super__.select.call(this, data);                                                                // 3303
  };                                                                                                               // 3304
                                                                                                                   // 3305
  ArrayAdapter.prototype.convertToOptions = function (data) {                                                      // 3306
    var self = this;                                                                                               // 3307
                                                                                                                   // 3308
    var $existing = this.$element.find('option');                                                                  // 3309
    var existingIds = $existing.map(function () {                                                                  // 3310
      return self.item($(this)).id;                                                                                // 3311
    }).get();                                                                                                      // 3312
                                                                                                                   // 3313
    var $options = [];                                                                                             // 3314
                                                                                                                   // 3315
    // Filter out all items except for the one passed in the argument                                              // 3316
    function onlyItem (item) {                                                                                     // 3317
      return function () {                                                                                         // 3318
        return $(this).val() == item.id;                                                                           // 3319
      };                                                                                                           // 3320
    }                                                                                                              // 3321
                                                                                                                   // 3322
    for (var d = 0; d < data.length; d++) {                                                                        // 3323
      var item = this._normalizeItem(data[d]);                                                                     // 3324
                                                                                                                   // 3325
      // Skip items which were pre-loaded, only merge the data                                                     // 3326
      if ($.inArray(item.id, existingIds) >= 0) {                                                                  // 3327
        var $existingOption = $existing.filter(onlyItem(item));                                                    // 3328
                                                                                                                   // 3329
        var existingData = this.item($existingOption);                                                             // 3330
        var newData = $.extend(true, {}, item, existingData);                                                      // 3331
                                                                                                                   // 3332
        var $newOption = this.option(newData);                                                                     // 3333
                                                                                                                   // 3334
        $existingOption.replaceWith($newOption);                                                                   // 3335
                                                                                                                   // 3336
        continue;                                                                                                  // 3337
      }                                                                                                            // 3338
                                                                                                                   // 3339
      var $option = this.option(item);                                                                             // 3340
                                                                                                                   // 3341
      if (item.children) {                                                                                         // 3342
        var $children = this.convertToOptions(item.children);                                                      // 3343
                                                                                                                   // 3344
        Utils.appendMany($option, $children);                                                                      // 3345
      }                                                                                                            // 3346
                                                                                                                   // 3347
      $options.push($option);                                                                                      // 3348
    }                                                                                                              // 3349
                                                                                                                   // 3350
    return $options;                                                                                               // 3351
  };                                                                                                               // 3352
                                                                                                                   // 3353
  return ArrayAdapter;                                                                                             // 3354
});                                                                                                                // 3355
                                                                                                                   // 3356
S2.define('select2/data/ajax',[                                                                                    // 3357
  './array',                                                                                                       // 3358
  '../utils',                                                                                                      // 3359
  'jquery'                                                                                                         // 3360
], function (ArrayAdapter, Utils, $) {                                                                             // 3361
  function AjaxAdapter ($element, options) {                                                                       // 3362
    this.ajaxOptions = this._applyDefaults(options.get('ajax'));                                                   // 3363
                                                                                                                   // 3364
    if (this.ajaxOptions.processResults != null) {                                                                 // 3365
      this.processResults = this.ajaxOptions.processResults;                                                       // 3366
    }                                                                                                              // 3367
                                                                                                                   // 3368
    AjaxAdapter.__super__.constructor.call(this, $element, options);                                               // 3369
  }                                                                                                                // 3370
                                                                                                                   // 3371
  Utils.Extend(AjaxAdapter, ArrayAdapter);                                                                         // 3372
                                                                                                                   // 3373
  AjaxAdapter.prototype._applyDefaults = function (options) {                                                      // 3374
    var defaults = {                                                                                               // 3375
      data: function (params) {                                                                                    // 3376
        return $.extend({}, params, {                                                                              // 3377
          q: params.term                                                                                           // 3378
        });                                                                                                        // 3379
      },                                                                                                           // 3380
      transport: function (params, success, failure) {                                                             // 3381
        var $request = $.ajax(params);                                                                             // 3382
                                                                                                                   // 3383
        $request.then(success);                                                                                    // 3384
        $request.fail(failure);                                                                                    // 3385
                                                                                                                   // 3386
        return $request;                                                                                           // 3387
      }                                                                                                            // 3388
    };                                                                                                             // 3389
                                                                                                                   // 3390
    return $.extend({}, defaults, options, true);                                                                  // 3391
  };                                                                                                               // 3392
                                                                                                                   // 3393
  AjaxAdapter.prototype.processResults = function (results) {                                                      // 3394
    return results;                                                                                                // 3395
  };                                                                                                               // 3396
                                                                                                                   // 3397
  AjaxAdapter.prototype.query = function (params, callback) {                                                      // 3398
    var matches = [];                                                                                              // 3399
    var self = this;                                                                                               // 3400
                                                                                                                   // 3401
    if (this._request != null) {                                                                                   // 3402
      // JSONP requests cannot always be aborted                                                                   // 3403
      if ($.isFunction(this._request.abort)) {                                                                     // 3404
        this._request.abort();                                                                                     // 3405
      }                                                                                                            // 3406
                                                                                                                   // 3407
      this._request = null;                                                                                        // 3408
    }                                                                                                              // 3409
                                                                                                                   // 3410
    var options = $.extend({                                                                                       // 3411
      type: 'GET'                                                                                                  // 3412
    }, this.ajaxOptions);                                                                                          // 3413
                                                                                                                   // 3414
    if (typeof options.url === 'function') {                                                                       // 3415
      options.url = options.url.call(this.$element, params);                                                       // 3416
    }                                                                                                              // 3417
                                                                                                                   // 3418
    if (typeof options.data === 'function') {                                                                      // 3419
      options.data = options.data.call(this.$element, params);                                                     // 3420
    }                                                                                                              // 3421
                                                                                                                   // 3422
    function request () {                                                                                          // 3423
      var $request = options.transport(options, function (data) {                                                  // 3424
        var results = self.processResults(data, params);                                                           // 3425
                                                                                                                   // 3426
        if (self.options.get('debug') && window.console && console.error) {                                        // 3427
          // Check to make sure that the response included a `results` key.                                        // 3428
          if (!results || !results.results || !$.isArray(results.results)) {                                       // 3429
            console.error(                                                                                         // 3430
              'Select2: The AJAX results did not return an array in the ' +                                        // 3431
              '`results` key of the response.'                                                                     // 3432
            );                                                                                                     // 3433
          }                                                                                                        // 3434
        }                                                                                                          // 3435
                                                                                                                   // 3436
        callback(results);                                                                                         // 3437
      }, function () {                                                                                             // 3438
        self.trigger('results:message', {                                                                          // 3439
          message: 'errorLoading'                                                                                  // 3440
        });                                                                                                        // 3441
      });                                                                                                          // 3442
                                                                                                                   // 3443
      self._request = $request;                                                                                    // 3444
    }                                                                                                              // 3445
                                                                                                                   // 3446
    if (this.ajaxOptions.delay && params.term !== '') {                                                            // 3447
      if (this._queryTimeout) {                                                                                    // 3448
        window.clearTimeout(this._queryTimeout);                                                                   // 3449
      }                                                                                                            // 3450
                                                                                                                   // 3451
      this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);                                     // 3452
    } else {                                                                                                       // 3453
      request();                                                                                                   // 3454
    }                                                                                                              // 3455
  };                                                                                                               // 3456
                                                                                                                   // 3457
  return AjaxAdapter;                                                                                              // 3458
});                                                                                                                // 3459
                                                                                                                   // 3460
S2.define('select2/data/tags',[                                                                                    // 3461
  'jquery'                                                                                                         // 3462
], function ($) {                                                                                                  // 3463
  function Tags (decorated, $element, options) {                                                                   // 3464
    var tags = options.get('tags');                                                                                // 3465
                                                                                                                   // 3466
    var createTag = options.get('createTag');                                                                      // 3467
                                                                                                                   // 3468
    if (createTag !== undefined) {                                                                                 // 3469
      this.createTag = createTag;                                                                                  // 3470
    }                                                                                                              // 3471
                                                                                                                   // 3472
    var insertTag = options.get('insertTag');                                                                      // 3473
                                                                                                                   // 3474
    if (insertTag !== undefined) {                                                                                 // 3475
        this.insertTag = insertTag;                                                                                // 3476
    }                                                                                                              // 3477
                                                                                                                   // 3478
    decorated.call(this, $element, options);                                                                       // 3479
                                                                                                                   // 3480
    if ($.isArray(tags)) {                                                                                         // 3481
      for (var t = 0; t < tags.length; t++) {                                                                      // 3482
        var tag = tags[t];                                                                                         // 3483
        var item = this._normalizeItem(tag);                                                                       // 3484
                                                                                                                   // 3485
        var $option = this.option(item);                                                                           // 3486
                                                                                                                   // 3487
        this.$element.append($option);                                                                             // 3488
      }                                                                                                            // 3489
    }                                                                                                              // 3490
  }                                                                                                                // 3491
                                                                                                                   // 3492
  Tags.prototype.query = function (decorated, params, callback) {                                                  // 3493
    var self = this;                                                                                               // 3494
                                                                                                                   // 3495
    this._removeOldTags();                                                                                         // 3496
                                                                                                                   // 3497
    if (params.term == null || params.page != null) {                                                              // 3498
      decorated.call(this, params, callback);                                                                      // 3499
      return;                                                                                                      // 3500
    }                                                                                                              // 3501
                                                                                                                   // 3502
    function wrapper (obj, child) {                                                                                // 3503
      var data = obj.results;                                                                                      // 3504
                                                                                                                   // 3505
      for (var i = 0; i < data.length; i++) {                                                                      // 3506
        var option = data[i];                                                                                      // 3507
                                                                                                                   // 3508
        var checkChildren = (                                                                                      // 3509
          option.children != null &&                                                                               // 3510
          !wrapper({                                                                                               // 3511
            results: option.children                                                                               // 3512
          }, true)                                                                                                 // 3513
        );                                                                                                         // 3514
                                                                                                                   // 3515
        var checkText = option.text === params.term;                                                               // 3516
                                                                                                                   // 3517
        if (checkText || checkChildren) {                                                                          // 3518
          if (child) {                                                                                             // 3519
            return false;                                                                                          // 3520
          }                                                                                                        // 3521
                                                                                                                   // 3522
          obj.data = data;                                                                                         // 3523
          callback(obj);                                                                                           // 3524
                                                                                                                   // 3525
          return;                                                                                                  // 3526
        }                                                                                                          // 3527
      }                                                                                                            // 3528
                                                                                                                   // 3529
      if (child) {                                                                                                 // 3530
        return true;                                                                                               // 3531
      }                                                                                                            // 3532
                                                                                                                   // 3533
      var tag = self.createTag(params);                                                                            // 3534
                                                                                                                   // 3535
      if (tag != null) {                                                                                           // 3536
        var $option = self.option(tag);                                                                            // 3537
        $option.attr('data-select2-tag', true);                                                                    // 3538
                                                                                                                   // 3539
        self.addOptions([$option]);                                                                                // 3540
                                                                                                                   // 3541
        self.insertTag(data, tag);                                                                                 // 3542
      }                                                                                                            // 3543
                                                                                                                   // 3544
      obj.results = data;                                                                                          // 3545
                                                                                                                   // 3546
      callback(obj);                                                                                               // 3547
    }                                                                                                              // 3548
                                                                                                                   // 3549
    decorated.call(this, params, wrapper);                                                                         // 3550
  };                                                                                                               // 3551
                                                                                                                   // 3552
  Tags.prototype.createTag = function (decorated, params) {                                                        // 3553
    var term = $.trim(params.term);                                                                                // 3554
                                                                                                                   // 3555
    if (term === '') {                                                                                             // 3556
      return null;                                                                                                 // 3557
    }                                                                                                              // 3558
                                                                                                                   // 3559
    return {                                                                                                       // 3560
      id: term,                                                                                                    // 3561
      text: term                                                                                                   // 3562
    };                                                                                                             // 3563
  };                                                                                                               // 3564
                                                                                                                   // 3565
  Tags.prototype.insertTag = function (_, data, tag) {                                                             // 3566
    data.unshift(tag);                                                                                             // 3567
  };                                                                                                               // 3568
                                                                                                                   // 3569
  Tags.prototype._removeOldTags = function (_) {                                                                   // 3570
    var tag = this._lastTag;                                                                                       // 3571
                                                                                                                   // 3572
    var $options = this.$element.find('option[data-select2-tag]');                                                 // 3573
                                                                                                                   // 3574
    $options.each(function () {                                                                                    // 3575
      if (this.selected) {                                                                                         // 3576
        return;                                                                                                    // 3577
      }                                                                                                            // 3578
                                                                                                                   // 3579
      $(this).remove();                                                                                            // 3580
    });                                                                                                            // 3581
  };                                                                                                               // 3582
                                                                                                                   // 3583
  return Tags;                                                                                                     // 3584
});                                                                                                                // 3585
                                                                                                                   // 3586
S2.define('select2/data/tokenizer',[                                                                               // 3587
  'jquery'                                                                                                         // 3588
], function ($) {                                                                                                  // 3589
  function Tokenizer (decorated, $element, options) {                                                              // 3590
    var tokenizer = options.get('tokenizer');                                                                      // 3591
                                                                                                                   // 3592
    if (tokenizer !== undefined) {                                                                                 // 3593
      this.tokenizer = tokenizer;                                                                                  // 3594
    }                                                                                                              // 3595
                                                                                                                   // 3596
    decorated.call(this, $element, options);                                                                       // 3597
  }                                                                                                                // 3598
                                                                                                                   // 3599
  Tokenizer.prototype.bind = function (decorated, container, $container) {                                         // 3600
    decorated.call(this, container, $container);                                                                   // 3601
                                                                                                                   // 3602
    this.$search =  container.dropdown.$search || container.selection.$search ||                                   // 3603
      $container.find('.select2-search__field');                                                                   // 3604
  };                                                                                                               // 3605
                                                                                                                   // 3606
  Tokenizer.prototype.query = function (decorated, params, callback) {                                             // 3607
    var self = this;                                                                                               // 3608
                                                                                                                   // 3609
    function select (data) {                                                                                       // 3610
      self.trigger('select', {                                                                                     // 3611
        data: data                                                                                                 // 3612
      });                                                                                                          // 3613
    }                                                                                                              // 3614
                                                                                                                   // 3615
    params.term = params.term || '';                                                                               // 3616
                                                                                                                   // 3617
    var tokenData = this.tokenizer(params, this.options, select);                                                  // 3618
                                                                                                                   // 3619
    if (tokenData.term !== params.term) {                                                                          // 3620
      // Replace the search term if we have the search box                                                         // 3621
      if (this.$search.length) {                                                                                   // 3622
        this.$search.val(tokenData.term);                                                                          // 3623
        this.$search.focus();                                                                                      // 3624
      }                                                                                                            // 3625
                                                                                                                   // 3626
      params.term = tokenData.term;                                                                                // 3627
    }                                                                                                              // 3628
                                                                                                                   // 3629
    decorated.call(this, params, callback);                                                                        // 3630
  };                                                                                                               // 3631
                                                                                                                   // 3632
  Tokenizer.prototype.tokenizer = function (_, params, options, callback) {                                        // 3633
    var separators = options.get('tokenSeparators') || [];                                                         // 3634
    var term = params.term;                                                                                        // 3635
    var i = 0;                                                                                                     // 3636
                                                                                                                   // 3637
    var createTag = this.createTag || function (params) {                                                          // 3638
      return {                                                                                                     // 3639
        id: params.term,                                                                                           // 3640
        text: params.term                                                                                          // 3641
      };                                                                                                           // 3642
    };                                                                                                             // 3643
                                                                                                                   // 3644
    while (i < term.length) {                                                                                      // 3645
      var termChar = term[i];                                                                                      // 3646
                                                                                                                   // 3647
      if ($.inArray(termChar, separators) === -1) {                                                                // 3648
        i++;                                                                                                       // 3649
                                                                                                                   // 3650
        continue;                                                                                                  // 3651
      }                                                                                                            // 3652
                                                                                                                   // 3653
      var part = term.substr(0, i);                                                                                // 3654
      var partParams = $.extend({}, params, {                                                                      // 3655
        term: part                                                                                                 // 3656
      });                                                                                                          // 3657
                                                                                                                   // 3658
      var data = createTag(partParams);                                                                            // 3659
                                                                                                                   // 3660
      if (data == null) {                                                                                          // 3661
        i++;                                                                                                       // 3662
        continue;                                                                                                  // 3663
      }                                                                                                            // 3664
                                                                                                                   // 3665
      callback(data);                                                                                              // 3666
                                                                                                                   // 3667
      // Reset the term to not include the tokenized portion                                                       // 3668
      term = term.substr(i + 1) || '';                                                                             // 3669
      i = 0;                                                                                                       // 3670
    }                                                                                                              // 3671
                                                                                                                   // 3672
    return {                                                                                                       // 3673
      term: term                                                                                                   // 3674
    };                                                                                                             // 3675
  };                                                                                                               // 3676
                                                                                                                   // 3677
  return Tokenizer;                                                                                                // 3678
});                                                                                                                // 3679
                                                                                                                   // 3680
S2.define('select2/data/minimumInputLength',[                                                                      // 3681
                                                                                                                   // 3682
], function () {                                                                                                   // 3683
  function MinimumInputLength (decorated, $e, options) {                                                           // 3684
    this.minimumInputLength = options.get('minimumInputLength');                                                   // 3685
                                                                                                                   // 3686
    decorated.call(this, $e, options);                                                                             // 3687
  }                                                                                                                // 3688
                                                                                                                   // 3689
  MinimumInputLength.prototype.query = function (decorated, params, callback) {                                    // 3690
    params.term = params.term || '';                                                                               // 3691
                                                                                                                   // 3692
    if (params.term.length < this.minimumInputLength) {                                                            // 3693
      this.trigger('results:message', {                                                                            // 3694
        message: 'inputTooShort',                                                                                  // 3695
        args: {                                                                                                    // 3696
          minimum: this.minimumInputLength,                                                                        // 3697
          input: params.term,                                                                                      // 3698
          params: params                                                                                           // 3699
        }                                                                                                          // 3700
      });                                                                                                          // 3701
                                                                                                                   // 3702
      return;                                                                                                      // 3703
    }                                                                                                              // 3704
                                                                                                                   // 3705
    decorated.call(this, params, callback);                                                                        // 3706
  };                                                                                                               // 3707
                                                                                                                   // 3708
  return MinimumInputLength;                                                                                       // 3709
});                                                                                                                // 3710
                                                                                                                   // 3711
S2.define('select2/data/maximumInputLength',[                                                                      // 3712
                                                                                                                   // 3713
], function () {                                                                                                   // 3714
  function MaximumInputLength (decorated, $e, options) {                                                           // 3715
    this.maximumInputLength = options.get('maximumInputLength');                                                   // 3716
                                                                                                                   // 3717
    decorated.call(this, $e, options);                                                                             // 3718
  }                                                                                                                // 3719
                                                                                                                   // 3720
  MaximumInputLength.prototype.query = function (decorated, params, callback) {                                    // 3721
    params.term = params.term || '';                                                                               // 3722
                                                                                                                   // 3723
    if (this.maximumInputLength > 0 &&                                                                             // 3724
        params.term.length > this.maximumInputLength) {                                                            // 3725
      this.trigger('results:message', {                                                                            // 3726
        message: 'inputTooLong',                                                                                   // 3727
        args: {                                                                                                    // 3728
          maximum: this.maximumInputLength,                                                                        // 3729
          input: params.term,                                                                                      // 3730
          params: params                                                                                           // 3731
        }                                                                                                          // 3732
      });                                                                                                          // 3733
                                                                                                                   // 3734
      return;                                                                                                      // 3735
    }                                                                                                              // 3736
                                                                                                                   // 3737
    decorated.call(this, params, callback);                                                                        // 3738
  };                                                                                                               // 3739
                                                                                                                   // 3740
  return MaximumInputLength;                                                                                       // 3741
});                                                                                                                // 3742
                                                                                                                   // 3743
S2.define('select2/data/maximumSelectionLength',[                                                                  // 3744
                                                                                                                   // 3745
], function (){                                                                                                    // 3746
  function MaximumSelectionLength (decorated, $e, options) {                                                       // 3747
    this.maximumSelectionLength = options.get('maximumSelectionLength');                                           // 3748
                                                                                                                   // 3749
    decorated.call(this, $e, options);                                                                             // 3750
  }                                                                                                                // 3751
                                                                                                                   // 3752
  MaximumSelectionLength.prototype.query =                                                                         // 3753
    function (decorated, params, callback) {                                                                       // 3754
      var self = this;                                                                                             // 3755
                                                                                                                   // 3756
      this.current(function (currentData) {                                                                        // 3757
        var count = currentData != null ? currentData.length : 0;                                                  // 3758
        if (self.maximumSelectionLength > 0 &&                                                                     // 3759
          count >= self.maximumSelectionLength) {                                                                  // 3760
          self.trigger('results:message', {                                                                        // 3761
            message: 'maximumSelected',                                                                            // 3762
            args: {                                                                                                // 3763
              maximum: self.maximumSelectionLength                                                                 // 3764
            }                                                                                                      // 3765
          });                                                                                                      // 3766
          return;                                                                                                  // 3767
        }                                                                                                          // 3768
        decorated.call(self, params, callback);                                                                    // 3769
      });                                                                                                          // 3770
  };                                                                                                               // 3771
                                                                                                                   // 3772
  return MaximumSelectionLength;                                                                                   // 3773
});                                                                                                                // 3774
                                                                                                                   // 3775
S2.define('select2/dropdown',[                                                                                     // 3776
  'jquery',                                                                                                        // 3777
  './utils'                                                                                                        // 3778
], function ($, Utils) {                                                                                           // 3779
  function Dropdown ($element, options) {                                                                          // 3780
    this.$element = $element;                                                                                      // 3781
    this.options = options;                                                                                        // 3782
                                                                                                                   // 3783
    Dropdown.__super__.constructor.call(this);                                                                     // 3784
  }                                                                                                                // 3785
                                                                                                                   // 3786
  Utils.Extend(Dropdown, Utils.Observable);                                                                        // 3787
                                                                                                                   // 3788
  Dropdown.prototype.render = function () {                                                                        // 3789
    var $dropdown = $(                                                                                             // 3790
      '<span class="select2-dropdown">' +                                                                          // 3791
        '<span class="select2-results"></span>' +                                                                  // 3792
      '</span>'                                                                                                    // 3793
    );                                                                                                             // 3794
                                                                                                                   // 3795
    $dropdown.attr('dir', this.options.get('dir'));                                                                // 3796
                                                                                                                   // 3797
    this.$dropdown = $dropdown;                                                                                    // 3798
                                                                                                                   // 3799
    return $dropdown;                                                                                              // 3800
  };                                                                                                               // 3801
                                                                                                                   // 3802
  Dropdown.prototype.bind = function () {                                                                          // 3803
    // Should be implemented in subclasses                                                                         // 3804
  };                                                                                                               // 3805
                                                                                                                   // 3806
  Dropdown.prototype.position = function ($dropdown, $container) {                                                 // 3807
    // Should be implmented in subclasses                                                                          // 3808
  };                                                                                                               // 3809
                                                                                                                   // 3810
  Dropdown.prototype.destroy = function () {                                                                       // 3811
    // Remove the dropdown from the DOM                                                                            // 3812
    this.$dropdown.remove();                                                                                       // 3813
  };                                                                                                               // 3814
                                                                                                                   // 3815
  return Dropdown;                                                                                                 // 3816
});                                                                                                                // 3817
                                                                                                                   // 3818
S2.define('select2/dropdown/search',[                                                                              // 3819
  'jquery',                                                                                                        // 3820
  '../utils'                                                                                                       // 3821
], function ($, Utils) {                                                                                           // 3822
  function Search () { }                                                                                           // 3823
                                                                                                                   // 3824
  Search.prototype.render = function (decorated) {                                                                 // 3825
    var $rendered = decorated.call(this);                                                                          // 3826
                                                                                                                   // 3827
    var $search = $(                                                                                               // 3828
      '<span class="select2-search select2-search--dropdown">' +                                                   // 3829
        '<input class="select2-search__field" type="search" tabindex="-1"' +                                       // 3830
        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +                                             // 3831
        ' spellcheck="false" role="textbox" />' +                                                                  // 3832
      '</span>'                                                                                                    // 3833
    );                                                                                                             // 3834
                                                                                                                   // 3835
    this.$searchContainer = $search;                                                                               // 3836
    this.$search = $search.find('input');                                                                          // 3837
                                                                                                                   // 3838
    $rendered.prepend($search);                                                                                    // 3839
                                                                                                                   // 3840
    return $rendered;                                                                                              // 3841
  };                                                                                                               // 3842
                                                                                                                   // 3843
  Search.prototype.bind = function (decorated, container, $container) {                                            // 3844
    var self = this;                                                                                               // 3845
                                                                                                                   // 3846
    decorated.call(this, container, $container);                                                                   // 3847
                                                                                                                   // 3848
    this.$search.on('keydown', function (evt) {                                                                    // 3849
      self.trigger('keypress', evt);                                                                               // 3850
                                                                                                                   // 3851
      self._keyUpPrevented = evt.isDefaultPrevented();                                                             // 3852
    });                                                                                                            // 3853
                                                                                                                   // 3854
    // Workaround for browsers which do not support the `input` event                                              // 3855
    // This will prevent double-triggering of events for browsers which support                                    // 3856
    // both the `keyup` and `input` events.                                                                        // 3857
    this.$search.on('input', function (evt) {                                                                      // 3858
      // Unbind the duplicated `keyup` event                                                                       // 3859
      $(this).off('keyup');                                                                                        // 3860
    });                                                                                                            // 3861
                                                                                                                   // 3862
    this.$search.on('keyup input', function (evt) {                                                                // 3863
      self.handleSearch(evt);                                                                                      // 3864
    });                                                                                                            // 3865
                                                                                                                   // 3866
    container.on('open', function () {                                                                             // 3867
      self.$search.attr('tabindex', 0);                                                                            // 3868
                                                                                                                   // 3869
      self.$search.focus();                                                                                        // 3870
                                                                                                                   // 3871
      window.setTimeout(function () {                                                                              // 3872
        self.$search.focus();                                                                                      // 3873
      }, 0);                                                                                                       // 3874
    });                                                                                                            // 3875
                                                                                                                   // 3876
    container.on('close', function () {                                                                            // 3877
      self.$search.attr('tabindex', -1);                                                                           // 3878
                                                                                                                   // 3879
      self.$search.val('');                                                                                        // 3880
    });                                                                                                            // 3881
                                                                                                                   // 3882
    container.on('results:all', function (params) {                                                                // 3883
      if (params.query.term == null || params.query.term === '') {                                                 // 3884
        var showSearch = self.showSearch(params);                                                                  // 3885
                                                                                                                   // 3886
        if (showSearch) {                                                                                          // 3887
          self.$searchContainer.removeClass('select2-search--hide');                                               // 3888
        } else {                                                                                                   // 3889
          self.$searchContainer.addClass('select2-search--hide');                                                  // 3890
        }                                                                                                          // 3891
      }                                                                                                            // 3892
    });                                                                                                            // 3893
  };                                                                                                               // 3894
                                                                                                                   // 3895
  Search.prototype.handleSearch = function (evt) {                                                                 // 3896
    if (!this._keyUpPrevented) {                                                                                   // 3897
      var input = this.$search.val();                                                                              // 3898
                                                                                                                   // 3899
      this.trigger('query', {                                                                                      // 3900
        term: input                                                                                                // 3901
      });                                                                                                          // 3902
    }                                                                                                              // 3903
                                                                                                                   // 3904
    this._keyUpPrevented = false;                                                                                  // 3905
  };                                                                                                               // 3906
                                                                                                                   // 3907
  Search.prototype.showSearch = function (_, params) {                                                             // 3908
    return true;                                                                                                   // 3909
  };                                                                                                               // 3910
                                                                                                                   // 3911
  return Search;                                                                                                   // 3912
});                                                                                                                // 3913
                                                                                                                   // 3914
S2.define('select2/dropdown/hidePlaceholder',[                                                                     // 3915
                                                                                                                   // 3916
], function () {                                                                                                   // 3917
  function HidePlaceholder (decorated, $element, options, dataAdapter) {                                           // 3918
    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));                                      // 3919
                                                                                                                   // 3920
    decorated.call(this, $element, options, dataAdapter);                                                          // 3921
  }                                                                                                                // 3922
                                                                                                                   // 3923
  HidePlaceholder.prototype.append = function (decorated, data) {                                                  // 3924
    data.results = this.removePlaceholder(data.results);                                                           // 3925
                                                                                                                   // 3926
    decorated.call(this, data);                                                                                    // 3927
  };                                                                                                               // 3928
                                                                                                                   // 3929
  HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {                                     // 3930
    if (typeof placeholder === 'string') {                                                                         // 3931
      placeholder = {                                                                                              // 3932
        id: '',                                                                                                    // 3933
        text: placeholder                                                                                          // 3934
      };                                                                                                           // 3935
    }                                                                                                              // 3936
                                                                                                                   // 3937
    return placeholder;                                                                                            // 3938
  };                                                                                                               // 3939
                                                                                                                   // 3940
  HidePlaceholder.prototype.removePlaceholder = function (_, data) {                                               // 3941
    var modifiedData = data.slice(0);                                                                              // 3942
                                                                                                                   // 3943
    for (var d = data.length - 1; d >= 0; d--) {                                                                   // 3944
      var item = data[d];                                                                                          // 3945
                                                                                                                   // 3946
      if (this.placeholder.id === item.id) {                                                                       // 3947
        modifiedData.splice(d, 1);                                                                                 // 3948
      }                                                                                                            // 3949
    }                                                                                                              // 3950
                                                                                                                   // 3951
    return modifiedData;                                                                                           // 3952
  };                                                                                                               // 3953
                                                                                                                   // 3954
  return HidePlaceholder;                                                                                          // 3955
});                                                                                                                // 3956
                                                                                                                   // 3957
S2.define('select2/dropdown/infiniteScroll',[                                                                      // 3958
  'jquery'                                                                                                         // 3959
], function ($) {                                                                                                  // 3960
  function InfiniteScroll (decorated, $element, options, dataAdapter) {                                            // 3961
    this.lastParams = {};                                                                                          // 3962
                                                                                                                   // 3963
    decorated.call(this, $element, options, dataAdapter);                                                          // 3964
                                                                                                                   // 3965
    this.$loadingMore = this.createLoadingMore();                                                                  // 3966
    this.loading = false;                                                                                          // 3967
  }                                                                                                                // 3968
                                                                                                                   // 3969
  InfiniteScroll.prototype.append = function (decorated, data) {                                                   // 3970
    this.$loadingMore.remove();                                                                                    // 3971
    this.loading = false;                                                                                          // 3972
                                                                                                                   // 3973
    decorated.call(this, data);                                                                                    // 3974
                                                                                                                   // 3975
    if (this.showLoadingMore(data)) {                                                                              // 3976
      this.$results.append(this.$loadingMore);                                                                     // 3977
    }                                                                                                              // 3978
  };                                                                                                               // 3979
                                                                                                                   // 3980
  InfiniteScroll.prototype.bind = function (decorated, container, $container) {                                    // 3981
    var self = this;                                                                                               // 3982
                                                                                                                   // 3983
    decorated.call(this, container, $container);                                                                   // 3984
                                                                                                                   // 3985
    container.on('query', function (params) {                                                                      // 3986
      self.lastParams = params;                                                                                    // 3987
      self.loading = true;                                                                                         // 3988
    });                                                                                                            // 3989
                                                                                                                   // 3990
    container.on('query:append', function (params) {                                                               // 3991
      self.lastParams = params;                                                                                    // 3992
      self.loading = true;                                                                                         // 3993
    });                                                                                                            // 3994
                                                                                                                   // 3995
    this.$results.on('scroll', function () {                                                                       // 3996
      var isLoadMoreVisible = $.contains(                                                                          // 3997
        document.documentElement,                                                                                  // 3998
        self.$loadingMore[0]                                                                                       // 3999
      );                                                                                                           // 4000
                                                                                                                   // 4001
      if (self.loading || !isLoadMoreVisible) {                                                                    // 4002
        return;                                                                                                    // 4003
      }                                                                                                            // 4004
                                                                                                                   // 4005
      var currentOffset = self.$results.offset().top +                                                             // 4006
        self.$results.outerHeight(false);                                                                          // 4007
      var loadingMoreOffset = self.$loadingMore.offset().top +                                                     // 4008
        self.$loadingMore.outerHeight(false);                                                                      // 4009
                                                                                                                   // 4010
      if (currentOffset + 50 >= loadingMoreOffset) {                                                               // 4011
        self.loadMore();                                                                                           // 4012
      }                                                                                                            // 4013
    });                                                                                                            // 4014
  };                                                                                                               // 4015
                                                                                                                   // 4016
  InfiniteScroll.prototype.loadMore = function () {                                                                // 4017
    this.loading = true;                                                                                           // 4018
                                                                                                                   // 4019
    var params = $.extend({}, {page: 1}, this.lastParams);                                                         // 4020
                                                                                                                   // 4021
    params.page++;                                                                                                 // 4022
                                                                                                                   // 4023
    this.trigger('query:append', params);                                                                          // 4024
  };                                                                                                               // 4025
                                                                                                                   // 4026
  InfiniteScroll.prototype.showLoadingMore = function (_, data) {                                                  // 4027
    return data.pagination && data.pagination.more;                                                                // 4028
  };                                                                                                               // 4029
                                                                                                                   // 4030
  InfiniteScroll.prototype.createLoadingMore = function () {                                                       // 4031
    var $option = $(                                                                                               // 4032
      '<li ' +                                                                                                     // 4033
      'class="select2-results__option select2-results__option--load-more"' +                                       // 4034
      'role="treeitem" aria-disabled="true"></li>'                                                                 // 4035
    );                                                                                                             // 4036
                                                                                                                   // 4037
    var message = this.options.get('translations').get('loadingMore');                                             // 4038
                                                                                                                   // 4039
    $option.html(message(this.lastParams));                                                                        // 4040
                                                                                                                   // 4041
    return $option;                                                                                                // 4042
  };                                                                                                               // 4043
                                                                                                                   // 4044
  return InfiniteScroll;                                                                                           // 4045
});                                                                                                                // 4046
                                                                                                                   // 4047
S2.define('select2/dropdown/attachBody',[                                                                          // 4048
  'jquery',                                                                                                        // 4049
  '../utils'                                                                                                       // 4050
], function ($, Utils) {                                                                                           // 4051
  function AttachBody (decorated, $element, options) {                                                             // 4052
    this.$dropdownParent = options.get('dropdownParent') || $(document.body);                                      // 4053
                                                                                                                   // 4054
    decorated.call(this, $element, options);                                                                       // 4055
  }                                                                                                                // 4056
                                                                                                                   // 4057
  AttachBody.prototype.bind = function (decorated, container, $container) {                                        // 4058
    var self = this;                                                                                               // 4059
                                                                                                                   // 4060
    var setupResultsEvents = false;                                                                                // 4061
                                                                                                                   // 4062
    decorated.call(this, container, $container);                                                                   // 4063
                                                                                                                   // 4064
    container.on('open', function () {                                                                             // 4065
      self._showDropdown();                                                                                        // 4066
      self._attachPositioningHandler(container);                                                                   // 4067
                                                                                                                   // 4068
      if (!setupResultsEvents) {                                                                                   // 4069
        setupResultsEvents = true;                                                                                 // 4070
                                                                                                                   // 4071
        container.on('results:all', function () {                                                                  // 4072
          self._positionDropdown();                                                                                // 4073
          self._resizeDropdown();                                                                                  // 4074
        });                                                                                                        // 4075
                                                                                                                   // 4076
        container.on('results:append', function () {                                                               // 4077
          self._positionDropdown();                                                                                // 4078
          self._resizeDropdown();                                                                                  // 4079
        });                                                                                                        // 4080
      }                                                                                                            // 4081
    });                                                                                                            // 4082
                                                                                                                   // 4083
    container.on('close', function () {                                                                            // 4084
      self._hideDropdown();                                                                                        // 4085
      self._detachPositioningHandler(container);                                                                   // 4086
    });                                                                                                            // 4087
                                                                                                                   // 4088
    this.$dropdownContainer.on('mousedown', function (evt) {                                                       // 4089
      evt.stopPropagation();                                                                                       // 4090
    });                                                                                                            // 4091
  };                                                                                                               // 4092
                                                                                                                   // 4093
  AttachBody.prototype.destroy = function (decorated) {                                                            // 4094
    decorated.call(this);                                                                                          // 4095
                                                                                                                   // 4096
    this.$dropdownContainer.remove();                                                                              // 4097
  };                                                                                                               // 4098
                                                                                                                   // 4099
  AttachBody.prototype.position = function (decorated, $dropdown, $container) {                                    // 4100
    // Clone all of the container classes                                                                          // 4101
    $dropdown.attr('class', $container.attr('class'));                                                             // 4102
                                                                                                                   // 4103
    $dropdown.removeClass('select2');                                                                              // 4104
    $dropdown.addClass('select2-container--open');                                                                 // 4105
                                                                                                                   // 4106
    $dropdown.css({                                                                                                // 4107
      position: 'absolute',                                                                                        // 4108
      top: -999999                                                                                                 // 4109
    });                                                                                                            // 4110
                                                                                                                   // 4111
    this.$container = $container;                                                                                  // 4112
  };                                                                                                               // 4113
                                                                                                                   // 4114
  AttachBody.prototype.render = function (decorated) {                                                             // 4115
    var $container = $('<span></span>');                                                                           // 4116
                                                                                                                   // 4117
    var $dropdown = decorated.call(this);                                                                          // 4118
    $container.append($dropdown);                                                                                  // 4119
                                                                                                                   // 4120
    this.$dropdownContainer = $container;                                                                          // 4121
                                                                                                                   // 4122
    return $container;                                                                                             // 4123
  };                                                                                                               // 4124
                                                                                                                   // 4125
  AttachBody.prototype._hideDropdown = function (decorated) {                                                      // 4126
    this.$dropdownContainer.detach();                                                                              // 4127
  };                                                                                                               // 4128
                                                                                                                   // 4129
  AttachBody.prototype._attachPositioningHandler =                                                                 // 4130
      function (decorated, container) {                                                                            // 4131
    var self = this;                                                                                               // 4132
                                                                                                                   // 4133
    var scrollEvent = 'scroll.select2.' + container.id;                                                            // 4134
    var resizeEvent = 'resize.select2.' + container.id;                                                            // 4135
    var orientationEvent = 'orientationchange.select2.' + container.id;                                            // 4136
                                                                                                                   // 4137
    var $watchers = this.$container.parents().filter(Utils.hasScroll);                                             // 4138
    $watchers.each(function () {                                                                                   // 4139
      $(this).data('select2-scroll-position', {                                                                    // 4140
        x: $(this).scrollLeft(),                                                                                   // 4141
        y: $(this).scrollTop()                                                                                     // 4142
      });                                                                                                          // 4143
    });                                                                                                            // 4144
                                                                                                                   // 4145
    $watchers.on(scrollEvent, function (ev) {                                                                      // 4146
      var position = $(this).data('select2-scroll-position');                                                      // 4147
      $(this).scrollTop(position.y);                                                                               // 4148
    });                                                                                                            // 4149
                                                                                                                   // 4150
    $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,                                         // 4151
      function (e) {                                                                                               // 4152
      self._positionDropdown();                                                                                    // 4153
      self._resizeDropdown();                                                                                      // 4154
    });                                                                                                            // 4155
  };                                                                                                               // 4156
                                                                                                                   // 4157
  AttachBody.prototype._detachPositioningHandler =                                                                 // 4158
      function (decorated, container) {                                                                            // 4159
    var scrollEvent = 'scroll.select2.' + container.id;                                                            // 4160
    var resizeEvent = 'resize.select2.' + container.id;                                                            // 4161
    var orientationEvent = 'orientationchange.select2.' + container.id;                                            // 4162
                                                                                                                   // 4163
    var $watchers = this.$container.parents().filter(Utils.hasScroll);                                             // 4164
    $watchers.off(scrollEvent);                                                                                    // 4165
                                                                                                                   // 4166
    $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);                                       // 4167
  };                                                                                                               // 4168
                                                                                                                   // 4169
  AttachBody.prototype._positionDropdown = function () {                                                           // 4170
    var $window = $(window);                                                                                       // 4171
                                                                                                                   // 4172
    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');                                     // 4173
    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');                                     // 4174
                                                                                                                   // 4175
    var newDirection = null;                                                                                       // 4176
                                                                                                                   // 4177
    var offset = this.$container.offset();                                                                         // 4178
                                                                                                                   // 4179
    offset.bottom = offset.top + this.$container.outerHeight(false);                                               // 4180
                                                                                                                   // 4181
    var container = {                                                                                              // 4182
      height: this.$container.outerHeight(false)                                                                   // 4183
    };                                                                                                             // 4184
                                                                                                                   // 4185
    container.top = offset.top;                                                                                    // 4186
    container.bottom = offset.top + container.height;                                                              // 4187
                                                                                                                   // 4188
    var dropdown = {                                                                                               // 4189
      height: this.$dropdown.outerHeight(false)                                                                    // 4190
    };                                                                                                             // 4191
                                                                                                                   // 4192
    var viewport = {                                                                                               // 4193
      top: $window.scrollTop(),                                                                                    // 4194
      bottom: $window.scrollTop() + $window.height()                                                               // 4195
    };                                                                                                             // 4196
                                                                                                                   // 4197
    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);                                           // 4198
    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);                                     // 4199
                                                                                                                   // 4200
    var css = {                                                                                                    // 4201
      left: offset.left,                                                                                           // 4202
      top: container.bottom                                                                                        // 4203
    };                                                                                                             // 4204
                                                                                                                   // 4205
    // Determine what the parent element is to use for calciulating the offset                                     // 4206
    var $offsetParent = this.$dropdownParent;                                                                      // 4207
                                                                                                                   // 4208
    // For statically positoned elements, we need to get the element                                               // 4209
    // that is determining the offset                                                                              // 4210
    if ($offsetParent.css('position') === 'static') {                                                              // 4211
      $offsetParent = $offsetParent.offsetParent();                                                                // 4212
    }                                                                                                              // 4213
                                                                                                                   // 4214
    var parentOffset = $offsetParent.offset();                                                                     // 4215
                                                                                                                   // 4216
    css.top -= parentOffset.top;                                                                                   // 4217
    css.left -= parentOffset.left;                                                                                 // 4218
                                                                                                                   // 4219
    if (!isCurrentlyAbove && !isCurrentlyBelow) {                                                                  // 4220
      newDirection = 'below';                                                                                      // 4221
    }                                                                                                              // 4222
                                                                                                                   // 4223
    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {                                                // 4224
      newDirection = 'above';                                                                                      // 4225
    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {                                          // 4226
      newDirection = 'below';                                                                                      // 4227
    }                                                                                                              // 4228
                                                                                                                   // 4229
    if (newDirection == 'above' ||                                                                                 // 4230
      (isCurrentlyAbove && newDirection !== 'below')) {                                                            // 4231
      css.top = container.top - dropdown.height;                                                                   // 4232
    }                                                                                                              // 4233
                                                                                                                   // 4234
    if (newDirection != null) {                                                                                    // 4235
      this.$dropdown                                                                                               // 4236
        .removeClass('select2-dropdown--below select2-dropdown--above')                                            // 4237
        .addClass('select2-dropdown--' + newDirection);                                                            // 4238
      this.$container                                                                                              // 4239
        .removeClass('select2-container--below select2-container--above')                                          // 4240
        .addClass('select2-container--' + newDirection);                                                           // 4241
    }                                                                                                              // 4242
                                                                                                                   // 4243
    this.$dropdownContainer.css(css);                                                                              // 4244
  };                                                                                                               // 4245
                                                                                                                   // 4246
  AttachBody.prototype._resizeDropdown = function () {                                                             // 4247
    var css = {                                                                                                    // 4248
      width: this.$container.outerWidth(false) + 'px'                                                              // 4249
    };                                                                                                             // 4250
                                                                                                                   // 4251
    if (this.options.get('dropdownAutoWidth')) {                                                                   // 4252
      css.minWidth = css.width;                                                                                    // 4253
      css.width = 'auto';                                                                                          // 4254
    }                                                                                                              // 4255
                                                                                                                   // 4256
    this.$dropdown.css(css);                                                                                       // 4257
  };                                                                                                               // 4258
                                                                                                                   // 4259
  AttachBody.prototype._showDropdown = function (decorated) {                                                      // 4260
    this.$dropdownContainer.appendTo(this.$dropdownParent);                                                        // 4261
                                                                                                                   // 4262
    this._positionDropdown();                                                                                      // 4263
    this._resizeDropdown();                                                                                        // 4264
  };                                                                                                               // 4265
                                                                                                                   // 4266
  return AttachBody;                                                                                               // 4267
});                                                                                                                // 4268
                                                                                                                   // 4269
S2.define('select2/dropdown/minimumResultsForSearch',[                                                             // 4270
                                                                                                                   // 4271
], function () {                                                                                                   // 4272
  function countResults (data) {                                                                                   // 4273
    var count = 0;                                                                                                 // 4274
                                                                                                                   // 4275
    for (var d = 0; d < data.length; d++) {                                                                        // 4276
      var item = data[d];                                                                                          // 4277
                                                                                                                   // 4278
      if (item.children) {                                                                                         // 4279
        count += countResults(item.children);                                                                      // 4280
      } else {                                                                                                     // 4281
        count++;                                                                                                   // 4282
      }                                                                                                            // 4283
    }                                                                                                              // 4284
                                                                                                                   // 4285
    return count;                                                                                                  // 4286
  }                                                                                                                // 4287
                                                                                                                   // 4288
  function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {                                   // 4289
    this.minimumResultsForSearch = options.get('minimumResultsForSearch');                                         // 4290
                                                                                                                   // 4291
    if (this.minimumResultsForSearch < 0) {                                                                        // 4292
      this.minimumResultsForSearch = Infinity;                                                                     // 4293
    }                                                                                                              // 4294
                                                                                                                   // 4295
    decorated.call(this, $element, options, dataAdapter);                                                          // 4296
  }                                                                                                                // 4297
                                                                                                                   // 4298
  MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {                                    // 4299
    if (countResults(params.data.results) < this.minimumResultsForSearch) {                                        // 4300
      return false;                                                                                                // 4301
    }                                                                                                              // 4302
                                                                                                                   // 4303
    return decorated.call(this, params);                                                                           // 4304
  };                                                                                                               // 4305
                                                                                                                   // 4306
  return MinimumResultsForSearch;                                                                                  // 4307
});                                                                                                                // 4308
                                                                                                                   // 4309
S2.define('select2/dropdown/selectOnClose',[                                                                       // 4310
                                                                                                                   // 4311
], function () {                                                                                                   // 4312
  function SelectOnClose () { }                                                                                    // 4313
                                                                                                                   // 4314
  SelectOnClose.prototype.bind = function (decorated, container, $container) {                                     // 4315
    var self = this;                                                                                               // 4316
                                                                                                                   // 4317
    decorated.call(this, container, $container);                                                                   // 4318
                                                                                                                   // 4319
    container.on('close', function () {                                                                            // 4320
      self._handleSelectOnClose();                                                                                 // 4321
    });                                                                                                            // 4322
  };                                                                                                               // 4323
                                                                                                                   // 4324
  SelectOnClose.prototype._handleSelectOnClose = function () {                                                     // 4325
    var $highlightedResults = this.getHighlightedResults();                                                        // 4326
                                                                                                                   // 4327
    // Only select highlighted results                                                                             // 4328
    if ($highlightedResults.length < 1) {                                                                          // 4329
      return;                                                                                                      // 4330
    }                                                                                                              // 4331
                                                                                                                   // 4332
    var data = $highlightedResults.data('data');                                                                   // 4333
                                                                                                                   // 4334
    // Don't re-select already selected resulte                                                                    // 4335
    if (                                                                                                           // 4336
      (data.element != null && data.element.selected) ||                                                           // 4337
      (data.element == null && data.selected)                                                                      // 4338
    ) {                                                                                                            // 4339
      return;                                                                                                      // 4340
    }                                                                                                              // 4341
                                                                                                                   // 4342
    this.trigger('select', {                                                                                       // 4343
        data: data                                                                                                 // 4344
    });                                                                                                            // 4345
  };                                                                                                               // 4346
                                                                                                                   // 4347
  return SelectOnClose;                                                                                            // 4348
});                                                                                                                // 4349
                                                                                                                   // 4350
S2.define('select2/dropdown/closeOnSelect',[                                                                       // 4351
                                                                                                                   // 4352
], function () {                                                                                                   // 4353
  function CloseOnSelect () { }                                                                                    // 4354
                                                                                                                   // 4355
  CloseOnSelect.prototype.bind = function (decorated, container, $container) {                                     // 4356
    var self = this;                                                                                               // 4357
                                                                                                                   // 4358
    decorated.call(this, container, $container);                                                                   // 4359
                                                                                                                   // 4360
    container.on('select', function (evt) {                                                                        // 4361
      self._selectTriggered(evt);                                                                                  // 4362
    });                                                                                                            // 4363
                                                                                                                   // 4364
    container.on('unselect', function (evt) {                                                                      // 4365
      self._selectTriggered(evt);                                                                                  // 4366
    });                                                                                                            // 4367
  };                                                                                                               // 4368
                                                                                                                   // 4369
  CloseOnSelect.prototype._selectTriggered = function (_, evt) {                                                   // 4370
    var originalEvent = evt.originalEvent;                                                                         // 4371
                                                                                                                   // 4372
    // Don't close if the control key is being held                                                                // 4373
    if (originalEvent && originalEvent.ctrlKey) {                                                                  // 4374
      return;                                                                                                      // 4375
    }                                                                                                              // 4376
                                                                                                                   // 4377
    this.trigger('close', {});                                                                                     // 4378
  };                                                                                                               // 4379
                                                                                                                   // 4380
  return CloseOnSelect;                                                                                            // 4381
});                                                                                                                // 4382
                                                                                                                   // 4383
S2.define('select2/i18n/en',[],function () {                                                                       // 4384
  // English                                                                                                       // 4385
  return {                                                                                                         // 4386
    errorLoading: function () {                                                                                    // 4387
      return 'The results could not be loaded.';                                                                   // 4388
    },                                                                                                             // 4389
    inputTooLong: function (args) {                                                                                // 4390
      var overChars = args.input.length - args.maximum;                                                            // 4391
                                                                                                                   // 4392
      var message = 'Please delete ' + overChars + ' character';                                                   // 4393
                                                                                                                   // 4394
      if (overChars != 1) {                                                                                        // 4395
        message += 's';                                                                                            // 4396
      }                                                                                                            // 4397
                                                                                                                   // 4398
      return message;                                                                                              // 4399
    },                                                                                                             // 4400
    inputTooShort: function (args) {                                                                               // 4401
      var remainingChars = args.minimum - args.input.length;                                                       // 4402
                                                                                                                   // 4403
      var message = 'Please enter ' + remainingChars + ' or more characters';                                      // 4404
                                                                                                                   // 4405
      return message;                                                                                              // 4406
    },                                                                                                             // 4407
    loadingMore: function () {                                                                                     // 4408
      return 'Loading more results…';                                                                              // 4409
    },                                                                                                             // 4410
    maximumSelected: function (args) {                                                                             // 4411
      var message = 'You can only select ' + args.maximum + ' item';                                               // 4412
                                                                                                                   // 4413
      if (args.maximum != 1) {                                                                                     // 4414
        message += 's';                                                                                            // 4415
      }                                                                                                            // 4416
                                                                                                                   // 4417
      return message;                                                                                              // 4418
    },                                                                                                             // 4419
    noResults: function () {                                                                                       // 4420
      return 'No results found';                                                                                   // 4421
    },                                                                                                             // 4422
    searching: function () {                                                                                       // 4423
      return 'Searching…';                                                                                         // 4424
    }                                                                                                              // 4425
  };                                                                                                               // 4426
});                                                                                                                // 4427
                                                                                                                   // 4428
S2.define('select2/defaults',[                                                                                     // 4429
  'jquery',                                                                                                        // 4430
  'require',                                                                                                       // 4431
                                                                                                                   // 4432
  './results',                                                                                                     // 4433
                                                                                                                   // 4434
  './selection/single',                                                                                            // 4435
  './selection/multiple',                                                                                          // 4436
  './selection/placeholder',                                                                                       // 4437
  './selection/allowClear',                                                                                        // 4438
  './selection/search',                                                                                            // 4439
  './selection/eventRelay',                                                                                        // 4440
                                                                                                                   // 4441
  './utils',                                                                                                       // 4442
  './translation',                                                                                                 // 4443
  './diacritics',                                                                                                  // 4444
                                                                                                                   // 4445
  './data/select',                                                                                                 // 4446
  './data/array',                                                                                                  // 4447
  './data/ajax',                                                                                                   // 4448
  './data/tags',                                                                                                   // 4449
  './data/tokenizer',                                                                                              // 4450
  './data/minimumInputLength',                                                                                     // 4451
  './data/maximumInputLength',                                                                                     // 4452
  './data/maximumSelectionLength',                                                                                 // 4453
                                                                                                                   // 4454
  './dropdown',                                                                                                    // 4455
  './dropdown/search',                                                                                             // 4456
  './dropdown/hidePlaceholder',                                                                                    // 4457
  './dropdown/infiniteScroll',                                                                                     // 4458
  './dropdown/attachBody',                                                                                         // 4459
  './dropdown/minimumResultsForSearch',                                                                            // 4460
  './dropdown/selectOnClose',                                                                                      // 4461
  './dropdown/closeOnSelect',                                                                                      // 4462
                                                                                                                   // 4463
  './i18n/en'                                                                                                      // 4464
], function ($, require,                                                                                           // 4465
                                                                                                                   // 4466
             ResultsList,                                                                                          // 4467
                                                                                                                   // 4468
             SingleSelection, MultipleSelection, Placeholder, AllowClear,                                          // 4469
             SelectionSearch, EventRelay,                                                                          // 4470
                                                                                                                   // 4471
             Utils, Translation, DIACRITICS,                                                                       // 4472
                                                                                                                   // 4473
             SelectData, ArrayData, AjaxData, Tags, Tokenizer,                                                     // 4474
             MinimumInputLength, MaximumInputLength, MaximumSelectionLength,                                       // 4475
                                                                                                                   // 4476
             Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,                                            // 4477
             AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,                                    // 4478
                                                                                                                   // 4479
             EnglishTranslation) {                                                                                 // 4480
  function Defaults () {                                                                                           // 4481
    this.reset();                                                                                                  // 4482
  }                                                                                                                // 4483
                                                                                                                   // 4484
  Defaults.prototype.apply = function (options) {                                                                  // 4485
    options = $.extend(true, {}, this.defaults, options);                                                          // 4486
                                                                                                                   // 4487
    if (options.dataAdapter == null) {                                                                             // 4488
      if (options.ajax != null) {                                                                                  // 4489
        options.dataAdapter = AjaxData;                                                                            // 4490
      } else if (options.data != null) {                                                                           // 4491
        options.dataAdapter = ArrayData;                                                                           // 4492
      } else {                                                                                                     // 4493
        options.dataAdapter = SelectData;                                                                          // 4494
      }                                                                                                            // 4495
                                                                                                                   // 4496
      if (options.minimumInputLength > 0) {                                                                        // 4497
        options.dataAdapter = Utils.Decorate(                                                                      // 4498
          options.dataAdapter,                                                                                     // 4499
          MinimumInputLength                                                                                       // 4500
        );                                                                                                         // 4501
      }                                                                                                            // 4502
                                                                                                                   // 4503
      if (options.maximumInputLength > 0) {                                                                        // 4504
        options.dataAdapter = Utils.Decorate(                                                                      // 4505
          options.dataAdapter,                                                                                     // 4506
          MaximumInputLength                                                                                       // 4507
        );                                                                                                         // 4508
      }                                                                                                            // 4509
                                                                                                                   // 4510
      if (options.maximumSelectionLength > 0) {                                                                    // 4511
        options.dataAdapter = Utils.Decorate(                                                                      // 4512
          options.dataAdapter,                                                                                     // 4513
          MaximumSelectionLength                                                                                   // 4514
        );                                                                                                         // 4515
      }                                                                                                            // 4516
                                                                                                                   // 4517
      if (options.tags) {                                                                                          // 4518
        options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);                                           // 4519
      }                                                                                                            // 4520
                                                                                                                   // 4521
      if (options.tokenSeparators != null || options.tokenizer != null) {                                          // 4522
        options.dataAdapter = Utils.Decorate(                                                                      // 4523
          options.dataAdapter,                                                                                     // 4524
          Tokenizer                                                                                                // 4525
        );                                                                                                         // 4526
      }                                                                                                            // 4527
                                                                                                                   // 4528
      if (options.query != null) {                                                                                 // 4529
        var Query = require(options.amdBase + 'compat/query');                                                     // 4530
                                                                                                                   // 4531
        options.dataAdapter = Utils.Decorate(                                                                      // 4532
          options.dataAdapter,                                                                                     // 4533
          Query                                                                                                    // 4534
        );                                                                                                         // 4535
      }                                                                                                            // 4536
                                                                                                                   // 4537
      if (options.initSelection != null) {                                                                         // 4538
        var InitSelection = require(options.amdBase + 'compat/initSelection');                                     // 4539
                                                                                                                   // 4540
        options.dataAdapter = Utils.Decorate(                                                                      // 4541
          options.dataAdapter,                                                                                     // 4542
          InitSelection                                                                                            // 4543
        );                                                                                                         // 4544
      }                                                                                                            // 4545
    }                                                                                                              // 4546
                                                                                                                   // 4547
    if (options.resultsAdapter == null) {                                                                          // 4548
      options.resultsAdapter = ResultsList;                                                                        // 4549
                                                                                                                   // 4550
      if (options.ajax != null) {                                                                                  // 4551
        options.resultsAdapter = Utils.Decorate(                                                                   // 4552
          options.resultsAdapter,                                                                                  // 4553
          InfiniteScroll                                                                                           // 4554
        );                                                                                                         // 4555
      }                                                                                                            // 4556
                                                                                                                   // 4557
      if (options.placeholder != null) {                                                                           // 4558
        options.resultsAdapter = Utils.Decorate(                                                                   // 4559
          options.resultsAdapter,                                                                                  // 4560
          HidePlaceholder                                                                                          // 4561
        );                                                                                                         // 4562
      }                                                                                                            // 4563
                                                                                                                   // 4564
      if (options.selectOnClose) {                                                                                 // 4565
        options.resultsAdapter = Utils.Decorate(                                                                   // 4566
          options.resultsAdapter,                                                                                  // 4567
          SelectOnClose                                                                                            // 4568
        );                                                                                                         // 4569
      }                                                                                                            // 4570
    }                                                                                                              // 4571
                                                                                                                   // 4572
    if (options.dropdownAdapter == null) {                                                                         // 4573
      if (options.multiple) {                                                                                      // 4574
        options.dropdownAdapter = Dropdown;                                                                        // 4575
      } else {                                                                                                     // 4576
        var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);                                         // 4577
                                                                                                                   // 4578
        options.dropdownAdapter = SearchableDropdown;                                                              // 4579
      }                                                                                                            // 4580
                                                                                                                   // 4581
      if (options.minimumResultsForSearch !== 0) {                                                                 // 4582
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4583
          options.dropdownAdapter,                                                                                 // 4584
          MinimumResultsForSearch                                                                                  // 4585
        );                                                                                                         // 4586
      }                                                                                                            // 4587
                                                                                                                   // 4588
      if (options.closeOnSelect) {                                                                                 // 4589
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4590
          options.dropdownAdapter,                                                                                 // 4591
          CloseOnSelect                                                                                            // 4592
        );                                                                                                         // 4593
      }                                                                                                            // 4594
                                                                                                                   // 4595
      if (                                                                                                         // 4596
        options.dropdownCssClass != null ||                                                                        // 4597
        options.dropdownCss != null ||                                                                             // 4598
        options.adaptDropdownCssClass != null                                                                      // 4599
      ) {                                                                                                          // 4600
        var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');                                         // 4601
                                                                                                                   // 4602
        options.dropdownAdapter = Utils.Decorate(                                                                  // 4603
          options.dropdownAdapter,                                                                                 // 4604
          DropdownCSS                                                                                              // 4605
        );                                                                                                         // 4606
      }                                                                                                            // 4607
                                                                                                                   // 4608
      options.dropdownAdapter = Utils.Decorate(                                                                    // 4609
        options.dropdownAdapter,                                                                                   // 4610
        AttachBody                                                                                                 // 4611
      );                                                                                                           // 4612
    }                                                                                                              // 4613
                                                                                                                   // 4614
    if (options.selectionAdapter == null) {                                                                        // 4615
      if (options.multiple) {                                                                                      // 4616
        options.selectionAdapter = MultipleSelection;                                                              // 4617
      } else {                                                                                                     // 4618
        options.selectionAdapter = SingleSelection;                                                                // 4619
      }                                                                                                            // 4620
                                                                                                                   // 4621
      // Add the placeholder mixin if a placeholder was specified                                                  // 4622
      if (options.placeholder != null) {                                                                           // 4623
        options.selectionAdapter = Utils.Decorate(                                                                 // 4624
          options.selectionAdapter,                                                                                // 4625
          Placeholder                                                                                              // 4626
        );                                                                                                         // 4627
      }                                                                                                            // 4628
                                                                                                                   // 4629
      if (options.allowClear) {                                                                                    // 4630
        options.selectionAdapter = Utils.Decorate(                                                                 // 4631
          options.selectionAdapter,                                                                                // 4632
          AllowClear                                                                                               // 4633
        );                                                                                                         // 4634
      }                                                                                                            // 4635
                                                                                                                   // 4636
      if (options.multiple) {                                                                                      // 4637
        options.selectionAdapter = Utils.Decorate(                                                                 // 4638
          options.selectionAdapter,                                                                                // 4639
          SelectionSearch                                                                                          // 4640
        );                                                                                                         // 4641
      }                                                                                                            // 4642
                                                                                                                   // 4643
      if (                                                                                                         // 4644
        options.containerCssClass != null ||                                                                       // 4645
        options.containerCss != null ||                                                                            // 4646
        options.adaptContainerCssClass != null                                                                     // 4647
      ) {                                                                                                          // 4648
        var ContainerCSS = require(options.amdBase + 'compat/containerCss');                                       // 4649
                                                                                                                   // 4650
        options.selectionAdapter = Utils.Decorate(                                                                 // 4651
          options.selectionAdapter,                                                                                // 4652
          ContainerCSS                                                                                             // 4653
        );                                                                                                         // 4654
      }                                                                                                            // 4655
                                                                                                                   // 4656
      options.selectionAdapter = Utils.Decorate(                                                                   // 4657
        options.selectionAdapter,                                                                                  // 4658
        EventRelay                                                                                                 // 4659
      );                                                                                                           // 4660
    }                                                                                                              // 4661
                                                                                                                   // 4662
    if (typeof options.language === 'string') {                                                                    // 4663
      // Check if the language is specified with a region                                                          // 4664
      if (options.language.indexOf('-') > 0) {                                                                     // 4665
        // Extract the region information if it is included                                                        // 4666
        var languageParts = options.language.split('-');                                                           // 4667
        var baseLanguage = languageParts[0];                                                                       // 4668
                                                                                                                   // 4669
        options.language = [options.language, baseLanguage];                                                       // 4670
      } else {                                                                                                     // 4671
        options.language = [options.language];                                                                     // 4672
      }                                                                                                            // 4673
    }                                                                                                              // 4674
                                                                                                                   // 4675
    if ($.isArray(options.language)) {                                                                             // 4676
      var languages = new Translation();                                                                           // 4677
      options.language.push('en');                                                                                 // 4678
                                                                                                                   // 4679
      var languageNames = options.language;                                                                        // 4680
                                                                                                                   // 4681
      for (var l = 0; l < languageNames.length; l++) {                                                             // 4682
        var name = languageNames[l];                                                                               // 4683
        var language = {};                                                                                         // 4684
                                                                                                                   // 4685
        try {                                                                                                      // 4686
          // Try to load it with the original name                                                                 // 4687
          language = Translation.loadPath(name);                                                                   // 4688
        } catch (e) {                                                                                              // 4689
          try {                                                                                                    // 4690
            // If we couldn't load it, check if it wasn't the full path                                            // 4691
            name = this.defaults.amdLanguageBase + name;                                                           // 4692
            language = Translation.loadPath(name);                                                                 // 4693
          } catch (ex) {                                                                                           // 4694
            // The translation could not be loaded at all. Sometimes this is                                       // 4695
            // because of a configuration problem, other times this can be                                         // 4696
            // because of how Select2 helps load all possible translation files.                                   // 4697
            if (options.debug && window.console && console.warn) {                                                 // 4698
              console.warn(                                                                                        // 4699
                'Select2: The language file for "' + name + '" could not be ' +                                    // 4700
                'automatically loaded. A fallback will be used instead.'                                           // 4701
              );                                                                                                   // 4702
            }                                                                                                      // 4703
                                                                                                                   // 4704
            continue;                                                                                              // 4705
          }                                                                                                        // 4706
        }                                                                                                          // 4707
                                                                                                                   // 4708
        languages.extend(language);                                                                                // 4709
      }                                                                                                            // 4710
                                                                                                                   // 4711
      options.translations = languages;                                                                            // 4712
    } else {                                                                                                       // 4713
      var baseTranslation = Translation.loadPath(                                                                  // 4714
        this.defaults.amdLanguageBase + 'en'                                                                       // 4715
      );                                                                                                           // 4716
      var customTranslation = new Translation(options.language);                                                   // 4717
                                                                                                                   // 4718
      customTranslation.extend(baseTranslation);                                                                   // 4719
                                                                                                                   // 4720
      options.translations = customTranslation;                                                                    // 4721
    }                                                                                                              // 4722
                                                                                                                   // 4723
    return options;                                                                                                // 4724
  };                                                                                                               // 4725
                                                                                                                   // 4726
  Defaults.prototype.reset = function () {                                                                         // 4727
    function stripDiacritics (text) {                                                                              // 4728
      // Used 'uni range + named function' from http://jsperf.com/diacritics/18                                    // 4729
      function match(a) {                                                                                          // 4730
        return DIACRITICS[a] || a;                                                                                 // 4731
      }                                                                                                            // 4732
                                                                                                                   // 4733
      return text.replace(/[^\u0000-\u007E]/g, match);                                                             // 4734
    }                                                                                                              // 4735
                                                                                                                   // 4736
    function matcher (params, data) {                                                                              // 4737
      // Always return the object if there is nothing to compare                                                   // 4738
      if ($.trim(params.term) === '') {                                                                            // 4739
        return data;                                                                                               // 4740
      }                                                                                                            // 4741
                                                                                                                   // 4742
      // Do a recursive check for options with children                                                            // 4743
      if (data.children && data.children.length > 0) {                                                             // 4744
        // Clone the data object if there are children                                                             // 4745
        // This is required as we modify the object to remove any non-matches                                      // 4746
        var match = $.extend(true, {}, data);                                                                      // 4747
                                                                                                                   // 4748
        // Check each child of the option                                                                          // 4749
        for (var c = data.children.length - 1; c >= 0; c--) {                                                      // 4750
          var child = data.children[c];                                                                            // 4751
                                                                                                                   // 4752
          var matches = matcher(params, child);                                                                    // 4753
                                                                                                                   // 4754
          // If there wasn't a match, remove the object in the array                                               // 4755
          if (matches == null) {                                                                                   // 4756
            match.children.splice(c, 1);                                                                           // 4757
          }                                                                                                        // 4758
        }                                                                                                          // 4759
                                                                                                                   // 4760
        // If any children matched, return the new object                                                          // 4761
        if (match.children.length > 0) {                                                                           // 4762
          return match;                                                                                            // 4763
        }                                                                                                          // 4764
                                                                                                                   // 4765
        // If there were no matching children, check just the plain object                                         // 4766
        return matcher(params, match);                                                                             // 4767
      }                                                                                                            // 4768
                                                                                                                   // 4769
      var original = stripDiacritics(data.text).toUpperCase();                                                     // 4770
      var term = stripDiacritics(params.term).toUpperCase();                                                       // 4771
                                                                                                                   // 4772
      // Check if the text contains the term                                                                       // 4773
      if (original.indexOf(term) > -1) {                                                                           // 4774
        return data;                                                                                               // 4775
      }                                                                                                            // 4776
                                                                                                                   // 4777
      // If it doesn't contain the term, don't return anything                                                     // 4778
      return null;                                                                                                 // 4779
    }                                                                                                              // 4780
                                                                                                                   // 4781
    this.defaults = {                                                                                              // 4782
      amdBase: './',                                                                                               // 4783
      amdLanguageBase: './i18n/',                                                                                  // 4784
      closeOnSelect: true,                                                                                         // 4785
      debug: false,                                                                                                // 4786
      dropdownAutoWidth: false,                                                                                    // 4787
      escapeMarkup: Utils.escapeMarkup,                                                                            // 4788
      language: EnglishTranslation,                                                                                // 4789
      matcher: matcher,                                                                                            // 4790
      minimumInputLength: 0,                                                                                       // 4791
      maximumInputLength: 0,                                                                                       // 4792
      maximumSelectionLength: 0,                                                                                   // 4793
      minimumResultsForSearch: 0,                                                                                  // 4794
      selectOnClose: false,                                                                                        // 4795
      sorter: function (data) {                                                                                    // 4796
        return data;                                                                                               // 4797
      },                                                                                                           // 4798
      templateResult: function (result) {                                                                          // 4799
        return result.text;                                                                                        // 4800
      },                                                                                                           // 4801
      templateSelection: function (selection) {                                                                    // 4802
        return selection.text;                                                                                     // 4803
      },                                                                                                           // 4804
      theme: 'default',                                                                                            // 4805
      width: 'resolve'                                                                                             // 4806
    };                                                                                                             // 4807
  };                                                                                                               // 4808
                                                                                                                   // 4809
  Defaults.prototype.set = function (key, value) {                                                                 // 4810
    var camelKey = $.camelCase(key);                                                                               // 4811
                                                                                                                   // 4812
    var data = {};                                                                                                 // 4813
    data[camelKey] = value;                                                                                        // 4814
                                                                                                                   // 4815
    var convertedData = Utils._convertData(data);                                                                  // 4816
                                                                                                                   // 4817
    $.extend(this.defaults, convertedData);                                                                        // 4818
  };                                                                                                               // 4819
                                                                                                                   // 4820
  var defaults = new Defaults();                                                                                   // 4821
                                                                                                                   // 4822
  return defaults;                                                                                                 // 4823
});                                                                                                                // 4824
                                                                                                                   // 4825
S2.define('select2/options',[                                                                                      // 4826
  'require',                                                                                                       // 4827
  'jquery',                                                                                                        // 4828
  './defaults',                                                                                                    // 4829
  './utils'                                                                                                        // 4830
], function (require, $, Defaults, Utils) {                                                                        // 4831
  function Options (options, $element) {                                                                           // 4832
    this.options = options;                                                                                        // 4833
                                                                                                                   // 4834
    if ($element != null) {                                                                                        // 4835
      this.fromElement($element);                                                                                  // 4836
    }                                                                                                              // 4837
                                                                                                                   // 4838
    this.options = Defaults.apply(this.options);                                                                   // 4839
                                                                                                                   // 4840
    if ($element && $element.is('input')) {                                                                        // 4841
      var InputCompat = require(this.get('amdBase') + 'compat/inputData');                                         // 4842
                                                                                                                   // 4843
      this.options.dataAdapter = Utils.Decorate(                                                                   // 4844
        this.options.dataAdapter,                                                                                  // 4845
        InputCompat                                                                                                // 4846
      );                                                                                                           // 4847
    }                                                                                                              // 4848
  }                                                                                                                // 4849
                                                                                                                   // 4850
  Options.prototype.fromElement = function ($e) {                                                                  // 4851
    var excludedData = ['select2'];                                                                                // 4852
                                                                                                                   // 4853
    if (this.options.multiple == null) {                                                                           // 4854
      this.options.multiple = $e.prop('multiple');                                                                 // 4855
    }                                                                                                              // 4856
                                                                                                                   // 4857
    if (this.options.disabled == null) {                                                                           // 4858
      this.options.disabled = $e.prop('disabled');                                                                 // 4859
    }                                                                                                              // 4860
                                                                                                                   // 4861
    if (this.options.language == null) {                                                                           // 4862
      if ($e.prop('lang')) {                                                                                       // 4863
        this.options.language = $e.prop('lang').toLowerCase();                                                     // 4864
      } else if ($e.closest('[lang]').prop('lang')) {                                                              // 4865
        this.options.language = $e.closest('[lang]').prop('lang');                                                 // 4866
      }                                                                                                            // 4867
    }                                                                                                              // 4868
                                                                                                                   // 4869
    if (this.options.dir == null) {                                                                                // 4870
      if ($e.prop('dir')) {                                                                                        // 4871
        this.options.dir = $e.prop('dir');                                                                         // 4872
      } else if ($e.closest('[dir]').prop('dir')) {                                                                // 4873
        this.options.dir = $e.closest('[dir]').prop('dir');                                                        // 4874
      } else {                                                                                                     // 4875
        this.options.dir = 'ltr';                                                                                  // 4876
      }                                                                                                            // 4877
    }                                                                                                              // 4878
                                                                                                                   // 4879
    $e.prop('disabled', this.options.disabled);                                                                    // 4880
    $e.prop('multiple', this.options.multiple);                                                                    // 4881
                                                                                                                   // 4882
    if ($e.data('select2Tags')) {                                                                                  // 4883
      if (this.options.debug && window.console && console.warn) {                                                  // 4884
        console.warn(                                                                                              // 4885
          'Select2: The `data-select2-tags` attribute has been changed to ' +                                      // 4886
          'use the `data-data` and `data-tags="true"` attributes and will be ' +                                   // 4887
          'removed in future versions of Select2.'                                                                 // 4888
        );                                                                                                         // 4889
      }                                                                                                            // 4890
                                                                                                                   // 4891
      $e.data('data', $e.data('select2Tags'));                                                                     // 4892
      $e.data('tags', true);                                                                                       // 4893
    }                                                                                                              // 4894
                                                                                                                   // 4895
    if ($e.data('ajaxUrl')) {                                                                                      // 4896
      if (this.options.debug && window.console && console.warn) {                                                  // 4897
        console.warn(                                                                                              // 4898
          'Select2: The `data-ajax-url` attribute has been changed to ' +                                          // 4899
          '`data-ajax--url` and support for the old attribute will be removed' +                                   // 4900
          ' in future versions of Select2.'                                                                        // 4901
        );                                                                                                         // 4902
      }                                                                                                            // 4903
                                                                                                                   // 4904
      $e.attr('ajax--url', $e.data('ajaxUrl'));                                                                    // 4905
      $e.data('ajax--url', $e.data('ajaxUrl'));                                                                    // 4906
    }                                                                                                              // 4907
                                                                                                                   // 4908
    var dataset = {};                                                                                              // 4909
                                                                                                                   // 4910
    // Prefer the element's `dataset` attribute if it exists                                                       // 4911
    // jQuery 1.x does not correctly handle data attributes with multiple dashes                                   // 4912
    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {                                        // 4913
      dataset = $.extend(true, {}, $e[0].dataset, $e.data());                                                      // 4914
    } else {                                                                                                       // 4915
      dataset = $e.data();                                                                                         // 4916
    }                                                                                                              // 4917
                                                                                                                   // 4918
    var data = $.extend(true, {}, dataset);                                                                        // 4919
                                                                                                                   // 4920
    data = Utils._convertData(data);                                                                               // 4921
                                                                                                                   // 4922
    for (var key in data) {                                                                                        // 4923
      if ($.inArray(key, excludedData) > -1) {                                                                     // 4924
        continue;                                                                                                  // 4925
      }                                                                                                            // 4926
                                                                                                                   // 4927
      if ($.isPlainObject(this.options[key])) {                                                                    // 4928
        $.extend(this.options[key], data[key]);                                                                    // 4929
      } else {                                                                                                     // 4930
        this.options[key] = data[key];                                                                             // 4931
      }                                                                                                            // 4932
    }                                                                                                              // 4933
                                                                                                                   // 4934
    return this;                                                                                                   // 4935
  };                                                                                                               // 4936
                                                                                                                   // 4937
  Options.prototype.get = function (key) {                                                                         // 4938
    return this.options[key];                                                                                      // 4939
  };                                                                                                               // 4940
                                                                                                                   // 4941
  Options.prototype.set = function (key, val) {                                                                    // 4942
    this.options[key] = val;                                                                                       // 4943
  };                                                                                                               // 4944
                                                                                                                   // 4945
  return Options;                                                                                                  // 4946
});                                                                                                                // 4947
                                                                                                                   // 4948
S2.define('select2/core',[                                                                                         // 4949
  'jquery',                                                                                                        // 4950
  './options',                                                                                                     // 4951
  './utils',                                                                                                       // 4952
  './keys'                                                                                                         // 4953
], function ($, Options, Utils, KEYS) {                                                                            // 4954
  var Select2 = function ($element, options) {                                                                     // 4955
    if ($element.data('select2') != null) {                                                                        // 4956
      $element.data('select2').destroy();                                                                          // 4957
    }                                                                                                              // 4958
                                                                                                                   // 4959
    this.$element = $element;                                                                                      // 4960
                                                                                                                   // 4961
    this.id = this._generateId($element);                                                                          // 4962
                                                                                                                   // 4963
    options = options || {};                                                                                       // 4964
                                                                                                                   // 4965
    this.options = new Options(options, $element);                                                                 // 4966
                                                                                                                   // 4967
    Select2.__super__.constructor.call(this);                                                                      // 4968
                                                                                                                   // 4969
    // Set up the tabindex                                                                                         // 4970
                                                                                                                   // 4971
    var tabindex = $element.attr('tabindex') || 0;                                                                 // 4972
    $element.data('old-tabindex', tabindex);                                                                       // 4973
    $element.attr('tabindex', '-1');                                                                               // 4974
                                                                                                                   // 4975
    // Set up containers and adapters                                                                              // 4976
                                                                                                                   // 4977
    var DataAdapter = this.options.get('dataAdapter');                                                             // 4978
    this.dataAdapter = new DataAdapter($element, this.options);                                                    // 4979
                                                                                                                   // 4980
    var $container = this.render();                                                                                // 4981
                                                                                                                   // 4982
    this._placeContainer($container);                                                                              // 4983
                                                                                                                   // 4984
    var SelectionAdapter = this.options.get('selectionAdapter');                                                   // 4985
    this.selection = new SelectionAdapter($element, this.options);                                                 // 4986
    this.$selection = this.selection.render();                                                                     // 4987
                                                                                                                   // 4988
    this.selection.position(this.$selection, $container);                                                          // 4989
                                                                                                                   // 4990
    var DropdownAdapter = this.options.get('dropdownAdapter');                                                     // 4991
    this.dropdown = new DropdownAdapter($element, this.options);                                                   // 4992
    this.$dropdown = this.dropdown.render();                                                                       // 4993
                                                                                                                   // 4994
    this.dropdown.position(this.$dropdown, $container);                                                            // 4995
                                                                                                                   // 4996
    var ResultsAdapter = this.options.get('resultsAdapter');                                                       // 4997
    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);                                   // 4998
    this.$results = this.results.render();                                                                         // 4999
                                                                                                                   // 5000
    this.results.position(this.$results, this.$dropdown);                                                          // 5001
                                                                                                                   // 5002
    // Bind events                                                                                                 // 5003
                                                                                                                   // 5004
    var self = this;                                                                                               // 5005
                                                                                                                   // 5006
    // Bind the container to all of the adapters                                                                   // 5007
    this._bindAdapters();                                                                                          // 5008
                                                                                                                   // 5009
    // Register any DOM event handlers                                                                             // 5010
    this._registerDomEvents();                                                                                     // 5011
                                                                                                                   // 5012
    // Register any internal event handlers                                                                        // 5013
    this._registerDataEvents();                                                                                    // 5014
    this._registerSelectionEvents();                                                                               // 5015
    this._registerDropdownEvents();                                                                                // 5016
    this._registerResultsEvents();                                                                                 // 5017
    this._registerEvents();                                                                                        // 5018
                                                                                                                   // 5019
    // Set the initial state                                                                                       // 5020
    this.dataAdapter.current(function (initialData) {                                                              // 5021
      self.trigger('selection:update', {                                                                           // 5022
        data: initialData                                                                                          // 5023
      });                                                                                                          // 5024
    });                                                                                                            // 5025
                                                                                                                   // 5026
    // Hide the original select                                                                                    // 5027
    $element.addClass('select2-hidden-accessible');                                                                // 5028
    $element.attr('aria-hidden', 'true');                                                                          // 5029
                                                                                                                   // 5030
    // Synchronize any monitored attributes                                                                        // 5031
    this._syncAttributes();                                                                                        // 5032
                                                                                                                   // 5033
    $element.data('select2', this);                                                                                // 5034
  };                                                                                                               // 5035
                                                                                                                   // 5036
  Utils.Extend(Select2, Utils.Observable);                                                                         // 5037
                                                                                                                   // 5038
  Select2.prototype._generateId = function ($element) {                                                            // 5039
    var id = '';                                                                                                   // 5040
                                                                                                                   // 5041
    if ($element.attr('id') != null) {                                                                             // 5042
      id = $element.attr('id');                                                                                    // 5043
    } else if ($element.attr('name') != null) {                                                                    // 5044
      id = $element.attr('name') + '-' + Utils.generateChars(2);                                                   // 5045
    } else {                                                                                                       // 5046
      id = Utils.generateChars(4);                                                                                 // 5047
    }                                                                                                              // 5048
                                                                                                                   // 5049
    id = id.replace(/(:|\.|\[|\]|,)/g, '');                                                                        // 5050
    id = 'select2-' + id;                                                                                          // 5051
                                                                                                                   // 5052
    return id;                                                                                                     // 5053
  };                                                                                                               // 5054
                                                                                                                   // 5055
  Select2.prototype._placeContainer = function ($container) {                                                      // 5056
    $container.insertAfter(this.$element);                                                                         // 5057
                                                                                                                   // 5058
    var width = this._resolveWidth(this.$element, this.options.get('width'));                                      // 5059
                                                                                                                   // 5060
    if (width != null) {                                                                                           // 5061
      $container.css('width', width);                                                                              // 5062
    }                                                                                                              // 5063
  };                                                                                                               // 5064
                                                                                                                   // 5065
  Select2.prototype._resolveWidth = function ($element, method) {                                                  // 5066
    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;                                   // 5067
                                                                                                                   // 5068
    if (method == 'resolve') {                                                                                     // 5069
      var styleWidth = this._resolveWidth($element, 'style');                                                      // 5070
                                                                                                                   // 5071
      if (styleWidth != null) {                                                                                    // 5072
        return styleWidth;                                                                                         // 5073
      }                                                                                                            // 5074
                                                                                                                   // 5075
      return this._resolveWidth($element, 'element');                                                              // 5076
    }                                                                                                              // 5077
                                                                                                                   // 5078
    if (method == 'element') {                                                                                     // 5079
      var elementWidth = $element.outerWidth(false);                                                               // 5080
                                                                                                                   // 5081
      if (elementWidth <= 0) {                                                                                     // 5082
        return 'auto';                                                                                             // 5083
      }                                                                                                            // 5084
                                                                                                                   // 5085
      return elementWidth + 'px';                                                                                  // 5086
    }                                                                                                              // 5087
                                                                                                                   // 5088
    if (method == 'style') {                                                                                       // 5089
      var style = $element.attr('style');                                                                          // 5090
                                                                                                                   // 5091
      if (typeof(style) !== 'string') {                                                                            // 5092
        return null;                                                                                               // 5093
      }                                                                                                            // 5094
                                                                                                                   // 5095
      var attrs = style.split(';');                                                                                // 5096
                                                                                                                   // 5097
      for (var i = 0, l = attrs.length; i < l; i = i + 1) {                                                        // 5098
        var attr = attrs[i].replace(/\s/g, '');                                                                    // 5099
        var matches = attr.match(WIDTH);                                                                           // 5100
                                                                                                                   // 5101
        if (matches !== null && matches.length >= 1) {                                                             // 5102
          return matches[1];                                                                                       // 5103
        }                                                                                                          // 5104
      }                                                                                                            // 5105
                                                                                                                   // 5106
      return null;                                                                                                 // 5107
    }                                                                                                              // 5108
                                                                                                                   // 5109
    return method;                                                                                                 // 5110
  };                                                                                                               // 5111
                                                                                                                   // 5112
  Select2.prototype._bindAdapters = function () {                                                                  // 5113
    this.dataAdapter.bind(this, this.$container);                                                                  // 5114
    this.selection.bind(this, this.$container);                                                                    // 5115
                                                                                                                   // 5116
    this.dropdown.bind(this, this.$container);                                                                     // 5117
    this.results.bind(this, this.$container);                                                                      // 5118
  };                                                                                                               // 5119
                                                                                                                   // 5120
  Select2.prototype._registerDomEvents = function () {                                                             // 5121
    var self = this;                                                                                               // 5122
                                                                                                                   // 5123
    this.$element.on('change.select2', function () {                                                               // 5124
      self.dataAdapter.current(function (data) {                                                                   // 5125
        self.trigger('selection:update', {                                                                         // 5126
          data: data                                                                                               // 5127
        });                                                                                                        // 5128
      });                                                                                                          // 5129
    });                                                                                                            // 5130
                                                                                                                   // 5131
    this._sync = Utils.bind(this._syncAttributes, this);                                                           // 5132
                                                                                                                   // 5133
    if (this.$element[0].attachEvent) {                                                                            // 5134
      this.$element[0].attachEvent('onpropertychange', this._sync);                                                // 5135
    }                                                                                                              // 5136
                                                                                                                   // 5137
    var observer = window.MutationObserver ||                                                                      // 5138
      window.WebKitMutationObserver ||                                                                             // 5139
      window.MozMutationObserver                                                                                   // 5140
    ;                                                                                                              // 5141
                                                                                                                   // 5142
    if (observer != null) {                                                                                        // 5143
      this._observer = new observer(function (mutations) {                                                         // 5144
        $.each(mutations, self._sync);                                                                             // 5145
      });                                                                                                          // 5146
      this._observer.observe(this.$element[0], {                                                                   // 5147
        attributes: true,                                                                                          // 5148
        subtree: false                                                                                             // 5149
      });                                                                                                          // 5150
    } else if (this.$element[0].addEventListener) {                                                                // 5151
      this.$element[0].addEventListener('DOMAttrModified', self._sync, false);                                     // 5152
    }                                                                                                              // 5153
  };                                                                                                               // 5154
                                                                                                                   // 5155
  Select2.prototype._registerDataEvents = function () {                                                            // 5156
    var self = this;                                                                                               // 5157
                                                                                                                   // 5158
    this.dataAdapter.on('*', function (name, params) {                                                             // 5159
      self.trigger(name, params);                                                                                  // 5160
    });                                                                                                            // 5161
  };                                                                                                               // 5162
                                                                                                                   // 5163
  Select2.prototype._registerSelectionEvents = function () {                                                       // 5164
    var self = this;                                                                                               // 5165
    var nonRelayEvents = ['toggle', 'focus'];                                                                      // 5166
                                                                                                                   // 5167
    this.selection.on('toggle', function () {                                                                      // 5168
      self.toggleDropdown();                                                                                       // 5169
    });                                                                                                            // 5170
                                                                                                                   // 5171
    this.selection.on('focus', function (params) {                                                                 // 5172
      self.focus(params);                                                                                          // 5173
    });                                                                                                            // 5174
                                                                                                                   // 5175
    this.selection.on('*', function (name, params) {                                                               // 5176
      if ($.inArray(name, nonRelayEvents) !== -1) {                                                                // 5177
        return;                                                                                                    // 5178
      }                                                                                                            // 5179
                                                                                                                   // 5180
      self.trigger(name, params);                                                                                  // 5181
    });                                                                                                            // 5182
  };                                                                                                               // 5183
                                                                                                                   // 5184
  Select2.prototype._registerDropdownEvents = function () {                                                        // 5185
    var self = this;                                                                                               // 5186
                                                                                                                   // 5187
    this.dropdown.on('*', function (name, params) {                                                                // 5188
      self.trigger(name, params);                                                                                  // 5189
    });                                                                                                            // 5190
  };                                                                                                               // 5191
                                                                                                                   // 5192
  Select2.prototype._registerResultsEvents = function () {                                                         // 5193
    var self = this;                                                                                               // 5194
                                                                                                                   // 5195
    this.results.on('*', function (name, params) {                                                                 // 5196
      self.trigger(name, params);                                                                                  // 5197
    });                                                                                                            // 5198
  };                                                                                                               // 5199
                                                                                                                   // 5200
  Select2.prototype._registerEvents = function () {                                                                // 5201
    var self = this;                                                                                               // 5202
                                                                                                                   // 5203
    this.on('open', function () {                                                                                  // 5204
      self.$container.addClass('select2-container--open');                                                         // 5205
    });                                                                                                            // 5206
                                                                                                                   // 5207
    this.on('close', function () {                                                                                 // 5208
      self.$container.removeClass('select2-container--open');                                                      // 5209
    });                                                                                                            // 5210
                                                                                                                   // 5211
    this.on('enable', function () {                                                                                // 5212
      self.$container.removeClass('select2-container--disabled');                                                  // 5213
    });                                                                                                            // 5214
                                                                                                                   // 5215
    this.on('disable', function () {                                                                               // 5216
      self.$container.addClass('select2-container--disabled');                                                     // 5217
    });                                                                                                            // 5218
                                                                                                                   // 5219
    this.on('blur', function () {                                                                                  // 5220
      self.$container.removeClass('select2-container--focus');                                                     // 5221
    });                                                                                                            // 5222
                                                                                                                   // 5223
    this.on('query', function (params) {                                                                           // 5224
      if (!self.isOpen()) {                                                                                        // 5225
        self.trigger('open', {});                                                                                  // 5226
      }                                                                                                            // 5227
                                                                                                                   // 5228
      this.dataAdapter.query(params, function (data) {                                                             // 5229
        self.trigger('results:all', {                                                                              // 5230
          data: data,                                                                                              // 5231
          query: params                                                                                            // 5232
        });                                                                                                        // 5233
      });                                                                                                          // 5234
    });                                                                                                            // 5235
                                                                                                                   // 5236
    this.on('query:append', function (params) {                                                                    // 5237
      this.dataAdapter.query(params, function (data) {                                                             // 5238
        self.trigger('results:append', {                                                                           // 5239
          data: data,                                                                                              // 5240
          query: params                                                                                            // 5241
        });                                                                                                        // 5242
      });                                                                                                          // 5243
    });                                                                                                            // 5244
                                                                                                                   // 5245
    this.on('keypress', function (evt) {                                                                           // 5246
      var key = evt.which;                                                                                         // 5247
                                                                                                                   // 5248
      if (self.isOpen()) {                                                                                         // 5249
        if (key === KEYS.ESC || key === KEYS.TAB ||                                                                // 5250
            (key === KEYS.UP && evt.altKey)) {                                                                     // 5251
          self.close();                                                                                            // 5252
                                                                                                                   // 5253
          evt.preventDefault();                                                                                    // 5254
        } else if (key === KEYS.ENTER) {                                                                           // 5255
          self.trigger('results:select', {});                                                                      // 5256
                                                                                                                   // 5257
          evt.preventDefault();                                                                                    // 5258
        } else if ((key === KEYS.SPACE && evt.ctrlKey)) {                                                          // 5259
          self.trigger('results:toggle', {});                                                                      // 5260
                                                                                                                   // 5261
          evt.preventDefault();                                                                                    // 5262
        } else if (key === KEYS.UP) {                                                                              // 5263
          self.trigger('results:previous', {});                                                                    // 5264
                                                                                                                   // 5265
          evt.preventDefault();                                                                                    // 5266
        } else if (key === KEYS.DOWN) {                                                                            // 5267
          self.trigger('results:next', {});                                                                        // 5268
                                                                                                                   // 5269
          evt.preventDefault();                                                                                    // 5270
        }                                                                                                          // 5271
      } else {                                                                                                     // 5272
        if (key === KEYS.ENTER || key === KEYS.SPACE ||                                                            // 5273
            (key === KEYS.DOWN && evt.altKey)) {                                                                   // 5274
          self.open();                                                                                             // 5275
                                                                                                                   // 5276
          evt.preventDefault();                                                                                    // 5277
        }                                                                                                          // 5278
      }                                                                                                            // 5279
    });                                                                                                            // 5280
  };                                                                                                               // 5281
                                                                                                                   // 5282
  Select2.prototype._syncAttributes = function () {                                                                // 5283
    this.options.set('disabled', this.$element.prop('disabled'));                                                  // 5284
                                                                                                                   // 5285
    if (this.options.get('disabled')) {                                                                            // 5286
      if (this.isOpen()) {                                                                                         // 5287
        this.close();                                                                                              // 5288
      }                                                                                                            // 5289
                                                                                                                   // 5290
      this.trigger('disable', {});                                                                                 // 5291
    } else {                                                                                                       // 5292
      this.trigger('enable', {});                                                                                  // 5293
    }                                                                                                              // 5294
  };                                                                                                               // 5295
                                                                                                                   // 5296
  /**                                                                                                              // 5297
   * Override the trigger method to automatically trigger pre-events when                                          // 5298
   * there are events that can be prevented.                                                                       // 5299
   */                                                                                                              // 5300
  Select2.prototype.trigger = function (name, args) {                                                              // 5301
    var actualTrigger = Select2.__super__.trigger;                                                                 // 5302
    var preTriggerMap = {                                                                                          // 5303
      'open': 'opening',                                                                                           // 5304
      'close': 'closing',                                                                                          // 5305
      'select': 'selecting',                                                                                       // 5306
      'unselect': 'unselecting'                                                                                    // 5307
    };                                                                                                             // 5308
                                                                                                                   // 5309
    if (args === undefined) {                                                                                      // 5310
      args = {};                                                                                                   // 5311
    }                                                                                                              // 5312
                                                                                                                   // 5313
    if (name in preTriggerMap) {                                                                                   // 5314
      var preTriggerName = preTriggerMap[name];                                                                    // 5315
      var preTriggerArgs = {                                                                                       // 5316
        prevented: false,                                                                                          // 5317
        name: name,                                                                                                // 5318
        args: args                                                                                                 // 5319
      };                                                                                                           // 5320
                                                                                                                   // 5321
      actualTrigger.call(this, preTriggerName, preTriggerArgs);                                                    // 5322
                                                                                                                   // 5323
      if (preTriggerArgs.prevented) {                                                                              // 5324
        args.prevented = true;                                                                                     // 5325
                                                                                                                   // 5326
        return;                                                                                                    // 5327
      }                                                                                                            // 5328
    }                                                                                                              // 5329
                                                                                                                   // 5330
    actualTrigger.call(this, name, args);                                                                          // 5331
  };                                                                                                               // 5332
                                                                                                                   // 5333
  Select2.prototype.toggleDropdown = function () {                                                                 // 5334
    if (this.options.get('disabled')) {                                                                            // 5335
      return;                                                                                                      // 5336
    }                                                                                                              // 5337
                                                                                                                   // 5338
    if (this.isOpen()) {                                                                                           // 5339
      this.close();                                                                                                // 5340
    } else {                                                                                                       // 5341
      this.open();                                                                                                 // 5342
    }                                                                                                              // 5343
  };                                                                                                               // 5344
                                                                                                                   // 5345
  Select2.prototype.open = function () {                                                                           // 5346
    if (this.isOpen()) {                                                                                           // 5347
      return;                                                                                                      // 5348
    }                                                                                                              // 5349
                                                                                                                   // 5350
    this.trigger('query', {});                                                                                     // 5351
  };                                                                                                               // 5352
                                                                                                                   // 5353
  Select2.prototype.close = function () {                                                                          // 5354
    if (!this.isOpen()) {                                                                                          // 5355
      return;                                                                                                      // 5356
    }                                                                                                              // 5357
                                                                                                                   // 5358
    this.trigger('close', {});                                                                                     // 5359
  };                                                                                                               // 5360
                                                                                                                   // 5361
  Select2.prototype.isOpen = function () {                                                                         // 5362
    return this.$container.hasClass('select2-container--open');                                                    // 5363
  };                                                                                                               // 5364
                                                                                                                   // 5365
  Select2.prototype.hasFocus = function () {                                                                       // 5366
    return this.$container.hasClass('select2-container--focus');                                                   // 5367
  };                                                                                                               // 5368
                                                                                                                   // 5369
  Select2.prototype.focus = function (data) {                                                                      // 5370
    // No need to re-trigger focus events if we are already focused                                                // 5371
    if (this.hasFocus()) {                                                                                         // 5372
      return;                                                                                                      // 5373
    }                                                                                                              // 5374
                                                                                                                   // 5375
    this.$container.addClass('select2-container--focus');                                                          // 5376
    this.trigger('focus', {});                                                                                     // 5377
  };                                                                                                               // 5378
                                                                                                                   // 5379
  Select2.prototype.enable = function (args) {                                                                     // 5380
    if (this.options.get('debug') && window.console && console.warn) {                                             // 5381
      console.warn(                                                                                                // 5382
        'Select2: The `select2("enable")` method has been deprecated and will' +                                   // 5383
        ' be removed in later Select2 versions. Use $element.prop("disabled")' +                                   // 5384
        ' instead.'                                                                                                // 5385
      );                                                                                                           // 5386
    }                                                                                                              // 5387
                                                                                                                   // 5388
    if (args == null || args.length === 0) {                                                                       // 5389
      args = [true];                                                                                               // 5390
    }                                                                                                              // 5391
                                                                                                                   // 5392
    var disabled = !args[0];                                                                                       // 5393
                                                                                                                   // 5394
    this.$element.prop('disabled', disabled);                                                                      // 5395
  };                                                                                                               // 5396
                                                                                                                   // 5397
  Select2.prototype.data = function () {                                                                           // 5398
    if (this.options.get('debug') &&                                                                               // 5399
        arguments.length > 0 && window.console && console.warn) {                                                  // 5400
      console.warn(                                                                                                // 5401
        'Select2: Data can no longer be set using `select2("data")`. You ' +                                       // 5402
        'should consider setting the value instead using `$element.val()`.'                                        // 5403
      );                                                                                                           // 5404
    }                                                                                                              // 5405
                                                                                                                   // 5406
    var data = [];                                                                                                 // 5407
                                                                                                                   // 5408
    this.dataAdapter.current(function (currentData) {                                                              // 5409
      data = currentData;                                                                                          // 5410
    });                                                                                                            // 5411
                                                                                                                   // 5412
    return data;                                                                                                   // 5413
  };                                                                                                               // 5414
                                                                                                                   // 5415
  Select2.prototype.val = function (args) {                                                                        // 5416
    if (this.options.get('debug') && window.console && console.warn) {                                             // 5417
      console.warn(                                                                                                // 5418
        'Select2: The `select2("val")` method has been deprecated and will be' +                                   // 5419
        ' removed in later Select2 versions. Use $element.val() instead.'                                          // 5420
      );                                                                                                           // 5421
    }                                                                                                              // 5422
                                                                                                                   // 5423
    if (args == null || args.length === 0) {                                                                       // 5424
      return this.$element.val();                                                                                  // 5425
    }                                                                                                              // 5426
                                                                                                                   // 5427
    var newVal = args[0];                                                                                          // 5428
                                                                                                                   // 5429
    if ($.isArray(newVal)) {                                                                                       // 5430
      newVal = $.map(newVal, function (obj) {                                                                      // 5431
        return obj.toString();                                                                                     // 5432
      });                                                                                                          // 5433
    }                                                                                                              // 5434
                                                                                                                   // 5435
    this.$element.val(newVal).trigger('change');                                                                   // 5436
  };                                                                                                               // 5437
                                                                                                                   // 5438
  Select2.prototype.destroy = function () {                                                                        // 5439
    this.$container.remove();                                                                                      // 5440
                                                                                                                   // 5441
    if (this.$element[0].detachEvent) {                                                                            // 5442
      this.$element[0].detachEvent('onpropertychange', this._sync);                                                // 5443
    }                                                                                                              // 5444
                                                                                                                   // 5445
    if (this._observer != null) {                                                                                  // 5446
      this._observer.disconnect();                                                                                 // 5447
      this._observer = null;                                                                                       // 5448
    } else if (this.$element[0].removeEventListener) {                                                             // 5449
      this.$element[0]                                                                                             // 5450
        .removeEventListener('DOMAttrModified', this._sync, false);                                                // 5451
    }                                                                                                              // 5452
                                                                                                                   // 5453
    this._sync = null;                                                                                             // 5454
                                                                                                                   // 5455
    this.$element.off('.select2');                                                                                 // 5456
    this.$element.attr('tabindex', this.$element.data('old-tabindex'));                                            // 5457
                                                                                                                   // 5458
    this.$element.removeClass('select2-hidden-accessible');                                                        // 5459
    this.$element.attr('aria-hidden', 'false');                                                                    // 5460
    this.$element.removeData('select2');                                                                           // 5461
                                                                                                                   // 5462
    this.dataAdapter.destroy();                                                                                    // 5463
    this.selection.destroy();                                                                                      // 5464
    this.dropdown.destroy();                                                                                       // 5465
    this.results.destroy();                                                                                        // 5466
                                                                                                                   // 5467
    this.dataAdapter = null;                                                                                       // 5468
    this.selection = null;                                                                                         // 5469
    this.dropdown = null;                                                                                          // 5470
    this.results = null;                                                                                           // 5471
  };                                                                                                               // 5472
                                                                                                                   // 5473
  Select2.prototype.render = function () {                                                                         // 5474
    var $container = $(                                                                                            // 5475
      '<span class="select2 select2-container">' +                                                                 // 5476
        '<span class="selection"></span>' +                                                                        // 5477
        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +                                              // 5478
      '</span>'                                                                                                    // 5479
    );                                                                                                             // 5480
                                                                                                                   // 5481
    $container.attr('dir', this.options.get('dir'));                                                               // 5482
                                                                                                                   // 5483
    this.$container = $container;                                                                                  // 5484
                                                                                                                   // 5485
    this.$container.addClass('select2-container--' + this.options.get('theme'));                                   // 5486
                                                                                                                   // 5487
    $container.data('element', this.$element);                                                                     // 5488
                                                                                                                   // 5489
    return $container;                                                                                             // 5490
  };                                                                                                               // 5491
                                                                                                                   // 5492
  return Select2;                                                                                                  // 5493
});                                                                                                                // 5494
                                                                                                                   // 5495
S2.define('jquery-mousewheel',[                                                                                    // 5496
  'jquery'                                                                                                         // 5497
], function ($) {                                                                                                  // 5498
  // Used to shim jQuery.mousewheel for non-full builds.                                                           // 5499
  return $;                                                                                                        // 5500
});                                                                                                                // 5501
                                                                                                                   // 5502
S2.define('jquery.select2',[                                                                                       // 5503
  'jquery',                                                                                                        // 5504
  'jquery-mousewheel',                                                                                             // 5505
                                                                                                                   // 5506
  './select2/core',                                                                                                // 5507
  './select2/defaults'                                                                                             // 5508
], function ($, _, Select2, Defaults) {                                                                            // 5509
  if ($.fn.select2 == null) {                                                                                      // 5510
    // All methods that should return the element                                                                  // 5511
    var thisMethods = ['open', 'close', 'destroy'];                                                                // 5512
                                                                                                                   // 5513
    $.fn.select2 = function (options) {                                                                            // 5514
      options = options || {};                                                                                     // 5515
                                                                                                                   // 5516
      if (typeof options === 'object') {                                                                           // 5517
        this.each(function () {                                                                                    // 5518
          var instanceOptions = $.extend(true, {}, options);                                                       // 5519
                                                                                                                   // 5520
          var instance = new Select2($(this), instanceOptions);                                                    // 5521
        });                                                                                                        // 5522
                                                                                                                   // 5523
        return this;                                                                                               // 5524
      } else if (typeof options === 'string') {                                                                    // 5525
        var ret;                                                                                                   // 5526
                                                                                                                   // 5527
        this.each(function () {                                                                                    // 5528
          var instance = $(this).data('select2');                                                                  // 5529
                                                                                                                   // 5530
          if (instance == null && window.console && console.error) {                                               // 5531
            console.error(                                                                                         // 5532
              'The select2(\'' + options + '\') method was called on an ' +                                        // 5533
              'element that is not using Select2.'                                                                 // 5534
            );                                                                                                     // 5535
          }                                                                                                        // 5536
                                                                                                                   // 5537
          var args = Array.prototype.slice.call(arguments, 1);                                                     // 5538
                                                                                                                   // 5539
          ret = instance[options].apply(instance, args);                                                           // 5540
        });                                                                                                        // 5541
                                                                                                                   // 5542
        // Check if we should be returning `this`                                                                  // 5543
        if ($.inArray(options, thisMethods) > -1) {                                                                // 5544
          return this;                                                                                             // 5545
        }                                                                                                          // 5546
                                                                                                                   // 5547
        return ret;                                                                                                // 5548
      } else {                                                                                                     // 5549
        throw new Error('Invalid arguments for Select2: ' + options);                                              // 5550
      }                                                                                                            // 5551
    };                                                                                                             // 5552
  }                                                                                                                // 5553
                                                                                                                   // 5554
  if ($.fn.select2.defaults == null) {                                                                             // 5555
    $.fn.select2.defaults = Defaults;                                                                              // 5556
  }                                                                                                                // 5557
                                                                                                                   // 5558
  return Select2;                                                                                                  // 5559
});                                                                                                                // 5560
                                                                                                                   // 5561
  // Return the AMD loader configuration so it can be used outside of this file                                    // 5562
  return {                                                                                                         // 5563
    define: S2.define,                                                                                             // 5564
    require: S2.require                                                                                            // 5565
  };                                                                                                               // 5566
}());                                                                                                              // 5567
                                                                                                                   // 5568
  // Autoload the jQuery bindings                                                                                  // 5569
  // We know that all of the modules exist above this, so we're safe                                               // 5570
  var select2 = S2.require('jquery.select2');                                                                      // 5571
                                                                                                                   // 5572
  // Hold the AMD module references on the jQuery function that was just loaded                                    // 5573
  // This allows Select2 to use the internal loader outside of this file, such                                     // 5574
  // as in the language files.                                                                                     // 5575
  jQuery.fn.select2.amd = S2;                                                                                      // 5576
                                                                                                                   // 5577
  // Return the Select2 instance for anyone who is importing it.                                                   // 5578
  return select2;                                                                                                  // 5579
}));                                                                                                               // 5580
                                                                                                                   // 5581
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['natestrauser:select2'] = {};

})();

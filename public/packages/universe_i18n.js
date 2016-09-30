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
var HTTP = Package.http.HTTP;
var WebApp = Package.webapp.WebApp;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var Promise = Package.promise.Promise;
var _ = Package.underscore._;
var UniUtils = Package['universe:utilities'].UniUtils;
var UniConfig = Package['universe:utilities'].UniConfig;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;

/* Package-scope variables */
var _i18n, i18n;

var require = meteorInstall({"node_modules":{"meteor":{"universe:i18n":{"lib":{"i18n.js":["babel-runtime/helpers/typeof","babel-runtime/helpers/extends","babel-runtime/helpers/objectWithoutProperties","babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","meteor/universe:utilities","./locales","react",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_i18n/lib/i18n.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({i18n:function(){return i18n}});var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var _extends;module.import('babel-runtime/helpers/extends',{"default":function(v){_extends=v}});var _objectWithoutProperties;module.import('babel-runtime/helpers/objectWithoutProperties',{"default":function(v){_objectWithoutProperties=v}});var _classCallCheck;module.import('babel-runtime/helpers/classCallCheck',{"default":function(v){_classCallCheck=v}});var _possibleConstructorReturn;module.import('babel-runtime/helpers/possibleConstructorReturn',{"default":function(v){_possibleConstructorReturn=v}});var _inherits;module.import('babel-runtime/helpers/inherits',{"default":function(v){_inherits=v}});var UniUtils;module.import('meteor/universe:utilities',{"UniUtils":function(v){UniUtils=v}});var LOCALES,CURRENCIES,SYMBOLS;module.import('./locales',{"LOCALES":function(v){LOCALES=v},"CURRENCIES":function(v){CURRENCIES=v},"SYMBOLS":function(v){SYMBOLS=v}});
                                                                                                                       //
                                                                                                                       //
                                                                                                                       //
                                                                                                                       //
                                                                                                                       //
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       //
var contextualLocale = new Meteor.EnvironmentVariable();                                                               // 4
if (Meteor.isServer) {                                                                                                 // 5
    var Fiber;                                                                                                         // 5
                                                                                                                       //
    (function () {                                                                                                     // 5
        // Meteor context must always run within a Fiber.                                                              //
        Fiber = Npm.require('fibers');                                                                                 // 7
                                                                                                                       //
        var _get = contextualLocale.get.bind(contextualLocale);                                                        // 8
        contextualLocale.get = function () {                                                                           // 9
            if (Fiber.current) {                                                                                       // 10
                return _get();                                                                                         // 11
            }                                                                                                          // 12
        };                                                                                                             // 13
    })();                                                                                                              // 5
}                                                                                                                      // 14
                                                                                                                       //
var _events = new UniUtils.Emitter();                                                                                  // 16
var i18n = {                                                                                                           // 17
    _defaultLocale: 'en-US',                                                                                           // 18
    _isLoaded: {},                                                                                                     // 19
    normalize: function () {                                                                                           // 20
        function normalize(locale) {                                                                                   // 17
            locale = locale.toLowerCase();                                                                             // 21
            locale = locale.replace('_', '-');                                                                         // 22
            return LOCALES[locale] && LOCALES[locale][0];                                                              // 23
        }                                                                                                              // 24
                                                                                                                       //
        return normalize;                                                                                              // 17
    }(),                                                                                                               // 17
    setLocale: function () {                                                                                           // 25
        function setLocale(locale) {                                                                                   // 17
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];                     // 25
                                                                                                                       //
            locale = locale || '';                                                                                     // 26
            i18n._locale = i18n.normalize(locale);                                                                     // 27
            if (!i18n._locale) {                                                                                       // 28
                console.error('Wrong locale:', locale, '[Should be xx-yy or xx]');                                     // 29
                return Promise.reject(new Error('Wrong locale: ' + locale + ' [Should be xx-yy or xx]'));              // 30
            }                                                                                                          // 31
            var _options$noDownload = options.noDownload;                                                              // 25
            var noDownload = _options$noDownload === undefined ? false : _options$noDownload;                          // 25
            var _options$silent = options.silent;                                                                      // 25
            var silent = _options$silent === undefined ? false : _options$silent;                                      // 25
                                                                                                                       //
            if (Meteor.isClient && !noDownload) {                                                                      // 33
                var promise = void 0;                                                                                  // 34
                i18n._isLoaded[i18n._locale] = false;                                                                  // 35
                options.silent = true;                                                                                 // 36
                if (i18n._locale.indexOf('-') !== -1) {                                                                // 37
                    promise = i18n.loadLocale(i18n._locale.replace(/\-.*$/, ''), options).then(function () {           // 38
                        return i18n.loadLocale(i18n._locale, options);                                                 // 39
                    });                                                                                                // 39
                } else {                                                                                               // 40
                    promise = i18n.loadLocale(i18n._locale, options);                                                  // 41
                }                                                                                                      // 42
                if (!silent) {                                                                                         // 43
                    promise = promise.then(function () {                                                               // 44
                        i18n._emitChange();                                                                            // 45
                    });                                                                                                // 46
                }                                                                                                      // 47
                return promise['catch'](console.error.bind(console)).then(function () {                                // 48
                    return i18n._isLoaded[i18n._locale] = true;                                                        // 49
                });                                                                                                    // 49
            }                                                                                                          // 50
            if (!silent) {                                                                                             // 51
                i18n._emitChange();                                                                                    // 52
            }                                                                                                          // 53
            return Promise.resolve();                                                                                  // 54
        }                                                                                                              // 55
                                                                                                                       //
        return setLocale;                                                                                              // 17
    }(),                                                                                                               // 17
                                                                                                                       //
    /**                                                                                                                //
     * @param {string} locale                                                                                          //
     * @param {function} func that will be launched in locale context                                                  //
     */                                                                                                                //
    runWithLocale: function () {                                                                                       // 60
        function runWithLocale(locale, func) {                                                                         // 17
            locale = i18n.normalize(locale);                                                                           // 61
            return contextualLocale.withValue(locale, func);                                                           // 62
        }                                                                                                              // 63
                                                                                                                       //
        return runWithLocale;                                                                                          // 17
    }(),                                                                                                               // 17
    _emitChange: function () {                                                                                         // 64
        function _emitChange() {                                                                                       // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n._locale : arguments[0];            // 64
                                                                                                                       //
            _events.emit('changeLocale', locale);                                                                      // 65
            // Only if is active                                                                                       //
            i18n._deps && i18n._deps.changed();                                                                        // 67
        }                                                                                                              // 68
                                                                                                                       //
        return _emitChange;                                                                                            // 17
    }(),                                                                                                               // 17
    getLocale: function () {                                                                                           // 69
        function getLocale() {                                                                                         // 17
            return contextualLocale.get() || i18n._locale || i18n._defaultLocale;                                      // 70
        }                                                                                                              // 71
                                                                                                                       //
        return getLocale;                                                                                              // 17
    }(),                                                                                                               // 17
    createComponent: function () {                                                                                     // 72
        function createComponent() {                                                                                   // 17
            var translator = arguments.length <= 0 || arguments[0] === undefined ? i18n.createTranslator() : arguments[0];
            var locale = arguments[1];                                                                                 // 72
            var reactjs = arguments[2];                                                                                // 72
            var type = arguments[3];                                                                                   // 72
                                                                                                                       //
            if (typeof translator === 'string') {                                                                      // 73
                translator = i18n.createTranslator(translator, locale);                                                // 74
            }                                                                                                          // 75
            if (!reactjs) {                                                                                            // 76
                if (typeof React !== 'undefined') {                                                                    // 77
                    reactjs = React;                                                                                   // 78
                } else if (Package['react-runtime']) {                                                                 // 79
                    reactjs = Package['react-runtime'].React;                                                          // 80
                } else {                                                                                               // 81
                    try {                                                                                              // 82
                        reactjs = require('react');                                                                    // 83
                    } catch (e) {}                                                                                     // 84
                }                                                                                                      // 86
                if (!reactjs) {                                                                                        // 87
                    console.error('React is not detected!');                                                           // 88
                }                                                                                                      // 89
            }                                                                                                          // 90
                                                                                                                       //
            var T = function (_reactjs$Component) {                                                                    // 72
                _inherits(T, _reactjs$Component);                                                                      // 72
                                                                                                                       //
                function T(props) {                                                                                    // 93
                    _classCallCheck(this, T);                                                                          // 93
                                                                                                                       //
                    var _this = _possibleConstructorReturn(this, _reactjs$Component.call(this, props));                // 93
                                                                                                                       //
                    _this.state = { systemlocale: '_' };                                                               // 95
                    _this._invalidate = function (locale) {                                                            // 96
                        _this.setState({ systemlocale: locale });                                                      // 97
                    };                                                                                                 // 98
                    return _this;                                                                                      // 93
                }                                                                                                      // 99
                                                                                                                       //
                T.prototype.render = function () {                                                                     // 72
                    function render() {                                                                                // 72
                        var _props2 = this.props;                                                                      // 101
                        var children = _props2.children;                                                               // 101
                        var _tagType = _props2._tagType;                                                               // 101
                        var _props2$_props = _props2._props;                                                           // 101
                                                                                                                       //
                        var _props = _props2$_props === undefined ? {} : _props2$_props;                               // 101
                                                                                                                       //
                        var params = _objectWithoutProperties(_props2, ['children', '_tagType', '_props']);            // 101
                                                                                                                       //
                        return reactjs.createElement(_tagType || type || 'span', _extends({}, _props, {                // 103
                            dangerouslySetInnerHTML: {                                                                 // 105
                                __html: translator(children, params)                                                   // 106
                            }, key: this.state.systemlocale                                                            // 105
                        }));                                                                                           // 103
                    }                                                                                                  // 109
                                                                                                                       //
                    return render;                                                                                     // 72
                }();                                                                                                   // 72
                                                                                                                       //
                T.prototype.componentWillMount = function () {                                                         // 72
                    function componentWillMount() {                                                                    // 72
                        _events.on('changeLocale', this._invalidate);                                                  // 112
                    }                                                                                                  // 113
                                                                                                                       //
                    return componentWillMount;                                                                         // 72
                }();                                                                                                   // 72
                                                                                                                       //
                T.prototype.componentWillUnmount = function () {                                                       // 72
                    function componentWillUnmount() {                                                                  // 72
                        _events.off('changeLocale', this._invalidate);                                                 // 116
                    }                                                                                                  // 117
                                                                                                                       //
                    return componentWillUnmount;                                                                       // 72
                }();                                                                                                   // 72
                                                                                                                       //
                return T;                                                                                              // 72
            }(reactjs.Component);                                                                                      // 72
                                                                                                                       //
            T.propTypes = {                                                                                            // 120
                children: reactjs.PropTypes.string                                                                     // 121
            };                                                                                                         // 120
                                                                                                                       //
            T.__ = function (translationStr, props) {                                                                  // 124
                return translator(translationStr, props);                                                              // 125
            };                                                                                                         // 126
                                                                                                                       //
            return T;                                                                                                  // 128
        }                                                                                                              // 129
                                                                                                                       //
        return createComponent;                                                                                        // 17
    }(),                                                                                                               // 17
    createTranslator: function () {                                                                                    // 131
        function createTranslator(namespace, locale) {                                                                 // 17
            if (typeof locale === 'string' && !locale) {                                                               // 132
                locale = undefined;                                                                                    // 133
            }                                                                                                          // 134
            return function () {                                                                                       // 135
                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {                 // 135
                    args[_key] = arguments[_key];                                                                      // 135
                }                                                                                                      // 135
                                                                                                                       //
                if (_typeof(args[args.length - 1]) === 'object') {                                                     // 136
                    var params = args[args.length - 1];                                                                // 137
                    params._locale = params._locale || locale;                                                         // 138
                } else if (locale) {                                                                                   // 139
                    args.push({ _locale: locale });                                                                    // 140
                }                                                                                                      // 141
                return i18n.getTranslation.apply(i18n, [namespace].concat(args));                                      // 142
            };                                                                                                         // 143
        }                                                                                                              // 144
                                                                                                                       //
        return createTranslator;                                                                                       // 17
    }(),                                                                                                               // 17
                                                                                                                       //
                                                                                                                       //
    _translations: {},                                                                                                 // 146
                                                                                                                       //
    setOptions: function () {                                                                                          // 148
        function setOptions(options) {                                                                                 // 17
            i18n.options = _extends({}, i18n.options, options);                                                        // 149
        }                                                                                                              // 150
                                                                                                                       //
        return setOptions;                                                                                             // 17
    }(),                                                                                                               // 17
                                                                                                                       //
                                                                                                                       //
    //For blaze and autoruns                                                                                           //
    createReactiveTranslator: function () {                                                                            // 153
        function createReactiveTranslator(namespace, locale) {                                                         // 17
            var translator = i18n.createTranslator(namespace, locale);                                                 // 154
            if (!i18n._deps) {                                                                                         // 155
                i18n._deps = new Tracker.Dependency();                                                                 // 156
            }                                                                                                          // 157
            return function () {                                                                                       // 158
                i18n._deps.depend();                                                                                   // 159
                return translator.apply(undefined, arguments);                                                         // 160
            };                                                                                                         // 161
        }                                                                                                              // 162
                                                                                                                       //
        return createReactiveTranslator;                                                                               // 17
    }(),                                                                                                               // 17
    getTranslation: function () {                                                                                      // 163
        function getTranslation() /*namespace, key, params*/{                                                          // 17
            var open = i18n.options.open;                                                                              // 164
            var close = i18n.options.close;                                                                            // 165
            var args = [].slice.call(arguments);                                                                       // 166
            var keysArr = [];                                                                                          // 167
            args.forEach(function (prop) {                                                                             // 168
                if (typeof prop === 'string') {                                                                        // 169
                    keysArr.push(prop);                                                                                // 170
                }                                                                                                      // 171
            });                                                                                                        // 172
            var key = keysArr.join('.');                                                                               // 173
            var params = {};                                                                                           // 174
            if (_typeof(args[args.length - 1]) === 'object') {                                                         // 175
                params = args[args.length - 1];                                                                        // 176
            }                                                                                                          // 177
            var currentLang = params._locale || i18n.getLocale();                                                      // 178
            var token = currentLang + '.' + key;                                                                       // 179
            var string = UniUtils.get(i18n._translations, token);                                                      // 180
            if (!string) {                                                                                             // 181
                token = currentLang.replace(/-.+$/, '') + '.' + key;                                                   // 182
                string = UniUtils.get(i18n._translations, token);                                                      // 183
                                                                                                                       //
                if (!string) {                                                                                         // 185
                    token = i18n._defaultLocale + '.' + key;                                                           // 186
                    string = UniUtils.get(i18n._translations, token);                                                  // 187
                                                                                                                       //
                    if (!string) {                                                                                     // 189
                        token = i18n._defaultLocale.replace(/-.+$/, '') + '.' + key;                                   // 190
                        string = UniUtils.get(i18n._translations, token, i18n.options.hideMissing ? '' : key);         // 191
                    }                                                                                                  // 192
                }                                                                                                      // 193
            }                                                                                                          // 194
                                                                                                                       //
            Object.keys(params).forEach(function (param) {                                                             // 196
                string = string.replace(open + param + close, params[param]);                                          // 197
            });                                                                                                        // 198
                                                                                                                       //
            return string;                                                                                             // 200
        }                                                                                                              // 201
                                                                                                                       //
        return getTranslation;                                                                                         // 17
    }(),                                                                                                               // 17
    getTranslations: function () {                                                                                     // 203
        function getTranslations(namespace) {                                                                          // 17
            var locale = arguments.length <= 1 || arguments[1] === undefined ? i18n.getLocale() : arguments[1];        // 203
                                                                                                                       //
            if (locale) {                                                                                              // 204
                namespace = locale + '.' + namespace;                                                                  // 205
            }                                                                                                          // 206
            return UniUtils.get(i18n._translations, namespace, {});                                                    // 207
        }                                                                                                              // 208
                                                                                                                       //
        return getTranslations;                                                                                        // 17
    }(),                                                                                                               // 17
    addTranslation: function () {                                                                                      // 209
        function addTranslation(locale) {                                                                              // 17
            for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];                                                                    // 209
            }                                                                                                          // 209
                                                                                                                       //
            var translation = args.pop();                                                                              // 210
            var namespace = args.length && args.join('.');                                                             // 211
            namespace = namespace && namespace.replace(/(\.\.)|(\.$)/, '');                                            // 212
            locale = locale.toLowerCase().replace('_', '-');                                                           // 213
            if (LOCALES[locale]) {                                                                                     // 214
                locale = LOCALES[locale][0];                                                                           // 215
            }                                                                                                          // 216
            namespace = _.compact([locale, namespace]).join('.');                                                      // 217
            if (typeof translation !== 'string') {                                                                     // 218
                translation = UniUtils.deepExtend(UniUtils.get(i18n._translations, namespace) || {}, translation);     // 219
            }                                                                                                          // 223
                                                                                                                       //
            return UniUtils.set(i18n._translations, namespace, translation);                                           // 225
        }                                                                                                              // 226
                                                                                                                       //
        return addTranslation;                                                                                         // 17
    }(),                                                                                                               // 17
                                                                                                                       //
    /**                                                                                                                //
     * parseNumber('7013217.715'); // 7,013,217.715                                                                    //
     * parseNumber('16217 and 17217,715'); // 16,217 and 17,217.715                                                    //
     * parseNumber('7013217.715', 'ru-ru'); // 7 013 217,715                                                           //
     */                                                                                                                //
    parseNumber: function () {                                                                                         // 232
        function parseNumber(number) {                                                                                 // 17
            var locale = arguments.length <= 1 || arguments[1] === undefined ? i18n.getLocale() : arguments[1];        // 232
                                                                                                                       //
            number = '' + number;                                                                                      // 233
            locale = locale || '';                                                                                     // 234
            var sep = LOCALES[locale.toLowerCase()];                                                                   // 235
            if (!sep) return number;                                                                                   // 236
            sep = sep[4];                                                                                              // 237
            return number.replace(/(\d+)[\.,]*(\d*)/gim, function (match, num, dec) {                                  // 238
                return format(+num, sep.charAt(0)) + (dec ? sep.charAt(1) + dec : '');                                 // 239
            }) || '0';                                                                                                 // 240
        }                                                                                                              // 241
                                                                                                                       //
        return parseNumber;                                                                                            // 17
    }(),                                                                                                               // 17
                                                                                                                       //
    _locales: LOCALES,                                                                                                 // 242
    /**                                                                                                                //
     * Return array with used languages                                                                                //
     * @param {string} [type='code'] - what type of data should be returned, language code by default.                 //
     * @return {string[]}                                                                                              //
     */                                                                                                                //
    getLanguages: function () {                                                                                        // 248
        function getLanguages() {                                                                                      // 17
            var type = arguments.length <= 0 || arguments[0] === undefined ? 'code' : arguments[0];                    // 248
                                                                                                                       //
            var codes = Object.keys(i18n._translations);                                                               // 249
                                                                                                                       //
            switch (type) {                                                                                            // 251
                case 'code':                                                                                           // 252
                    return codes;                                                                                      // 253
                case 'name':                                                                                           // 254
                    return codes.map(i18n.getLanguageName);                                                            // 255
                case 'nativeName':                                                                                     // 256
                    return codes.map(i18n.getLanguageNativeName);                                                      // 257
                default:                                                                                               // 258
                    return [];                                                                                         // 259
            }                                                                                                          // 251
        }                                                                                                              // 261
                                                                                                                       //
        return getLanguages;                                                                                           // 17
    }(),                                                                                                               // 17
    getCurrencyCodes: function () {                                                                                    // 262
        function getCurrencyCodes() {                                                                                  // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];        // 262
                                                                                                                       //
            var countryCode = locale.substr(locale.lastIndexOf('-') + 1).toUpperCase();                                // 263
            return CURRENCIES[countryCode];                                                                            // 264
        }                                                                                                              // 265
                                                                                                                       //
        return getCurrencyCodes;                                                                                       // 17
    }(),                                                                                                               // 17
    getCurrencySymbol: function () {                                                                                   // 266
        function getCurrencySymbol() {                                                                                 // 17
            var localeOrCurrCode = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];
                                                                                                                       //
            var code = i18n.getCurrencyCodes(localeOrCurrCode);                                                        // 267
            code = code && code[0] || localeOrCurrCode;                                                                // 268
            return SYMBOLS[code];                                                                                      // 269
        }                                                                                                              // 270
                                                                                                                       //
        return getCurrencySymbol;                                                                                      // 17
    }(),                                                                                                               // 17
    getLanguageName: function () {                                                                                     // 271
        function getLanguageName() {                                                                                   // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];        // 271
                                                                                                                       //
            locale = locale.toLowerCase().replace('_', '-');                                                           // 272
            return LOCALES[locale] && LOCALES[locale][1];                                                              // 273
        }                                                                                                              // 274
                                                                                                                       //
        return getLanguageName;                                                                                        // 17
    }(),                                                                                                               // 17
    getLanguageNativeName: function () {                                                                               // 275
        function getLanguageNativeName() {                                                                             // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];        // 275
                                                                                                                       //
            locale = locale.toLowerCase().replace('_', '-');                                                           // 276
            return LOCALES[locale] && LOCALES[locale][2];                                                              // 277
        }                                                                                                              // 278
                                                                                                                       //
        return getLanguageNativeName;                                                                                  // 17
    }(),                                                                                                               // 17
    isRTL: function () {                                                                                               // 279
        function isRTL() {                                                                                             // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];        // 279
                                                                                                                       //
            locale = locale.toLowerCase().replace('_', '-');                                                           // 280
            return LOCALES[locale] && LOCALES[locale][3];                                                              // 281
        }                                                                                                              // 282
                                                                                                                       //
        return isRTL;                                                                                                  // 17
    }(),                                                                                                               // 17
    onChangeLocale: function () {                                                                                      // 283
        function onChangeLocale(fn) {                                                                                  // 17
            if (typeof fn !== 'function') {                                                                            // 284
                return console.error('Handler must be function');                                                      // 285
            }                                                                                                          // 286
            _events.on('changeLocale', fn);                                                                            // 287
        }                                                                                                              // 288
                                                                                                                       //
        return onChangeLocale;                                                                                         // 17
    }(),                                                                                                               // 17
    onceChangeLocale: function () {                                                                                    // 289
        function onceChangeLocale(fn) {                                                                                // 17
            if (typeof fn !== 'function') {                                                                            // 290
                return console.error('Handler must be function');                                                      // 291
            }                                                                                                          // 292
            _events.once('changeLocale', fn);                                                                          // 293
        }                                                                                                              // 294
                                                                                                                       //
        return onceChangeLocale;                                                                                       // 17
    }(),                                                                                                               // 17
    offChangeLocale: function () {                                                                                     // 295
        function offChangeLocale(fn) {                                                                                 // 17
            _events.off('changeLocale', fn);                                                                           // 296
        }                                                                                                              // 297
                                                                                                                       //
        return offChangeLocale;                                                                                        // 17
    }(),                                                                                                               // 17
    getAllKeysForLocale: function () {                                                                                 // 298
        function getAllKeysForLocale() {                                                                               // 17
            var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];        // 298
            var exactlyThis = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];              // 298
                                                                                                                       //
            var iterator = new UniUtils.RecursiveIterator(i18n._translations[locale]);                                 // 299
            var keys = Object.create(null);                                                                            // 300
            for (var _iterator = iterator, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref2;                                                                                             // 301
                                                                                                                       //
                if (_isArray) {                                                                                        // 301
                    if (_i >= _iterator.length) break;                                                                 // 301
                    _ref2 = _iterator[_i++];                                                                           // 301
                } else {                                                                                               // 301
                    _i = _iterator.next();                                                                             // 301
                    if (_i.done) break;                                                                                // 301
                    _ref2 = _i.value;                                                                                  // 301
                }                                                                                                      // 301
                                                                                                                       //
                var _ref = _ref2;                                                                                      // 301
                var _node = _ref.node;                                                                                 // 301
                var _path = _ref.path;                                                                                 // 301
                                                                                                                       //
                if (iterator.isLeaf(_node)) {                                                                          // 302
                    keys[_path.join('.')] = true;                                                                      // 303
                }                                                                                                      // 304
            }                                                                                                          // 305
            var indx = locale.indexOf('-');                                                                            // 306
            if (!exactlyThis && indx >= 2) {                                                                           // 307
                locale = locale.substr(0, indx);                                                                       // 308
                iterator = new UniUtils.RecursiveIterator(i18n._translations[locale]);                                 // 309
                for (var _iterator2 = iterator, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
                    var _ref4;                                                                                         // 310
                                                                                                                       //
                    if (_isArray2) {                                                                                   // 310
                        if (_i2 >= _iterator2.length) break;                                                           // 310
                        _ref4 = _iterator2[_i2++];                                                                     // 310
                    } else {                                                                                           // 310
                        _i2 = _iterator2.next();                                                                       // 310
                        if (_i2.done) break;                                                                           // 310
                        _ref4 = _i2.value;                                                                             // 310
                    }                                                                                                  // 310
                                                                                                                       //
                    var _ref3 = _ref4;                                                                                 // 310
                    var node = _ref3.node;                                                                             // 310
                    var path = _ref3.path;                                                                             // 310
                                                                                                                       //
                    if (iterator.isLeaf(node)) {                                                                       // 311
                        keys[path.join('.')] = true;                                                                   // 312
                    }                                                                                                  // 313
                }                                                                                                      // 314
            }                                                                                                          // 315
            return Object.keys(keys);                                                                                  // 316
        }                                                                                                              // 317
                                                                                                                       //
        return getAllKeysForLocale;                                                                                    // 17
    }()                                                                                                                // 17
};                                                                                                                     // 17
i18n._ts = 0;                                                                                                          // 319
i18n.__ = i18n.getTranslation;                                                                                         // 320
i18n.addTranslations = i18n.addTranslation;                                                                            // 321
i18n.getRefreshMixin = function () {                                                                                   // 322
    return {                                                                                                           // 323
        _localeChanged: function () {                                                                                  // 324
            function _localeChanged(locale) {                                                                          // 323
                this.setState({ locale: locale });                                                                     // 325
            }                                                                                                          // 326
                                                                                                                       //
            return _localeChanged;                                                                                     // 323
        }(),                                                                                                           // 323
        componentWillMount: function () {                                                                              // 327
            function componentWillMount() {                                                                            // 323
                i18n.onChangeLocale(this._localeChanged);                                                              // 328
            }                                                                                                          // 329
                                                                                                                       //
            return componentWillMount;                                                                                 // 323
        }(),                                                                                                           // 323
        componentWillUnmount: function () {                                                                            // 330
            function componentWillUnmount() {                                                                          // 323
                i18n.offChangeLocale(this._localeChanged);                                                             // 331
            }                                                                                                          // 332
                                                                                                                       //
            return componentWillUnmount;                                                                               // 323
        }()                                                                                                            // 323
    };                                                                                                                 // 323
};                                                                                                                     // 334
                                                                                                                       //
i18n.setOptions({                                                                                                      // 336
    open: '{$',                                                                                                        // 337
    close: '}',                                                                                                        // 338
    pathOnHost: 'universe/locale/',                                                                                    // 339
    hideMissing: false,                                                                                                // 340
    hostUrl: Meteor.absoluteUrl()                                                                                      // 341
});                                                                                                                    // 336
                                                                                                                       //
function format(int, sep) {                                                                                            // 344
    var str = '';                                                                                                      // 345
    var n;                                                                                                             // 346
                                                                                                                       //
    while (int) {                                                                                                      // 348
        n = int % 1e3;                                                                                                 // 349
        int = parseInt(int / 1e3);                                                                                     // 350
        if (int === 0) return n + str;                                                                                 // 351
        str = sep + (n < 10 ? '00' : n < 100 ? '0' : '') + n + str;                                                    // 352
    }                                                                                                                  // 353
}                                                                                                                      // 354
_i18n = i18n;                                                                                                          // 355
module.export("default",exports.default=(i18n));                                                                       // 356
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"locales.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_i18n/lib/locales.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({LOCALES:function(){return LOCALES},CURRENCIES:function(){return CURRENCIES},SYMBOLS:function(){return SYMBOLS}});var LOCALES = {
  //   key: [code, name, localName, isRTL, numberTypographic, decimal, currency, groupNumberBY]                        //
  "af": ["af", "Afrikaans", "Afrikaans", false, ",.", 2, "R", [3]],                                                    // 3
  "af-za": ["af-ZA", "Afrikaans (South Africa)", "Afrikaans (Suid Afrika)", false, ",.", 2, "R", [3]],                 // 4
  "am": ["am", "Amharic", "አማርኛ", false, ",.", 1, "ETB", [3, 0]],                                                      // 5
  "am-et": ["am-ET", "Amharic (Ethiopia)", "አማርኛ (ኢትዮጵያ)", false, ",.", 1, "ETB", [3, 0]],                             // 6
  "ar": ["ar", "Arabic", "العربية", true, ",.", 2, "ر.س.‏", [3]],                                                      // 7
  "ar-ae": ["ar-AE", "Arabic (U.A.E.)", "العربية (الإمارات العربية المتحدة)", true, ",.", 2, "د.إ.‏", [3]],            // 8
  "ar-bh": ["ar-BH", "Arabic (Bahrain)", "العربية (البحرين)", true, ",.", 3, "د.ب.‏", [3]],                            // 9
  "ar-dz": ["ar-DZ", "Arabic (Algeria)", "العربية (الجزائر)", true, ",.", 2, "د.ج.‏", [3]],                            // 10
  "ar-eg": ["ar-EG", "Arabic (Egypt)", "العربية (مصر)", true, ",.", 3, "ج.م.‏", [3]],                                  // 11
  "ar-iq": ["ar-IQ", "Arabic (Iraq)", "العربية (العراق)", true, ",.", 2, "د.ع.‏", [3]],                                // 12
  "ar-jo": ["ar-JO", "Arabic (Jordan)", "العربية (الأردن)", true, ",.", 3, "د.ا.‏", [3]],                              // 13
  "ar-kw": ["ar-KW", "Arabic (Kuwait)", "العربية (الكويت)", true, ",.", 3, "د.ك.‏", [3]],                              // 14
  "ar-lb": ["ar-LB", "Arabic (Lebanon)", "العربية (لبنان)", true, ",.", 2, "ل.ل.‏", [3]],                              // 15
  "ar-ly": ["ar-LY", "Arabic (Libya)", "العربية (ليبيا)", true, ",.", 3, "د.ل.‏", [3]],                                // 16
  "ar-ma": ["ar-MA", "Arabic (Morocco)", "العربية (المملكة المغربية)", true, ",.", 2, "د.م.‏", [3]],                   // 17
  "ar-om": ["ar-OM", "Arabic (Oman)", "العربية (عمان)", true, ",.", 2, "ر.ع.‏", [3]],                                  // 18
  "ar-qa": ["ar-QA", "Arabic (Qatar)", "العربية (قطر)", true, ",.", 2, "ر.ق.‏", [3]],                                  // 19
  "ar-sa": ["ar-SA", "Arabic (Saudi Arabia)", "العربية (المملكة العربية السعودية)", true, ",.", 2, "ر.س.‏", [3]],      // 20
  "ar-sy": ["ar-SY", "Arabic (Syria)", "العربية (سوريا)", true, ",.", 2, "ل.س.‏", [3]],                                // 21
  "ar-tn": ["ar-TN", "Arabic (Tunisia)", "العربية (تونس)", true, ",.", 3, "د.ت.‏", [3]],                               // 22
  "ar-ye": ["ar-YE", "Arabic (Yemen)", "العربية (اليمن)", true, ",.", 2, "ر.ي.‏", [3]],                                // 23
  "arn": ["arn", "Mapudungun", "Mapudungun", false, ".,", 2, "$", [3]],                                                // 24
  "arn-cl": ["arn-CL", "Mapudungun (Chile)", "Mapudungun (Chile)", false, ".,", 2, "$", [3]],                          // 25
  "as": ["as", "Assamese", "অসমীয়া", false, ",.", 2, "ট", [3, 2]],                                                     // 26
  "as-in": ["as-IN", "Assamese (India)", "অসমীয়া (ভাৰত)", false, ",.", 2, "ট", [3, 2]],                                // 27
  "az": ["az", "Azeri", "Azərbaycan­ılı", false, " ,", 2, "man.", [3]],                                                // 28
  "az-cyrl": ["az-Cyrl", "Azeri (Cyrillic)", "Азәрбајҹан дили", false, " ,", 2, "ман.", [3]],                          // 29
  "az-cyrl-az": ["az-Cyrl-AZ", "Azeri (Cyrillic, Azerbaijan)", "Азәрбајҹан (Азәрбајҹан)", false, " ,", 2, "ман.", [3]],
  "az-latn": ["az-Latn", "Azeri (Latin)", "Azərbaycan­ılı", false, " ,", 2, "man.", [3]],                              // 31
  "az-latn-az": ["az-Latn-AZ", "Azeri (Latin, Azerbaijan)", "Azərbaycan­ılı (Azərbaycan)", false, " ,", 2, "man.", [3]],
  "ba": ["ba", "Bashkir", "Башҡорт", false, " ,", 2, "һ.", [3, 0]],                                                    // 33
  "ba-ru": ["ba-RU", "Bashkir (Russia)", "Башҡорт (Россия)", false, " ,", 2, "һ.", [3, 0]],                            // 34
  "be": ["be", "Belarusian", "Беларускі", false, " ,", 2, "р.", [3]],                                                  // 35
  "be-by": ["be-BY", "Belarusian (Belarus)", "Беларускі (Беларусь)", false, " ,", 2, "р.", [3]],                       // 36
  "bg": ["bg", "Bulgarian", "български", false, " ,", 2, "лв.", [3]],                                                  // 37
  "bg-bg": ["bg-BG", "Bulgarian (Bulgaria)", "български (България)", false, " ,", 2, "лв.", [3]],                      // 38
  "bn": ["bn", "Bengali", "বাংলা", false, ",.", 2, "টা", [3, 2]],                                                      // 39
  "bn-bd": ["bn-BD", "Bengali (Bangladesh)", "বাংলা (বাংলাদেশ)", false, ",.", 2, "৳", [3, 2]],                         // 40
  "bn-in": ["bn-IN", "Bengali (India)", "বাংলা (ভারত)", false, ",.", 2, "টা", [3, 2]],                                 // 41
  "bo": ["bo", "Tibetan", "བོད་ཡིག", false, ",.", 2, "¥", [3, 0]],                                                     // 42
  "bo-cn": ["bo-CN", "Tibetan (PRC)", "བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)", false, ",.", 2, "¥", [3, 0]],    // 43
  "br": ["br", "Breton", "brezhoneg", false, " ,", 2, "€", [3]],                                                       // 44
  "br-fr": ["br-FR", "Breton (France)", "brezhoneg (Frañs)", false, " ,", 2, "€", [3]],                                // 45
  "bs": ["bs", "Bosnian", "bosanski", false, ".,", 2, "KM", [3]],                                                      // 46
  "bs-cyrl": ["bs-Cyrl", "Bosnian (Cyrillic)", "босански", false, ".,", 2, "КМ", [3]],                                 // 47
  "bs-cyrl-ba": ["bs-Cyrl-BA", "Bosnian (Cyrillic, Bosnia and Herzegovina)", "босански (Босна и Херцеговина)", false, ".,", 2, "КМ", [3]],
  "bs-latn": ["bs-Latn", "Bosnian (Latin)", "bosanski", false, ".,", 2, "KM", [3]],                                    // 49
  "bs-latn-ba": ["bs-Latn-BA", "Bosnian (Latin, Bosnia and Herzegovina)", "bosanski (Bosna i Hercegovina)", false, ".,", 2, "KM", [3]],
  "ca": ["ca", "Catalan", "català", false, ".,", 2, "€", [3]],                                                         // 51
  "ca-es": ["ca-ES", "Catalan (Catalan)", "català (català)", false, ".,", 2, "€", [3]],                                // 52
  "co": ["co", "Corsican", "Corsu", false, " ,", 2, "€", [3]],                                                         // 53
  "co-fr": ["co-FR", "Corsican (France)", "Corsu (France)", false, " ,", 2, "€", [3]],                                 // 54
  "cs": ["cs", "Czech", "čeština", false, " ,", 2, "Kč", [3]],                                                         // 55
  "cs-cz": ["cs-CZ", "Czech (Czech Republic)", "čeština (Česká republika)", false, " ,", 2, "Kč", [3]],                // 56
  "cy": ["cy", "Welsh", "Cymraeg", false, ",.", 2, "£", [3]],                                                          // 57
  "cy-gb": ["cy-GB", "Welsh (United Kingdom)", "Cymraeg (y Deyrnas Unedig)", false, ",.", 2, "£", [3]],                // 58
  "da": ["da", "Danish", "dansk", false, ".,", 2, "kr.", [3]],                                                         // 59
  "da-dk": ["da-DK", "Danish (Denmark)", "dansk (Danmark)", false, ".,", 2, "kr.", [3]],                               // 60
  "de": ["de", "German", "Deutsch", false, ".,", 2, "€", [3]],                                                         // 61
  "de-at": ["de-AT", "German (Austria)", "Deutsch (Österreich)", false, ".,", 2, "€", [3]],                            // 62
  "de-ch": ["de-CH", "German (Switzerland)", "Deutsch (Schweiz)", false, "'.", 2, "Fr.", [3]],                         // 63
  "de-de": ["de-DE", "German (Germany)", "Deutsch (Deutschland)", false, ".,", 2, "€", [3]],                           // 64
  "de-li": ["de-LI", "German (Liechtenstein)", "Deutsch (Liechtenstein)", false, "'.", 2, "CHF", [3]],                 // 65
  "de-lu": ["de-LU", "German (Luxembourg)", "Deutsch (Luxemburg)", false, ".,", 2, "€", [3]],                          // 66
  "dsb": ["dsb", "Lower Sorbian", "dolnoserbšćina", false, ".,", 2, "€", [3]],                                         // 67
  "dsb-de": ["dsb-DE", "Lower Sorbian (Germany)", "dolnoserbšćina (Nimska)", false, ".,", 2, "€", [3]],                // 68
  "dv": ["dv", "Divehi", "ދިވެހިބަސް", true, ",.", 2, "ރ.", [3]],                                                      // 69
  "dv-mv": ["dv-MV", "Divehi (Maldives)", "ދިވެހިބަސް (ދިވެހި ރާއްޖެ)", true, ",.", 2, "ރ.", [3]],                     // 70
  "el": ["el", "Greek", "Ελληνικά", false, ".,", 2, "€", [3]],                                                         // 71
  "el-gr": ["el-GR", "Greek (Greece)", "Ελληνικά (Ελλάδα)", false, ".,", 2, "€", [3]],                                 // 72
  "en": ["en", "English", "English", false, ",.", 2, "$", [3]],                                                        // 73
  "en-029": ["en-029", "English (Caribbean)", "English (Caribbean)", false, ",.", 2, "$", [3]],                        // 74
  "en-au": ["en-AU", "English (Australia)", "English (Australia)", false, ",.", 2, "$", [3]],                          // 75
  "en-bz": ["en-BZ", "English (Belize)", "English (Belize)", false, ",.", 2, "BZ$", [3]],                              // 76
  "en-ca": ["en-CA", "English (Canada)", "English (Canada)", false, ",.", 2, "$", [3]],                                // 77
  "en-gb": ["en-GB", "English (United Kingdom)", "English (United Kingdom)", false, ",.", 2, "£", [3]],                // 78
  "en-ie": ["en-IE", "English (Ireland)", "English (Ireland)", false, ",.", 2, "€", [3]],                              // 79
  "en-in": ["en-IN", "English (India)", "English (India)", false, ",.", 2, "Rs.", [3, 2]],                             // 80
  "en-jm": ["en-JM", "English (Jamaica)", "English (Jamaica)", false, ",.", 2, "J$", [3]],                             // 81
  "en-my": ["en-MY", "English (Malaysia)", "English (Malaysia)", false, ",.", 2, "RM", [3]],                           // 82
  "en-nz": ["en-NZ", "English (New Zealand)", "English (New Zealand)", false, ",.", 2, "$", [3]],                      // 83
  "en-ph": ["en-PH", "English (Republic of the Philippines)", "English (Philippines)", false, ",.", 2, "Php", [3]],    // 84
  "en-sg": ["en-SG", "English (Singapore)", "English (Singapore)", false, ",.", 2, "$", [3]],                          // 85
  "en-tt": ["en-TT", "English (Trinidad and Tobago)", "English (Trinidad y Tobago)", false, ",.", 2, "TT$", [3]],      // 86
  "en-us": ["en-US", "English (United States)", "English", false, ",.", 2, "$", [3]],                                  // 87
  "en-za": ["en-ZA", "English (South Africa)", "English (South Africa)", false, " ,", 2, "R", [3]],                    // 88
  "en-zw": ["en-ZW", "English (Zimbabwe)", "English (Zimbabwe)", false, ",.", 2, "Z$", [3]],                           // 89
  "es": ["es", "Spanish", "español", false, ".,", 2, "€", [3]],                                                        // 90
  "es-ar": ["es-AR", "Spanish (Argentina)", "Español (Argentina)", false, ".,", 2, "$", [3]],                          // 91
  "es-bo": ["es-BO", "Spanish (Bolivia)", "Español (Bolivia)", false, ".,", 2, "$b", [3]],                             // 92
  "es-cl": ["es-CL", "Spanish (Chile)", "Español (Chile)", false, ".,", 2, "$", [3]],                                  // 93
  "es-co": ["es-CO", "Spanish (Colombia)", "Español (Colombia)", false, ".,", 2, "$", [3]],                            // 94
  "es-cr": ["es-CR", "Spanish (Costa Rica)", "Español (Costa Rica)", false, ".,", 2, "₡", [3]],                        // 95
  "es-do": ["es-DO", "Spanish (Dominican Republic)", "Español (República Dominicana)", false, ",.", 2, "RD$", [3]],    // 96
  "es-ec": ["es-EC", "Spanish (Ecuador)", "Español (Ecuador)", false, ".,", 2, "$", [3]],                              // 97
  "es-es": ["es-ES", "Spanish (Spain, International Sort)", "Español (España, alfabetización internacional)", false, ".,", 2, "€", [3]],
  "es-gt": ["es-GT", "Spanish (Guatemala)", "Español (Guatemala)", false, ",.", 2, "Q", [3]],                          // 99
  "es-hn": ["es-HN", "Spanish (Honduras)", "Español (Honduras)", false, ",.", 2, "L.", [3]],                           // 100
  "es-mx": ["es-MX", "Spanish (Mexico)", "Español (México)", false, ",.", 2, "$", [3]],                                // 101
  "es-ni": ["es-NI", "Spanish (Nicaragua)", "Español (Nicaragua)", false, ",.", 2, "C$", [3]],                         // 102
  "es-pa": ["es-PA", "Spanish (Panama)", "Español (Panamá)", false, ",.", 2, "B/.", [3]],                              // 103
  "es-pe": ["es-PE", "Spanish (Peru)", "Español (Perú)", false, ",.", 2, "S/.", [3]],                                  // 104
  "es-pr": ["es-PR", "Spanish (Puerto Rico)", "Español (Puerto Rico)", false, ",.", 2, "$", [3]],                      // 105
  "es-py": ["es-PY", "Spanish (Paraguay)", "Español (Paraguay)", false, ".,", 2, "Gs", [3]],                           // 106
  "es-sv": ["es-SV", "Spanish (El Salvador)", "Español (El Salvador)", false, ",.", 2, "$", [3]],                      // 107
  "es-us": ["es-US", "Spanish (United States)", "Español (Estados Unidos)", false, ",.", 2, "$", [3, 0]],              // 108
  "es-uy": ["es-UY", "Spanish (Uruguay)", "Español (Uruguay)", false, ".,", 2, "$U", [3]],                             // 109
  "es-ve": ["es-VE", "Spanish (Bolivarian Republic of Venezuela)", "Español (Republica Bolivariana de Venezuela)", false, ".,", 2, "Bs. F.", [3]],
  "et": ["et", "Estonian", "eesti", false, " .", 2, "kr", [3]],                                                        // 111
  "et-ee": ["et-EE", "Estonian (Estonia)", "eesti (Eesti)", false, " .", 2, "kr", [3]],                                // 112
  "eu": ["eu", "Basque", "euskara", false, ".,", 2, "€", [3]],                                                         // 113
  "eu-es": ["eu-ES", "Basque (Basque)", "euskara (euskara)", false, ".,", 2, "€", [3]],                                // 114
  "fa": ["fa", "Persian", "فارسى", true, ",/", 2, "ريال", [3]],                                                        // 115
  "fa-ir": ["fa-IR", "Persian", "فارسى (ایران)", true, ",/", 2, "ريال", [3]],                                          // 116
  "fi": ["fi", "Finnish", "suomi", false, " ,", 2, "€", [3]],                                                          // 117
  "fi-fi": ["fi-FI", "Finnish (Finland)", "suomi (Suomi)", false, " ,", 2, "€", [3]],                                  // 118
  "fil": ["fil", "Filipino", "Filipino", false, ",.", 2, "PhP", [3]],                                                  // 119
  "fil-ph": ["fil-PH", "Filipino (Philippines)", "Filipino (Pilipinas)", false, ",.", 2, "PhP", [3]],                  // 120
  "fo": ["fo", "Faroese", "føroyskt", false, ".,", 2, "kr.", [3]],                                                     // 121
  "fo-fo": ["fo-FO", "Faroese (Faroe Islands)", "føroyskt (Føroyar)", false, ".,", 2, "kr.", [3]],                     // 122
  "fr": ["fr", "French", "français", false, " ,", 2, "€", [3]],                                                        // 123
  "fr-be": ["fr-BE", "French (Belgium)", "français (Belgique)", false, ".,", 2, "€", [3]],                             // 124
  "fr-ca": ["fr-CA", "French (Canada)", "français (Canada)", false, " ,", 2, "$", [3]],                                // 125
  "fr-ch": ["fr-CH", "French (Switzerland)", "français (Suisse)", false, "'.", 2, "fr.", [3]],                         // 126
  "fr-fr": ["fr-FR", "French (France)", "français (France)", false, " ,", 2, "€", [3]],                                // 127
  "fr-lu": ["fr-LU", "French (Luxembourg)", "français (Luxembourg)", false, " ,", 2, "€", [3]],                        // 128
  "fr-mc": ["fr-MC", "French (Monaco)", "français (Principauté de Monaco)", false, " ,", 2, "€", [3]],                 // 129
  "fy": ["fy", "Frisian", "Frysk", false, ".,", 2, "€", [3]],                                                          // 130
  "fy-nl": ["fy-NL", "Frisian (Netherlands)", "Frysk (Nederlân)", false, ".,", 2, "€", [3]],                           // 131
  "ga": ["ga", "Irish", "Gaeilge", false, ",.", 2, "€", [3]],                                                          // 132
  "ga-ie": ["ga-IE", "Irish (Ireland)", "Gaeilge (Éire)", false, ",.", 2, "€", [3]],                                   // 133
  "gd": ["gd", "Scottish Gaelic", "Gàidhlig", false, ",.", 2, "£", [3]],                                               // 134
  "gd-gb": ["gd-GB", "Scottish Gaelic (United Kingdom)", "Gàidhlig (An Rìoghachd Aonaichte)", false, ",.", 2, "£", [3]],
  "gl": ["gl", "Galician", "galego", false, ".,", 2, "€", [3]],                                                        // 136
  "gl-es": ["gl-ES", "Galician (Galician)", "galego (galego)", false, ".,", 2, "€", [3]],                              // 137
  "gsw": ["gsw", "Alsatian", "Elsässisch", false, " ,", 2, "€", [3]],                                                  // 138
  "gsw-fr": ["gsw-FR", "Alsatian (France)", "Elsässisch (Frànkrisch)", false, " ,", 2, "€", [3]],                      // 139
  "gu": ["gu", "Gujarati", "ગુજરાતી", false, ",.", 2, "રૂ", [3, 2]],                                                   // 140
  "gu-in": ["gu-IN", "Gujarati (India)", "ગુજરાતી (ભારત)", false, ",.", 2, "રૂ", [3, 2]],                              // 141
  "ha": ["ha", "Hausa", "Hausa", false, ",.", 2, "N", [3]],                                                            // 142
  "ha-latn": ["ha-Latn", "Hausa (Latin)", "Hausa", false, ",.", 2, "N", [3]],                                          // 143
  "ha-latn-ng": ["ha-Latn-NG", "Hausa (Latin, Nigeria)", "Hausa (Nigeria)", false, ",.", 2, "N", [3]],                 // 144
  "he": ["he", "Hebrew", "עברית", true, ",.", 2, "₪", [3]],                                                            // 145
  "he-il": ["he-IL", "Hebrew (Israel)", "עברית (ישראל)", true, ",.", 2, "₪", [3]],                                     // 146
  "hi": ["hi", "Hindi", "हिंदी", false, ",.", 2, "रु", [3, 2]],                                                        // 147
  "hi-in": ["hi-IN", "Hindi (India)", "हिंदी (भारत)", false, ",.", 2, "रु", [3, 2]],                                   // 148
  "hr": ["hr", "Croatian", "hrvatski", false, ".,", 2, "kn", [3]],                                                     // 149
  "hr-ba": ["hr-BA", "Croatian (Latin, Bosnia and Herzegovina)", "hrvatski (Bosna i Hercegovina)", false, ".,", 2, "KM", [3]],
  "hr-hr": ["hr-HR", "Croatian (Croatia)", "hrvatski (Hrvatska)", false, ".,", 2, "kn", [3]],                          // 151
  "hsb": ["hsb", "Upper Sorbian", "hornjoserbšćina", false, ".,", 2, "€", [3]],                                        // 152
  "hsb-de": ["hsb-DE", "Upper Sorbian (Germany)", "hornjoserbšćina (Němska)", false, ".,", 2, "€", [3]],               // 153
  "hu": ["hu", "Hungarian", "magyar", false, " ,", 2, "Ft", [3]],                                                      // 154
  "hu-hu": ["hu-HU", "Hungarian (Hungary)", "magyar (Magyarország)", false, " ,", 2, "Ft", [3]],                       // 155
  "hy": ["hy", "Armenian", "Հայերեն", false, ",.", 2, "դր.", [3]],                                                     // 156
  "hy-am": ["hy-AM", "Armenian (Armenia)", "Հայերեն (Հայաստան)", false, ",.", 2, "դր.", [3]],                          // 157
  "id": ["id", "Indonesian", "Bahasa Indonesia", false, ".,", 2, "Rp", [3]],                                           // 158
  "id-id": ["id-ID", "Indonesian (Indonesia)", "Bahasa Indonesia (Indonesia)", false, ".,", 2, "Rp", [3]],             // 159
  "ig": ["ig", "Igbo", "Igbo", false, ",.", 2, "N", [3]],                                                              // 160
  "ig-ng": ["ig-NG", "Igbo (Nigeria)", "Igbo (Nigeria)", false, ",.", 2, "N", [3]],                                    // 161
  "ii": ["ii", "Yi", "ꆈꌠꁱꂷ", false, ",.", 2, "¥", [3, 0]],                                                             // 162
  "ii-cn": ["ii-CN", "Yi (PRC)", "ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)", false, ",.", 2, "¥", [3, 0]],                                       // 163
  "is": ["is", "Icelandic", "íslenska", false, ".,", 2, "kr.", [3]],                                                   // 164
  "is-is": ["is-IS", "Icelandic (Iceland)", "íslenska (Ísland)", false, ".,", 2, "kr.", [3]],                          // 165
  "it": ["it", "Italian", "italiano", false, ".,", 2, "€", [3]],                                                       // 166
  "it-ch": ["it-CH", "Italian (Switzerland)", "italiano (Svizzera)", false, "'.", 2, "fr.", [3]],                      // 167
  "it-it": ["it-IT", "Italian (Italy)", "italiano (Italia)", false, ".,", 2, "€", [3]],                                // 168
  "iu": ["iu", "Inuktitut", "Inuktitut", false, ",.", 2, "$", [3, 0]],                                                 // 169
  "iu-cans": ["iu-Cans", "Inuktitut (Syllabics)", "ᐃᓄᒃᑎᑐᑦ", false, ",.", 2, "$", [3, 0]],                              // 170
  "iu-cans-ca": ["iu-Cans-CA", "Inuktitut (Syllabics, Canada)", "ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)", false, ",.", 2, "$", [3, 0]],         // 171
  "iu-latn": ["iu-Latn", "Inuktitut (Latin)", "Inuktitut", false, ",.", 2, "$", [3, 0]],                               // 172
  "iu-latn-ca": ["iu-Latn-CA", "Inuktitut (Latin, Canada)", "Inuktitut (Kanatami)", false, ",.", 2, "$", [3, 0]],      // 173
  "ja": ["ja", "Japanese", "日本語", false, ",.", 2, "¥", [3]],                                                           // 174
  "ja-jp": ["ja-JP", "Japanese (Japan)", "日本語 (日本)", false, ",.", 2, "¥", [3]],                                        // 175
  "ka": ["ka", "Georgian", "ქართული", false, " ,", 2, "Lari", [3]],                                                    // 176
  "ka-ge": ["ka-GE", "Georgian (Georgia)", "ქართული (საქართველო)", false, " ,", 2, "Lari", [3]],                       // 177
  "kk": ["kk", "Kazakh", "Қазақ", false, " -", 2, "Т", [3]],                                                           // 178
  "kk-kz": ["kk-KZ", "Kazakh (Kazakhstan)", "Қазақ (Қазақстан)", false, " -", 2, "Т", [3]],                            // 179
  "kl": ["kl", "Greenlandic", "kalaallisut", false, ".,", 2, "kr.", [3, 0]],                                           // 180
  "kl-gl": ["kl-GL", "Greenlandic (Greenland)", "kalaallisut (Kalaallit Nunaat)", false, ".,", 2, "kr.", [3, 0]],      // 181
  "km": ["km", "Khmer", "ខ្មែរ", false, ",.", 2, "៛", [3, 0]],                                                         // 182
  "km-kh": ["km-KH", "Khmer (Cambodia)", "ខ្មែរ (កម្ពុជា)", false, ",.", 2, "៛", [3, 0]],                              // 183
  "kn": ["kn", "Kannada", "ಕನ್ನಡ", false, ",.", 2, "ರೂ", [3, 2]],                                                      // 184
  "kn-in": ["kn-IN", "Kannada (India)", "ಕನ್ನಡ (ಭಾರತ)", false, ",.", 2, "ರೂ", [3, 2]],                                 // 185
  "ko": ["ko", "Korean", "한국어", false, ",.", 2, "₩", [3]],                                                             // 186
  "ko-kr": ["ko-KR", "Korean (Korea)", "한국어 (대한민국)", false, ",.", 2, "₩", [3]],                                        // 187
  "kok": ["kok", "Konkani", "कोंकणी", false, ",.", 2, "रु", [3, 2]],                                                   // 188
  "kok-in": ["kok-IN", "Konkani (India)", "कोंकणी (भारत)", false, ",.", 2, "रु", [3, 2]],                              // 189
  "ky": ["ky", "Kyrgyz", "Кыргыз", false, " -", 2, "сом", [3]],                                                        // 190
  "ky-kg": ["ky-KG", "Kyrgyz (Kyrgyzstan)", "Кыргыз (Кыргызстан)", false, " -", 2, "сом", [3]],                        // 191
  "lb": ["lb", "Luxembourgish", "Lëtzebuergesch", false, " ,", 2, "€", [3]],                                           // 192
  "lb-lu": ["lb-LU", "Luxembourgish (Luxembourg)", "Lëtzebuergesch (Luxembourg)", false, " ,", 2, "€", [3]],           // 193
  "lo": ["lo", "Lao", "ລາວ", false, ",.", 2, "₭", [3, 0]],                                                             // 194
  "lo-la": ["lo-LA", "Lao (Lao P.D.R.)", "ລາວ (ສ.ປ.ປ. ລາວ)", false, ",.", 2, "₭", [3, 0]],                             // 195
  "lt": ["lt", "Lithuanian", "lietuvių", false, ".,", 2, "Lt", [3]],                                                   // 196
  "lt-lt": ["lt-LT", "Lithuanian (Lithuania)", "lietuvių (Lietuva)", false, ".,", 2, "Lt", [3]],                       // 197
  "lv": ["lv", "Latvian", "latviešu", false, " ,", 2, "Ls", [3]],                                                      // 198
  "lv-lv": ["lv-LV", "Latvian (Latvia)", "latviešu (Latvija)", false, " ,", 2, "Ls", [3]],                             // 199
  "mi": ["mi", "Maori", "Reo Māori", false, ",.", 2, "$", [3]],                                                        // 200
  "mi-nz": ["mi-NZ", "Maori (New Zealand)", "Reo Māori (Aotearoa)", false, ",.", 2, "$", [3]],                         // 201
  "mk": ["mk", "Macedonian (FYROM)", "македонски јазик", false, ".,", 2, "ден.", [3]],                                 // 202
  "mk-mk": ["mk-MK", "Macedonian (Former Yugoslav Republic of Macedonia)", "македонски јазик (Македонија)", false, ".,", 2, "ден.", [3]],
  "ml": ["ml", "Malayalam", "മലയാളം", false, ",.", 2, "ക", [3, 2]],                                                    // 204
  "ml-in": ["ml-IN", "Malayalam (India)", "മലയാളം (ഭാരതം)", false, ",.", 2, "ക", [3, 2]],                              // 205
  "mn": ["mn", "Mongolian", "Монгол хэл", false, " ,", 2, "₮", [3]],                                                   // 206
  "mn-cyrl": ["mn-Cyrl", "Mongolian (Cyrillic)", "Монгол хэл", false, " ,", 2, "₮", [3]],                              // 207
  "mn-mn": ["mn-MN", "Mongolian (Cyrillic, Mongolia)", "Монгол хэл (Монгол улс)", false, " ,", 2, "₮", [3]],           // 208
  "mn-mong": ["mn-Mong", "Mongolian (Traditional Mongolian)", "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ", false, ",.", 2, "¥", [3, 0]],            // 209
  "mn-mong-cn": ["mn-Mong-CN", "Mongolian (Traditional Mongolian, PRC)", "ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)", false, ",.", 2, "¥", [3, 0]],
  "moh": ["moh", "Mohawk", "Kanien'kéha", false, ",.", 2, "$", [3, 0]],                                                // 211
  "moh-ca": ["moh-CA", "Mohawk (Mohawk)", "Kanien'kéha", false, ",.", 2, "$", [3, 0]],                                 // 212
  "mr": ["mr", "Marathi", "मराठी", false, ",.", 2, "रु", [3, 2]],                                                      // 213
  "mr-in": ["mr-IN", "Marathi (India)", "मराठी (भारत)", false, ",.", 2, "रु", [3, 2]],                                 // 214
  "ms": ["ms", "Malay", "Bahasa Melayu", false, ",.", 2, "RM", [3]],                                                   // 215
  "ms-bn": ["ms-BN", "Malay (Brunei Darussalam)", "Bahasa Melayu (Brunei Darussalam)", false, ".,", 2, "$", [3]],      // 216
  "ms-my": ["ms-MY", "Malay (Malaysia)", "Bahasa Melayu (Malaysia)", false, ",.", 2, "RM", [3]],                       // 217
  "mt": ["mt", "Maltese", "Malti", false, ",.", 2, "€", [3]],                                                          // 218
  "mt-mt": ["mt-MT", "Maltese (Malta)", "Malti (Malta)", false, ",.", 2, "€", [3]],                                    // 219
  "nb": ["nb", "Norwegian (Bokmål)", "norsk (bokmål)", false, " ,", 2, "kr", [3]],                                     // 220
  "nb-no": ["nb-NO", "Norwegian, Bokmål (Norway)", "norsk, bokmål (Norge)", false, " ,", 2, "kr", [3]],                // 221
  "ne": ["ne", "Nepali", "नेपाली", false, ",.", 2, "रु", [3, 2]],                                                      // 222
  "ne-np": ["ne-NP", "Nepali (Nepal)", "नेपाली (नेपाल)", false, ",.", 2, "रु", [3, 2]],                                // 223
  "nl": ["nl", "Dutch", "Nederlands", false, ".,", 2, "€", [3]],                                                       // 224
  "nl-be": ["nl-BE", "Dutch (Belgium)", "Nederlands (België)", false, ".,", 2, "€", [3]],                              // 225
  "nl-nl": ["nl-NL", "Dutch (Netherlands)", "Nederlands (Nederland)", false, ".,", 2, "€", [3]],                       // 226
  "nn": ["nn", "Norwegian (Nynorsk)", "norsk (nynorsk)", false, " ,", 2, "kr", [3]],                                   // 227
  "nn-no": ["nn-NO", "Norwegian, Nynorsk (Norway)", "norsk, nynorsk (Noreg)", false, " ,", 2, "kr", [3]],              // 228
  "no": ["no", "Norwegian", "norsk", false, " ,", 2, "kr", [3]],                                                       // 229
  "nso": ["nso", "Sesotho sa Leboa", "Sesotho sa Leboa", false, ",.", 2, "R", [3]],                                    // 230
  "nso-za": ["nso-ZA", "Sesotho sa Leboa (South Africa)", "Sesotho sa Leboa (Afrika Borwa)", false, ",.", 2, "R", [3]],
  "oc": ["oc", "Occitan", "Occitan", false, " ,", 2, "€", [3]],                                                        // 232
  "oc-fr": ["oc-FR", "Occitan (France)", "Occitan (França)", false, " ,", 2, "€", [3]],                                // 233
  "or": ["or", "Oriya", "ଓଡ଼ିଆ", false, ",.", 2, "ଟ", [3, 2]],                                                          // 234
  "or-in": ["or-IN", "Oriya (India)", "ଓଡ଼ିଆ (ଭାରତ)", false, ",.", 2, "ଟ", [3, 2]],                                     // 235
  "pa": ["pa", "Punjabi", "ਪੰਜਾਬੀ", false, ",.", 2, "ਰੁ", [3, 2]],                                                     // 236
  "pa-in": ["pa-IN", "Punjabi (India)", "ਪੰਜਾਬੀ (ਭਾਰਤ)", false, ",.", 2, "ਰੁ", [3, 2]],                                // 237
  "pl": ["pl", "Polish", "polski", false, " ,", 2, "zł", [3]],                                                         // 238
  "pl-pl": ["pl-PL", "Polish (Poland)", "polski (Polska)", false, " ,", 2, "zł", [3]],                                 // 239
  "prs": ["prs", "Dari", "درى", true, ",.", 2, "؋", [3]],                                                              // 240
  "prs-af": ["prs-AF", "Dari (Afghanistan)", "درى (افغانستان)", true, ",.", 2, "؋", [3]],                              // 241
  "ps": ["ps", "Pashto", "پښتو", true, "٬٫", 2, "؋", [3]],                                                             // 242
  "ps-af": ["ps-AF", "Pashto (Afghanistan)", "پښتو (افغانستان)", true, "٬٫", 2, "؋", [3]],                             // 243
  "pt": ["pt", "Portuguese", "Português", false, ".,", 2, "R$", [3]],                                                  // 244
  "pt-br": ["pt-BR", "Portuguese (Brazil)", "Português (Brasil)", false, ".,", 2, "R$", [3]],                          // 245
  "pt-pt": ["pt-PT", "Portuguese (Portugal)", "português (Portugal)", false, ".,", 2, "€", [3]],                       // 246
  "qut": ["qut", "K'iche", "K'iche", false, ",.", 2, "Q", [3]],                                                        // 247
  "qut-gt": ["qut-GT", "K'iche (Guatemala)", "K'iche (Guatemala)", false, ",.", 2, "Q", [3]],                          // 248
  "quz": ["quz", "Quechua", "runasimi", false, ".,", 2, "$b", [3]],                                                    // 249
  "quz-bo": ["quz-BO", "Quechua (Bolivia)", "runasimi (Qullasuyu)", false, ".,", 2, "$b", [3]],                        // 250
  "quz-ec": ["quz-EC", "Quechua (Ecuador)", "runasimi (Ecuador)", false, ".,", 2, "$", [3]],                           // 251
  "quz-pe": ["quz-PE", "Quechua (Peru)", "runasimi (Piruw)", false, ",.", 2, "S/.", [3]],                              // 252
  "rm": ["rm", "Romansh", "Rumantsch", false, "'.", 2, "fr.", [3]],                                                    // 253
  "rm-ch": ["rm-CH", "Romansh (Switzerland)", "Rumantsch (Svizra)", false, "'.", 2, "fr.", [3]],                       // 254
  "ro": ["ro", "Romanian", "română", false, ".,", 2, "lei", [3]],                                                      // 255
  "ro-ro": ["ro-RO", "Romanian (Romania)", "română (România)", false, ".,", 2, "lei", [3]],                            // 256
  "ru": ["ru", "Russian", "русский", false, " ,", 2, "р.", [3]],                                                       // 257
  "ru-ru": ["ru-RU", "Russian (Russia)", "русский (Россия)", false, " ,", 2, "р.", [3]],                               // 258
  "rw": ["rw", "Kinyarwanda", "Kinyarwanda", false, " ,", 2, "RWF", [3]],                                              // 259
  "rw-rw": ["rw-RW", "Kinyarwanda (Rwanda)", "Kinyarwanda (Rwanda)", false, " ,", 2, "RWF", [3]],                      // 260
  "sa": ["sa", "Sanskrit", "संस्कृत", false, ",.", 2, "रु", [3, 2]],                                                   // 261
  "sa-in": ["sa-IN", "Sanskrit (India)", "संस्कृत (भारतम्)", false, ",.", 2, "रु", [3, 2]],                            // 262
  "sah": ["sah", "Yakut", "саха", false, " ,", 2, "с.", [3]],                                                          // 263
  "sah-ru": ["sah-RU", "Yakut (Russia)", "саха (Россия)", false, " ,", 2, "с.", [3]],                                  // 264
  "se": ["se", "Sami (Northern)", "davvisámegiella", false, " ,", 2, "kr", [3]],                                       // 265
  "se-fi": ["se-FI", "Sami, Northern (Finland)", "davvisámegiella (Suopma)", false, " ,", 2, "€", [3]],                // 266
  "se-no": ["se-NO", "Sami, Northern (Norway)", "davvisámegiella (Norga)", false, " ,", 2, "kr", [3]],                 // 267
  "se-se": ["se-SE", "Sami, Northern (Sweden)", "davvisámegiella (Ruoŧŧa)", false, ".,", 2, "kr", [3]],                // 268
  "si": ["si", "Sinhala", "සිංහල", false, ",.", 2, "රු.", [3, 2]],                                                     // 269
  "si-lk": ["si-LK", "Sinhala (Sri Lanka)", "සිංහල (ශ්‍රී ලංකා)", false, ",.", 2, "රු.", [3, 2]],                      // 270
  "sk": ["sk", "Slovak", "slovenčina", false, " ,", 2, "€", [3]],                                                      // 271
  "sk-sk": ["sk-SK", "Slovak (Slovakia)", "slovenčina (Slovenská republika)", false, " ,", 2, "€", [3]],               // 272
  "sl": ["sl", "Slovenian", "slovenski", false, ".,", 2, "€", [3]],                                                    // 273
  "sl-si": ["sl-SI", "Slovenian (Slovenia)", "slovenski (Slovenija)", false, ".,", 2, "€", [3]],                       // 274
  "sma": ["sma", "Sami (Southern)", "åarjelsaemiengiele", false, ".,", 2, "kr", [3]],                                  // 275
  "sma-no": ["sma-NO", "Sami, Southern (Norway)", "åarjelsaemiengiele (Nöörje)", false, " ,", 2, "kr", [3]],           // 276
  "sma-se": ["sma-SE", "Sami, Southern (Sweden)", "åarjelsaemiengiele (Sveerje)", false, ".,", 2, "kr", [3]],          // 277
  "smj": ["smj", "Sami (Lule)", "julevusámegiella", false, ".,", 2, "kr", [3]],                                        // 278
  "smj-no": ["smj-NO", "Sami, Lule (Norway)", "julevusámegiella (Vuodna)", false, " ,", 2, "kr", [3]],                 // 279
  "smj-se": ["smj-SE", "Sami, Lule (Sweden)", "julevusámegiella (Svierik)", false, ".,", 2, "kr", [3]],                // 280
  "smn": ["smn", "Sami (Inari)", "sämikielâ", false, " ,", 2, "€", [3]],                                               // 281
  "smn-fi": ["smn-FI", "Sami, Inari (Finland)", "sämikielâ (Suomâ)", false, " ,", 2, "€", [3]],                        // 282
  "sms": ["sms", "Sami (Skolt)", "sääm´ǩiõll", false, " ,", 2, "€", [3]],                                              // 283
  "sms-fi": ["sms-FI", "Sami, Skolt (Finland)", "sääm´ǩiõll (Lää´ddjânnam)", false, " ,", 2, "€", [3]],                // 284
  "sq": ["sq", "Albanian", "shqipe", false, ".,", 2, "Lek", [3]],                                                      // 285
  "sq-al": ["sq-AL", "Albanian (Albania)", "shqipe (Shqipëria)", false, ".,", 2, "Lek", [3]],                          // 286
  "sr": ["sr", "Serbian", "srpski", false, ".,", 2, "Din.", [3]],                                                      // 287
  "sr-cyrl": ["sr-Cyrl", "Serbian (Cyrillic)", "српски", false, ".,", 2, "Дин.", [3]],                                 // 288
  "sr-cyrl-ba": ["sr-Cyrl-BA", "Serbian (Cyrillic, Bosnia and Herzegovina)", "српски (Босна и Херцеговина)", false, ".,", 2, "КМ", [3]],
  "sr-cyrl-cs": ["sr-Cyrl-CS", "Serbian (Cyrillic, Serbia and Montenegro (Former))", "српски (Србија и Црна Гора (Претходно))", false, ".,", 2, "Дин.", [3]],
  "sr-cyrl-me": ["sr-Cyrl-ME", "Serbian (Cyrillic, Montenegro)", "српски (Црна Гора)", false, ".,", 2, "€", [3]],      // 291
  "sr-cyrl-rs": ["sr-Cyrl-RS", "Serbian (Cyrillic, Serbia)", "српски (Србија)", false, ".,", 2, "Дин.", [3]],          // 292
  "sr-latn": ["sr-Latn", "Serbian (Latin)", "srpski", false, ".,", 2, "Din.", [3]],                                    // 293
  "sr-latn-ba": ["sr-Latn-BA", "Serbian (Latin, Bosnia and Herzegovina)", "srpski (Bosna i Hercegovina)", false, ".,", 2, "KM", [3]],
  "sr-latn-cs": ["sr-Latn-CS", "Serbian (Latin, Serbia and Montenegro (Former))", "srpski (Srbija i Crna Gora (Prethodno))", false, ".,", 2, "Din.", [3]],
  "sr-latn-me": ["sr-Latn-ME", "Serbian (Latin, Montenegro)", "srpski (Crna Gora)", false, ".,", 2, "€", [3]],         // 296
  "sr-latn-rs": ["sr-Latn-RS", "Serbian (Latin, Serbia)", "srpski (Srbija)", false, ".,", 2, "Din.", [3]],             // 297
  "sv": ["sv", "Swedish", "svenska", false, ".,", 2, "kr", [3]],                                                       // 298
  "sv-fi": ["sv-FI", "Swedish (Finland)", "svenska (Finland)", false, " ,", 2, "€", [3]],                              // 299
  "sv-se": ["sv-SE", "Swedish (Sweden)", "svenska (Sverige)", false, ".,", 2, "kr", [3]],                              // 300
  "sw": ["sw", "Kiswahili", "Kiswahili", false, ",.", 2, "S", [3]],                                                    // 301
  "sw-ke": ["sw-KE", "Kiswahili (Kenya)", "Kiswahili (Kenya)", false, ",.", 2, "S", [3]],                              // 302
  "syr": ["syr", "Syriac", "ܣܘܪܝܝܐ", true, ",.", 2, "ل.س.‏", [3]],                                                     // 303
  "syr-sy": ["syr-SY", "Syriac (Syria)", "ܣܘܪܝܝܐ (سوريا)", true, ",.", 2, "ل.س.‏", [3]],                               // 304
  "ta": ["ta", "Tamil", "தமிழ்", false, ",.", 2, "ரூ", [3, 2]],                                                        // 305
  "ta-in": ["ta-IN", "Tamil (India)", "தமிழ் (இந்தியா)", false, ",.", 2, "ரூ", [3, 2]],                                // 306
  "te": ["te", "Telugu", "తెలుగు", false, ",.", 2, "రూ", [3, 2]],                                                      // 307
  "te-in": ["te-IN", "Telugu (India)", "తెలుగు (భారత దేశం)", false, ",.", 2, "రూ", [3, 2]],                            // 308
  "tg": ["tg", "Tajik", "Тоҷикӣ", false, " ;", 2, "т.р.", [3, 0]],                                                     // 309
  "tg-cyrl": ["tg-Cyrl", "Tajik (Cyrillic)", "Тоҷикӣ", false, " ;", 2, "т.р.", [3, 0]],                                // 310
  "tg-cyrl-tj": ["tg-Cyrl-TJ", "Tajik (Cyrillic, Tajikistan)", "Тоҷикӣ (Тоҷикистон)", false, " ;", 2, "т.р.", [3, 0]],
  "th": ["th", "Thai", "ไทย", false, ",.", 2, "฿", [3]],                                                               // 312
  "th-th": ["th-TH", "Thai (Thailand)", "ไทย (ไทย)", false, ",.", 2, "฿", [3]],                                        // 313
  "tk": ["tk", "Turkmen", "türkmençe", false, " ,", 2, "m.", [3]],                                                     // 314
  "tk-tm": ["tk-TM", "Turkmen (Turkmenistan)", "türkmençe (Türkmenistan)", false, " ,", 2, "m.", [3]],                 // 315
  "tn": ["tn", "Setswana", "Setswana", false, ",.", 2, "R", [3]],                                                      // 316
  "tn-za": ["tn-ZA", "Setswana (South Africa)", "Setswana (Aforika Borwa)", false, ",.", 2, "R", [3]],                 // 317
  "tr": ["tr", "Turkish", "Türkçe", false, ".,", 2, "TL", [3]],                                                        // 318
  "tr-tr": ["tr-TR", "Turkish (Turkey)", "Türkçe (Türkiye)", false, ".,", 2, "TL", [3]],                               // 319
  "tt": ["tt", "Tatar", "Татар", false, " ,", 2, "р.", [3]],                                                           // 320
  "tt-ru": ["tt-RU", "Tatar (Russia)", "Татар (Россия)", false, " ,", 2, "р.", [3]],                                   // 321
  "tzm": ["tzm", "Tamazight", "Tamazight", false, ",.", 2, "DZD", [3]],                                                // 322
  "tzm-latn": ["tzm-Latn", "Tamazight (Latin)", "Tamazight", false, ",.", 2, "DZD", [3]],                              // 323
  "tzm-latn-dz": ["tzm-Latn-DZ", "Tamazight (Latin, Algeria)", "Tamazight (Djazaïr)", false, ",.", 2, "DZD", [3]],     // 324
  "ug": ["ug", "Uyghur", "ئۇيغۇرچە", true, ",.", 2, "¥", [3]],                                                         // 325
  "ug-cn": ["ug-CN", "Uyghur (PRC)", "ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)", true, ",.", 2, "¥", [3]],                   // 326
  "uk": ["uk", "Ukrainian", "українська", false, " ,", 2, "₴", [3]],                                                   // 327
  "uk-ua": ["uk-UA", "Ukrainian (Ukraine)", "українська (Україна)", false, " ,", 2, "₴", [3]],                         // 328
  "ur": ["ur", "Urdu", "اُردو", true, ",.", 2, "Rs", [3]],                                                             // 329
  "ur-pk": ["ur-PK", "Urdu (Islamic Republic of Pakistan)", "اُردو (پاکستان)", true, ",.", 2, "Rs", [3]],              // 330
  "uz": ["uz", "Uzbek", "U'zbek", false, " ,", 2, "so'm", [3]],                                                        // 331
  "uz-cyrl": ["uz-Cyrl", "Uzbek (Cyrillic)", "Ўзбек", false, " ,", 2, "сўм", [3]],                                     // 332
  "uz-cyrl-uz": ["uz-Cyrl-UZ", "Uzbek (Cyrillic, Uzbekistan)", "Ўзбек (Ўзбекистон)", false, " ,", 2, "сўм", [3]],      // 333
  "uz-latn": ["uz-Latn", "Uzbek (Latin)", "U'zbek", false, " ,", 2, "so'm", [3]],                                      // 334
  "uz-latn-uz": ["uz-Latn-UZ", "Uzbek (Latin, Uzbekistan)", "U'zbek (U'zbekiston Respublikasi)", false, " ,", 2, "so'm", [3]],
  "vi": ["vi", "Vietnamese", "Tiếng Việt", false, ".,", 2, "₫", [3]],                                                 // 336
  "vi-vn": ["vi-VN", "Vietnamese (Vietnam)", "Tiếng Việt (Việt Nam)", false, ".,", 2, "₫", [3]],                      // 337
  "wo": ["wo", "Wolof", "Wolof", false, " ,", 2, "XOF", [3]],                                                          // 338
  "wo-sn": ["wo-SN", "Wolof (Senegal)", "Wolof (Sénégal)", false, " ,", 2, "XOF", [3]],                                // 339
  "xh": ["xh", "isiXhosa", "isiXhosa", false, ",.", 2, "R", [3]],                                                      // 340
  "xh-za": ["xh-ZA", "isiXhosa (South Africa)", "isiXhosa (uMzantsi Afrika)", false, ",.", 2, "R", [3]],               // 341
  "yo": ["yo", "Yoruba", "Yoruba", false, ",.", 2, "N", [3]],                                                          // 342
  "yo-ng": ["yo-NG", "Yoruba (Nigeria)", "Yoruba (Nigeria)", false, ",.", 2, "N", [3]],                                // 343
  "zh": ["zh", "Chinese", "中文", false, ",.", 2, "¥", [3]],                                                             // 344
  "zh-chs": ["zh-CHS", "Chinese (Simplified) Legacy", "中文(简体) 旧版", false, ",.", 2, "¥", [3]],                          // 345
  "zh-cht": ["zh-CHT", "Chinese (Traditional) Legacy", "中文(繁體) 舊版", false, ",.", 2, "HK$", [3]],                       // 346
  "zh-cn": ["zh-CN", "Chinese (Simplified, PRC)", "中文(中华人民共和国)", false, ",.", 2, "¥", [3]],                            // 347
  "zh-hans": ["zh-Hans", "Chinese (Simplified)", "中文(简体)", false, ",.", 2, "¥", [3]],                                  // 348
  "zh-hant": ["zh-Hant", "Chinese (Traditional)", "中文(繁體)", false, ",.", 2, "HK$", [3]],                               // 349
  "zh-hk": ["zh-HK", "Chinese (Traditional, Hong Kong S.A.R.)", "中文(香港特別行政區)", false, ",.", 2, "HK$", [3]],            // 350
  "zh-mo": ["zh-MO", "Chinese (Traditional, Macao S.A.R.)", "中文(澳門特別行政區)", false, ",.", 2, "MOP", [3]],                // 351
  "zh-sg": ["zh-SG", "Chinese (Simplified, Singapore)", "中文(新加坡)", false, ",.", 2, "$", [3]],                          // 352
  "zh-tw": ["zh-TW", "Chinese (Traditional, Taiwan)", "中文(台灣)", false, ",.", 2, "NT$", [3]],                           // 353
  "zu": ["zu", "isiZulu", "isiZulu", false, ",.", 2, "R", [3]],                                                        // 354
  "zu-za": ["zu-ZA", "isiZulu (South Africa)", "isiZulu (iNingizimu Afrika)", false, ",.", 2, "R", [3]]                // 355
};                                                                                                                     // 1
module.export("default",exports.default=(LOCALES));                                                                    // 357
                                                                                                                       //
var CURRENCIES = {                                                                                                     // 359
  'AW': ['AWG'],                                                                                                       // 360
  'AF': ['AFN'],                                                                                                       // 361
  'AO': ['AOA'],                                                                                                       // 362
  'AI': ['XCD'],                                                                                                       // 363
  'AX': ['EUR'],                                                                                                       // 364
  'AL': ['ALL'],                                                                                                       // 365
  'AD': ['EUR'],                                                                                                       // 366
  'AE': ['AED'],                                                                                                       // 367
  'AR': ['ARS'],                                                                                                       // 368
  'AM': ['AMD'],                                                                                                       // 369
  'AS': ['USD'],                                                                                                       // 370
  'TF': ['EUR'],                                                                                                       // 371
  'AG': ['XCD'],                                                                                                       // 372
  'AU': ['AUD'],                                                                                                       // 373
  'AT': ['EUR'],                                                                                                       // 374
  'AZ': ['AZN'],                                                                                                       // 375
  'BI': ['BIF'],                                                                                                       // 376
  'BE': ['EUR'],                                                                                                       // 377
  'BJ': ['XOF'],                                                                                                       // 378
  'BF': ['XOF'],                                                                                                       // 379
  'BD': ['BDT'],                                                                                                       // 380
  'BG': ['BGN'],                                                                                                       // 381
  'BH': ['BHD'],                                                                                                       // 382
  'BS': ['BSD'],                                                                                                       // 383
  'BA': ['BAM'],                                                                                                       // 384
  'BL': ['EUR'],                                                                                                       // 385
  'BY': ['BYR'],                                                                                                       // 386
  'BZ': ['BZD'],                                                                                                       // 387
  'BM': ['BMD'],                                                                                                       // 388
  'BO': ['BOB', 'BOV'],                                                                                                // 389
  'BR': ['BRL'],                                                                                                       // 390
  'BB': ['BBD'],                                                                                                       // 391
  'BN': ['BND'],                                                                                                       // 392
  'BT': ['BTN', 'INR'],                                                                                                // 393
  'BV': ['NOK'],                                                                                                       // 394
  'BW': ['BWP'],                                                                                                       // 395
  'CF': ['XAF'],                                                                                                       // 396
  'CA': ['CAD'],                                                                                                       // 397
  'CC': ['AUD'],                                                                                                       // 398
  'CH': ['CHE', 'CHF', 'CHW'],                                                                                         // 399
  'CL': ['CLF', 'CLP'],                                                                                                // 400
  'CN': ['CNY'],                                                                                                       // 401
  'CI': ['XOF'],                                                                                                       // 402
  'CM': ['XAF'],                                                                                                       // 403
  'CD': ['CDF'],                                                                                                       // 404
  'CG': ['XAF'],                                                                                                       // 405
  'CK': ['NZD'],                                                                                                       // 406
  'CO': ['COP'],                                                                                                       // 407
  'KM': ['KMF'],                                                                                                       // 408
  'CV': ['CVE'],                                                                                                       // 409
  'CR': ['CRC'],                                                                                                       // 410
  'CU': ['CUC', 'CUP'],                                                                                                // 411
  'CW': ['ANG'],                                                                                                       // 412
  'CX': ['AUD'],                                                                                                       // 413
  'KY': ['KYD'],                                                                                                       // 414
  'CY': ['EUR'],                                                                                                       // 415
  'CZ': ['CZK'],                                                                                                       // 416
  'DE': ['EUR'],                                                                                                       // 417
  'DJ': ['DJF'],                                                                                                       // 418
  'DM': ['XCD'],                                                                                                       // 419
  'DK': ['DKK'],                                                                                                       // 420
  'DO': ['DOP'],                                                                                                       // 421
  'DZ': ['DZD'],                                                                                                       // 422
  'EC': ['USD'],                                                                                                       // 423
  'EG': ['EGP'],                                                                                                       // 424
  'ER': ['ERN'],                                                                                                       // 425
  'EH': ['MAD', 'DZD', 'MRO'],                                                                                         // 426
  'ES': ['EUR'],                                                                                                       // 427
  'EE': ['EUR'],                                                                                                       // 428
  'ET': ['ETB'],                                                                                                       // 429
  'FI': ['EUR'],                                                                                                       // 430
  'FJ': ['FJD'],                                                                                                       // 431
  'FK': ['FKP'],                                                                                                       // 432
  'FR': ['EUR'],                                                                                                       // 433
  'FO': ['DKK'],                                                                                                       // 434
  'FM': ['USD'],                                                                                                       // 435
  'GA': ['XAF'],                                                                                                       // 436
  'GB': ['GBP'],                                                                                                       // 437
  'GE': ['GEL'],                                                                                                       // 438
  'GG': ['GBP'],                                                                                                       // 439
  'GH': ['GHS'],                                                                                                       // 440
  'GI': ['GIP'],                                                                                                       // 441
  'GN': ['GNF'],                                                                                                       // 442
  'GP': ['EUR'],                                                                                                       // 443
  'GM': ['GMD'],                                                                                                       // 444
  'GW': ['XOF'],                                                                                                       // 445
  'GQ': ['XAF'],                                                                                                       // 446
  'GR': ['EUR'],                                                                                                       // 447
  'GD': ['XCD'],                                                                                                       // 448
  'GL': ['DKK'],                                                                                                       // 449
  'GT': ['GTQ'],                                                                                                       // 450
  'GF': ['EUR'],                                                                                                       // 451
  'GU': ['USD'],                                                                                                       // 452
  'GY': ['GYD'],                                                                                                       // 453
  'HK': ['HKD'],                                                                                                       // 454
  'HM': ['AUD'],                                                                                                       // 455
  'HN': ['HNL'],                                                                                                       // 456
  'HR': ['HRK'],                                                                                                       // 457
  'HT': ['HTG', 'USD'],                                                                                                // 458
  'HU': ['HUF'],                                                                                                       // 459
  'ID': ['IDR'],                                                                                                       // 460
  'IM': ['GBP'],                                                                                                       // 461
  'IN': ['INR'],                                                                                                       // 462
  'IO': ['USD'],                                                                                                       // 463
  'IE': ['EUR'],                                                                                                       // 464
  'IR': ['IRR'],                                                                                                       // 465
  'IQ': ['IQD'],                                                                                                       // 466
  'IS': ['ISK'],                                                                                                       // 467
  'IL': ['ILS'],                                                                                                       // 468
  'IT': ['EUR'],                                                                                                       // 469
  'JM': ['JMD'],                                                                                                       // 470
  'JE': ['GBP'],                                                                                                       // 471
  'JO': ['JOD'],                                                                                                       // 472
  'JP': ['JPY'],                                                                                                       // 473
  'KZ': ['KZT'],                                                                                                       // 474
  'KE': ['KES'],                                                                                                       // 475
  'KG': ['KGS'],                                                                                                       // 476
  'KH': ['KHR'],                                                                                                       // 477
  'KI': ['AUD'],                                                                                                       // 478
  'KN': ['XCD'],                                                                                                       // 479
  'KR': ['KRW'],                                                                                                       // 480
  'XK': ['EUR'],                                                                                                       // 481
  'KW': ['KWD'],                                                                                                       // 482
  'LA': ['LAK'],                                                                                                       // 483
  'LB': ['LBP'],                                                                                                       // 484
  'LR': ['LRD'],                                                                                                       // 485
  'LY': ['LYD'],                                                                                                       // 486
  'LC': ['XCD'],                                                                                                       // 487
  'LI': ['CHF'],                                                                                                       // 488
  'LK': ['LKR'],                                                                                                       // 489
  'LS': ['LSL', 'ZAR'],                                                                                                // 490
  'LT': ['EUR'],                                                                                                       // 491
  'LU': ['EUR'],                                                                                                       // 492
  'LV': ['EUR'],                                                                                                       // 493
  'MO': ['MOP'],                                                                                                       // 494
  'MF': ['EUR'],                                                                                                       // 495
  'MA': ['MAD'],                                                                                                       // 496
  'MC': ['EUR'],                                                                                                       // 497
  'MD': ['MDL'],                                                                                                       // 498
  'MG': ['MGA'],                                                                                                       // 499
  'MV': ['MVR'],                                                                                                       // 500
  'MX': ['MXN'],                                                                                                       // 501
  'MH': ['USD'],                                                                                                       // 502
  'MK': ['MKD'],                                                                                                       // 503
  'ML': ['XOF'],                                                                                                       // 504
  'MT': ['EUR'],                                                                                                       // 505
  'MM': ['MMK'],                                                                                                       // 506
  'ME': ['EUR'],                                                                                                       // 507
  'MN': ['MNT'],                                                                                                       // 508
  'MP': ['USD'],                                                                                                       // 509
  'MZ': ['MZN'],                                                                                                       // 510
  'MR': ['MRO'],                                                                                                       // 511
  'MS': ['XCD'],                                                                                                       // 512
  'MQ': ['EUR'],                                                                                                       // 513
  'MU': ['MUR'],                                                                                                       // 514
  'MW': ['MWK'],                                                                                                       // 515
  'MY': ['MYR'],                                                                                                       // 516
  'YT': ['EUR'],                                                                                                       // 517
  'NA': ['NAD', 'ZAR'],                                                                                                // 518
  'NC': ['XPF'],                                                                                                       // 519
  'NE': ['XOF'],                                                                                                       // 520
  'NF': ['AUD'],                                                                                                       // 521
  'NG': ['NGN'],                                                                                                       // 522
  'NI': ['NIO'],                                                                                                       // 523
  'NU': ['NZD'],                                                                                                       // 524
  'NL': ['EUR'],                                                                                                       // 525
  'NO': ['NOK'],                                                                                                       // 526
  'NP': ['NPR'],                                                                                                       // 527
  'NR': ['AUD'],                                                                                                       // 528
  'NZ': ['NZD'],                                                                                                       // 529
  'OM': ['OMR'],                                                                                                       // 530
  'PK': ['PKR'],                                                                                                       // 531
  'PA': ['PAB', 'USD'],                                                                                                // 532
  'PN': ['NZD'],                                                                                                       // 533
  'PE': ['PEN'],                                                                                                       // 534
  'PH': ['PHP'],                                                                                                       // 535
  'PW': ['USD'],                                                                                                       // 536
  'PG': ['PGK'],                                                                                                       // 537
  'PL': ['PLN'],                                                                                                       // 538
  'PR': ['USD'],                                                                                                       // 539
  'KP': ['KPW'],                                                                                                       // 540
  'PT': ['EUR'],                                                                                                       // 541
  'PY': ['PYG'],                                                                                                       // 542
  'PS': ['ILS'],                                                                                                       // 543
  'PF': ['XPF'],                                                                                                       // 544
  'QA': ['QAR'],                                                                                                       // 545
  'RE': ['EUR'],                                                                                                       // 546
  'RO': ['RON'],                                                                                                       // 547
  'RU': ['RUB'],                                                                                                       // 548
  'RW': ['RWF'],                                                                                                       // 549
  'SA': ['SAR'],                                                                                                       // 550
  'SD': ['SDG'],                                                                                                       // 551
  'SN': ['XOF'],                                                                                                       // 552
  'SG': ['SGD'],                                                                                                       // 553
  'GS': ['GBP'],                                                                                                       // 554
  'SJ': ['NOK'],                                                                                                       // 555
  'SB': ['SBD'],                                                                                                       // 556
  'SL': ['SLL'],                                                                                                       // 557
  'SV': ['SVC', 'USD'],                                                                                                // 558
  'SM': ['EUR'],                                                                                                       // 559
  'SO': ['SOS'],                                                                                                       // 560
  'PM': ['EUR'],                                                                                                       // 561
  'RS': ['RSD'],                                                                                                       // 562
  'SS': ['SSP'],                                                                                                       // 563
  'ST': ['STD'],                                                                                                       // 564
  'SR': ['SRD'],                                                                                                       // 565
  'SK': ['EUR'],                                                                                                       // 566
  'SI': ['EUR'],                                                                                                       // 567
  'SE': ['SEK'],                                                                                                       // 568
  'SZ': ['SZL'],                                                                                                       // 569
  'SX': ['ANG'],                                                                                                       // 570
  'SC': ['SCR'],                                                                                                       // 571
  'SY': ['SYP'],                                                                                                       // 572
  'TC': ['USD'],                                                                                                       // 573
  'TD': ['XAF'],                                                                                                       // 574
  'TG': ['XOF'],                                                                                                       // 575
  'TH': ['THB'],                                                                                                       // 576
  'TJ': ['TJS'],                                                                                                       // 577
  'TK': ['NZD'],                                                                                                       // 578
  'TM': ['TMT'],                                                                                                       // 579
  'TL': ['USD'],                                                                                                       // 580
  'TO': ['TOP'],                                                                                                       // 581
  'TT': ['TTD'],                                                                                                       // 582
  'TN': ['TND'],                                                                                                       // 583
  'TR': ['TRY'],                                                                                                       // 584
  'TV': ['AUD'],                                                                                                       // 585
  'TW': ['TWD'],                                                                                                       // 586
  'TZ': ['TZS'],                                                                                                       // 587
  'UG': ['UGX'],                                                                                                       // 588
  'UA': ['UAH'],                                                                                                       // 589
  'UM': ['USD'],                                                                                                       // 590
  'UY': ['UYI', 'UYU'],                                                                                                // 591
  'US': ['USD', 'USN', 'USS'],                                                                                         // 592
  'UZ': ['UZS'],                                                                                                       // 593
  'VA': ['EUR'],                                                                                                       // 594
  'VC': ['XCD'],                                                                                                       // 595
  'VE': ['VEF'],                                                                                                       // 596
  'VG': ['USD'],                                                                                                       // 597
  'VI': ['USD'],                                                                                                       // 598
  'VN': ['VND'],                                                                                                       // 599
  'VU': ['VUV'],                                                                                                       // 600
  'WF': ['XPF'],                                                                                                       // 601
  'WS': ['WST'],                                                                                                       // 602
  'YE': ['YER'],                                                                                                       // 603
  'ZA': ['ZAR'],                                                                                                       // 604
  'ZM': ['ZMW'],                                                                                                       // 605
  'ZW': ['ZWL']                                                                                                        // 606
};                                                                                                                     // 359
                                                                                                                       //
var SYMBOLS = {                                                                                                        // 609
  'AED': 'د.إ;',                                                                                                       // 610
  'AFN': 'Afs',                                                                                                        // 611
  'ALL': 'L',                                                                                                          // 612
  'AMD': 'AMD',                                                                                                        // 613
  'ANG': 'NAƒ',                                                                                                        // 614
  'AOA': 'Kz',                                                                                                         // 615
  'ARS': '$',                                                                                                          // 616
  'AUD': '$',                                                                                                          // 617
  'AWG': 'ƒ',                                                                                                          // 618
  'AZN': 'AZN',                                                                                                        // 619
  'BAM': 'KM',                                                                                                         // 620
  'BBD': 'Bds$',                                                                                                       // 621
  'BDT': '৳',                                                                                                          // 622
  'BGN': 'BGN',                                                                                                        // 623
  'BHD': '.د.ب',                                                                                                       // 624
  'BIF': 'FBu',                                                                                                        // 625
  'BMD': 'BD$',                                                                                                        // 626
  'BND': 'B$',                                                                                                         // 627
  'BOB': 'Bs.',                                                                                                        // 628
  'BRL': 'R$',                                                                                                         // 629
  'BSD': 'B$',                                                                                                         // 630
  'BTN': 'Nu.',                                                                                                        // 631
  'BWP': 'P',                                                                                                          // 632
  'BYR': 'Br',                                                                                                         // 633
  'BZD': 'BZ$',                                                                                                        // 634
  'CAD': '$',                                                                                                          // 635
  'CDF': 'F',                                                                                                          // 636
  'CHF': 'Fr.',                                                                                                        // 637
  'CLP': '$',                                                                                                          // 638
  'CNY': '¥',                                                                                                          // 639
  'COP': 'Col$',                                                                                                       // 640
  'CRC': '₡',                                                                                                          // 641
  'CUC': '$',                                                                                                          // 642
  'CVE': 'Esc',                                                                                                        // 643
  'CZK': 'Kč',                                                                                                         // 644
  'DJF': 'Fdj',                                                                                                        // 645
  'DKK': 'Kr',                                                                                                         // 646
  'DOP': 'RD$',                                                                                                        // 647
  'DZD': 'د.ج',                                                                                                        // 648
  'EEK': 'KR',                                                                                                         // 649
  'EGP': '£',                                                                                                          // 650
  'ERN': 'Nfa',                                                                                                        // 651
  'ETB': 'Br',                                                                                                         // 652
  'EUR': '€',                                                                                                          // 653
  'FJD': 'FJ$',                                                                                                        // 654
  'FKP': '£',                                                                                                          // 655
  'GBP': '£',                                                                                                          // 656
  'GEL': 'GEL',                                                                                                        // 657
  'GHS': 'GH₵',                                                                                                        // 658
  'GIP': '£',                                                                                                          // 659
  'GMD': 'D',                                                                                                          // 660
  'GNF': 'FG',                                                                                                         // 661
  'GQE': 'CFA',                                                                                                        // 662
  'GTQ': 'Q',                                                                                                          // 663
  'GYD': 'GY$',                                                                                                        // 664
  'HKD': 'HK$',                                                                                                        // 665
  'HNL': 'L',                                                                                                          // 666
  'HRK': 'kn',                                                                                                         // 667
  'HTG': 'G',                                                                                                          // 668
  'HUF': 'Ft',                                                                                                         // 669
  'IDR': 'Rp',                                                                                                         // 670
  'ILS': '₪',                                                                                                          // 671
  'INR': '₹',                                                                                                          // 672
  'IQD': 'د.ع',                                                                                                        // 673
  'IRR': 'IRR',                                                                                                        // 674
  'ISK': 'kr',                                                                                                         // 675
  'JMD': 'J$',                                                                                                         // 676
  'JOD': 'JOD',                                                                                                        // 677
  'JPY': '¥',                                                                                                          // 678
  'KES': 'KSh',                                                                                                        // 679
  'KGS': 'сом',                                                                                                        // 680
  'KHR': '៛',                                                                                                          // 681
  'KMF': 'KMF',                                                                                                        // 682
  'KPW': 'W',                                                                                                          // 683
  'KRW': 'W',                                                                                                          // 684
  'KWD': 'KWD',                                                                                                        // 685
  'KYD': 'KY$',                                                                                                        // 686
  'KZT': 'T',                                                                                                          // 687
  'LAK': 'KN',                                                                                                         // 688
  'LBP': '£',                                                                                                          // 689
  'LKR': 'Rs',                                                                                                         // 690
  'LRD': 'L$',                                                                                                         // 691
  'LSL': 'M',                                                                                                          // 692
  'LTL': 'Lt',                                                                                                         // 693
  'LVL': 'Ls',                                                                                                         // 694
  'LYD': 'LD',                                                                                                         // 695
  'MAD': 'MAD',                                                                                                        // 696
  'MDL': 'MDL',                                                                                                        // 697
  'MGA': 'FMG',                                                                                                        // 698
  'MKD': 'MKD',                                                                                                        // 699
  'MMK': 'K',                                                                                                          // 700
  'MNT': '₮',                                                                                                          // 701
  'MOP': 'P',                                                                                                          // 702
  'MRO': 'UM',                                                                                                         // 703
  'MUR': 'Rs',                                                                                                         // 704
  'MVR': 'Rf',                                                                                                         // 705
  'MWK': 'MK',                                                                                                         // 706
  'MXN': '$',                                                                                                          // 707
  'MYR': 'RM',                                                                                                         // 708
  'MZM': 'MTn',                                                                                                        // 709
  'NAD': 'N$',                                                                                                         // 710
  'NGN': '₦',                                                                                                          // 711
  'NIO': 'C$',                                                                                                         // 712
  'NOK': 'kr',                                                                                                         // 713
  'NPR': 'NRs',                                                                                                        // 714
  'NZD': 'NZ$',                                                                                                        // 715
  'OMR': 'OMR',                                                                                                        // 716
  'PAB': 'B./',                                                                                                        // 717
  'PEN': 'S/.',                                                                                                        // 718
  'PGK': 'K',                                                                                                          // 719
  'PHP': '₱',                                                                                                          // 720
  'PKR': 'Rs.',                                                                                                        // 721
  'PLN': 'zł',                                                                                                         // 722
  'PYG': '₲',                                                                                                          // 723
  'QAR': 'QR',                                                                                                         // 724
  'RON': 'L',                                                                                                          // 725
  'RSD': 'din.',                                                                                                       // 726
  'RUB': 'R',                                                                                                          // 727
  'SAR': 'SR',                                                                                                         // 728
  'SBD': 'SI$',                                                                                                        // 729
  'SCR': 'SR',                                                                                                         // 730
  'SDG': 'SDG',                                                                                                        // 731
  'SEK': 'kr',                                                                                                         // 732
  'SGD': 'S$',                                                                                                         // 733
  'SHP': '£',                                                                                                          // 734
  'SLL': 'Le',                                                                                                         // 735
  'SOS': 'Sh.',                                                                                                        // 736
  'SRD': '$',                                                                                                          // 737
  'SYP': 'LS',                                                                                                         // 738
  'SZL': 'E',                                                                                                          // 739
  'THB': '฿',                                                                                                          // 740
  'TJS': 'TJS',                                                                                                        // 741
  'TMT': 'm',                                                                                                          // 742
  'TND': 'DT',                                                                                                         // 743
  'TRY': 'TRY',                                                                                                        // 744
  'TTD': 'TT$',                                                                                                        // 745
  'TWD': 'NT$',                                                                                                        // 746
  'TZS': 'TZS',                                                                                                        // 747
  'UAH': 'UAH',                                                                                                        // 748
  'UGX': 'USh',                                                                                                        // 749
  'USD': '$',                                                                                                          // 750
  'UYU': '$U',                                                                                                         // 751
  'UZS': 'UZS',                                                                                                        // 752
  'VEB': 'Bs',                                                                                                         // 753
  'VND': '₫',                                                                                                          // 754
  'VUV': 'VT',                                                                                                         // 755
  'WST': 'WS$',                                                                                                        // 756
  'XAF': 'CFA',                                                                                                        // 757
  'XCD': 'EC$',                                                                                                        // 758
  'XDR': 'SDR',                                                                                                        // 759
  'XOF': 'CFA',                                                                                                        // 760
  'XPF': 'F',                                                                                                          // 761
  'YER': 'YER',                                                                                                        // 762
  'ZAR': 'R',                                                                                                          // 763
  'ZMK': 'ZK',                                                                                                         // 764
  'ZWR': 'Z$'                                                                                                          // 765
};                                                                                                                     // 609
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"api.js":["babel-runtime/helpers/typeof","../lib/i18n","../lib/locales",function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/universe_i18n/client/api.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;module.import('babel-runtime/helpers/typeof',{"default":function(v){_typeof=v}});var i18n;module.import('../lib/i18n',{"default":function(v){i18n=v}});var locales;module.import('../lib/locales',{"default":function(v){locales=v}});
                                                                                                                       // 1
                                                                                                                       // 2
                                                                                                                       //
i18n.loadLocale = function (localeName, options) {                                                                     // 4
    var _ref = options || {};                                                                                          // 4
                                                                                                                       //
    var _ref$fresh = _ref.fresh;                                                                                       // 4
    var fresh = _ref$fresh === undefined ? false : _ref$fresh;                                                         // 4
    var _ref$async = _ref.async;                                                                                       // 4
    var async = _ref$async === undefined ? false : _ref$async;                                                         // 4
    var _ref$silent = _ref.silent;                                                                                     // 4
    var silent = _ref$silent === undefined ? false : _ref$silent;                                                      // 4
    var _ref$host = _ref.host;                                                                                         // 4
    var host = _ref$host === undefined ? i18n.options.hostUrl : _ref$host;                                             // 4
    var _ref$pathOnHost = _ref.pathOnHost;                                                                             // 4
    var pathOnHost = _ref$pathOnHost === undefined ? i18n.options.pathOnHost : _ref$pathOnHost;                        // 4
                                                                                                                       //
                                                                                                                       //
    localeName = locales[localeName.toLowerCase()] ? locales[localeName.toLowerCase()][0] : localeName;                // 8
                                                                                                                       //
    var url = host + pathOnHost + localeName;                                                                          // 10
                                                                                                                       //
    if (fresh) {                                                                                                       // 12
        url += '?ts=' + new Date().getTime();                                                                          // 13
    } else {                                                                                                           // 14
        url += '?ts=' + i18n._ts;                                                                                      // 15
    }                                                                                                                  // 16
                                                                                                                       //
    var promise = new Promise(function (resolve, reject) {                                                             // 18
        var script = document.querySelector('script[src="' + url + '"]');                                              // 19
        if (script) {                                                                                                  // 20
            return resolve(script);                                                                                    // 21
        }                                                                                                              // 22
        script = document.createElement('script');                                                                     // 23
        script.type = 'text/javascript';                                                                               // 24
        if (async) {                                                                                                   // 25
            script.async = async;                                                                                      // 26
        }                                                                                                              // 27
        script.src = url;                                                                                              // 28
        script.addEventListener('load', function () {                                                                  // 29
            resolve(script);                                                                                           // 30
        }, false);                                                                                                     // 31
                                                                                                                       //
        script.addEventListener('error', function () {                                                                 // 33
            reject(script);                                                                                            // 34
        }, false);                                                                                                     // 35
        var head = document.head || document.getElementsByTagName('head')[0];                                          // 36
        head.appendChild(script);                                                                                      // 37
    });                                                                                                                // 38
    if (!silent) {                                                                                                     // 39
        promise.then(function () {                                                                                     // 40
            var locale = i18n.getLocale();                                                                             // 41
            //If current locale is changed we must notify about that.                                                  //
            if (locale.indexOf(localeName) === 0 || i18n._defaultLocale.indexOf(localeName) === 0) {                   // 43
                i18n._emitChange();                                                                                    // 44
            }                                                                                                          // 45
        });                                                                                                            // 46
    }                                                                                                                  // 47
    return promise;                                                                                                    // 48
};                                                                                                                     // 49
                                                                                                                       //
// If translation file added manually before this package                                                              //
if ((typeof __uniI18nPre === 'undefined' ? 'undefined' : _typeof(__uniI18nPre)) === 'object') {                        // 52
    Object.keys(__uniI18nPre).map(function (i) {                                                                       // 53
        if (__uniI18nPre[i]) {                                                                                         // 54
            i18n.addTranslations(i, __uniI18nPre__[i]);                                                                // 55
        }                                                                                                              // 56
    });                                                                                                                // 57
}                                                                                                                      // 58
                                                                                                                       //
i18n.isLoaded = function () {                                                                                          // 60
    var locale = arguments.length <= 0 || arguments[0] === undefined ? i18n.getLocale() : arguments[0];                // 60
                                                                                                                       //
    return i18n._isLoaded[locale];                                                                                     // 61
};                                                                                                                     // 62
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}}}}},{"extensions":[".js",".json"]});
var exports = require("./node_modules/meteor/universe:i18n/lib/i18n.js");
require("./node_modules/meteor/universe:i18n/client/api.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['universe:i18n'] = exports, {
  _i18n: _i18n,
  i18n: i18n
});

})();

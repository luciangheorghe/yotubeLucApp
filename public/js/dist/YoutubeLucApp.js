(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        YoutubeLucApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/youtubeLucApp/YoutubeLucApp.js", "vendors~YoutubeLucApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/youtubeLucApp/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./assets/js/youtubeLucApp/components/Header.js");\n/* harmony import */ var _components_VideoSearch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/VideoSearch */ "./assets/js/youtubeLucApp/components/VideoSearch.js");\n/* harmony import */ var _components_CategoryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CategoryList */ "./assets/js/youtubeLucApp/components/CategoryList.js");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n // import youtube from \'./components/YoutubeAPI\';\n\n\n\n // import axios from \'axios\';\n// https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key={YOUR_API_KEY}\n// https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key={YOUR_API_KEY}\n\nconst API_KEY = \'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA\';\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    var _this;\n\n    _this = super(...arguments);\n    this.state = {\n      videos: []\n    };\n\n    this.getVideo =\n    /*#__PURE__*/\n    function () {\n      var _ref = _asyncToGenerator(function* (e) {\n        const videoInfo = e.target.elements.videoInfo.value;\n        e.preventDefault();\n        console.log(videoInfo);\n        const api_call = yield fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${API_KEY}`);\n        const data = yield api_call.json();\n        console.log(data.items[0].id);\n\n        _this.setState({\n          videos: data.items\n        });\n\n        console.log(_this.state.videos);\n      });\n\n      return function (_x) {\n        return _ref.apply(this, arguments);\n      };\n    }();\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container",\n      style: {\n        marginTop: \'1rem\'\n      }\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_VideoSearch__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {\n      getVideo: this.getVideo\n    }), this.state.videos.map(video => {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n        key: video.id,\n        className: "col-sm-3"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {\n        width: "100%",\n        height: "auto",\n        src: "https://www.youtube.com/embed/{video.id}",\n        frameBorder: "0",\n        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",\n        allowFullScreen: true\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, video.id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, video.snippet.title));\n    }));\n  }\n\n}\n\n//# sourceURL=webpack:///./assets/js/youtubeLucApp/App.js?');
    },
    "./assets/js/youtubeLucApp/YoutubeLucApp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _App_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.js */ "./assets/js/youtubeLucApp/App.js");\n\n\n\nconst app = document.getElementById(\'app\');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), app);\n\n//# sourceURL=webpack:///./assets/js/youtubeLucApp/YoutubeLucApp.js?');
    },
    "./assets/js/youtubeLucApp/components/CategoryList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // import youtube from \'./components/YoutubeAPI\';\n\nconst API_KEY = \'AIzaSyDINoVZF1uERv7i9nsC_LaIGZjqFCLC0SA\';\n\nclass CategoryList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super(...arguments);\n    this.state = {\n      name: \'Luc\'\n    };\n  }\n\n  render() {\n    return React.createElement("h1", null, "hello");\n  }\n\n}\n\n/* unused harmony default export */ var _unused_webpack_default_export = (CategoryList);\n\n//# sourceURL=webpack:///./assets/js/youtubeLucApp/components/CategoryList.js?');
    },
    "./assets/js/youtubeLucApp/components/Header.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {\n    className: "navbar navbar-expand-lg"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "navbar-brand",\n    href: "#"\n  }, "youtubeLucApp"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "collapse navbar-collapse",\n    id: "navbarSupportedContent"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {\n    className: "navbar-nav mr-auto"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    className: "nav-item active"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "nav-link",\n    href: "#"\n  }, "Home ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n    className: "sr-only"\n  }, "(current)"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    className: "nav-item"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "nav-link",\n    href: "#"\n  }, "Link")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n    className: "nav-item dropdown"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "nav-link dropdown-toggle",\n    href: "#",\n    id: "navbarDropdown",\n    role: "button",\n    "data-toggle": "dropdown",\n    "aria-haspopup": "true",\n    "aria-expanded": "false"\n  }, "Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "dropdown-menu",\n    "aria-labelledby": "navbarDropdown"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "dropdown-item",\n    href: "#"\n  }, "Action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "dropdown-item",\n    href: "#"\n  }, "Another action"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n    className: "dropdown-divider"\n  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {\n    className: "dropdown-item",\n    href: "#"\n  }, "Something else here")))))));\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Header);\n\n//# sourceURL=webpack:///./assets/js/youtubeLucApp/components/Header.js?');
    },
    "./assets/js/youtubeLucApp/components/VideoSearch.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst VideoSearch = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {\n  onSubmit: props.getVideo\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {\n  type: "text",\n  name: "videoInfo"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Search"));\n\n/* harmony default export */ __webpack_exports__["a"] = (VideoSearch);\n\n//# sourceURL=webpack:///./assets/js/youtubeLucApp/components/VideoSearch.js?');
    }
});
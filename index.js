/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/hitokoto.less":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/hitokoto.less ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":host(.ready) #hito-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n:host(.ready) #link {\n  color: #fff;\n}\n:host(.ready) #hito-source {\n  float: right;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./src/gitalk.less":
/*!*************************!*\
  !*** ./src/gitalk.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/hitokoto.html":
/*!***************************!*\
  !*** ./src/hitokoto.html ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<span id=\"hito-text\"></span>\n<span id=\"hito-source\">\n\t<span id=\"hito-author\"></span>（<a id=\"link\" href=\"\" target=\"_blank\">源自一言</a>）\n</span>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/hitokoto.ts":
/*!*************************!*\
  !*** ./src/hitokoto.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * 一个简单的 Web Components.
 * 用于展示“一言”的相关信息。（https://hitokoto.cn/）
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hitokoto_less_1 = __importDefault(__webpack_require__(/*! !css-loader!postcss-loader!less-loader!./hitokoto.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/hitokoto.less"));
const hitokoto_html_1 = __importDefault(__webpack_require__(/*! ./hitokoto.html */ "./src/hitokoto.html"));
/**
 * 句子类型
 */
var HitokotoType;
(function (HitokotoType) {
    HitokotoType["\u52A8\u753B"] = "a";
    HitokotoType["\u6F2B\u753B"] = "b";
    HitokotoType["\u6E38\u620F"] = "c";
    HitokotoType["\u6587\u5B66"] = "d";
    HitokotoType["\u539F\u521B"] = "e";
    HitokotoType["\u6765\u81EA\u7F51\u7EDC"] = "f";
    HitokotoType["\u5176\u4ED6"] = "g";
    HitokotoType["\u5F71\u89C6"] = "h";
    HitokotoType["\u8BD7\u8BCD"] = "i";
    HitokotoType["\u7F51\u6613\u4E91"] = "j";
    HitokotoType["\u54F2\u5B66"] = "k";
    HitokotoType["\u6296\u673A\u7075"] = "l";
})(HitokotoType || (HitokotoType = {}));
class Hitokoto extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        let styleTag = document.createElement('style');
        styleTag.appendChild(document.createTextNode(hitokoto_less_1.default));
        this.shadowRoot.appendChild(styleTag);
        let tempTag = document.createElement('template');
        tempTag.innerHTML = hitokoto_html_1.default;
        this.shadowRoot.appendChild(tempTag.content);
        this.text = this.shadowRoot.getElementById('hito-text');
        this.author = this.shadowRoot.getElementById('hito-author');
        this.link = this.shadowRoot.getElementById('link');
    }
    /**
     * 更新一言内容
     * @param info
     */
    refresh() {
        return fetch('https://v1.hitokoto.cn').then(resp => resp.json()).then((info) => {
            this.text.textContent = info.hitokoto;
            this.author.textContent = `——  ${info.from_who || ''}「${info.from}」`;
            this.link.href = `https://hitokoto.cn?uuid=${info.uuid}`;
            this.classList.add('ready');
        });
    }
    start() {
        this.refresh().then(() => {
            this.timeout = window.setTimeout(() => {
                this.start();
            }, 60000);
        });
    }
    connectedCallback() {
        this.start();
    }
    disconnectedCallback() {
        window.clearTimeout(this.timeout);
    }
}
window.customElements.define('hitokoto-widget', Hitokoto);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./style.less */ "./src/style.less");
__webpack_require__(/*! ./gitalk.less */ "./src/gitalk.less");
document.addEventListener('DOMContentLoaded', () => {
    var _a;
    document.body.classList.add('loaded');
    //抽屉导航菜单激活项
    (_a = Array.from(document.getElementsByClassName('mdl-navigation__link')).find(e => e.getAttribute('href') === location.pathname)) === null || _a === void 0 ? void 0 : _a.classList.add('active');
    //打开关闭抽屉
    let container = document.getElementsByClassName('main-container')[0];
    document.getElementById('close-drawer').addEventListener('click', () => {
        container.classList.add('drawer-closed');
    });
    document.getElementById('open-drawer-button').addEventListener('click', () => {
        container.classList.remove('drawer-closed');
    });
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
}


/***/ }),

/***/ "./src/style.less":
/*!************************!*\
  !*** ./src/style.less ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi ./src/index.ts ./src/hitokoto.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.ts */"./src/index.ts");
module.exports = __webpack_require__(/*! ./src/hitokoto.ts */"./src/hitokoto.ts");


/***/ })

/******/ });
//# sourceMappingURL=index.js.map
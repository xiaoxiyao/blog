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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sw.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sw.ts":
/*!*******************!*\
  !*** ./src/sw.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference lib="webworker" /> 
// 默认缓存列表，在线也会使用的缓存。不在列表中的会在访问时才缓存
const CACHE_LIST = [
    '//unpkg.com/gitalk@1.2.0/dist/gitalk.min.js',
    '//cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js',
    '//cdn.bootcss.com/material-design-lite/1.3.0/material.min.js',
    '//cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.12.0/build/styles/atom-one-dark.min.css',
    '//at.alicdn.com/t/font_vxmaskcya6dmquxr.css',
    '//unpkg.com/gitalk@1.2.0/dist/gitalk.css',
    '//cdn.bootcss.com/material-design-icons/3.0.1/iconfont/material-icons.min.css',
    '//cdn.bootcss.com/material-design-lite/1.3.0/material.teal-purple.min.css',
    '/index.css',
    '/images/logo.jpg',
    '/images/bg.png',
    '/index.js',
    '/offline/',
    '/home.html',
    '/'
];
// 缓存白名单列表，在线时不使用的缓存，只有离线时才会使用缓存，可以只写域名
const WHITE_LIST = [
    'hitokoto.cn'
];
/**
 * 是否在白名单中
 * @param {string} url
 * @return {boolean}
 */
function isInWhite(url) {
    return WHITE_LIST.some(value => url.includes(value));
}
self.addEventListener('install', (event) => {
    event.waitUntil(caches.open('v2').then(cache => cache.addAll(CACHE_LIST)));
});
self.addEventListener('fetch', (event) => {
    let request = event.request;
    event.respondWith(caches.match(request).then(response => {
        // 没有匹配到缓存时，response为undefined
        if (response && !isInWhite(request.url)) {
            return response;
        }
        else {
            return fetch(request).then(response => {
                return caches.open('v2').then(cache => {
                    cache.put(event.request, response.clone()).catch(error => {
                        console.log(error);
                    });
                    return response;
                });
            }).catch((error) => {
                if (isInWhite(request.url)) {
                    return caches.match(request);
                }
                else {
                    return caches.match('/offline/');
                }
            });
        }
    }));
});


/***/ })

/******/ });
//# sourceMappingURL=sw.js.map
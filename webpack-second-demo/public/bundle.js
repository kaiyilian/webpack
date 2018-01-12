/*! 版权所有，翻版必究 */
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Administrator on 2018/1/2.
 * main.js
 */

// import './main.css';//使用require导入css文件

// require("./main.css")

var greeter = __webpack_require__(1);
document.querySelector("#app").appendChild(greeter());

// import Greeter from "./Greeter";
// document.querySelector("#app").appendChild(greeter.greet());


// import React from 'react';
// import {render} from 'react-dom';

// import Greeter from './Greeter';

// render(<Greeter />, document.getElementById('app'));

// const greeter = require('./Greeter.js');
//
//
// export default {
//     render: function () {
//
//         // document.querySelector("#app").appendChild(Greeter.greet());
//         console.log(document.querySelector("#app"));
//         document.querySelector("#app").text(123);
//
//         return "aa"
//     }
// }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by Administrator on 2018/1/2.
 * Greet.js
 */

var config = __webpack_require__(2);

module.exports = function () {
  var greet = document.createElement('div');
  greet.textContent = config.greetText;
  return greet;
};

// import config from './config.json';
// export default {
//     methods: {
//         greet: function () {
//
//             let greet = document.createElement('div');
//             greet.textContent = config.greetText;
//             return greet;
//
//         }
//     }
// }

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {"greetText":"this is greet text！"}

/***/ })
/******/ ]);
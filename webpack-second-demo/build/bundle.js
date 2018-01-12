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
eval("\n\n/**\r\n * Created by Administrator on 2018/1/2.\r\n * main.js\r\n */\n\n// import './main.css';//使用require导入css文件\n\n// require(\"./main.css\")\n\nvar greeter = __webpack_require__(1);\ndocument.querySelector(\"#app\").appendChild(greeter());\n\n// import Greeter from \"./Greeter\";\n// document.querySelector(\"#app\").appendChild(greeter.greet());\n\n\n// import React from 'react';\n// import {render} from 'react-dom';\n\n// import Greeter from './Greeter';\n\n// render(<Greeter />, document.getElementById('app'));\n\n// const greeter = require('./Greeter.js');\n//\n//\n// export default {\n//     render: function () {\n//\n//         // document.querySelector(\"#app\").appendChild(Greeter.greet());\n//         console.log(document.querySelector(\"#app\"));\n//         document.querySelector(\"#app\").text(123);\n//\n//         return \"aa\"\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbImdyZWV0ZXIiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7O0FBS0E7O0FBRUE7O0FBRUEsSUFBTUEsVUFBVSxtQkFBQUMsQ0FBUSxDQUFSLENBQWhCO0FBQ0FDLFNBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDSixTQUEzQzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTgvMS8yLlxyXG4gKiBtYWluLmpzXHJcbiAqL1xyXG5cclxuLy8gaW1wb3J0ICcuL21haW4uY3NzJzsvL+S9v+eUqHJlcXVpcmXlr7zlhaVjc3Pmlofku7ZcclxuXHJcbi8vIHJlcXVpcmUoXCIuL21haW4uY3NzXCIpXHJcblxyXG5jb25zdCBncmVldGVyID0gcmVxdWlyZSgnLi9HcmVldGVyLmpzJyk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXBwXCIpLmFwcGVuZENoaWxkKGdyZWV0ZXIoKSk7XHJcblxyXG5cclxuLy8gaW1wb3J0IEdyZWV0ZXIgZnJvbSBcIi4vR3JlZXRlclwiO1xyXG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKS5hcHBlbmRDaGlsZChncmVldGVyLmdyZWV0KCkpO1xyXG5cclxuXHJcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuLy8gaW1wb3J0IEdyZWV0ZXIgZnJvbSAnLi9HcmVldGVyJztcclxuXHJcbi8vIHJlbmRlcig8R3JlZXRlciAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuXHJcbi8vIGNvbnN0IGdyZWV0ZXIgPSByZXF1aXJlKCcuL0dyZWV0ZXIuanMnKTtcclxuLy9cclxuLy9cclxuLy8gZXhwb3J0IGRlZmF1bHQge1xyXG4vLyAgICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbi8vXHJcbi8vICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIikuYXBwZW5kQ2hpbGQoR3JlZXRlci5ncmVldCgpKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKSk7XHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIikudGV4dCgxMjMpO1xyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiBcImFhXCJcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/**\r\n * Created by Administrator on 2018/1/2.\r\n * Greet.js\r\n */\n\nvar config = __webpack_require__(2);\n\nmodule.exports = function () {\n  var greet = document.createElement('div');\n  greet.textContent = config.greetText;\n  return greet;\n};\n\n// import config from './config.json';\n// export default {\n//     methods: {\n//         greet: function () {\n//\n//             let greet = document.createElement('div');\n//             greet.textContent = config.greetText;\n//             return greet;\n//\n//         }\n//     }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvR3JlZXRlci5qcz9lYjg0Il0sIm5hbWVzIjpbImNvbmZpZyIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwiZ3JlZXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImdyZWV0VGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7QUFLQSxJQUFJQSxTQUFTLG1CQUFBQyxDQUFRLENBQVIsQ0FBYjs7QUFFQUMsT0FBT0MsT0FBUCxHQUFpQixZQUFZO0FBQ3pCLE1BQUlDLFFBQVFDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBRixRQUFNRyxXQUFOLEdBQW9CUCxPQUFPUSxTQUEzQjtBQUNBLFNBQU9KLEtBQVA7QUFDSCxDQUpEOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE4LzEvMi5cclxuICogR3JlZXQuanNcclxuICovXHJcblxyXG52YXIgY29uZmlnID0gcmVxdWlyZShcIi4vY29uZmlnLmpzb25cIik7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZ3JlZXQudGV4dENvbnRlbnQgPSBjb25maWcuZ3JlZXRUZXh0O1xyXG4gICAgcmV0dXJuIGdyZWV0O1xyXG59O1xyXG5cclxuLy8gaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJztcclxuLy8gZXhwb3J0IGRlZmF1bHQge1xyXG4vLyAgICAgbWV0aG9kczoge1xyXG4vLyAgICAgICAgIGdyZWV0OiBmdW5jdGlvbiAoKSB7XHJcbi8vXHJcbi8vICAgICAgICAgICAgIGxldCBncmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgICAgICAgICBncmVldC50ZXh0Q29udGVudCA9IGNvbmZpZy5ncmVldFRleHQ7XHJcbi8vICAgICAgICAgICAgIHJldHVybiBncmVldDtcclxuLy9cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL0dyZWV0ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("module.exports = {\"greetText\":\"this is greet text！\"}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29uZmlnLmpzb24/MTE1MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0ge1wiZ3JlZXRUZXh0XCI6XCJ0aGlzIGlzIGdyZWV0IHRleHTvvIFcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb25maWcuanNvblxuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);
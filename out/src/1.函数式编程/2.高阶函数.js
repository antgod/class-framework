/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	// Higher-Order Functions
	// 高阶函数，此类函数可以接收其他函数作为参数，也可以返回一个函数作为返回值：

	'use strict';

	var filter = function filter(pred, xs) {
	  var result = [];
	  for (var idx = 0; idx < xs.length; idx++) {
	    if (pred(xs[idx])) {
	      result.push(xs[idx]);
	    }
	  }
	  return result;
	};

	var is = function is(type) {
	  return function (x) {
	    return Object(x) instanceof type;
	  };
	};

	filter(is(Number), [0, '1', 2, null]);
	// => [0, 2]

/***/ }
/******/ ]);
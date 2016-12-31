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

	// Setoid
	// Setoid，拥有 equals 函数的数据类型，可用于与其他同类型的数据进行比较。为 Array 类型添加 equals 函数使其成为 Setoid：

	"use strict";

	Array.prototype.equals = function (arr) {
	  var len = this.length;
	  if (len !== arr.length) {
	    return false;
	  }
	  for (var i = 0; i < len; i++) {
	    if (this[i] !== arr[i]) {
	      console.log(222, this[i]);
	      return false;
	    }
	  }
	  return true;
	};
	console.log([1, 2].equals([1, 2]));
	// => true
	console.log([1, 2].equals([0]));
	// => false

/***/ }
/******/ ]);
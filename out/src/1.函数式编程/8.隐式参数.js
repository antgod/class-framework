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

	// Point-Free Style
	// point-free style 是一种不显式向函数传递参数的代码风格，通常需要柯里化和高阶函数来实现
	"use strict";

	var map = function map(fn) {
	  return function (list) {
	    return list.map(fn);
	  };
	};
	var add = function add(a) {
	  return function (b) {
	    return a + b;
	  };
	};

	// Not points-free
	// numbers 是一个显式传递的参数
	var incrementAll = function incrementAll(numbers) {
	  return map(add(1))(numbers);
	};
	console.log(incrementAll([1, 2, 3]));

	// Points-free
	// add(1) 的返回值隐式传递给了 map，作为 map 的 list 参数
	var incrementAll2 = map(add(1));
	console.log(incrementAll2([1, 2, 3]));

/***/ }
/******/ ]);
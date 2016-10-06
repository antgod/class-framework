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

	// Partial Application
	// 偏函数，在原函数的基础上预填充（pre-filling）部分参数并返回的新函数

	"use strict";

	var partial = function partial(fn) {
	  for (var _len = arguments.length, before = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    before[_key - 1] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return function () {
	      for (var _len3 = arguments.length, after = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        after[_key3] = arguments[_key3];
	      }

	      return fn.apply(undefined, before.concat(args, after));
	    };
	  };
	};

	var add = function add() {
	  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
	    args[_key4] = arguments[_key4];
	  }

	  return args.reduce(function (last, next) {
	    return last + next;
	  });
	};

	console.log(partial(add, 1, 2, 3)(4, 5, 6)(7, 8, 9, 10));

/***/ }
/******/ ]);
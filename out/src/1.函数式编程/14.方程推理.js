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

	// Equational Reasoning
	// 如果一个应用由多个表达式组合而成，且每个表达式都没有 side effect，那么这个应用就可以由部分推导出整体。

	'use strict';

	var first = function first(name) {
	  return '姓：' + name.first;
	};

	var last = function last(name) {
	  return '名：' + name.last;
	};

	var concat = function concat() {
	  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
	    fns[_key] = arguments[_key];
	  }

	  return function () {
	    for (var _len2 = arguments.length, arg = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      arg[_key2] = arguments[_key2];
	    }

	    return fns.reduce(function (last, next) {
	      if (typeof next === 'function') {
	        last += next.apply(undefined, arg);
	        return last;
	      }
	    }, '');
	  };
	};

	console.log(concat(first, last)({
	  first: 'li',
	  last: 'hongji'
	}));

/***/ }
/******/ ]);
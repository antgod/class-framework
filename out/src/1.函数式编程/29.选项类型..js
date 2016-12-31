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

	// Option
	// Option，是 union type 的特例，它只包含两种类型 Some 和 None。Option 常用于表示那些不确定是否返回值的函数：

	// Naive definition
	'use strict';

	var Some = function Some(v) {
	  return {
	    val: v,
	    map: function map(f) {
	      return Some(f(this.val));
	    },
	    chain: function chain(f) {
	      return f(this.val);
	    }
	  };
	};
	var None = function None() {
	  return {
	    map: function map(f) {
	      return this;
	    },
	    chain: function chain(f) {
	      return this;
	    }
	  };
	};
	// maybeProp :: (String, {a}) -> Option a
	var maybeProp = function maybeProp(key, obj) {
	  return typeof obj[key] === 'undefined' ? None() : Some(obj[key]);
	};

	console.log(maybeProp('name', { name: 'lhj' }).chain(function (val) {
	  return '我名字叫：' + val;
	}));

/***/ }
/******/ ]);
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

	// Comonad
	// Comonad，拥有 extract 和 extend 函数的数据类型：

	"use strict";

	var CoIdentity = function CoIdentity(v) {
	  return {
	    val: v,
	    extract: function extract() {
	      return this.val;
	    },
	    extend: function extend(f) {
	      return CoIdentity(f(this));
	    }
	  };
	};
	// extract() 可以从 functor 中取值
	console.log(CoIdentity(1).extract());
	// => 1
	// extend() 可以返回新的 comonad
	console.log(CoIdentity(1).extend(function (co) {
	  return co.extract() + 1;
	}));
	// => CoIdentity(2)

/***/ }
/******/ ]);
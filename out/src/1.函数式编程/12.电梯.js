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

	// Lift
	// lift 发生在你将值放入 functor 的时候，如果你将函数 lift 进了 Applicative Functor，
	// 那么就可以使用这个函数处理传递给这个 functor 的值。某些 lift 的实现拥有 lift 或 liftA2 函数，便于在 functor 上执行相关的函数：

	"use strict";

	var mult = function mult(a, b) {
	  return a * b;
	};

	var lift = function lift(fn) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return args.reduce(function (last, next) {
	      return mult(last, next.reduce(function (last, next) {
	        return mult(last, next);
	      }, 1));
	    }, 1);
	  };
	};

	var liftedMult = lift(mult);
	console.log(liftedMult([1, 2], [3], [4, 5]));

/***/ }
/******/ ]);
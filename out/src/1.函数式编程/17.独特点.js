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

	// Monoid
	// Monoid，通过一个函数“合并”两个同类型数据后返回相同的数据类型。最简单的 monoid 就是两数相加：

	"use strict";

	var identity = function identity(num) {
	  return num + 0;
	};

	console.log(identity(6));
	// => 1
	// 这里的 0 就是恒等式

	// Monoid 还必须满足结合律
	//1 + (2 + 3) === (1 + 2) + 3;
	// => true

	// 数组的 concat() 操作可以构造一个 monoid
	console.log([1, 2].concat([3, 4]));
	// => [1, 2, 3, 4]
	// 空数组可以视为是恒等式
	console.log([1, 2].concat([]));
	// => [1, 2]

/***/ }
/******/ ]);
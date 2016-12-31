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

	// Isomorphism
	// 同构转换，相同数据下不同结构之间的转换。举例来说，2D 坐标既可以存储为数组 [2, 3] 也可以存储为 { x: 2, y: 3 }：

	"use strict";

	var pairToCoords = function pairToCoords(pair) {
	  return { x: pair[0], y: pair[1] };
	};
	var coordsToPair = function coordsToPair(coords) {
	  return [coords.x, coords.y];
	};
	coordsToPair(pairToCoords([1, 2]));
	// => [1, 2]
	console.log(pairToCoords(coordsToPair({ x: 1, y: 2 })));
	// => { x: 1, y: 2 }

/***/ }
/******/ ]);
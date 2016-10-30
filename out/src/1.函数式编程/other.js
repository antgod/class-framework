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

	// Value
	// 任何可以赋值给变量的值都可以称为 value
	'use strict';

	Object.freeze({ name: 'John', age: 30 }); // The `freeze` function enforces immutability.

	// 常量，初始化后不能再次执行赋值操作的数据类型：

	var five = 5;
	var john = { name: 'John', age: 30 };

	// 因为常量不可变，所以下面表达式一定为 true
	console.log(john.age + five === ({ name: 'John', age: 30 }).age + 5);
	// 常量具有 referentially transparent 的特性，也就是说将程序中出现的常量替换为它们实际的值，并不会影响程序的结果。

	// Referential Transparency
	// 如果一个表达式可以被替换为实际的值而不影响程序的运行结果，那么我们就说这个表达式是 referentially transparent：

	var greet = function greet() {
	  return "Hello World!";
	};

/***/ }
/******/ ]);
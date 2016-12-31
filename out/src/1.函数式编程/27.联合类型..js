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

	// Union type
	// 联合类型，表示将多个类型信息放入一个类型变量中。JavaScript 中没有类型机制，所以让我们假设有一个类型变量 NumOrString，
	// 它表示 Number 或者 String 类型。+ 运算符在 JavaScript 中既可用于 Number，也可用于 String，所以我们使用 NumOrString 定义 + 的输入输出类型信息：

	// add :: (NumOrString, NumOrString) -> NumOrString
	'use strict';

	var add = function add(a, b) {
	  return a + b;
	};
	add(1, 2);
	// => Number 3
	add('Foo', 2);
	// => String "Foo2"
	add('Foo', 'Bar');
	// => String "FooBar"

/***/ }
/******/ ]);
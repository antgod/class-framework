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

	// Side effects
	// 如果函数或表达式与其自身作用域之外的可变数据（mutable data）发生了读写操作，那么此时函数和表达式就产生了副作用：

	"use strict";

	var name = 'MyName';
	var greeting = undefined;
	var greet = function greet() {
	  return greeting = "Hi, " + name;
	};
	// greet() 执行时更改了外部环境的变量
	greet();
	console.log(greeting);

	// => "Hi, Brianne"
	// new Date() 是可变数据
	var differentEveryTime = new Date();
	// 这里表示系统接收到的输入值是不确定的，是一种可变数据
	console.log("IO is a side effect!");

/***/ }
/******/ ]);
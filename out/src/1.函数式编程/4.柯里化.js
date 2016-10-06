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

	// Currying
	// 柯里化，将一个接收多个参数的函数转化为单参数函数的方式，转化后的函数每次只接收一个参数，然后返回一个新函数，
	// 新函数可以继续接收参数，直到接收到所有的参数：

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var compute = function compute(sign) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return args.reduce(function (last, next) {
	      return eval("" + last + sign + next);
	    });
	  };
	};

	console.log(compute("+")(1, 2, 3, 4, 5));
	console.log(compute("-")(1, 2, 3, 4, 5));
	console.log(compute("*")(1, 2, 3, 4, 5));
	console.log(compute("/")(1, 2, 3, 4, 5));

	var node = new Object();
	var props = { type: 'input', value: '123' };
	var compose = function compose(node) {
	  return function (props) {
	    return _extends({}, node, props);
	  };
	};

	console.log(compose(node)(props));

/***/ }
/******/ ]);
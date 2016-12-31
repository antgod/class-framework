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

	// Type Signatures
	// 类型签名，在 JavaScript 中通常会在注释中写明当前函数的参数类型和返回值类型，虽然各种语言的类型签名不同，但通常与以下示例相似：

	// functionName :: firstArgType -> secondArgType -> returnType
	// add :: Number -> Number -> Number
	"use strict";

	var add = function add(x) {
	  return function (y) {
	    return x + y;
	  };
	};
	// increment :: Number -> Number
	var increment = function increment(x) {
	  return x + 1;
	};

	// 如果某个函数要作为参数传递给其他函数，那么在类型签名中需要使用括号包裹起这个函数的类型信息：
	// call :: (a -> b) -> a -> b
	var call = function call(f) {
	  return function (x) {
	    return f(x);
	  };
	};

	// 上面示例中的 a、b 表示参数可以是任何数据类型的，但在下面的代码中，map 的类型签名表示:
	// f 是一个函数，f 接收一个 a 类型的参数，返回一个 b 类型的值，同时 map 是一个柯里化的函数，
	// 其第二个接收一个列表形式的 a 类型参数，并返回列表形式的 b 类型参数：

	// map :: (a -> b) -> [a] -> [b]
	var map = function map(f) {
	  return function (list) {
	    return list.map(f);
	  };
	};

/***/ }
/******/ ]);
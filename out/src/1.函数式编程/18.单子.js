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

	// Monad
	// Monad，是一个拥有 of 和 chain 函数的数据类型，chain 类似于 map，但它会输出非嵌套形式的结果：

	'use strict';

	Array.prototype.chain = function (fn) {
	  var chain = function chain(arr) {
	    var r = [];
	    arr.forEach(function (item) {
	      var rs = fn(item);
	      if (rs.length > 1) {
	        r = r.concat(chain(rs));
	      } else {
	        r = r.concat(rs);
	      }
	    });
	    return r;
	  };

	  return chain(this);
	};

	console.log(['cat,dog', 'fish,bird'].chain(function (a) {
	  return a.split(',');
	}));
	// => ['cat', 'dog', 'fish', 'bird']
	console.log(['cat,dog', 'fish,bird'].map(function (a) {
	  return a.split(',');
	}));
	// => [['cat', 'dog'], ['fish', 'bird']
	//在其他函数式编程语言中，of 也被称为 return，chain 也被称为 flatmap 和 bind。

/***/ }
/******/ ]);
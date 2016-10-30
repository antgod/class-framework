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

	'use strict';

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

	var inject = function inject(fn) {
	  return function (args) {
	    var fnArgs = fn.toString().match(/^(?=function\s)*[^\(]*\(\s*([^\)]*)\)/m)[1].replace(/ /g, '').split(',');
	    return fn.apply(undefined, _toConsumableArray(Object.keys(args).map(function (key, index) {
	      return args[fnArgs[index]];
	    })));
	  };
	};

	var http = {
	  host: 'localhot',
	  port: '8080'
	};

	var service = {
	  addUser: function addUser() {
	    return null;
	  }
	};

	var route = {
	  'name': 'index',
	  'path': '/index.html',
	  'template': 'artTemplate',
	  'title': "首页"
	};

	inject(function (http, service, route) {
	  return console.log(http, service, route);
	})({
	  http: http, service: service, route: route
	});

/***/ }
/******/ ]);
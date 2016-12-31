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

	function switcher(map) {
	  return function (arg) {
	    var fn = map[arg.payload.type] || map['default'];
	    if (fn) {
	      return fn(arg);
	    }
	  };
	}

	function compositeSaveStateChanged() {
	  console.log('compositeSaveStateChanged', arguments);
	}

	function backendLogicSaveStateChanged() {
	  console.log('backendLogicSaveStateChanged', arguments);
	}

	function navigatorSaveStateChanged() {
	  console.log('navigatorSaveStateChanged', arguments);
	}

	var close = switcher({
	  component: compositeSaveStateChanged,
	  backendLogic: backendLogicSaveStateChanged,
	  'default': navigatorSaveStateChanged
	});

	close({
	  payload: {
	    type: 'component'
	  }
	});

/***/ }
/******/ ]);
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

	function wrapListenerWithMiddleware(defaultListeners, middlewares) {
	  return middlewares.reduce(function (listeners, middleware) {
	    return middleware(listeners);
	  }, defaultListeners);
	}

	function createListenerMiddleware(middleware) {
	  for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    rest[_key - 1] = arguments[_key];
	  }

	  return function (listeners) {
	    return middleware.apply(undefined, [listeners].concat(rest));
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

	var listenPostMessageActions = {
	  'preview/loadPage': function previewLoadPage(_ref) {
	    var payload = _ref.payload;

	    console.log('preview/loadPage', payload);
	  }
	};

	var createPostMessage = function createPostMessage() {
	  var listeners = [];
	  return {
	    dispatch: function dispatch(event, data) {
	      console.log('postMessage信息', event, data);
	      // 需要在浏览器环境执行
	      // window.postMessage(ar,gs, "*")
	      listeners.forEach(function (_ref2) {
	        var event = _ref2.event;
	        var callback = _ref2.callback;

	        callback(data);
	      });
	    },
	    listen: function listen(event, callback) {
	      listeners.push({ event: event, callback: callback });
	    }
	  };
	};

	var _createPostMessage = createPostMessage();

	var dispatch = _createPostMessage.dispatch;
	var listen = _createPostMessage.listen;

	function concatWithPostMessage(oldListeners, postMessageMap) {
	  return Object.keys(postMessageMap).reduce(function (newListeners, originKey) {
	    var oldFn = newListeners[originKey];

	    listen(originKey, function (payload) {
	      postMessageMap[originKey]({ payload: payload });
	    });

	    // dispatch message
	    newListeners[originKey] = function (arg) {
	      if (oldFn) oldFn(arg);
	      dispatch(originKey, arg.payload);
	    };
	    return newListeners;
	  }, oldListeners);
	}

	var close = wrapListenerWithMiddleware({
	  component: compositeSaveStateChanged,
	  backendLogic: backendLogicSaveStateChanged,
	  'default': navigatorSaveStateChanged
	}, [createListenerMiddleware(concatWithPostMessage, listenPostMessageActions)]);

	close['preview/loadPage']({ payload: '随便写点参数' });

/***/ }
/******/ ]);
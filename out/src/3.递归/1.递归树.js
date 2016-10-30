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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _fs = __webpack_require__(1);

	var _fs2 = _interopRequireDefault(_fs);

	var config = {
		text: '节点1',
		children: [{
			text: '节点1-1',
			children: [{
				text: '节点1-1-1',
				children: []
			}]
		}, {
			text: '节点2'
		}]
	};

	var renderTree = function renderTree(leaf, path) {
		var subLeafs = leaf.children ? leaf.children.map(function (subLeaf, i) {
			var subPath = [path, 'children', i].join('.');
			return renderTree(leaf.children[i], subPath);
		}).join('') : '';
		return '\n\t\t<li class="node">\n\t\t\t<a href="#">' + leaf.text + '(' + path + ')</a>\n\t\t\t<ul>\n\t\t\t\t' + subLeafs + '\n\t\t\t</ul>\n\t\t</li>\n\t';
	};

	_fs2['default'].writeFileSync('./tree.html', '<!DOCTYPE html>\n\t\t<html lang="en">\n\t\t\t<head>\n      \t<meta charset="UTF-8">                \n\t\t\t</head>                                      \n\t\t\t<body>\n\t\t\t\t<ul class="tree">\n\t\t\t\t\t' + renderTree(config, 'config') + '\n\t\t\t\t</ul>\n\t\t\t</body>\n\t\t</html>');

/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);
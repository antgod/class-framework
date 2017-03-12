'use strict';

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends5 = require('babel-runtime/helpers/extends');

var _extends6 = _interopRequireDefault(_extends5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = require('underscore');

var people = [{ name: 'Rick', age: 30, sex: 'man' }, { name: 'Lucy', age: 24, sex: 'woman' }, { name: 'Lily', age: 40, sex: 'woman' }];

console.log('underscore', _.sortBy(people, function (p) {
  return p.age;
}));
console.log('underscore', _.groupBy(people, function (p) {
  return p.sex;
}));
console.log('underscore', _.countBy(people, function (p) {
  return p.sex;
}));

var sortBy = function sortBy(datas, fn) {
  return datas.sort(function (d1, d2) {
    return fn(d1) - fn(d2);
  });
};

console.log('sortBy', sortBy(people, function (p) {
  return p.age;
}));

var groupBy = function groupBy(datas, fn) {
  return datas.reduce(function (last, data) {
    return last[fn(data)] ? (0, _extends6.default)({}, last, (0, _defineProperty3.default)({}, '' + fn(data), [].concat((0, _toConsumableArray3.default)(last[fn(data)]), [data]))) : (0, _extends6.default)({}, last, (0, _defineProperty3.default)({}, '' + fn(data), [data]));
  }, {});
};

console.log('groupBy', groupBy(people, function (p) {
  return p.sex;
}));

var countBy = function countBy(datas, fn) {
  return datas.reduce(function (last, data) {
    return (0, _extends6.default)({}, last, (0, _defineProperty3.default)({}, '' + fn(data), last[fn(data)] ? ++last[fn(data)] : 1));
  }, {});
};

console.log('countBy', countBy(people, function (p) {
  return p.sex;
}));
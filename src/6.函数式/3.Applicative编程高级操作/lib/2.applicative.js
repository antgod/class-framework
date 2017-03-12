'use strict';

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cat() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var head = rest[0],
      tail = rest.slice(1);

  return head.concat.apply(head, (0, _toConsumableArray3.default)(tail));
}

console.log(cat([1, 2, 3], [4, 5], [6, 7, 8]));

function construct(head) {
  for (var _len2 = arguments.length, tail = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    tail[_key2 - 1] = arguments[_key2];
  }

  return cat.apply(undefined, [[head]].concat(tail));
}

console.log(construct(0, [1, 2, 3], [4, 5, 6]));

function mapcat(coll, fun) {
  return cat.apply(undefined, (0, _toConsumableArray3.default)(coll.map(fun)));
}

console.log(mapcat([1, 2, 3], function (item) {
  return construct(item, [',']);
}));

function butLast() {
  for (var _len3 = arguments.length, coll = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    coll[_key3] = arguments[_key3];
  }

  return coll.slice(0, -1);
}

function interpose(coll, sep) {
  return butLast.apply(undefined, (0, _toConsumableArray3.default)(mapcat(coll, function (item) {
    return construct(item, [sep]);
  })));
}

console.log(interpose([1, 2, 3], ','));
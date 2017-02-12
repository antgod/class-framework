const Type = {};

const types = ['String', 'Array', 'Number', 'Object', 'Function', 'Date', 'RegExp']

//闭包应用场景之一：判断数据类型函数
for (var i = 0, type; type = ['String', 'Array', 'Number', 'Object', 'Function', 'Date', 'RegExp'][i++];) {
  (function(type) {
    Type["is" + type] = function(obj) {
      return Object.prototype.toString.call(obj) === '[object ' + type + ']';
    }
  })(type);
}

// 使用函数式实现
// types.map(type=> Type[['is', type].join('')] = (obj => Object.prototype.toString.call(obj) === '[object ' + type + ']'));

console.log(Type.isArray([]));
console.log(Type.isNumber(10));
console.log(Type.isString("aaa"));
console.log(Type.isObject({}));
console.log(Type.isFunction(Type.isFunction));
console.log(Type.isDate(new Date()));
console.log(Type.isRegExp(/\s/));
const types = ['String', 'Array', 'Number', 'Object', 'Function', 'Date', 'RegExp']

// 使用es5实现
const Type = {}
for (var i = 0, type; type = types[i++];) {
  (function (type) {
    Type['is' + type] = obj => Object.prototype.toString.call(obj) === '[object ' + type + ']'
  })(type)
}

test(Type)

// 使用es6实现
const Type1 = {}
types.map(type => Type1[`is${type}`] = (obj) => Object.prototype.toString.call(obj) === '[object ' + type + ']')

test(Type1)

function test(Type) {
  console.log(Type.isArray([]))
  console.log(Type.isNumber(10))
  console.log(Type.isString('aaa'))
  console.log(Type.isObject({}))
  console.log(Type.isFunction(Type.isFunction))
  console.log(Type.isDate(new Date()))
  console.log(Type.isRegExp(/\s/))
}
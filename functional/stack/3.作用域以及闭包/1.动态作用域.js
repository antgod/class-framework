const _ = require('../util/understore')

// 动态作用域，任何JS核心引擎中，有个全局查找表
const globals = {}

const makeBind = resolver => (name, val) => {
  const stack = globals[name] || []
  globals[name] = resolver(stack, val)
  return globals
}

const stackBinder = makeBind((stack, val) => {
  stack.push(val)
  return stack
})

const stackUnBinder = makeBind((stack) => {
  stack.pop()
  return stack
})

const dynmicLookup = (name) => {
  const slot = globals[name] || []
  return _.last(slot)
}

stackBinder('a', 1)
stackBinder('a', 2)
stackBinder('b', 100)
console.log(dynmicLookup('a'))
stackUnBinder('a')
console.log(dynmicLookup('a'))

const f = () => {
  return dynmicLookup('a')
}

const g = () => {
  stackBinder('a', 'g')
  return f()
}

console.log(f())
// 动态作用域的缺点，任何绑定值，在确定调用函数之前，都是不可知的。
console.log(g())

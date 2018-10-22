const exist = obj => !!obj

const exec = (condition, handle) => (...args) => exist(condition) ? handle(...args) : undefined

const invoker = name => (target, ...args) => {
  const targetMethod = target[name]
  return exec(targetMethod, targetMethod.bind(target))(...args)
}

console.log(invoker('reverse')([1, 2, 3]))

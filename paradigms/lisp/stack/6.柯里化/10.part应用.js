const validator = (handle, message) => {
  const fun = (...args) => handle(...args)
  fun.message = message
  return fun
}

const aMap = obj => typeof obj === 'object'

console.log(validator(aMap, 'arg must be a map')(42))

const zero = validator(n => n === 0, 'cannot by zero')
const number = validator(n => typeof n === 'number', 'args must be a number')

const sqr = (n) => {
  if (zero(n)) return [zero.message]
  if (!number(n)) return [number.message]
  return []
}

console.log(sqr(10), sqr(0), sqr(''))
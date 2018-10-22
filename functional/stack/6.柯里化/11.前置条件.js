const _ = require('underscore')

function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

function mapcat(coll, fun) {
  return cat(...coll.map(fun))
}

const condition = (...validators) => (handle, arg) => {
  const errors = mapcat(validators, (validator) => {
    return validator(arg) ? [] : [validator.message]
  })
  if (errors.length) {
    throw new Error(errors)
  }
  return handle(arg)
}

// test
const validator = (handle, message) => {
  const fun = (...args) => {
    return handle(...args)
  }
  fun.message = message
  return fun
}

const zero = validator(n => n === 0, 'cannot by zero')
const number = validator(n => typeof n === 'number', 'args must be a number')
const less0 = validator(n => n <= 0, 'args must gen then 0')

const complement = (fun) => {
  const final = (...args) => !fun(...args)
  return Object.assign(final, fun)
}

const sqrPre = condition(complement(zero), number, complement(less0))
const handle = args => console.log(args)

sqrPre(handle, 0)


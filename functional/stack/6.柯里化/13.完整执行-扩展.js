const _ = require('underscore')

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

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

// test
const hasKeys = (...keys) => {
  const fun = obj => keys.every(key => obj[key] !== undefined)
  fun.message = `object must have value of keys: ${keys}`
  return fun
}
const validateCommand = condition(validator(_.isObject, 'arg must be a map'), hasKeys('msg', 'type'))

const createCommand = partial(validateCommand, _.identity)

// console.log(createCommand({}))
// console.log(createCommand(21))
console.log(createCommand({ msg: '', type: '' }))

// 组合
const createLunchCommand = partial(condition(validator(hasKeys('count'), 'arg must have key count')), createCommand)
console.log(createLunchCommand({}))
// => Error: arg must have key count

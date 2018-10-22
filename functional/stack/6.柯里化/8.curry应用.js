const curry2 = fun => second => first => fun(first, second)

const greaterThan = curry2((first, second) => first > second)
const lessThan = curry2((first, second) => first < second)

const checker = (...validators) => (...args) => {
  return validators.reduce((errors, validator) => {
    return validator(...args) ? errors : [...errors, validator.message]
  }, [])
}

const validator = (handle, message) => {
  const fun = (...args) => handle(...args)
  fun.message = message
  return fun
}

// test
const num10to20 = checker(validator(greaterThan(10), 'arg must be greater than 10'), validator(lessThan(20), 'arg must be less than 20'))

console.log(num10to20(15))

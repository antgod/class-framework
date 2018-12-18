const grund = (checker, handle, errorCallback = args => args) => (...args) => {
  const result = checker(...args)
  if (result.length) {
    errorCallback(result)
  } else {
    return handle(...args)
  }
}

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

const hasKeys = (...keys) => {
  const fun = obj => keys.every(key => obj[key] !== undefined)
  fun.message = `object must have value of keys: ${keys}`
  return fun
}

// test
const v1 = (object) => {
  return object.a === 1
}

const v2 = (object) => {
  return object.b === 2
}

const v3 = (object) => {
  return object.c === true
}

// test
const c1 = checker(validator(v1, 'error1'), validator(v2, 'error2'), validator(v3, 'error3'), hasKeys('a', 'b', 'c', 'd'))

const object = {
  a: 1,
  b: 2,
  c: true,
}

console.log(c1(object))

const handle = (...args) => {
  console.log('继续处理', args)
  return '返回正确'
}

grund(c1, handle, errors => console.log(errors))(object)

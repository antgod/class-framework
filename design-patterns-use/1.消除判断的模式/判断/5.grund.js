

const grund = (checker, handle, errorHandle) => (...args) => {
  if (checker(...args)) {
    return handle(...args)
  } else {
    errorHandle(...args)
  }
}
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
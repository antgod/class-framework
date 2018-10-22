const _ = require('underscore')

const keys = Object.keys

// 非空校验
const trust = (input) => {
  if (_.isObject(input)) {
    return !!keys(input).length
  }
  return !!input
}

module.exports = {
  trust,
}

const some = (...funs) => (...args) => funs.reduce((last, fun) => {
  return last === undefined ? fun(...args) : last
}, undefined)
module.exports = some

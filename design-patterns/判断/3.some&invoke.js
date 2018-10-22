const some = (...funs) => (...args) => funs.reduce((last, fun) => last === undefined ? fun(...args) : last, undefined)

const invoke = (obj, fun, ...args) => obj[fun] !== undefined ? obj[fun](...args) : undefined
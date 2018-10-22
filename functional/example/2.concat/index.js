const concat = (...funcs) => (...args) => funcs.reduce((returns, func) => [...returns, func(...args)], [])
module.exports = concat

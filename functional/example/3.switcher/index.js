const switcher = map => (type, ...args) => { return map[type] !== undefined ? map[type](...args) : undefined }
module.exports = switcher


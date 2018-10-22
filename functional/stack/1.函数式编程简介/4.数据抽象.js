const csv = `name, age, hair
  merble,  , red
  bob, 64, blonde`

const keys = Object.keys
const reduce = (obj, handler, initial = {}) => {
  return keys(obj).reduce((last, key) => {
    return handler(last, obj[key], key)
  }, initial)
}
const chain = actions => (array) => {
  return reduce(actions, (last, handle, action) => {
    return last[action](handle)
  }, array)
}
const split = (str, separator) => str.split(separator)
const trim = str => str.trim()
const trust = str => !!str.trim()
const csv2Table = str => split(str, '\n').map(row => chain({ filter: trust, map: trim })(split(row, ',')))
console.log(csv2Table(csv))

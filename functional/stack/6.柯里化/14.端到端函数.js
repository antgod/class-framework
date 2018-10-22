const _ = require('underscore')

const isntString = _.compose(x => !x, _.isString)

console.log(isntString(1))
console.log(isntString(''))

function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

const splat = handle => (array) => handle(...array)
const mapcat = _.compose(splat(cat), _.map)


console.log(mapcat([[1, 2], [3], [4, 5]], _.identity))
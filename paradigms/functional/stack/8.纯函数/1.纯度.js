const _ = require('underscore')

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

const rand = partial(_.random, 1)

const range = (times) => {
  const ranges = []
  for (let idx = 0; idx < times; idx++) {
    ranges.push(null)
  }
  return ranges
}

const repeatness = (createValue, time) => {
  return range(time).map((value, index) => createValue(index))
}

console.log(rand(10))

console.log(repeatness(partial(rand, 10), 10))

console.log(_.take(repeatness(partial(rand, 10), 100), 5))
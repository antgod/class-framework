const finder = (data, need, compare) => {
  return data.reduce((last, next) => {
    return compare(last) === need(compare(last), compare(next)) ? last : next
  })
}

const identity = prop => prop

console.log(finder([1, 2, 3, 4, 5], Math.max, identity))

const plucker = prop => item => item[prop]

console.log(finder([{ age: 64 }, { age: 32 }, { age: 50 }], Math.max, plucker('age')))

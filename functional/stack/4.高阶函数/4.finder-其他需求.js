const finder = (data, need, compare) => {
  return data.reduce((last, next) => {
    return compare(last) === need(compare(last), compare(next)) ? last : next
  })
}

const plucker = prop => item => item[prop]

console.log(finder([{ name: 'A', age: 64 }, { name: 'B', age: 32 }, { name: 'C', age: 50 }], (x, y) => {
  return x.charAt(0) === 'B' ? x : y
}, plucker('name')))

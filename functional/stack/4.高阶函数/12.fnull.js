const nums = [1, 3, 5, null, 7]

const fillnull = (handle, ...defaults) => (...args) => handle(...args.map((arg, i) => arg || defaults[i]))

console.log(nums.reduce(fillnull((total, n) => total * n, 1, 1), 1))

const identity = prop => prop

const defaults = defaultValue => (item, key) => {
  const val = fillnull(identity, defaultValue[key])
  return item && val(item[key])
}

const ages = [{ age: 100 }, { age: 120 }, { age: 150 }, { }, { age: 30 }]

const lookup = defaults({ age: 0 })

console.log(ages.reduce((total, age) => {
  return total + lookup(age, 'age')
}, 0))


const calculate = (...args) => args.reduce((last, current) => current * last, 1)

const proxyCalculate = (fn) => {
  const cache = {}
  return (...args) => {
    const key = args.join(',')
    if (cache[key]) {
      return cache[key]
    }
    return cache[key] = fn(...args)
  }
}

const cal = proxyCalculate(calculate)

console.log(cal(1, 2, 10))
console.log(cal(1, 2, 10))
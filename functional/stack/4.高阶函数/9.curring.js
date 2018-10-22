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

const always = value => () => value

console.log(repeatness(always('Odelay'), 3))

const f = always(() => {})

console.log(f() === f())

const g = always(() => {})

console.log(g() === f())
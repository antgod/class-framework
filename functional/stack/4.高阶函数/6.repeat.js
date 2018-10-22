const range = (times) => {
  const ranges = []
  for (let idx = 0; idx < times; idx++) {
    ranges.push(null)
  }
  return ranges
}

const repeat = (value, time) => {
  return range(time).map(() => value)
}

console.log(repeat(4, 3))

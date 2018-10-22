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

console.log(repeatness(() => Math.floor(Math.random() * 10) + 1, 10))

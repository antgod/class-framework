const cat = (item1, item2) => Array.isArray(item1) ? item1.concat(item2) : [item1].concat(item2)

const zip = (current, ...args) => {
  const [first, ...rest] = args
  if (!first) {
    return current
  } else {
    return zip(current.map((item, i) => cat(item, first[i])), ...rest)
  }
}

const unzip = (args) => {
  const [current, ...rest] = args
  if (!rest.length) {
    return current.map(item => [item])
  } else {
    return unzip(rest).map((item, index) => [current[index], ...item])
  }
}

const data = [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
console.log(zip(...data))
console.log(unzip(zip(...data)))

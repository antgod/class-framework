const cat = (item1, item2) => Array.isArray(item1) ? item1.concat(item2) : [item1].concat(item2)

const zip = (current, ...args) => {
  const [first, ...rest] = args
  if (!first) {
    return current
  } else {
    return zip(current.map((item, i) => cat(item, first[i])), ...rest)
  }
}

// result为累加器
const unzip = ([current, ...rest], result = []) => {
  if (!current) {
    return result
  } else {
    return unzip(rest, current.map((item, i) => {
      return [...result[i] || [], item]
    }))
  }
}

const data = [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]]
console.log(zip(...data))
console.log(unzip(zip(...data)))

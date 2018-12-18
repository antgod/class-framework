function evenSteven(n) {
  if (!n) {
    return true
  } else {
    return oddJohn(Math.abs(n) - 1)
  }
}

function oddJohn(n) {
  if (!n) {
    return false
  } else {
    return evenSteven(Math.abs(n) - 1)
  }
}

console.log(evenSteven(4))

console.log(oddJohn(11))

function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

function flat(arr) {
  if (Array.isArray(arr)) {
    return cat(...arr.map(flat))
  } else {
    return [arr]
  }
}

console.log(flat([[1, 2], [3, 4]]))
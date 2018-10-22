const iterate = (createValue, checker, init) => {
  const ret = []
  let result = createValue(init)
  while (checker(result)) {
    ret.push(result)
    result = createValue(result)
  }
  return ret
}

console.log(iterate(n => n + n, n => n < 1024, 1))

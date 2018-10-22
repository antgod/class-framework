function deepClone(obj) {
  if (typeof obj !== 'object') {
    return obj
  }

  const temp = new obj.constructor()
  Object.keys(obj).forEach(key => temp[key] = deepClone(obj[key]))
  return temp
}

const data = [{ a: [1, 2, 3], b: 42 }, { c: { d: [] } }]
console.log(deepClone(data))

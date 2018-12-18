const bester = (data, need) => {
  return data.reduce((last, next) => {
    return need(last, next) ? last : next
  })
}

console.log(bester([{ name: 'A', age: 64 }, { name: 'B', age: 32 }, { name: 'C', age: 50 }], (x, y) => {
  return x.age < y.age
}))

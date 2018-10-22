const people = [
  { name: 'Rick', age: 30, sex: 'man' },
  { name: 'Lucy', age: 24, sex: 'woman' },
  { name: 'Lily', age: 40, sex: 'woman' },
]

const sortBy = (datas, fn) =>
  datas.sort((d1, d2) => fn(d1) - fn(d2))

console.log('sortBy', sortBy(people, p => p.age))

const groupBy = (datas, fn) =>
  datas.reduce((last, data) =>
      ({ ...last, [`${fn(data)}`]: (last[fn(data)] || []).concat(data) }), {})

console.log('groupBy', groupBy(people, p => p.sex))

const countBy = (datas, fn) =>
  datas.reduce((last, data) =>
      ({ ...last, [`${fn(data)}`]: (last[fn(data)] ? ++last[fn(data)] : 1) }), {})

console.log('countBy', countBy(people, p => p.sex))

const max = (data, compare = item => item) => data.reduce((maxer, next) => compare(maxer) > compare(next) ? maxer : next)

console.log(max([{ age: 64 }, { age: 32 }, { age: 50 }], item => item.age))

console.log(max([5, 1, 3, 4, 2]))
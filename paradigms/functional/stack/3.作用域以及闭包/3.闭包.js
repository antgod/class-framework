// 求平均数
const average = array => array.reduce((prev, next) => prev + next) / array.length

// 求指定数字与通过函数生成另外一个数字
const averageDynmic = fun => n => average([n].concat(fun(n)))

console.log(averageDynmic(n => ([n * n]))(10))

// 求反义函数
const complement = fun => (...args) => !fun(...args)

const isOdd = n => n % 2 === 0

const isEven = complement(isOdd)

console.log(isOdd(1), isOdd(2))
console.log(isEven(1), isEven(2))

// 封装数据
const Team = () => {
  let num = 1
  const people = {
    lhj: {
      age: 30,
    },
  }
  return {
    add: n => num += n,
    del: n => num -= n,
    update: (name, value) => people[name] = value,
  }
}

const t1 = Team()
console.log(t1.add(3))
console.log(t1.del(2))

console.log(t1.update('lhj', {
  age: 31,
}))

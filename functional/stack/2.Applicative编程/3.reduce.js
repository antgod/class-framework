const nums = [100, 2, 25]
const div = (x, y) => x / y

console.log(nums.reduce(div))
console.log(nums.reduceRight(div))

// reduceRight有很多应用，如下:
// 但是没有明显的顺序关系，可以换成reduce
const all = (...args) => condition =>
  args.reduce((truth, f) => (truth && f() === condition), true)

const any = (...args) => condition =>
  args.reduce((truth, f) => (truth || f() === condition), false)

const T = () => true
const F = () => false

// 全部为真
console.log(all(T, T)(true))
// 全部为假
console.log(all(F, F)(false))
// 全部为真，传入全部假
console.log(all(F, F)(true))
// 全部为假，传入全部真
console.log(all(T, T)(false))
// 部分为真
console.log(any(T, F)(true))
// 部分为假
console.log(any(T, F)(false))
// 部分为真，传入全部假
console.log(any(F, F)(true))
// 部分为假，传入全部真
console.log(any(T, T)(false))

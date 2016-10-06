// Idempotent
// 幂等，同一个函数使用相同的参数嵌套执行多次的结果与执行一次的结果相同:
console.log(Math.abs(Math.abs(10)))

console.log([3,4,1,2].sort().sort().sort())
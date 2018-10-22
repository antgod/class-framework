// 支持函数作为参数传入
[1, 2, 3].forEach(console.log)

// 函数分离
const splat = handle => (...array) => handle(array)

console.log(splat(array => array.reduce((a, b) => a * b))(1, 2, 3, 4))

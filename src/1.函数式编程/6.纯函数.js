// Purity
// 第一是函数的返回值只能由输入值（函数接收的参数）决定，也就是说纯函数接收相同的参数会返回相同的值
// 第二是纯函数不会对自身作用域之外的运行环境产生副作用（side effects），比如说不会改变外部环境中变量的值，这会被认为是不安全的行为
const greet = (name) => `Hi, ${name}`

console.log(greet("Brianne"))
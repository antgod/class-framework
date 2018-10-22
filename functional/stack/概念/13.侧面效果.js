// Side effects
// 如果函数或表达式与其自身作用域之外的可变数据（mutable data）发生了读写操作，那么此时函数和表达式就产生了副作用：


const name = 'MyName'
let greeting
const greet = () => greeting = "Hi, " + name
// greet() 执行时更改了外部环境的变量
greet()
console.log(greeting)

// => "Hi, Brianne"
// new Date() 是可变数据
const differentEveryTime = new Date()
// 这里表示系统接收到的输入值是不确定的，是一种可变数据
console.log("IO is a side effect!")
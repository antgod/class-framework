// Value
// 任何可以赋值给变量的值都可以称为 value
Object.freeze({name: 'John', age: 30}) // The `freeze` function enforces immutability.

// 常量，初始化后不能再次执行赋值操作的数据类型：

const five = 5
const john = { name: 'John', age: 30 }

// 因为常量不可变，所以下面表达式一定为 true
console.log(john.age + five === ({ name: 'John', age: 30 }).age + (5))
// 常量具有 referentially transparent 的特性，也就是说将程序中出现的常量替换为它们实际的值，并不会影响程序的结果。

// Referential Transparency
// 如果一个表达式可以被替换为实际的值而不影响程序的运行结果，那么我们就说这个表达式是 referentially transparent：

const greet = () => "Hello World!";
// Value
// 任何可以赋值给变量的值都可以称为 value
Object.freeze({name: 'John', age: 30}) // The `freeze` function enforces immutability.

// 常量，初始化后不能再次执行赋值操作的数据类型：

const five = 5
const john = { name: 'John', age: 30 }

// 因为常量不可变，所以下面表达式一定为 true
john.age + five === ({ name: 'John', age: 30 }).age + (5)
// 常量具有 referentially transparent 的特性，也就是说将程序中出现的常量替换为它们实际的值，并不会影响程序的结果。
// 译者话外：实际上在 JavaScript 中的 const
// 所声明的常量并不是完全稳定的，使用 Immutable.js 演示更加恰当：

const five = fromJS(5);
const john = fromJS({name: 'John', age: 30})

john.get('age') + five === ({ name: 'John', age: 30 }).age + (5)
f(g()) === g


// Point-Free Style
// point-free style 是一种不显式向函数传递参数的代码风格，通常需要柯里化和高阶函数来实现
const map = (fn) => (list) => list.map(fn);
const add = (a) => (b) => a + b;

// Not points-free
// numbers 是一个显式传递的参数
const incrementAll = (numbers) => map(add(1))(numbers);
console.log(incrementAll([1,2,3]))

// Points-free
// add(1) 的返回值隐式传递给了 map，作为 map 的 list 参数
const incrementAll2 = map(add(1));
console.log(incrementAll2([1,2,3]))
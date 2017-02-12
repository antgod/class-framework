// Partial Application
// 偏函数，在原函数的基础上预填充（pre-filling）部分参数并返回的新函数

const partial = (fn, ...before) => (...args) => (...after) => fn(...before,...args,...after)

const add = (...args) => args.reduce((last,next)=>last+next)

console.log(partial(add,1,2,3)(4,5,6)(7,8,9,10))
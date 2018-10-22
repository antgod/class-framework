// Currying
// 柯里化，将一个接收多个参数的函数转化为单参数函数的方式，转化后的函数每次只接收一个参数，然后返回一个新函数，
// 新函数可以继续接收参数，直到接收到所有的参数：

const compute = sign => (...args) => args.reduce((last,next)=>eval(`${last}${sign}${next}`))

console.log(compute("+")(1,2,3,4,5))
console.log(compute("-")(1,2,3,4,5))
console.log(compute("*")(1,2,3,4,5))
console.log(compute("/")(1,2,3,4,5))

const node = new Object()

const props = {type:'input',value:'123'}

const compose = node => props => ({...node,...props})

console.log(compose(node)(props))
// Function Composition
// 函数合成，接收多个函数作为参数并返回一个新函数的方式，新函数按照传入的参数顺序，从右往左依次执行，前一个函数的返回值是后一个函数的输入值

const compose = (f, g) => (a) => f(g(a))

const floorAndToString = compose((val) => val.toString(), Math.floor)

floorAndToString(121.212121)

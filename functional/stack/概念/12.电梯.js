// Lift
// lift 发生在你将值放入 functor 的时候，如果你将函数 lift 进了 Applicative Functor，
// 那么就可以使用这个函数处理传递给这个 functor 的值。某些 lift 的实现拥有 lift 或 liftA2 函数，便于在 functor 上执行相关的函数：

const mult = (a, b) => a * b

const lift = fn => (...args) => args.reduce((last, next)=> mult(last, next.reduce((last, next)=> mult(last, next), 1)), 1)

const liftedMult = lift(mult)
console.log(liftedMult([1, 2], [3], [4, 5]))

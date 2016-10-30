// Functor
// functor 都拥有 map函数，并且在执行 map之后会返回一个新的 functor
[1, 2, 3].map(x => x)

const f = x => x + 1
const g = x => x * 2

console.log([1, 2, 3].map(x => f(g(x))))



// Pointed Functor
// pointed functor 都拥有 of函数，用于接收和构建 functor。

console.log(Array.of(1,2,3))
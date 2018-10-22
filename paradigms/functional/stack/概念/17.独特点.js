// Monoid
// Monoid，通过一个函数“合并”两个同类型数据后返回相同的数据类型。最简单的 monoid 就是两数相加：

const identity = num => (num + 0)

console.log(identity(6))
// => 1
// 这里的 0 就是恒等式

// Monoid 还必须满足结合律
//1 + (2 + 3) === (1 + 2) + 3;
// => true

// 数组的 concat() 操作可以构造一个 monoid
console.log([1, 2].concat([3, 4]))
// => [1, 2, 3, 4]
// 空数组可以视为是恒等式
console.log([1, 2].concat([]))
// => [1, 2]
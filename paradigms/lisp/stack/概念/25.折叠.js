// Foldable
// Foldable，拥有 reduce 函数的数据类型，可以将 Foldable 的实例转换为其他数据类型：

const sum = (list) => list.reduce((acc, val) => acc + val, 0);
console.log(sum([1, 2, 3]))
// => 6
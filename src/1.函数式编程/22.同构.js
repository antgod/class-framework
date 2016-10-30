// Isomorphism
// 同构转换，相同数据下不同结构之间的转换。举例来说，2D 坐标既可以存储为数组 [2, 3] 也可以存储为 { x: 2, y: 3 }：

const pairToCoords = (pair) => ({x: pair[0], y: pair[1]})
const coordsToPair = (coords) => [coords.x, coords.y]
coordsToPair(pairToCoords([1, 2]))
// => [1, 2]
console.log(pairToCoords(coordsToPair({x: 1, y: 2})))
// => { x: 1, y: 2 }
// Setoid
// Setoid，拥有 equals 函数的数据类型，可用于与其他同类型的数据进行比较。为 Array 类型添加 equals 函数使其成为 Setoid：

Array.prototype.equals = function(arr) {
  const len = this.length
  if (len !== arr.length) {
    return false
  }
  for (let i = 0; i < len; i++) {
    if (this[i] !== arr[i]) {
      console.log(222,this[i])
      return false
    }
  }
  return true
}
console.log([1, 2].equals([1, 2]))
// => true
console.log([1, 2].equals([0]))
// => false
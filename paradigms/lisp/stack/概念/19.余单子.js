// Comonad
// Comonad，拥有 extract 和 extend 函数的数据类型：

const CoIdentity = (v) => ({
  val: v,
  extract() { return this.val },
  extend(f) { return CoIdentity(f(this)) }
})
// extract() 可以从 functor 中取值
console.log(CoIdentity(1).extract())
// => 1
// extend() 可以返回新的 comonad
console.log(CoIdentity(1).extend(co => co.extract() + 1))
// => CoIdentity(2)
// Applicative Functor
// Applicative Functor，是拥有 ap 函数的数据类型，ap 函数可以将 functor 中的值转化为其他 functor 中的同类型值：


Array.prototype.ap=function(arr) {
  const _this = this
  return arr.map(item=>{
    return _this.reduce((last,next) =>{
      last = next (!last ? item : last)
      return last
    },null)
  })
}

console.log([(a) => a + 1,(a) => a + 2].ap([1]))
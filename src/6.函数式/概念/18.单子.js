// Monad
// Monad，是一个拥有 of 和 chain 函数的数据类型，chain 类似于 map，但它会输出非嵌套形式的结果：

Array.prototype.chain=function(fn){
  const chain = arr=> {
    let r = []
    arr.forEach((item)=> {
      const rs = fn(item)
      if (rs.length > 1) {
        r = r.concat(chain(rs))
      } else {
        r = r.concat(rs)
      }
    })
    return r
  }

  return chain(this)
}


console.log(['cat,dog', 'fish,bird'].chain((a) => a.split(',')))
// => ['cat', 'dog', 'fish', 'bird']
console.log(['cat,dog', 'fish,bird'].map((a) => a.split(',')))
// => [['cat', 'dog'], ['fish', 'bird']
//在其他函数式编程语言中，of 也被称为 return，chain 也被称为 flatmap 和 bind。
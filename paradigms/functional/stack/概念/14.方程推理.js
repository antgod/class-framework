// Equational Reasoning
// 如果一个应用由多个表达式组合而成，且每个表达式都没有 side effect，那么这个应用就可以由部分推导出整体。


const first = name=> `姓：${name.first}`

const last = name => `名：${name.last}`

const concat = (...fns)=>{
  return (...arg) => {
    return fns.reduce((last,next)=>{
      if (typeof next === 'function'){
        last+=next(...arg)
        return last
      }
    },'')
  }
}

console.log(concat(first,last)({
  first:'li',
  last:'hongji',
}))
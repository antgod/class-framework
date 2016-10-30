// Lambda Calculus
// 数学的分支之一，使用函数创建通用的计算模型（universal model of computation）。

const fn = function(a){
  return a + 1;
}
// Lambda 常用语高阶函数中
console.log([1, 2].map((a) => a + 1))
// = [2, 3]
// Lambda 作为 value 被赋值给变量
let addOne = (a) => a + 1
// Lazy evaluation
// 惰性求值，是一种按需执行的求值策略，只有需要某个值时才会执行相关的表达式。在函数式编程语言中，这一特性可用于构造无限列表。

const rand = function*() {
  while (true) {
    yield Math.random();
  }
}
const randIter = rand();

for(let value of [1,2,3,4,5,6,7,8,9,10].keys()){
  console.log(randIter.next())
}
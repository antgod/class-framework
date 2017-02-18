// Higher-Order Functions
// 高阶函数，此类函数可以接收其他函数作为参数，也可以返回一个函数作为返回值：

const filter = (pred, xs) => {
  const result = [];
  for (let idx = 0; idx < xs.length; idx++) {
    if (pred(xs[idx])) {
      result.push(xs[idx]);
    }
  }
  return result;
};

const is = (type) => (x) => Object(x) instanceof type;

filter(is(Number), [0, '1', 2, null]);
// => [0, 2]
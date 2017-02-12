//1.apply最大的最用之一就是函数借调，修改this指向和传递参数

/*
 * 计算函数
 * params:要计算的数值
 * */
var calculate = {
  sum: (...nums) => nums.reduce((last, num) => last + num, 0),
  mult: (...nums) => nums.reduce((last, num) => last * num, 1)
};

/*
 * 计算数组函数，根据传入计算方式计算结果
 * params:计算方式
 * */
const mathOperate = operate => {
  const cache = {};
  return (...nums) => {
    var key = operate.concat(nums.join(','));
    if (cache[key]) return cache[key];
    return cache[key] = calculate[operate].apply(null, nums);   //我们借调了其他对象的函数
  }
};

const sum = mathOperate("sum");
const mult = mathOperate("mult");

console.log(sum(1, 2, 3, 4));
console.log(mult(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));
console.log(mult(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3, 4));   //第二次计算，从缓存中读取
console.log(mult(1, 2, 3, 4));  //第二次计算，从缓存中读取
const _ = require('../util/understore');

const nums = [100, 2, 25];
const div =(x, y) => x/y;

console.log(nums.reduce(div));
console.log(nums.reduceRight(div));

// reduceRight有很多应用，如下:
// 但是没有明显的顺序关系，可以换成reduce
const allCondition = (...args) => condition =>
  args.reduceRight((truth ,f)=> (truth && f() === condition), true);

const anyCondition = (...args) => condition =>
  args.reduceRight((truth ,f)=> (truth || f() === condition), false);

const T = ()=>true;
const F = ()=>false;

// 全部为真
console.log(allCondition(T, T)(true));
// 全部为假
console.log(allCondition(F, F)(false));
// 全部为真，传入全部假
console.log(allCondition(F, F)(true));
// 全部为假，传入全部真
console.log(allCondition(T, T)(false));
// 部分为真
console.log(anyCondition(T, F)(true));
// 部分为假
console.log(anyCondition(T, F)(false));
// 部分为真，传入全部假
console.log(anyCondition(F, F)(true));
// 部分为假，传入全部真
console.log(anyCondition(T, T)(false));

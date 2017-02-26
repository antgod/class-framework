const _ = require('../util/understore');

const nums = [100, 2, 25, 150];
// 查找50以下的数字
console.log(_.reject(nums, val=> val > 50));
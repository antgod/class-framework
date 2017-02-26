const _ = require('../util/understore');

const nums = [100, 2, 25, 150];

console.log(_.find(nums, val=> val>50));

console.log(_.find(nums, val=> val === 200));


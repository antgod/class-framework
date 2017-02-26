const _ = require('../util/understore');

const nums = _.range(1, 10);

const doubleAll = array => array.map(item=>item*2);

const average = array => array.reduce((prev, next)=>prev+next)/array.length;

const even = array => array.filter((item, index)=> index%2);

console.log(doubleAll(nums));

console.log(average(nums));

console.log(even(nums));

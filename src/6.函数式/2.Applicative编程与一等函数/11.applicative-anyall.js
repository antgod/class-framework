const _ = require('../util/understore');

const T = ()=>true;
const F = ()=>false;

console.log(_.all(T, T));
console.log(_.any(T, F));

console.log(_.all(T, F));
console.log(_.any(F, F));
const _ = require('../util/understore');

const data = {a: 1, b:2 };

var res = _.map(data, _.identity);

console.log(res)

var res = _.map(data, (val, key, index, obj)=>[key, val, _.keys(obj)]);

console.log(res);

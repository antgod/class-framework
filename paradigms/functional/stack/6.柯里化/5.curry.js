console.log([11.11, 11.22, 11.33, 11.44].map(parseInt))

const curry = fun => args => fun(args)

console.log([11, 11, 11, 11].map(curry(parseInt)))

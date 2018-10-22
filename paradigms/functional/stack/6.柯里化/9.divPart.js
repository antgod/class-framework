const divPart = n => d => n / d

const over10Part = divPart(10)

console.log(over10Part(2))

const div = (n, d) => n / d

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

const over10Partial = partial(div, 10)

console.log(over10Partial(2))
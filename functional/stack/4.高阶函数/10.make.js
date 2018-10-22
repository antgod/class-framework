const makeAdder = init => rest => init + rest
const add100 = makeAdder(100)
console.log(add100(38))

let uniqueString = len => Math.random().toString(36).substr(2, len)
console.log(uniqueString(10))

uniqueString = prefix => [prefix, new Date().getTime()].join('')

console.log(uniqueString('ghosts'))
console.log(uniqueString('turkey'))

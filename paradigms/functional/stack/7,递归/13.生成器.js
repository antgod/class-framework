const _ = require('underscore')

function generator(seed, current, step) {
  return {
    head: current(seed),
    tail: () => generator(step(seed), current, step),
  }
}

const genHead = gen => gen.head
const genTail = gen => gen.tail()

const ints = generator(0, _.identity, n => n + 1)

console.log(genHead(ints))
console.log(genTail(ints))
console.log(genTail(ints).tail().head)

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

function trampoline(fun, ...args) {
  let result = fun.apply(fun, args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}


function genTake(n, gen) {
  const doTake = (x, g, ret) => {
    if (x === 0) {
      return ret
    } else {
      return partial(doTake, x - 1, genTail(g), cat(ret, genHead(g)))
    }
  }
  return trampoline(doTake, n, gen, [])
}

console.log(genTake(10, ints))
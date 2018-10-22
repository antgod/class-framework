function even(n) {
  if (!n) {
    return true
  } else {
    return odd(Math.abs(n) - 1)
  }
}

function odd(n) {
  if (!n) {
    return false
  } else {
    return even(Math.abs(n) - 1)
  }
}
// 递归过多，报错
// console.log(even(18000))

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

function even1(n) {
  if (!n) {
    return true
  } else {
    return partial(odd1, Math.abs(n) - 1)
  }
}

function odd1(n) {
  if (!n) {
    return false
  } else {
    return partial(even1, Math.abs(n) - 1)
  }
}

function trampoline(fun, ...args) {
  let result = fun.apply(fun, args)
  while (typeof result === 'function') {
    result = result()
  }
  return result
}

console.time('a')
console.log(trampoline(odd1, 1000000))
console.timeEnd('a')

const oddFinal = (n) => {
  return trampoline(odd1, n)
}

console.time('b')
console.log(oddFinal(1000000))
console.timeEnd('b')

/*
function even2(n) {
  if (!n) {
    return true
  } else {
    return trampoline(partial(odd2, Math.abs(n) - 1))
  }
}

function odd2(n) {
  if (!n) {
    return false
  } else {
    return trampoline(partial(even2, Math.abs(n) - 1))
  }
}
console.time('b')
console.log(odd2(1000000))
console.timeEnd('b')
*/

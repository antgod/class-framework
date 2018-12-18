const _ = require('underscore')

function visit(mapFun, resultFun, array) {
  if (Array.isArray(array)) {
    return resultFun(array.map(mapFun))
  } else {
    return resultFun(array)
  }
}

console.log(visit(_.identity, _.isNumber, 42))
console.log(visit(_.isNumber, _.identity, [1, 2, 3]))

const partial = (fun, ...argv) => (...rest) => fun.call(this, ...argv, ...rest)

function postDepth(fun, arr) {
  return visit(partial(postDepth, fun), fun, arr)
}

const graph = [
  ['lisp', 'smalltalk'],
  ['lisp', 'scheme'],
  ['smalltalk', 'self'],
  ['scheme', 'javascript'],
  ['scheme', 'lua'],
  ['self', 'lua'],
  ['self', 'javascript'],
]

console.log(postDepth(_.identity, graph))

console.log(postDepth((item) => {
  if (item === 'lisp') {
    return 'LISP'
  } else {
    return item
  }
}, graph))

function influenceWithStrategy(strategy, lang, g) {
  const results = []
  strategy((x) => {
    const [ first, second ] = x
    if (Array.isArray(x) && first === lang) {
      results.push(second)
    }
    return x
  }, g)
  return results
}

console.log(influenceWithStrategy(postDepth, 'lisp', graph))
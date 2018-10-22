const _ = require('underscore')

const curry2 = fun => second => first => fun(first, second)
const second = arr => arr[1]

const groupFrom = curry2(_.groupBy)(_.first)
const groupTo = curry2(_.groupBy)(second)

const graph = [
  ['lisp', 'smalltalk'],
  ['lisp', 'scheme'],
  ['smalltalk', 'self'],
  ['scheme', 'javascript'],
  ['scheme', 'lua'],
  ['self', 'lua'],
  ['self', 'javascript'],
]

console.log(groupFrom(graph))
console.log(groupTo(graph))

const influenced = (graph, node) => groupFrom(graph)[node].map(second)

console.log(influenced(graph, 'lisp'))

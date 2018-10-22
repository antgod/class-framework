const graph = [
  ['lisp', 'smalltalk'],
  ['lisp', 'scheme'],
  ['smalltalk', 'self'],
  ['scheme', 'javascript'],
  ['scheme', 'lua'],
  ['self', 'lua'],
  ['self', 'javascript'],
]

// 累加器
const nexts = ([current, ...rest], node, result = []) => {
  if (!current) return result
  const [from, to] = current
  if (node === from) {
    return nexts(rest, node, result.concat(to))
  } else {
    return nexts(rest, node, result)
  }
}

console.log(nexts(graph, 'scheme'))

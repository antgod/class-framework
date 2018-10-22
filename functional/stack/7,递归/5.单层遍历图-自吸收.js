const graph = [
  ['lisp', 'smalltalk'],
  ['lisp', 'scheme'],
  ['smalltalk', 'self'],
  ['scheme', 'javascript'],
  ['scheme', 'lua'],
  ['self', 'lua'],
  ['self', 'javascript'],
]

// 自吸收
const nexts = ([current, ...rest], node) => {
  if (!current) return []
  const [from, to] = current
  if (node === from) {
    return [to, ...nexts(rest, node)]
  } else {
    return nexts(rest, node)
  }
}

console.log(nexts(graph, 'scheme'))

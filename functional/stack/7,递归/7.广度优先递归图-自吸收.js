const graph = [
  ['lisp', 'smalltalk'],
  ['lisp', 'scheme'],
  ['smalltalk', 'self'],
  ['scheme', 'javascript'],
  ['scheme', 'lua'],
  ['self', 'lua'],
  ['self', 'javascript'],
]

const nexts = ([current, ...rest], node) => {
  if (!current) return []
  const [from, to] = current
  if (node === from) {
    return [to, ...nexts(rest, node)]
  } else {
    return nexts(rest, node)
  }
}

const union = (a, b) => a.reduce((output, item) => (output.includes(item) ? output : output.concat([item])), b.slice(0))

// 应该计算的节点
const depthSearch = (data, nodes) => {
  if (!nodes.length) {
    return []
  }
  const [node, ...more] = nodes
  // 计算当前节点的所有子节点
  const children = nexts(data, node)
  return union(depthSearch(data, children.concat(more)), children)
}

console.log(depthSearch(graph, ['lisp'], []))
console.log(depthSearch(graph, ['self', 'smalltalk'], []))
console.log(depthSearch(graph, ['lisp'], []))

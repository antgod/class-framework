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

// 应该计算的节点
const depthSearch = (data, nodes, result = []) => {
  if (!nodes.length) {
    return result
  }
  const [node, ...more] = nodes
  // 如果发现已经重复，不在拼接，如javascript
  if (result.includes(node)) {
    return depthSearch(data, more, result)
  } else {
    // 计算出当前节点，拼接更多节点
    return depthSearch(data, [...nexts(data, node), ...more], [...result, node])
  }
}

console.log(depthSearch(graph, ['lisp'], []))
console.log(depthSearch(graph, ['self', 'smalltalk'], []))
console.log(depthSearch(graph, ['lisp'], []))

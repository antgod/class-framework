function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

function mapcat(coll, fun) {
  return cat(...coll.map(fun))
}

function removeLast(...coll) {
  return coll.slice(0, -1)
}

function construct(head, ...tail) {
  return cat([head], ...tail)
}

function interpose(coll, sep) {
  return removeLast(...mapcat(coll, item => construct(item, sep)))
}

console.log(interpose([1, 2, 3], ','))

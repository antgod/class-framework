function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

console.log(cat([1, 2, 3], [4, 5], [6, 7, 8]))

function construct(head, ...tail) {
  return cat([head], ...tail)
}

console.log(construct(0, [1, 2, 3], [4, 5, 6]))

function mapcat(coll, fun) {
  return cat(...coll.map(fun))
}

console.log(mapcat([1, 2, 3], item => construct(item, [','])))

function butLast(...coll) {
  return coll.slice(0, -1)
}

function interpose (coll, sep) {
  return butLast(...mapcat(coll, item=> construct(item, [sep])))
}

console.log(interpose([1, 2, 3], ','))
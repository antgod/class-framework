const concater = (...handles) => (target, ...args) => {
  return handles.reduce((last, handle) => {
    return handle.apply(target, [target, ...args])
  }, target)
}

const isa = (type, action) => (obj) => {
  return type === obj.type ? action(obj) : undefined
}

// 去掉if test
const command = concater(isa('a', (obj) => {
   console.log(obj)
}), isa('b', (obj) => {
   console.log(obj)
}))

command({
  type: 'b'
})
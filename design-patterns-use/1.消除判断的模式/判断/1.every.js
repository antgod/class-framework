const isa = (type, action) => (obj) =>  type === obj.type ? action(obj) : undefined

const every = (...handles) => (target, ...args) => handles.reduce((last, handle) => [...last, handle(target, ...args)], [])

/* 测试函数 */
const command = every(isa('a', (obj) => {
  console.log(obj)
}), isa('b', (obj) => {
  console.log(obj)
  return 'b'
}))

console.log(command({ type: 'b' }))

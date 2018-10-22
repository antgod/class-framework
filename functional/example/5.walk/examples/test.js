const data = require('./data')
const walk = require('../')

walk(data, 'children', (item, index, parentPath) => {
  const relativePath = [`${item.type}(${index})`, item.bind]
  const path = parentPath.concat(relativePath)
  console.log('当前组件相对路径', relativePath.filter(p => p !== undefined).join('.'))
  console.log('当前组件绝对路径', path.filter(p => p !== undefined).join('.'))
  return relativePath
})


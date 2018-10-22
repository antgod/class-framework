const switcher = require('../')

function clearMemory(...args) {
  console.log('clearMemory', ...args)
  return '内存清除完毕'
}

function clearCache(...args) {
  console.log('clearCache', ...args)
  return '缓存清除完毕'
}

function clearBuffer(...args) {
  console.log('clearBuffer', ...args)
  return '缓冲清除完毕'
}

const clear = switcher({
  memory: clearMemory,
  cache: clearCache,
  buffer: clearBuffer,
})

console.log(clear('memory', 1, 2, 3))

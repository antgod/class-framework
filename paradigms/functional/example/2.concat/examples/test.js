const concat = require('../')

function before(...args) {
  console.log(...args)
  return '验证通过'
}

function upload(...args) {
  console.log(...args)
  return '上传完毕'
}

function after(...args) {
  console.log(...args)
  return '本地缓存完毕'
}

const handle = concat(before, upload, after)

console.log(handle({
  name: 'test.txt',
  path: '/user/lihongji/work/test.txt',
  size: '15kb',
}))

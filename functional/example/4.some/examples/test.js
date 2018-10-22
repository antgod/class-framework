const some = require('../')

function validateNull(obj) {
  if (!obj) {
    return '年龄不能为空'
  }
}

function validateNumber(obj) {
  if (parseInt(obj, 10) !== obj) {
    return '年龄必须为自然数'
  }
}

function pass() {
  return '验证通过'
}

console.log(some(validateNull, validateNumber, pass)('55'))

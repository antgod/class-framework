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

function validator(obj) {
  const r1 = validateNull(obj)
  if (r1) {
    return r1
  }

  const r2 = validateNumber(obj)
  if (r2) {
    return r2
  }

  return pass()
}

console.log(validator('55'))

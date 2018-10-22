// 模拟cookie
global.cookie = {}

function login(...args) {
  console.log('打印login参数', args)
  global.cookie.login = true
  return '登录成功'
}

function logout(...args) {
  console.log('打印logout参数', args)
  global.cookie.login = false
  return '登出成功'
}

function load(...args) {
  console.log('打印load参数', args)
  return '加载成功'
}

module.exports = { load, login, logout }

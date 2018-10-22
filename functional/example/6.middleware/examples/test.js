const { concatMiddlewares, createMiddleware } = require('../')
const listeners = require('./listeners')

// 用来执行函数之前打印
const logHandle = (listener, key) =>
  (...args) => {
    console.log(`${key}函数执行`)
    return listener(...args)
  }

const logListeners = {
  post: (...args) => {
    console.log('post', args)
    return '发送成功'
  },
}

// 用来验证函数是否执行
const loginHandle = listener =>
  (...args) => {
    if (global.cookie.login !== true) {
      return '用户未登录'
    }

    return listener(...args)
  }

const loginListeners = {
  edit: (...args) => {
    console.log('打印edit参数', args)
    return '编辑成功'
  },
  save: (...args) => {
    console.log('save', args)
    return '保存成功'
  },
}

/*
 * @params：
 * listeners: 原始事件列表
 * middlewares: 事件中间件列表
 * */
const close = concatMiddlewares(listeners, [
  createMiddleware(logHandle, logListeners),
  createMiddleware(loginHandle, loginListeners),
])

console.log(close.login('login参数'))
console.log(close.edit('edit参数'))
console.log(close.save('save参数'))
console.log(close.logout('logout参数'))
console.log(close.edit('edit参数'))
console.log(close.post('post参数'))

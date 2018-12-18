const { trust } = require('../../../common/util')

// 模拟函数
const checkUserInput = ({ username, password }) => {
  if (!trust(username) || !trust(password)) {
    throw new Error('用户名或者密码不能为空')
  }
  return { username, password }
}
/* eslint-disable */
const checkUserInfo = ({ username, password }) => ({ status: 'normal', id: '100' })
const analyzeTocken = ({ status, id }) => ({ status: 'normal', id: '100', name: 'lhj', tocken: 'zHcuqhrehduqwexxx' })
const login = user => ({ redirectUrl: 'http://www.taobao.com/' })
const redirect = feedback => ({ code: '10000' })

// 重构前代码
function enter(input) {
  // 客户端校验用户名密码是否填写
  checkUserInput(input)

  // 服务端校验用户名密码是否正确
  const { status, id } = checkUserInfo(input)

  // 获取用户 Tocken
  const user = analyzeTocken({ status, id })

  // 登录
  const feedback = login(user)

  // 跳转
  return redirect(feedback)
}

console.log(enter({username: 'aa', password: 'bb'}))

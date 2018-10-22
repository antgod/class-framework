const exist = x => !!x

const exec = (condition, handle) => (...args) => exist(condition) ? handle(...args) : undefined

exec(true, (...args) => console.log(...args))('测试参数')

const exer = (condition, action) => (...args) => {
  return exist(condition) ? action(...args) : undefined
}

const match = actions => (...args) =>
  actions.map(({ condition, action, name }) => ({ name, return: exer(condition, action)(...args) }))

/* 测试函数 */
const submit = (res) => {
  const actions = {
    waiting: (...args) => {
      console.log(`waiting执行，参数:${args}`)
      return '返回值: 成功'
    },

    success: (...args) => {
      console.log(`success执行，参数:${args}`)
      return '返回值: 成功'
    },

    fail: (...args) => {
      console.log(`fail执行，参数:${args}`)
      return '返回值: 失败'
    },
  }

  const mapper = isSuccess =>
    [{
      name: 'waiting',
      condition: isSuccess === undefined,
      action: actions.waiting,
    }, {
      name: 'success',
      condition: isSuccess === true,
      action: actions.success,
    }, {
      name: 'fail',
      condition: isSuccess === false,
      action: actions.fail,
    }]
  const { success, data } = res
  return match(mapper(success))(data)
}

console.log(submit({ success: undefined, data: '接口返回数据: 读取中' }))
console.log(submit({ success: true, data: '接口返回数据: 读取成功' }))
console.log(submit({ success: false, data: '接口返回数据: 读取失败' }))


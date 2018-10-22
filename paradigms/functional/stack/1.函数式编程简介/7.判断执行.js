const existy = x => !!x

const execer = (condition, action) => (...args) => {
  return existy(condition) ? action(...args) : undefined
}

const divider = actions => (...args) =>
  actions.map(({ condition, action, name }) => ({ name, return: execer(condition, action)(...args) }))

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
  return divider(mapper(success))(data)
}

console.log(submit({ success: undefined, data: '接口返回数据: 读取中' }))
console.log(submit({ success: true, data: '接口返回数据: 读取成功' }))
console.log(submit({ success: false, data: '接口返回数据: 读取失败' }))


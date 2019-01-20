/**
*   表单验证
*/
// 表单正则验证策略对象
const InputStrategy = function () {
  const _strategy = {
    // 是否为空
    notNull: function (value) {
      return /\s+/.test(value) ? '' : '请输入内容'
    },
    // 是否是一个数字
    number: function (value) {
      return /^[0-9]+(\.[0-9]+)?$/.test(value) ? '' : '请输入数字'
    },
    // 是否是本地电话
    phone: function (value) {
      return /^\d{3}\-\d{8}$|^'d{4}\-\d{7}$/.test(value) ? '' : '请输入正确的电话号码格式，如：010-12345678 或 0418-1234567'
    }
  }
  return {
    // 验证接口type 算法 value表单值
    check: function (type, value) {
      // 去除首位空白符
      value = value.replace(/^\s+|\s+$/g, '')
      return _strategy[type] ? _strategy[type](value) : '没有该类型的检测方法'
    },
    // 添加策略
    addStrategy: function (type, fn) {
      _strategy[type] = fn
    }
  }
}
// 测试实例：
// 拓展 延伸算法
const inputStrategy = InputStrategy()
inputStrategy.addStrategy('nickname', function (value) {
  return /^[a-zA-Z]\w{3,7}$/.test(value) ? '' : '请输入4-8位昵称，如：YYHQ'
})
console.log(inputStrategy.check('notNull', ''))
console.log(inputStrategy.check('phone', '0001111111'))
console.log(inputStrategy.check('nickname', 'lhj'))
const _ = require('../util/understore')

const target = {
  name: 'name',
  a: function () {
    return this.name
  },
  b: function () {
    return this.a()
  },
}
console.log(target.b())

// 以下方式会报错
// console.log(target.b.call('lhj'))

// 使用bindAll解决这个问题，预绑定
_.bindAll(target, 'a', 'b')

console.log(target.b.call('lhj'))

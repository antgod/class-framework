### 为什么使用函数式？ js天生支持函数式，与函数式无缝结合
* 高阶函数
```
[1, 2, 3].forEach(console.log)
```
* 函数分离
```
const splat = handle => (...array) => handle(array)

console.log(splat(array => array.reduce((a, b) => a * b))(1, 2, 3, 4))
```

### 与面向对象的区别

* 与面向对象方法将问题分解成多组"名词"或对象不同，函数式方法将相同的问题分解成多组"动词"或者函数。

* 与面向对象类似的是，函数式编程也通过"粘结"或"组合"其他函数的方式构建更大的函数，以实现更抽象的行为。

* 函数式：通过把功能拆解成一个个小函数组件，再用函数讲各个组件结合完成需求。

### 代码风格
* 面向对象：以对象为抽象单元
```
function Team() {
  this.persons = []
}

Team.prototype.push = function(person) {
  this.persons.push(person)
}

Team.prototype.getAll = function() {
  return this.persons
}

const team = new Team()
team.push('张三')
team.push('李四')
team.push('王五')
console.log(team.getAll())
```

* 函数式：以函数为抽象单元
```
const Team = () => {
  const persons = []
  return {
    push: person => persons.push(person),
    getAll: () => persons,
  }
}

const team = Team()
team.push('张三')
team.push('李四')
team.push('王五')
console.log(team.getAll())
```

### 数据抽象
* 字符串打印表格
```
const csv = `name, age, hair
  merble,  , red
  bob, 64, blonde`

const keys = Object.keys
const reduce = (obj, handler, initial = {}) => {
  return keys(obj).reduce((last, key) => {
    return handler(last, obj[key], key)
  }, initial)
}
const chain = actions => (array) => {
  return reduce(actions, (last, handle, action) => {
    return last[action](handle)
  }, array)
}
const split = (str, separator) => str.split(separator)
const trim = str => str.trim()
const trust = str => !!str.trim()
const csv2Table = str => split(str, '\n').map(row => chain({ filter: trust, map: trim })(split(row, ',')))
console.log(csv2Table(csv))
```

### 函数加工
* 用来判断object与array是否非空
```
// 非空校验
function existy(obj) {
  return !!obj
}

console.log([null, undefined, false, '', [], {}].map(existy))

// 函数再加工，增加object与array非空校验
function truthy(obj) {
  return existy(obj) && (typeof obj === 'object' ? !!Object.keys(obj).length : true)
}

console.log([null, undefined, false, '', [], {}].map(truthy))
```

### 函数执行
* 如果参数是对象的属性，属性是个方法，则执行方法，属性是个值，则直接返回值。如果不存在，返回undefined
```
const existy = x => !!x

const execer = (condition, action) => (...args) => {
  return existy(condition) ? action(...args) : undefined
}

const propExecer = (target, name) => (...args) => {
  const action = target[name]
  return execer(action, () => {
    return typeof action === 'function' ? action.apply(target, args) : action
  })()
}

[
  propExecer([1, 2, 3], 'reverse')(),
  propExecer({ foo: 42 }, 'foo')(),
  propExecer([1, 2, 3], 'concat')([4], [5], [6]),
].map(console.log)
```

### 判断执行
这种例子比比皆是，比如根据后端的返回值，如果success是true，则执行刷新，如果是false，则提示用户错误。

```
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
```

[源码库][1]

  [1]: https://github.com/antgod/ant-util

#### 一等公民
函数可以去任何值可以去的地方，很少有限制。比如数字在js中就是一等公民，函数同理。

* 函数和数字一样可以存储为变量
var fortytwo = function() { return 42 };

* 函数和数字一样可以存储在数组的一个元素中
var fortytwos = [42, function() { return 42 }];

* 函数和数字一样可以作为对象的成员变量
var fortytwos = {number: 42, fun: function() { return 42 } };

* 函数和数字一样可以在使用时直接创建
42 + (function() { return 42 })();

* 函数和数字一样可以传递给另一个函数
function weirdAdd(n ,f) { return n + f() }

* 函数和数字一样可以被另一个函数返回
function weirdAdd() { return function() { return 42 } }

#### 多种JS编程方式

* 命令式编程
通过详细描述行为的编程方式
* 基于原型的对象编程
基于原型对象和实例的编程方式
* 元编程
基于模型数据进行编写和操作的编程方式
* 函数式编程
基于函数进行操作的编程方式
    * Applicative编程
      函数作为参数的编程方式
    * 集合中心编程
      对数据进行操作，包括对象和数组的编程方式
* 其他编程：
    * 面向类型
    * 事件编程

#### 用各种模式编写一个例子：
* 开始数字为x=99
* 重复唱一下内容直到数字为1
    * 墙上有x瓶啤酒
    * x瓶啤酒
    * 拿下一个来，分给大家
    * 墙上还有x-1瓶啤酒
    * x-1后，再循环唱一次。
    * 直到x-1=1后，改为：墙上已经没有啤酒了。
```
const _ = require('../util/understore')

// 墙上有x瓶啤酒
// x瓶啤酒
// 拿下一个来，分给大家
// 墙上还有x-1瓶啤酒
// x-1后，再循环唱一次。
// 直到x-1=1后，改为：墙上已经没有啤酒了。

// 命令编程
for (let i = 99; i > 0; i--) {
  if (i === 1) {
    console.log('没有啤酒了')
  } else {
    console.log(`墙上有${i}瓶啤酒，拿下一个来，分给大家。墙上还有${i - 1}瓶啤酒`)
  }
}

// 函数式编程
const segment = i =>
  _.chain([]).push(`墙上有${i}瓶啤酒,拿下一个来,分给大家,`).tap((data) => {
    const remain = i - 1
    if (remain > 0) {
      data.push(`还剩${i - 1}瓶啤酒,`)
    } else {
      data.push('没有啤酒了,')
    }
  }).push('大家喝吧\n')
  .value()

const song = (start, end, seg) => _.range(start, end).reduce((arr, next) => arr.concat(seg(next)), [])
console.log(song(99, 1, segment).join(''))

// 元编程
function Point2D(x, y) {
  this._x = x
  this._y = y
}

function Ponit3D(x, y, z) {
  Point2D.call(this, x, y)
  this._z = z
}

console.log(new Ponit3D(1, 2, 3))

```

#### reduce
reduce是函数式编程的核心之一，用途之广随处可见。
```
// 注意reduce与reduceRight的区别，一个从左计算，一个从右计算
const nums = [100, 2, 25]
const div = (x, y) => x / y

console.log(nums.reduce(div))
console.log(nums.reduceRight(div))

// 没有明显的顺序关系，reduce 与 reduceRight相等， 如下reduce可以换成reduceRight，结果相同
const all = (...args) => condition =>
  args.reduce((truth, f) => (truth && f() === condition), true)

const any = (...args) => condition =>
  args.reduce((truth, f) => (truth || f() === condition), false)

const T = () => true
const F = () => false

// 全部为真
console.log(all(T, T)(true))
// 全部为假
console.log(all(F, F)(false))
// 全部为真，传入全部假
console.log(all(F, F)(true))
// 全部为假，传入全部真
console.log(all(T, T)(false))
// 部分为真
console.log(any(T, F)(true))
// 部分为假
console.log(any(T, F)(false))
// 部分为真，传入全部假
console.log(any(F, F)(true))
// 部分为假，传入全部真
console.log(any(T, T)(false))
```

##### 数组操作
使用reduce操作数组，进行排序，分组，统计数量等。
```
const people = [
  { name: 'Rick', age: 30, sex: 'man' },
  { name: 'Lucy', age: 24, sex: 'woman' },
  { name: 'Lily', age: 40, sex: 'woman' },
]

const sortBy = (datas, fn) =>
  datas.sort((d1, d2) => fn(d1) - fn(d2))

console.log('sortBy', sortBy(people, p => p.age))

const groupBy = (datas, fn) =>
  datas.reduce((last, data) =>
      ({ ...last, [`${fn(data)}`]: (last[fn(data)] || []).concat(data) }), {})

console.log('groupBy', groupBy(people, p => p.sex))

const countBy = (datas, fn) =>
  datas.reduce((last, data) =>
      ({ ...last, [`${fn(data)}`]: (last[fn(data)] ? ++last[fn(data)] : 1) }), {})

console.log('countBy', countBy(people, p => p.sex))
```
#### 假如没有join，那么你如何实现数组拼接？
```
function cat(...rest) {
  const [head, ...tail] = rest
  return head.concat(...tail)
}

function mapcat(coll, fun) {
  return cat(...coll.map(fun))
}

function removeLast(...coll) {
  return coll.slice(0, -1)
}

function construct(head, ...tail) {
  return cat([head], ...tail)
}

function interpose(coll, sep) {
  return removeLast(...mapcat(coll, item => construct(item, sep)))
}

console.log(interpose([1, 2, 3], ','))
```

一脸懵逼有木有。这就是函数式的精髓，把全部操作封装成函数。仔细品味，思路清晰可见。

interpose连接最后结果，对外暴露非常简单的API。removeLast用来移除数组最后一项。cat连接所有操作结果，合成一个数组。mapcat用来把每一项函数执行的结果传递给cat函数， 第二个参数函数，用来自定义操作函数如何拼接。当然，拼接也是个动作，我们封装在construct函数中。

逻辑思维不好的人，请放弃函数式吧。哈哈哈。

#### 数据操作
最重要的环节来了，不啰嗦，直接上代码
```
/* 对象操作 */
const keys = Object.keys
const identity = value => value

// 根据函数，把指定的对象转成想要的任何格式，万能函数
const reduce = (obj, handler, initial = {}) => keys(obj).reduce((last, key) => handler(last, obj[key], key), initial)

// 根据函数，把对象转成想要的格式对象
const map = (obj, handler) => reduce(obj, (last, value, key) => (Object.assign(last, { [key]: handler(value, key) })))

// 根据函数，把对象转成想要的格式数组
const map2Array = (obj, handler) => keys(obj).map((key, index) => handler(obj[key], key, index))

// 获取json的值拼成数组，相当于Object.values
const values = obj => map2Array(obj, identity)

// 把{key:value} 转成 [[key,value]] 的格式
const pairs = obj => map2Array(obj, (value, key) => ([key, value]))

// 反转对象，交换key value
const invert = obj => reduce(obj, (last, value, key) => (Object.assign(last, { [value]: key })))

/* 数组操作 */
// 萃取json数组中的字段
const pluck = (datas, propertyName) => datas.map(data => data[propertyName])

// 把[[key,value]]格式数组转json
const object = datas => datas.reduce((last, [key, value]) => (Object.assign(last, { [key]: value })), {})

/* 给json数组字段增加默认值 */
const defaults = (datas, misses) => datas.map((data) => {
  const finalData = Object.assign({}, data)
  map(misses, (value, key) => {
    if (finalData[key] === undefined) {
      finalData[key] = value
    }
  })
  return finalData
})

/* 表查找 */
const findEqual = (datas, where) => {
  const wheres = pairs(where)
  return datas.filter(data => wheres.every(([key, value]) => data[key] === value))
}

/* 测试 */
// 模拟数据
const json = { file: 'day of the dead', name: 'bob' }
const array = [{ title: 't1', name: 'n1' }, { title: 't2', name: 'n2' }, { title: 't3' }]

// 对象
console.log(values(json))
console.log(pairs(json))
console.log(invert(json))

// 数组
console.log(pluck(array, 'title'))
console.log(defaults(array, { name: 'name' }))
console.log(object(pairs(json)))
console.log(object(pairs(json).map(([key, value]) => ([key.toUpperCase(), value]))))
console.log(findEqual(array, { title: 't3' }))
```

#### 表格操作
最后是表格操作，完全等同于SQL
```
/* 表格操作 */
const keys = Object.keys
const reduce = (obj, handler, initial = {}) => keys(obj).reduce((last, key) => handler(last, obj[key], key), initial)
const filter = (obj, handler) => reduce(obj, (last, value, key) => (handler(value, key) ? Object.assign(last, { [key]: value }) : last))
const pick = (obj, names) => filter(obj, (value, key) => names.includes(key))
const pluck = (datas, propertyName) => datas.map(data => data[propertyName])

/* 查找指定列数据 */
const findColumn = (datas, columns) => datas.map(data => pick(data, columns))

/* 返回对象新列名 */
const rename = (data, newNames) =>
  reduce(newNames, (last, newName, oldName) => {
    if (data[oldName] !== undefined) {
      last[newName] = data[oldName]
      delete last[oldName]
      return last
    }
    return last
  }, Object.assign({}, data))

/* 返回表格新列名 */
const asname = (table, newNames) => table.map(data => rename(data, newNames))

/* 根据where条件进行查找 */
const findWhere = (datas, handle) => {
  return datas.filter(data => handle(data))
}

/* 测试 */
// 模拟数据
const table = [{ title: 't1', name: 'n1', age: 30 }, { title: 't2', name: 'n2', age: 40 }, { title: 't3', age: 50 }]
console.log(pluck(table, 'title'))
console.log(findColumn(table, ['title', 'name']))
console.log(rename({ title: 't1', name: 'n1' }, { title: 'tit' }))
console.log(asname(table, { title: 'tit' }))
console.log(findWhere(findColumn(asname(table, { title: 'tit' }), ['tit', 'age']), item => item.age > 40))
```

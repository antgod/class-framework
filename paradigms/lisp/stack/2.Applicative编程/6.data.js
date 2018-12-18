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


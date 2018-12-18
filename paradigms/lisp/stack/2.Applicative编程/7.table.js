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


import { LIST_TYPE_REG } from './constants'
import { ErrorMessage } from './errors'

export const keys = Object.keys
export const toString = Object.prototype.toString

export const composeOrder = (...funcs) => (...init) => {
  const first = funcs[0]
  const rest = funcs.slice(1)
  return rest.reduce((composed, func) => func(composed), first(...init))
}

export function reduce(obj, handler, initial = {}) {
  return keys(obj).reduce((last, key) => handler(last, obj[key], key), initial)
}

export function filter(obj, handler) {
  return reduce(obj, (last, item, key) => (handler(item, key) ? { ...last, [key]: item } : last))
}

export function omit(obj, names) {
  return filter(obj, (value, name) => names.indexOf(name) === -1)
}

export function isEmptyObject(object) {
  return object === undefined ? true : !Object.keys(object).length
}

export function id(fn) {
  return (...argv) => fn.call(this, ...argv)
}

export function pick(obj, names) {
  return filter(obj, (value, name) => names.indexOf(name) !== -1)
}

export function mapValues(obj, handler) {
  return reduce(obj, (last, value, key) => ({ ...last, [key]: handler(value, key) }))
}

export function map(obj, fn) {
  return Object.keys(obj).reduce((output, key, index) => output.concat(fn(obj[key], key, index)), [])
}

export function each(obj, fn) {
  return keys(obj).forEach((k) => {
    fn(obj[k], k)
  })
}

export function deepEach(obj, fn) {
  return Object.keys(obj).forEach((k) => {
    fn(obj[k], k)
    if (typeof obj[k] === 'object') {
      deepEach(obj[k], fn)
    }
  })
}

export function removeItem(obj, item) {
  if (Array.isArray(obj)) {
    obj.splice(obj.indexOf(item), 1)
  }
  Object.keys(obj).forEach((k) => {
    if (obj[k] === item) {
      delete obj[k]
    }
  })
}

export const typeChecker = data => type => (!type || toString.call(data) === `[object ${type}]`)

export function zip(zipKeys, zipValues) {
  return zipKeys.reduce((last, key, index) => {
    last[key] = zipValues[index]
    return last
  }, {})
}

export function translate(string, checker) {
  /* eslint-disable */
  const parseResult = new Function(`return ${string}`)()
  if( checker && !typeChecker(parseResult)(checker.type)) {
    throw new ErrorMessage(checker.message)
  }
  return parseResult
}

export function offsetTop(el) {
  let top = el.offsetTop
  let parent = el.offsetParent
  while (parent !== null) {
    top += parent.offsetTop
    parent = parent.offsetParent
  }
  return top
}
export function offsetLeft(el) {
  let left = el.offsetLeft
  let parent = el.offsetParent
  while (parent !== null) {
    left += parent.offsetLeft
    parent = parent.offsetParent
  }
  return left
}

export function addEvent(el, event, handler) {
  if (!el) return
  if (el.attachEvent) {
    el.attachEvent(`on${event}`, handler)
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true)
  } else {
    el[`on${event}`] = handler
  }
}

export function removeEvent(el, event, handler) {
  if (!el) return
  if (el.detachEvent) {
    el.detachEvent(`on${event}`, handler)
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true)
  } else {
    el[`on${event}`] = null
  }
}
/**
 * @param {Object} target
 * @param {Array<String>} methods
 */
export function binds(target, methods) {
  methods.forEach(methodName => {
    if (!target[methodName]) {
      throw new ErrorMessage(`未定义函数"${methodName}"`, true)
    }
    target[methodName] = target[methodName].bind(target)
  })
}

export function getBrowserPrefix() {
  if (typeof window === 'undefined') return ''
  const styles = window.getComputedStyle(document.documentElement, '')
  const pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
  )[1]
  if (pre === 'ms') return pre
  return pre.slice(0, 1).toUpperCase() + pre.slice(1)
}

/**
 * @param {String} fullname
 * @returns {String}
 * @example
 *    const fullname = 'a.b.c(a.b.c, a.b.c)'
 *    getName(fullname) // 'c(c, c)'
 */
export function getName(fullname = '') {
  return fullname.replace(/[a-zA-Z_0-9\.]+/g, (a) => a.split('.').slice(-1))
}

/**
 * 获取url问号后边的变量相对应的值
 * @param {String} key
 * @return {String}
 */
export function getQuery(key) {
  const reg = new RegExp(`(^|&)${key.toLowerCase()}=([^&]*)(&|$)`, 'i')
  const r = window.location.search.substr(1).match(reg)
  return r ? decodeURI(r[2]) : ''
}

/**
 * 将对象转成graphql参数字符串, 会自动过滤掉undefined 或 null
 * @param {*} value
 * @return {String}
 * @example
 *    const obj = { a: 1, b: 2, d: undefined }
 *    getGraphQLArgsStr(obj) // "{a:1,b:2}"
 */
export function getGraphQLArgsStr(value) {
  function parse(val) {
    if (typeof val === 'string') {
      return `"${val.replace(/"/g, '\\"')}"`
    }
    if (!val || typeof val === 'number' || typeof val === 'boolean') {
      return String(val)
    }
    if (Array.isArray(val)) {
      return `[${val.map(item => parse(item)).join(',')}]`
    }
    const res = []
    each(val, (item, key) => {
      if (item !== undefined && item !== null) {
        res.push(`${key}:${parse(item)}`)
      }
    })
    return `{${res.join(',')}}`
  }

  return parse(value)
}

// 解析变量相关数据
export function parseData(data = {}, typeContainer = [], extendData = {}, opts = {}) {
  let getFieldList
  let type
  let hasChildren = false
  const name = data.name || data.fieldName
  let path = opts.path || ''
  const isField = opts.isField || false
  const showList = opts.showList || false
  // 默认prefix为空
  extendData.prefix = extendData.prefix || ''
  path = !path ? `${extendData.prefix}#${name}` : `${path}.${name}`
  const typeId = data.typeId || data.fieldTypeId
  type = typeContainer.find(item => item.key === typeId)
  if (!type) throw new ErrorMessage(`未定义typeId: ${typeId}`, true)
  type = type.value
  const typeName = type.name
  const isList = LIST_TYPE_REG.test(typeName)
  if (showList && isList) {
    const listChildTypeId = type.typeGenericList && type.typeGenericList.length > 0 ? type.typeGenericList[0].genericTypeId : null
    if (listChildTypeId) {
      hasChildren = true
      getFieldList = () => [parseData({
        name: '',
        typeId: listChildTypeId,
      }, typeContainer, extendData, {
        path,
        showList,
      })]
    }
  } else if (type.fieldList && type.fieldList.length > 0) {
    hasChildren = true
    getFieldList = () => type.fieldList.map(item => parseData(item, typeContainer, extendData, {
      path,
      isField: true,
      showList,
    }))
  }
  function TypeData(_data) {
    Object.assign(this, _data)
  }

  // 这里使用 new TypeData 防止直接传plain对象 getFieldList 被mobx转换掉
  return new TypeData({
    ...data,
    name,
    path,
    typeName,
    typeId,
    getFieldList,
    isList,
    hasChildren,
    isRoot: !isField,
    isField,
    fieldList: null,
    ...extendData,
  })
}
/**
 * @param {String}targetPath
 * @param {Array<String>}allPath
 * @returns {Boolean}
 * @example
 *    const allPath  = ['#a.b.c']
 *    matchPath('#a.b', allPath) // true
 *    matchPath('#a.b.c.d', allPath) // true
 *    matchPath('#a.d', allPath) // false
 *    matchPath('#a.b.d', allPath) // false
 */
export function matchPath(targetPath, allPath) {
  const targetPathArr = targetPath.split('.')
  return !!allPath.find(path => (
    !path.split('.').find((key, index) => targetPathArr[index] && key !== targetPathArr[index])
  ))
}

export function debounce(fn, wait = 200) {
  let timeout
  let timestamp
  let lastArgs = []
  let context = null

  function later() {
    const last = Date.now() - timestamp
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      fn.call(context, ...lastArgs)
      timeout = null
      lastArgs = []
    }
  }

  return function debounced(...args) {
    lastArgs = args
    context = this
    timestamp = Date.now()
    if (!timeout) {
      setTimeout(later, wait)
    }
  }
}
/**
 * @param {Array} targetArr
 * @param {Function?} getter
 * @returns {Array.<*>}
 * @example
 *    const arr = [{name: 'bcde'}, {name: 'abcgga'}]
 *    const newArr = sortArrByCharCode(arr, (obj) => obj.name)
 */
export function sortArrByCharCode(targetArr = [], getter) {
  return targetArr.sort((str1, str2) => {
    if (getter) {
      str1 = getter(str1)
      str2 = getter(str2)
    }
    let cursor = 0
    for (; cursor <= str1.length; cursor++) {
      const A = str1.charCodeAt(cursor)
      const B = str2.charCodeAt(cursor)
      const a = str1.toLowerCase().charCodeAt(cursor)
      const b = str2.toLowerCase().charCodeAt(cursor)
      if (isNaN(b)) return -1
      if (a !== b) return a < b ? -1 : 1
      if (a === b && A !== B) {
        // 小写排前面
        return A < B ? 1 : -1
      }
    }
    return 0
  })
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function indexBy(arr, indexKey) {
  return arr.reduce((output, current) => {
    output[current[indexKey]] = current
    return output
  }, {})
}

export function walk(obj, childrenName, handler, path = []) {
  handler(obj, path)
  if (obj[childrenName] !== undefined && Array.isArray(obj[childrenName])) {
    obj[childrenName].forEach((child, index) => walk(child, childrenName, handler, path.concat([childrenName, index])))
  }
}

export function values(obj) {
  return Object.keys(obj).map(key => obj[key])
}

// 处理 GraphQL 字符串中的多态型 key
// e.g. [...onXXX:] => ["...on XXX:"]
export function toPolymorphismString(str) {
  return str
  .replace(/(\.\.\.on[^:]*):/mg, (_, matchedString) => `"${matchedString}":`)
  .replace(/\.\.\.on/mg, '...on ')
}

export function safeEval(str) {
  const fnStr = `return (${toPolymorphismString(str).replace(/\n/g, '')})`
  const fn = new Function(fnStr)
  return fn()
}

export function subtract(all, some) {
  return all.reduce((output, name) => (!some.includes(name) ? output.concat(name) : output), [])
}

export function isAsyncFn(fn = () => {
}) {
  return /^async/.test(fn.name || '')
}

export function concat(a, b) {
  if (isAsyncFn(a) || isAsyncFn(b)) {
    // CAUTION 临时解决 babel 处理 async 参数时的 bug
    return async function asyncConcatFn(c, d, e, f, g, h, i, j, k) {
      if (typeof a === 'function') {
        if (isAsyncFn(a)) {
          await a(c, d, e, f, g, h, i, j, k)
        } else {
          a(c, d, e, f, g, h, i, j, k)
        }
        if (isAsyncFn(b)) {
          await b(c, d, e, f, g, h, i, j, k)
        } else {
          b(c, d, e, f, g, h, i, j, k)
        }
      }
    }
  }

  return (...arg) => {
    if (typeof a === 'function') a(...arg)
    if (typeof b === 'function') b(...arg)
  }
}

export function decorate(decorator, fn) {
  if (isAsyncFn(fn)) {
    return async function asyncDecoratedFn(context, payload) {
      // CAUTION 临时解决 babel 处理 async 参数时的 bug
      if (typeof decorator === 'function') decorator(context, payload)
      return await fn(context, payload)
    }
  }

  return (...arg) => {
    if (typeof decorator === 'function') decorator(...arg)
    return fn(...arg)
  }
}

export function union(a, b) {
  return a.reduce((output, item) => (output.includes(item) ? output : output.concat([item])), b.slice(0))
}

export function unique(arr) {
  arr.sort()
  if (arr.length < 1) {
    return arr
  }
  const re = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== re[re.length - 1]) {
      re.push(arr[i])
    }
  }
  return re
}

export function nextTick(fn) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn()
      resolve()
    }, 0)
  })
}

export function insert(arr, index, item) {
  return arr.slice(0, index).concat(item).concat(arr.slice(index))
}

export function capitalize(str) {
  return str === undefined || str.length === 0 ? str : `${str[0].toUpperCase()}${str.slice(1)}`
}

export function compact(arr) {
  return arr.filter(a => a)
}

export function different(a, b) {
  return reduce(b, (last, value, key) => (value !== a[key] ? last.concat({ key, value }) : last)
    , [])
}

export function shallowEqual(a, b) {
  return different(a, b).length === 0
}

export function exchange(arr, index) {
  const next = arr[index + 1]
  arr[index + 1] = arr[index]
  arr[index] = next
  return arr
}

export function result(valueOrFn, ...args) {
  return (typeof valueOrFn === 'function') ? valueOrFn(...args) : valueOrFn
}

// 有些 config 是没有被 encode 过的, 这种情况去 decode 并且当中有 % 字符, 就会出错
export function safeDecodeURIComponent(str) {
  try {
    return decodeURIComponent(str) 
  } catch (e) {
    return str
  }
}


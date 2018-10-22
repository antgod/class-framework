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

const A = {}
A.getById = function(id, jq = true) {
  // 替换掉原有代码
  if(!jq) {
    // 原有代码...
  } else {
    return $(id).get(0)
  }
}

A.on = function(id, type, fn, jq) {
  // 替换掉原有代码
  if(!jq) {
    // 原有代码...
  } else {
    return this.getById(id, jq).on(type, fn)
  }
}
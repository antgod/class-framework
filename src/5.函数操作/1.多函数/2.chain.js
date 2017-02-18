import "babel-polyfill";
// 函数串联执行，上一个函数的返回值传递给下一个函数
function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
}


function chain(...fns) {
  fns = fns.slice()
  fns.reverse()
  return (payload) => {
    const wrapedFns = fns.map(fn => async (arg) => {
      arg = await Promise.resolve(arg)
      if (!arg) return false
      return await fn(payload)
    })
    return compose(...wrapedFns)(payload)
  }
}

function compositeSaveStateChanged(){
  console.log('compositeSaveStateChanged', arguments)
  return true
}

function backendLogicSaveStateChanged(){
  console.log('backendLogicSaveStateChanged', arguments)
  return true
}

function navigatorSaveStateChanged () {
  console.log('navigatorSaveStateChanged', arguments)
  return true
}

const close = chain(compositeSaveStateChanged,backendLogicSaveStateChanged,navigatorSaveStateChanged);

close({
  payload:{}
});
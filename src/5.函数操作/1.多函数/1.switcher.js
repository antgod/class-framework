// 多函数选择路由操作
function switcher(map) {
  return (arg) => {
    const fn = map[arg.payload.type] || map.default;
    if (fn) {
      return fn(arg)
    }
  }
}

function compositeSaveStateChanged(){
  console.log('compositeSaveStateChanged', arguments)
}

function backendLogicSaveStateChanged(){
  console.log('backendLogicSaveStateChanged', arguments)
}

function navigatorSaveStateChanged () {
  console.log('navigatorSaveStateChanged', arguments)
}

const close = switcher({
  component: compositeSaveStateChanged,
  backendLogic: backendLogicSaveStateChanged,
  default: navigatorSaveStateChanged,
});

close({
  payload:{
    type: 'component'
  }
});
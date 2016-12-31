import "babel-polyfill";

function concat(...fns) {
  return payload => fns.forEach((fn) => {
    fn(payload)
  })
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

const close = concat(compositeSaveStateChanged,backendLogicSaveStateChanged,navigatorSaveStateChanged);

close({
  payload:{}
});
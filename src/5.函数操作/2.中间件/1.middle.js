function wrapListenerWithMiddleware(defaultListeners, middlewares) {
  return middlewares.reduce((listeners, middleware) => middleware(listeners), defaultListeners)
}

function createListenerMiddleware(middleware, ...rest) {
  return listeners => middleware(listeners, ...rest)
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

const listenPostMessageActions = {
  'preview/loadPage': ({payload}) => {
    console.log('preview/loadPage', payload)
  },
}

const createPostMessage = () => {
  const listeners = []
  return {
    dispatch: (event, data) => {
      console.log('postMessage信息', event, data)
      // 需要在浏览器环境执行
      // window.postMessage(ar,gs, "*")
      listeners.forEach(({ event, callback }) => {
        callback(data)
      })
    },
    listen: (event, callback) => {
      listeners.push({ event, callback })
    }
  }
}

const { dispatch, listen } = createPostMessage()

function concatWithPostMessage(oldListeners, postMessageMap) {
  return Object.keys(postMessageMap).reduce((newListeners, originKey) => {
    const oldFn = newListeners[originKey]

    listen(originKey, (payload) => {
      postMessageMap[originKey]({ payload })
    })

    // dispatch message
    newListeners[originKey] = (arg) => {
      if (oldFn) oldFn(arg)
      dispatch(originKey, arg.payload)
    }
    return newListeners
  }, oldListeners)
}

const close = wrapListenerWithMiddleware({
  component: compositeSaveStateChanged,
  backendLogic: backendLogicSaveStateChanged,
  default: navigatorSaveStateChanged,
}, [
  createListenerMiddleware(concatWithPostMessage, listenPostMessageActions),
]);

close['preview/loadPage']({payload: '随便写点参数'});
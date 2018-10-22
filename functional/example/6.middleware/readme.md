## concatMiddlewares/createMiddle
### 说明
concatMiddlewares: 用来连接函数列表与函数中间件列表。

createMiddleware: 用来创建中间件

### 用途
需求如下，我们有这些函数:login,logout,load,edit,save,post。

有些函数（如edit, save）需要用户登录才能执行。

有些函数（如post）需要打印日志。

我们不希望破坏函数的内部构造，那么，中间件登场了。

我们可以这样构建函数列表 {login,logout,load}, loginMiddleware: {edit,save}, logMiddleware:{post}。最后将它们concat到一起。

### 用法
```
concatMiddlewares(listeners, [
  createMiddleware(logHandle, {edit,save}),
  createMiddleware(loginHandle, loginListeners),
  ...
])
```
listeners: 事件列表

handle: 中间件处理器

### 源码
```
const concatMiddlewares = (defaultListeners, middlewares) => middlewares.reduce((listeners, middleware) => middleware(listeners), defaultListeners)

const createMiddleware = (handle, listeners) => originListeners => {
  return Object.keys(listeners).reduce((originListener, key) => {
    originListener[key] = handle(listeners[key], key)
    return originListener
  }, originListeners)
}
```

### 例子
1. 使用middleware(./examples/test.js)

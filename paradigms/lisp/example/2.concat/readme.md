## concat
### 说明
依次执行参数中的函数数组，每个函数的参数相同，返回每个函数的返回值数组。

### 用途
用来拆解大函数，函数内部过程执行大量逻辑，每段逻辑没有任何关联。

### 用法
```
concat(fn1,fn2,fn3...)(...args)
```
依次执行函数fn1,fn2,fn3...。initArgs作为初始化参数传递给每一个函数。。

### 源码
```
const concat = (...funcs) => (...args) => funcs.reduce((returns, func) => [...returns, func(...args)], [])
```

### 例子

1. 不使用concat(./examples/old.js)
2. 使用concat(./examples/test.js)






## switcher
### 说明
依次执行参数中的函数数组，返回第一个有返回值的函数的返回值。

### 用途
重构同一函数内有大量校验函数的代码。

### 用法
```
some(validateFn1, validateFn2, validateFn3)(input)
```

### 源码
```
const some = (...funs) => (...args) => funs.reduce((last, fun) => last === undefined ? fun(...args) : last, undefined)
```

### 例子

1. 不使用some(./examples/old.js)
2. 使用some(./examples/test.js)

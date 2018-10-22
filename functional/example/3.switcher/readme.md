## switcher
### 说明
根据参数配置类型执行配置表中的函数，返回函数执行的返回值

### 用途
消除函数内if,switch.把逻辑判断改成配置表。

### 用法
```
switcher({case1: fn1, case2: fn2, case3: fn3})('case1', ...args)
```

### 源码
```
const switcher = map => (type, ...args) => { return map[type] !== undefined ? map[type](...args) : undefined }
```

### 例子

1. 不使用switcher(./examples/old.js)
2. 使用switcher(./examples/test.js)

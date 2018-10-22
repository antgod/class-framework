## compose
### 说明
依次执行参数中的函数数组，把每个函数的返回值传入下个函数的第一个参数中，返回最后一个函数的返回值。

### 用途
用来拆解大函数，函数内部过程执行大量逻辑，每段逻辑均有关联，比如依赖上一段逻辑的返回。

### 用法
```
compose(fn1,fn2,fn3...)(...initArgs)
```
依次执行函数fn1,fn2,fn3...。initArgs作为初始化参数传递给第一个函数。每个函数的返回值传递给下个函数的第一个参数。

### 源码
```
const compose = (first, ...last) => (...initArgs) =>
  last.reduce((composed, func) =>
    func(composed), first(...initArgs))
```

### 实现
源码仅有一行，实现非常简单。

`last.reduce`循环所有参数中传入函数（即fn1,fn2,fn3...）。

`first(...initArgs)`执行第一个函数（即为fn1），返回结果即为`composed`（参考es5 reduce api）

`func(composed)`composed作为参数又传入到下一个func（即为fn2）函数中，执行fn2，fn2返回后又为composed，composed作为参数传给fn3，最后返回fn3的返回值。

### 例子

1. 不使用compose(./examples/old.js)
2. 使用compose(./examples/test.js)







// 对扩展开放，意味着有新的需求或变化时，可以对现有代码进行扩展，以适应新的情况。
// 对修改封闭，意味着类一旦设计完成，就可以独立完成其工作，而不要对类进行任何修改。
// 需求总是变化。从中透射出一个关键的意思就是，对于软件设计者来说，必须在不需要对原有的系统进行修改的情况下，实现灵活的系统扩展。

// 利用before,after函数
// 利用多态消除判断
// 找到变化的地方：倒钩与回调

// 发布订阅
// 模板方法
// 策略模式
// 代理模式
// 职责链模式

// bad
class AjaxRequester {
  constructor () {
    // 如果我们需要另一个 HTTP 方法，比如 DELETE，该怎么办？
    // 我们必须打开这个文件然后手工把它加进去
    this.HTTP_METHODS = ['POST', 'PUT', 'GET']
  }

  get (url) {
    // ...
  }
}

// good
class AjaxRequester {
  constructor () {
    this.HTTP_METHODS = ['POST', 'PUT', 'GET']
  }

  get (url) {
    // ...
  }

  addHTTPMethod (method) {
    this.HTTP_METHODS.push(method)
  }
}

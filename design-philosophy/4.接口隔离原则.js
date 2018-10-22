// 客户端不应该依赖它不需要的接口；一个类对另一个类的依赖应该建立在最小的接口上。
// 不应当在客户端代码在实现抽象逻辑时，暴露一些客户端代码不需要使用或者关心的方法。

// bad
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

let $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule: function() {} // 多数时候我们不需要动画
  // ...
});

// good
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

let $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule: function() {}
  }
});
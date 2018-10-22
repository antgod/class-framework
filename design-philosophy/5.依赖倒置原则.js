// 通常情况的设计都是高层模块依赖于低层模块。这样看似顺理成章，低层模块不怎么变动，高层模块调用低层模块。
// 但是事实上，事物总是在变化，经常低层模块变化，引起高层一系列的变化。
// 高层模块不该依赖于低层模块，二者都该依赖于抽象
// 抽象应该封装底层模块的变化

// 与开放、封闭不同的是，开放-封闭是每次需求变化，不会破坏原有的类实现。
// 而依赖倒置原则是：高层不应该依赖底层，而应该依赖抽象层接口。

// bad
class InventoryTracker {
  constructor(items) {
    this.items = items;

    // 不好：我们创建了一个依赖于特定请求的实现。
    // 我们应该只依赖请求方法：`request` 的 requestItems，如果InventoryRequester接口有变化，我们还得改InventoryTracker
    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

let inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();

// good
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }

  requestItem(item) {
    // ...
  }
}

// 通过构建外部依赖并注入它们，我们很容易把请求模块替换成
// 一个使用 WebSocket 的新模块。
let inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
// 这段代码确实体现了“多态性”，当我们分别向鸭和鸡发出“叫唤”的消息时，它们根据此
// 消息作出了各自不同的反应。但这样的“多态性”是无法令人满意的，如果后来又增加了一只动
// 物，比如狗，显然狗的叫声是“汪汪汪”，此时我们必须得改动 makeSound 函数，才能让狗也发出
// 叫声。修改代码总是危险的，修改的地方越多，程序出错的可能性就越大，而且当动物的种类越
// 来越多时，makeSound 有可能变成一个巨大的函数。

// 多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，也就是将“不变的事
// 物”与 “可能改变的事物”分离开来。在这个故事中，动物都会叫，这是不变的，但是不同类
// 型的动物具体怎么叫是可变的。把不变的部分隔离出来，把可变的部分封装起来，这给予了我们
// 扩展程序的能力，程序看起来是可生长的，也是符合开放—封闭原则的，相对于修改代码来说，
// 仅仅增加代码就能完成同样的功能，这显然优雅和安全得多。

var duck = {
  duckSinging: function () {
    console.log('嘎嘎嘎')
  }
}
var chicken = {
  duckSinging: function () {
    console.log('叽叽叽')
  }
}

var choir = []; // 合唱团
var joinChoir = function (animal) {
  if (animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('恭喜加入合唱团')
    console.log('合唱团已有成员数量:' + choir.length)
  }
}

var startChoir = function () {
  choir.forEach(c => {
    c.duckSinging()
  })
}

joinChoir(duck); // 恭喜加入合唱团
joinChoir(chicken); // 恭喜加入合唱团

startChoir()

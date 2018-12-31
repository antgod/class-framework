var Beverage = function () {
  console.log('把水煮沸')
}

Beverage.prototype = {
  a: function () {},
  b: function () {},
  c: function () {},
  init: function () {
    this.a()
    this.b()
    this.c()
  }
}

var Coffee = function () {}
Coffee.prototype = new Beverage()

Coffee.prototype.a = function () {
  console.log("a")
}
Coffee.prototype.b = function () {
  console.log("b")
}
Coffee.prototype.c = function () {
  console.log("c")
}

var coffee = new Coffee()
coffee.init()

// 简单工厂存在一些问题，每次需求都要改变两处地方：1.创建相应的类 2.修改简单工厂的处理类

const BasketBall = function () {
  this.say = () => console.log("I'm yaoming")
}

const FootBall = function () {
  this.say = () => console.log("I'm cluo")
}

var Factory = function (type, ...args) {
  if (this instanceof Factory) {
    if (!this[type]) {
      console.log(`type:${type} is undefined`)
      return null
    }
    return new this[type](...args)
  } else {
    return new Factory(type, ...args)
  }
}

Factory.prototype = {
  BasketBall,
  FootBall,
}

var data = [
  {type: 'BasketBall', content: 'BasketBall content'},
  {type: 'FootBall', content: 'FootBall content'},
  {type: 'Null', content: 'Null content'}
]

data.map(function (item) {
  const cls = Factory(item.type, item.content)
  if (cls && cls.say) {
    cls.say()
  }
})

function BasketBall () {
  this.say = () => console.log("I'm yaoming")
} 

function FootBall () {
  this.say = () => console.log("I'm cluo")
}

new BasketBall().say()
new FootBall().say()

// 简单工厂
const FACTORY_LIB = {
  WORLD_CUP: 'WORLD_CUP',
  NBA: 'NBA'
}

// 创建类工厂
function factory (type) {
  if (type === FACTORY_LIB.WORLD_CUP) {
    return new BasketBall()
  } else if (type === FACTORY_LIB.NBA) {
    return new FootBall()
  }
}

factory(FACTORY_LIB.WORLD_CUP).say()
factory(FACTORY_LIB.NBA).say()

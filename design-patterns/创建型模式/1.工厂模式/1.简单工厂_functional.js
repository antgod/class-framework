const BasketBall = () => {
  return {
    say: () => console.log("I'm yaoming")
  }
}

const FootBall = () => {
  return {
    say: () => console.log("I'm cluo")
  }
}

// 简单工厂
const FACTORY_LIB = {
  worldCup: 'worldCup',
  nba: 'nba'
}

// 创建类工厂
function factory (type) {
  if (type === FACTORY_LIB.worldCup) {
    return BasketBall()
  } else if (type === FACTORY_LIB.nba) {
    return FootBall()
  }
}

factory(FACTORY_LIB.worldCup).say()
factory(FACTORY_LIB.nba).say()

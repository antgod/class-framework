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
  WORLD_CUP: 'WORLD_CUP',
  NBA: 'NBA'
}

// 创建类工厂
function factory (type) {
  if (type === FACTORY_LIB.WORLD_CUP) {
    return BasketBall()
  } else if (type === FACTORY_LIB.NBA) {
    return FootBall()
  }
}

factory(FACTORY_LIB.WORLD_CUP).say()
factory(FACTORY_LIB.NBA).say()

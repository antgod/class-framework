function BasketBall () {
  this.say = () => console.log("I'm yaoming")
} 

function FootBall () {
  this.say = () => console.log("I'm cluo")
}

// origin: 类名极其难记，而且不好找在哪个包下，难以维护
new BasketBall().say()
new FootBall().say()

// 简单工厂
const FACTORY_LIB = {
  worldCup: 'worldCup',
  nba: 'nba'
}

// 创建类工厂
function factory (type) {
  if (type === FACTORY_LIB.worldCup) {
    return new BasketBall()
  } else if (type === FACTORY_LIB.nba) {
    return new FootBall()
  }
}

factory(FACTORY_LIB.worldCup).say()
factory(FACTORY_LIB.nba).say()

// 创建通用类工厂
function createCommonFactory(attrs, diffs = {}) {
  const obj = new Object()
  for(const key in attrs) {
    obj[key] = attrs[key]
  }

  for(const key in diffs) {
    obj[key] = diffs[key]
  }
  return obj
}

const diffs = {
  bastetball: {
    use: 'hand'
  },
  football: {
    use: 'foot'
  },
}
const ball = createCommonFactory({ shape: 'circle' }, diffs.bastetball)
console.log(ball)

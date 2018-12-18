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

var Factory = (type, ...args) => {
  const classes = {
    BasketBall,
    FootBall
  }

  if (classes[type]) {
    return classes[type](...args)
  }
  console.log(`type:${type} is undefined`)
  return null
}

var data = [
  {type: 'BasketBall', content: 'BasketBall content'},
  {type: 'FootBall', content: 'FootBall content'},
  {type: 'Null', content: 'Null content'}
]

data.map(function (item) {
  const cls = Factory(item.type, item.content)
  if (cls) {
    cls.say()
  }
})

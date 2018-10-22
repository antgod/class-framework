/*
* 区分不同动作的状态扭转
* */

/*
* 解耦合,分离出发布订阅类
* */
function PubSub () {
  var list = []
  var self = {
    add: function (event) {
      list.push(event)
      if (this.fired) {
        this.fire()
      }
      return this
    },
    fire: function () {
      var args = arguments
      list.forEach((event) => {
        event.apply(this, args)
      })
      this.fired = true
    }
  }
  return self
}

function Promise () {
  this.fired = false
  this.callbacks = {}
}

var fn = Promise.prototype

var states = {
  'resolve': {status: 'done',pubSub: new PubSub()},
  'reject': {status: 'fail',pubSub: new PubSub()}
}

for (var i in states) {
  var state = states[i]
  var pubsub = state.pubSub

  fn[i] = pubsub.fire
  fn[state.status] = pubsub.add
}

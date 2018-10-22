/*
* 没有区分动作与状态版本
* */

function Promise () {
  this.fired = false
  this.callbacks = []
}

var fn = Promise.prototype

var states = {
  'resolve': {state: 'done'},
  'reject': {state: 'fail'}
}

fn.add = function (event) {
  this.callbacks.push(event)
  if (this.fired) {
    this.fire()
  }
  return this
}

fn.fire = function () {
  var args = arguments
  this.callbacks.forEach((event) => {
    event.apply(this, args)
  })
  this.fired = true
}

for (var i in states) {
  fn[i] = fn.fire
  fn[states[i].state] = fn.add
}

Function.prototype.before = function (beforeFn) {
  var self = this
  return function () {
    if (typeof beforeFn == 'function') {
      beforeFn.apply(this, arguments)
      self.apply(this, arguments)
    }
  }
}

Function.prototype.after = function (afterFn) {
  var self = this
  return function () {
    if (typeof afterFn == 'function') {
      self.apply(this, arguments)
      afterFn.apply(this, arguments)
    }
  }
}

var func = function () {
  console.log('func')
}

func = func.before(function () {
  console.log(this, arguments)
}).after(function () {
  console.log(this, arguments)
})

func(1, 2, 3)

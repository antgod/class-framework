Array.prototype.push = function () {
  var n = this.length
  var m = arguments.length
  for (var i = 0; i < m; i++) {
    this[i + n] = arguments[i]
  }
  this.length = n + m
  return this.length
}

var a = [1, 2]
a.push(3, 4)

console.log(a)

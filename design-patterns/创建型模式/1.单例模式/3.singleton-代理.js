function Singleton (html) {
  this.html = html
  this.init()
}

Singleton.prototype.init = function () {
  var div = document.createElement('div')
  div.innerHTML = this.html
  document.body.appendChild(div)
}

var ProxySingleton = (function () {
  var instance
  return function (html) {
    if (!instance) {
      instance = new Singleton(html)
    }
    return instance
  }
})()

var a = ProxySingleton('a')
var b = ProxySingleton('b')
console.log(a == b)

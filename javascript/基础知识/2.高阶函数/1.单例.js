var getSingle = function (fn) {
  var ret
  return function () {
    return ret || (ret = fn.apply(this, arguments))
  }
}

var getObject = getSingle(() => ({}))

var obj1 = getObject()
var obj2 = getObject()

console.log(obj1 === obj2)

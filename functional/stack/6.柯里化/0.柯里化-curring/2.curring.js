function square (i) {
  return i * i
}

function dubble (i) {
  return i *= 2
}

function map (handeler, list) {
  return list.map(handeler)
}

var shift = [].shift
var slice = [].slice

function curring () {
  var fn = shift.call(arguments)
  var args = slice.call(arguments)

  return function () {
    var _args = slice.call(arguments)
    return fn.apply(this, args.concat(_args))
  }
}

var mapSQ = curring(map, square)
console.log(mapSQ([1, 2, 3, 4, 5]))

var mapDB = curring(map, dubble)
console.log(mapDB([1, 2, 3, 4, 5]))

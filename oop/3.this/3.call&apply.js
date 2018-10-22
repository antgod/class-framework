var fun = function () {
  console.log(this === global)
}

// 或传入null,undefined
fun.call()

var sum = function () {
  return [].slice.call(arguments).reduce((last, num) => last + num, 0)
}

const array = [1, 2, 3, 4, 5]

console.log(sum.apply(null, array))

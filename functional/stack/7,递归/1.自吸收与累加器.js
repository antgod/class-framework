const _ = require('underscore')

function myLength(arr) {
  if (_.isEmpty(arr)) {
    return 0
  } else {
    return 1 + myLength(_.rest(arr))
  }
}

console.log(myLength([1, 2, 3, 3, 2, 1]))

function myLength1(arr, n = 0) {
  if (_.isEmpty(arr)) {
    return n
  } else {
    return myLength1(_.rest(arr), n + 1)
  }
}

console.log(myLength1([1, 2, 3, 3, 2, 1]))

function cycle(times, arr) {
  if (!times) {
    return []
  } else {
    return arr.concat(cycle(--times, arr))
  }
}

console.log(cycle(5, [3, 2, 1]))

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sumSelf = ([current, ...rest]) => {
  if (!current) {
    return 0
  } else {
    return sumSelf(rest) + current
  }
}

const sumAdd = ([current, ...rest], result = 0) => {
  if (!current) {
    return result
  } else {
    return sumAdd(rest, result + current)
  }
}

console.log(sumSelf(arr))

console.log(sumAdd(arr))
const _ = require('../util/understore')

// 墙上有x瓶啤酒
// x瓶啤酒
// 拿下一个来，分给大家
// 墙上还有x-1瓶啤酒
// x-1后，再循环唱一次。
// 直到x-1=1后，改为：墙上已经没有啤酒了。

// 命令编程
for (let i = 99; i > 0; i--) {
  if (i === 1) {
    console.log('没有啤酒了')
  } else {
    console.log(`墙上有${i}瓶啤酒，拿下一个来，分给大家。墙上还有${i - 1}瓶啤酒`)
  }
}

// 函数式编程
const segment = i =>
  _.chain([]).push(`墙上有${i}瓶啤酒,拿下一个来,分给大家,`).tap((data) => {
    const remain = i - 1
    if (remain > 0) {
      data.push(`还剩${i - 1}瓶啤酒,`)
    } else {
      data.push('没有啤酒了,')
    }
  }).push('大家喝吧\n')
  .value()

const song = (start, end, seg) => _.range(start, end).reduce((arr, next) => arr.concat(seg(next)), [])
console.log(song(99, 1, segment).join(''))

// 元编程
function Point2D(x, y) {
  this._x = x
  this._y = y
}

function Ponit3D(x, y, z) {
  Point2D.call(this, x, y)
  this._z = z
}

console.log(new Ponit3D(1, 2, 3))

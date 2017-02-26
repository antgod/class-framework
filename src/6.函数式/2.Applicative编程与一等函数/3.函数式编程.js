// 墙上有x瓶啤酒
// x瓶啤酒
// 拿下一个来，分给大家
// 墙上还有x-1瓶啤酒
// x-1后，再循环唱一次。
// 直到x-1=1后，改为：墙上已经没有啤酒了。

//for (var i = 99; i > 0; i--) {
//  if (i === 1) {
//    console.log('没有啤酒了');
//  } else {
//    console.log(`墙上有${i}瓶啤酒，拿下一个来，分给大家。)
//  }
//}
const _ = require('../util/understore');

const segment = (i) =>
   _.chain([]).
   push(`墙上有${i}瓶啤酒`).
   push(`拿下一个来`).
   push(`分给大家`).
   tap(data=> {
    if (i - 1 > 0) {
      data.push(`还剩${i-1}瓶啤酒`);
    } else {
      data.push('没有啤酒了');
    }
  })
   .value();

const song = (start, end, segment) => _.range(start, end).reduce((arr, next)=>arr.concat(segment(next)), []);

console.log(song(99, 1, segment).join(','));


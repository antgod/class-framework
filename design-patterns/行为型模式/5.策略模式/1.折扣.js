 /**
  * 促销活动
  */
 // 价格策略对象
 const PriceStrategy = function () {
   // 内部算法
   const _strategy = {
     // 100返30
     return30: function (price) {
       // parseInt可通过~~、|等运算符替换，要注意此时price要在
       //【-2147483648,2147483647】之间
       // +price 转化为数字类型
       return +price - parseInt(price / 100) * 30
     },
     // 100返50
     return50: function (price) {
       return +price - parseInt(price / 100) * 50
     },
     // 9折
     percent90: function (price) {
       // JavaScript在处理小数乘法有bug，所以运算前转化为整数
       return price * 100 * 90 / 10000
     },
     // 8折
     percent80: function (price) {
       return price * 100 * 80 / 10000
     },
     // 5折
     percent50: function (price) {
       return price * 100 * 50 / 10000
     }
   }

   // 策略算法调用接口
   return function (algorithm, price) {
     // 如果算法存在，则调用算法，否则返回false
     return _strategy[algorithm] && _strategy[algorithm](price)
   }
 }
 // 测试实例
 const priceStrategy = PriceStrategy()
 const price1 = priceStrategy('return30', '314.67')
 const price2 = priceStrategy('percent50', '314.67')
 console.log(price1, price2)
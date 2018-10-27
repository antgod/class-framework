/**
 * Created by lihongji on 16/5/8.
 */

// 很多时候都是按照swith/if语句来判断，但是这就带来几个问题，首先如果增加需求的话，
// 我们还要再次修改这段代码以增加逻辑，而且在进行单元测试的时候也会越来越复杂，代码如下：
function judeg (type) {
  var value
  if (type === 1) {
    console.log('todo something1')
    value = 'something1 done'
  }else if (type === 2) {
    console.log('todo something2')
    value = 'something2 done'
  }else if (type === 3) {
    console.log('todo something3')
    value = 'something3 done'
  }

  return value
}

var type = 1
console.log(judeg(1))

// 可以把判断分解成多个函数
function strategy1 () {
  console.log('todo something1')
  return 'something1 done'
}

function strategy2 () {
  console.log('todo something2')
  return 'something2 done'
}

function strategy3 () {
  console.log('todo something3')
  return 'something3 done'
}

function calculate (strategy) {
  return strategy()
}

console.log(calculate(strategy1))
console.log(calculate(strategy2))
console.log(calculate(strategy3))

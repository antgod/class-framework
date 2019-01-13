const Perform = function (money) {
  this.money = money
}

Perform.prototype.getAllMoney = function () {
  return 12 * this.money
}

Function.prototype.extend = function (Parent) {
  const F = function () {}
  F.prototype = Parent.prototype
  F.prototype.constuctor = F
  this.prototype = new F()
}

const S = function (num) {
  Perform.apply(this, arguments)
}

S.extend(Perform)

S.prototype.getAllPay = function () {
  return this.getAllMoney() + 6 * this.money
}

const C = function (num) {
  Perform.apply(this, arguments)
}

C.extend(Perform)

C.prototype.getAllPay = function () {
  return this.getAllMoney() + 2.6 * this.money
}

function Caculate(Func, num) {
  const func = new Func(num)
  return func.getAllPay()
}

console.log(Caculate(C, 15000))
console.log(Caculate(S, 15000))
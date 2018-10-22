// 要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
function Person (name) {
  this.name = name
}
Person.prototype.getName = function () {
  return this.name
}

function Man () {
}

Man.prototype = new Person()

Man.prototype.contructor = Man

// new的原理
var createObject = function () {
  var obj = { }
    Contructor = [].shift.call(arguments)
    obj.__proto__ = Contructor.prototype
    var ret = Contructor.apply(obj, arguments)
    return typeof ret == 'object' ? ret : obj
  }

// var p1=new Person ("lhj")
// var p2=createObject(Person,"lhj")
var m1 = createObject(Man, 'lhj')
// console.log(p1.getName(),p2.getName())

console.log(m1.__proto__)

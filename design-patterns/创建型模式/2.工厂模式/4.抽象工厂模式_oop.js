const VehicleFactory = function (SubClass, superType) {
  const ParentClass = VehicleFactory[superType]
  if (ParentClass) {
    SubClass.prototype = new ParentClass()
    SubClass.prototype.constructor = SubClass
  } else {
    throw new Error('抽象类不存在')
  }
}

VehicleFactory.Car = function () {}

VehicleFactory.Car.prototype = {
  getInfo: function () {
    throw new Error('无法调用抽象方法:getInfo')
  },
  sell: function () {
    throw new Error('无法调用抽象方法:sell')
  }
}

const BMW = function (prise, speed) {
  this.prise = prise
  this.speed = speed
}

VehicleFactory(BMW, 'Car')
// new BMW().getInfo()
BMW.prototype.getInfo = function () {
  console.log(this.prise, this.speed)
}
const bmw = new BMW(1000000, 100)
bmw.getInfo()
bmw.sell()

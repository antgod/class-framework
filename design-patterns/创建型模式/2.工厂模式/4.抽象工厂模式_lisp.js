const VehicleFactory = function (SubClass, superType) {
  const ParentClass = VehicleFactory[superType]
  if (ParentClass) {
    return Object.assign(ParentClass, SubClass)
  } else {
    throw new Error('抽象类不存在')
  }
}

VehicleFactory.Car = {
  getInfo: function () {
    throw new Error('无法调用抽象方法:getInfo')
  },
  sell: function () {
    throw new Error('无法调用抽象方法:sell')
  }
}

const BMW = VehicleFactory({
  getInfo: function (prise, speed) {
    console.log(prise, speed)
  },
}, 'Car')

BMW.getInfo(1000000, 100)
BMW.sell()

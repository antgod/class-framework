// 问题：功能a由类A来完成。现在需要对a扩展出b功能，新的功能由A子类B完成。子类B在完成新功能b的同时有可能会导致原有功能a发生故障。
// 解决：当使用继承时，遵循里氏替换原则。类B继承类A时，除添加新的方法完成新增功能P2外，尽量不要重写父类A的方法，也尽量不要重载父类A的方法。

/* 
  子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。
  子类中可以增加自己特有的方法。
  当子类的方法重载父类的方法时，方法的前置条件（即方法的形参）要比父类方法的输入参数更宽松。
  当子类的方法实现父类的抽象方法时，方法的后置条件（即方法的返回值）要比父类更严格。
*/

// bad
class Rectangle {
  fun (a, b) {
    return a - b
  }
}

console.log('100 - 50 =' + new Rectangle().fun(100, 50))

class Square extends Rectangle {
  fun (a, b) {
    return a + b
  }

  fun2 (a, b) {
    return this.fun(a, b) / 100
  }
}

// 原有函数被破坏
console.log('100 - 50 =' + new Square().fun(100, 50))
console.log('100 + 50 / 100 =' + new Square().fun2(100, 50))



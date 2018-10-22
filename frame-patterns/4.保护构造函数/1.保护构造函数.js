// 保护上下文的构造函数
// 这个主要是避免构造函数在没有使用new来实例化的时候，内部的this指向错误问题。通常没有使用new的话，this一般执行window去了，
// 因此造成了执行错误，给代码带来了灾难。使用下面的方式就可以避免这个问题：
function myClass (name, size) {
  if (this instanceof myClass) { // Key,使用instanceof来检测当前实例是否是myClass的实例化对象
    this.name = name
    this.size = size
  } else {
    return new myClass(name, size)
  }
}
// 但是上面通过instanceof的方式，给继承造成了一定的困扰，因为子类并不是myClass的实例对象，所以会出现属性和方法无法被继承的方式。
// 在说解决办法之前，先来了解一下instanceof操作符的原理：它首先会检测对象当前的原型是否指向右边的构造函数，如果找不到，就会往上一级
// 的原型去查找，直到找到为止，并返回true，否则就返回false。
//
// 基于上面的instanceof的原理，在继承的时候，就可以给子类的prototype原型赋于一个父类的实例化对象就行了，这样就可以在子类继承的时候绕过instanceof的检测。

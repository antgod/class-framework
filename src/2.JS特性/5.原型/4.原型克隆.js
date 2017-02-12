//虽然JavaScript 的对象最初都是由Object.prototype 对象克隆而来的，但对象构造
//器的原型并不仅限于Object.prototype 上，而是可以动态指向其他对象。这样一来，当对象a 需
//要借用对象b 的能力时，可以有选择性地把对象a 的构造器的原型指向对象b，从而达到继承的
//效果。下面的代码是我们最常用的原型继承方式：
var obj = { name: 'sven' };
var A = function() {};
A.prototype = obj;
var a = new A();
console.log(a.name); // 输出：sven

//我们来看看执行这段代码的时候，引擎做了哪些事情。
//1. 首先，尝试遍历对象a 中的所有属性，但没有找到name 这个属性。
//2. 查找name 属性的这个请求被委托给对象a 的构造器的原型，它被a.__proto__ 记录着并且指向A.prototype，而A.prototype 被设置为对象obj。
//3. 在对象obj 中找到了name 属性，并返回它的值。

//当我们期望得到一个“类”继承自另外一个“类”的效果时，往往会用下面的代码来模拟实现：
var A = function() {};
A.prototype = { name: 'sven' };
var B = function() {};
B.prototype = new A();
var b = new B();
console.log(b.name); // 输出：sven

//new的原理
var createObject = function() {
  var obj = new Object();
  Contructor = [].shift.call(arguments);
  obj.__proto__ = Contructor.prototype;
  var ret = Contructor.apply(obj, arguments);
  return typeof ret == "object" ? ret : obj;
};

const Man = (name)=>{
  console.log(name)
}

var m1 = createObject(Man, "lhj");
console.log(m1.__proto__);
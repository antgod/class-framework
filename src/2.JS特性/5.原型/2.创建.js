//要得到一个对象，不是通过实例化类，而是找到一个对象作为原型并克隆它
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function() {
  return this.name;
};

//new的原理
var createObject = function() {
  var obj = new Object(),

    Constructor = [].shift.call(arguments);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, arguments);

  return typeof ret === "object" ? ret : obj;
};

var p1 = new Person("lhj");
var p2 = createObject(Person, "lhj");
console.log(p1.getName(), p2.getName());
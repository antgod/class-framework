//1.作为对象方法调用
var obj = {
  a: 1,
  getA: function() {
    console.log(this == obj);   //返回true
    console.log(this.a);      //指向调用对象:obj
  }
};

obj.getA();

//2.作为普通函数调用
window.name = 'globalname';
var getName = (function(name) {
  //use strict"                 //严格模式下，this指向undefined
  var name = 'private';
  name = 'newgolbalname';         //name不会影响全局，因为这是一个闭包
  console.log(name);            //输出newgolbalname
  console.log(this.name);       //指向window
})(window.name);

console.log(name);                //输出globalname

//3.作为构造器调用
var MyClass = function() {
  this.name = 'sven';              //this指向new返回对象:myClass
  return {                       //如果构造器不显示返回数据，或者返回的不是对象，则返回this,否则返回对象
    name: 'anne'
  }
};

var myClass = new MyClass();
console.log(myClass.name);

//4.作为call,apply调用
var obj1 = {
  a: 'obj1',
  getA: function() {
    console.log(this.a);      //指向调用call参数:obj2
  }
};

var obj2 = {
  a: 'obj2'
};

obj1.getA.call(obj2);

//5.this丢失
var obj3 = {
  myName: 'sven',
  getName: function() {
    console.log(this.myName);
  }
};

obj3.getName();

var getName2 = obj3.getName;        //把函数给了getName2，直接调用，this会指向window,因为这只是普通调用函数的方式
getName2();
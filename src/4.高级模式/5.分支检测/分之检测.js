//分支技术解决的一个问题是处理浏览器之间兼容性的重复判断的问题。普通解决浏览器之间的兼容性的方式是使用if逻辑来进行特性
// 检测或者能力检测，来实现根据浏览器不同的实现来实现功能上的兼容，但问题是，没执行一次代码，可能都需要进行一次浏览器兼
// 容性方面的检测，这个是没有必要的，能否在代码初始化执行的时候就检测浏览器的兼容性，在之后的代码执行过程中，就无需再进
// 行检测了呢？答案是有的，分支技术就可以解决这个问题（同样，惰性载入函数也可以实现Lazy Definied，这个在后面将会讲到）
// ，下面以声明一个XMLHttpRequest实例对象为例子：
//分支
var XHR = function() {
  var standard = {
    createXHR: function() {
      return new XMLHttpRequest();
    }
  }
  var newActionXObject = {
    createXHR: function() {
      return new ActionXObject("Msxml2.XMLHTTP");
    }
  }
  var oldActionXObject = {
    createXHR: function() {
      return new ActionXObject("Microsoft.XMLHTTP");
    }
  }
  if (standard.createXHR()) {
    return standard;
  } else {
    try {
      newActionXObject.createXHR();
      return newActionXObject;
    } catch (o) {
      oldActionXObject.createXHR();
      return oldActionXObject;
    }
  }
}();
//从上面的例子可以看出，分支的原理就是：声明几个不同名称的对象，但是给这些对象都声明一个名称相同的方法（这个就是关键），
//并给这些来自于不同的对象但是拥有相同的方法进行浏览器之间各自的实现，接着就开始进行一次浏览器检测，并经过浏览器检测的结
//果来决定返回哪一个对象，这样不论返回的是哪一个对象，最后名称相同的方法都作为了对外一致的接口。


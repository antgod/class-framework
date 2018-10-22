// 面向对象与闭包均可以防止函数被污染和改变，而对象不可以

// 面向对象，数据存在this.属性中
var Extent = function() {
  this.value = 0;
};

Extent.prototype.call = function() {
  this.value++;
  console.log(this.value);
};

var extent = new Extent();
extent.call();
extent.call();
extent.call();

// 闭包，数据存在于外层函数内的私有变量
var extent = function() {
  var value = 0;
  return {
    call: function() {
      value++;
      console.log(value);
    }
  }
};

extent = extent();
extent.call();
extent.call();
extent.call();

// 对象，数据存在属性中：函数式推荐
var extent = {
  value: 0,
  call: function() {
    this.value++;
    console.log(this.value);
  }
};

extent.call();
extent.call();
extent.call();

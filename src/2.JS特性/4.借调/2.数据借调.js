//4.apply其他的用途：数据借调,函数借用其他数据源对象数据。
var data = {
  list: [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' }
  ]
};

var ListBox = (function() {
  var drawCount = 0;
  return function() {
    var self = this, args = arguments, list = data.list;
    list.forEach(function(item) {
      var options = args[0];
      options["count"] = drawCount;
      //这里把this指向data，并且修改了传入参数，带上了绘制次数
      drawCount = args.callee.draw.drawListItem.apply(item, [options]);
    }.bind(this));
  }
})();

ListBox.draw = {
  drawListItem: function(options) {
    console.log("绘制项：" + this.id + "，绘制内容" + this.name + "绘制次数：" + (++options.count) + "是否可见:" + options.isVisible);
    return options.count;
  }
};

ListBox({ isVisible: true });
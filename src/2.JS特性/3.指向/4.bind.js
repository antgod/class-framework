Function.prototype.bind = function() {
  var self = this;
  var context = [].shift.call(arguments);
  var args = [].slice.call(arguments);

  return function() {
    self.apply(context, [].concat.call(args, [].slice.call(arguments)));
  }
};

var a = {
  name: 'a',
  getName: function() {
    console.log(this.name, arguments);
  }
};

var b = {
  name: 'b'
};

var getName = a.getName.bind(b, 1);

getName(2);
//getName(4,5,6);
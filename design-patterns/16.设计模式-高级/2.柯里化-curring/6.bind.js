Function.prototype.bind = function(context) {
    var _this = this,
        _args = Array.prototype.slice.call(arguments, 1);
    return function() {
        return _this.apply(context, _args.concat([].slice.call(arguments)))
    }
};

var fun=function(){
    console.log(this,arguments);
};

var bindfun=fun.bind({a:1},1,2,3);
bindfun(4,5,6);
bindfun.call(this,4,5,6);


var curry = function(fn) {
    var _args = [];

    return function cb() {
        if (arguments.length == 0) {
            return fn.apply(this, _args)
        }

        Array.prototype.push.apply(_args, arguments);
        return cb;
    }
};

curry(function(){
    console.log(arguments);
})(1)(2)(3)();
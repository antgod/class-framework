Function.prototype.before=function(before){
    var fn=this;
    return function(){
        before.apply(this,arguments);
        return fn.apply(this,arguments);
    }
};

Function.prototype.after=function(after){
    var fn=this;
    return function(){
        var ret=fn.apply(this,arguments);
        after.apply(this,arguments);
        return ret;
    }
};


var fn=function(arguments){
    console.log('函数执行,参数为',arguments);
    return arguments;
};

console.log(fn.before(function(a){
    arguments[0]=131231
    console.log('函数before1执行,参数为',arguments);

})(12));



Function.prototype.before=function(before){
    var fn=this;
    return function(){
        if(before.apply(this,arguments)===false){
            return 'before函数验证未通过';
        }
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

console.log(fn.before(function(){
    console.log('函数before1执行,参数为',arguments);
    return false;
})({a:1}));



Function.prototype.before=function(before){
    var fn=this;
    return function(){
        //永远在主函数之前执行,而多个before,第一个before的函数又被当做fn=this传入第二个before
        //第二个before先执行,所以多个before顺序会倒序
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


var fn=function(){
    console.log('函数执行,参数为',arguments);
    return arguments;
};

console.log(fn.after(function(){
    console.log('函数after1执行,参数为',arguments);
}).before(function(){
    console.log('函数before1执行,参数为',arguments);
}).after(function(){
    console.log('函数after2执行,参数为',arguments);
}).before(function(){
    console.log('函数before2执行,参数为',arguments);
})(1,2,3));



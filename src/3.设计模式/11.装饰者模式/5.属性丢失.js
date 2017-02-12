//Function.prototype.before=function(before){
//    var fn=this;
//    return function(){
//        before.apply(this,arguments);
//        return fn.apply(this,arguments);
//    }
//};
//
//Function.prototype.after=function(after){
//    var fn=this;
//    return function(){
//        var ret=fn.apply(this,arguments);
//        after.apply(this,arguments);
//        return ret;
//    }
//};
//
//
//var fn=function(){
//    console.log('函数执行,参数为',arguments);
//    return arguments;
//};
//
//fn.a=1;
//
//console.log(fn.before(function(){
//    console.log('函数before执行,参数为',arguments);
//}).a);
//


"use strict";

var o = {p:1};
//Object.watch("p", function (id, oldValue, newValue) {
//    console.log("o."+id +" 由 "+oldValue +" 变为 "+newValue);
//    return newValue;//注意点
//});
//o.p = 2;

console.log(Object.watch,Object.prototype.watch)
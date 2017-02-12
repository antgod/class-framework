
var promise=new Promise();

promise.done(function(){
    console.log("执行成功1",arguments);
}).done(function(){
    console.log("执行成功2");
}).fail(function(){
    console.log("执行失败1",arguments);
}).fail(function(){
    console.log("执行失败2");
});

setTimeout(function(){
    promise.reject('执行失败');
},1000);

setTimeout(function(){
    promise.resolve('回调数据');
},2000);

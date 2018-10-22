/**
 * Created by lihongji on 16/4/14.
 */

process.nextTick(function a() {
    console.log('nextTick');
    process.nextTick(function a() {
        console.log('inner nextTick');
        process.nextTick(function a() {
            console.log('innerer nextTick');
        });
    });
});

setImmediate(function a() {
    console.log('setImmediate');
});

var t=setInterval(function(){
    console.log('setInterval');
    clearInterval(t)
},0);

setTimeout(function(){
    console.log('setTimeout')
},0);

console.log('执行栈');
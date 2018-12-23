
//JavaScript 语言动态改变对象相当容易，我们可以直接改写对象或者对象的某个方法，并不
//需要使用“类”来实现装饰者模式，代码如下：
var plane = {
    fire: function(){
        console.log( '发射普通子弹' );
    }
};
var missileDecorator = function(){
    console.log( '发射导弹' );
};
var atomDecorator = function(){
    console.log( '发射原子弹' );
};

var fire1=plane.fire;

plane.fire=function(){
    fire1();
    missileDecorator();
};

var fire2=plane.fire;

plane.fire= function(){
    fire2();
    atomDecorator();
};

plane.fire();

//这样的代码当然是符合开放封闭原则的，我们在增加新功能的时候，确实没有修改原来的
//plane.fire 代码，但是这种方式存在以下两个问题。

//1.必须维护fire1,fire2 这个中间变量，虽然看起来并不起眼，但如果函数的装饰链较长，或者
//需要装饰的函数变多，这些中间变量的数量也会越来越多。

//2.其实还遇到了 this 被劫持的问题
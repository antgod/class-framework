//原始时代最简单的oo实现
//这样 pet就有了属性，有了方法，不过这种写法毫无继承性，扩展性。比如我们要实现个dog类，只能把属性方法再写一遍。而且每个new出来的对象都有自己的方法，造成资源浪费。
//function Animal(name ){
//    this.name = name;
//    this.run = function(){
//        console.log(this.name + "is running!!");
//    }
//}
//
//var pet = new Animal("pet");
//pet.run();


//没有实现传统oo该有的super方法来调用父类方法。
//作为oo，怎么能没有super呢。作为我们前端界宗师一般的人物。Douglas 有一篇经典文章。不过貌似有很多问题。国内的玉伯分析过。
//function Animal(name){
//    this.name = name;
//}
//Animal.prototype.run = function(){
//    console.log(this.name + "is running!!");
//};
//function Dog(name){
//    //调用父类的构造函数，通过改变this指向将属性赋值到新的实例对象
//    Animal.call(this,name);
//}
//Dog.prototype = new Animal();
//var dog = new Dog("dog");
//dog.run();//dog is running!!
//
//
//
////当年大学毕业面试，也就到这个程度了
//function objCreate(prototype){
//    var F = function(){};
//    F.prototype = prototype;
//    return new F();
//}
//function inherit(subclass,parentclass){
//    subclass.prototype = objCreate(parentclass.prototype);
//    subclass.prototype.constructor = subclass;
//}
//
//function Animal(name){
//    this.name = name;
//}
//Animal.prototype.run = function(){
//    console.log(this.name + "is running!!");
//}
//function Dog(name){
//    //调用父类的构造函数，通过改变this指向将属性赋值到新的实例对象
//    Animal.call(this,name);
//}
//inherit(Dog,Animal);
//var dog = new Dog("dog");
//dog.run();//dog is running!!



//工业时代继承
function createObject(prototype,construct){
    var F = function(){};
    F.prototype = prototype;
    var newPro = new F();
    newPro.construct = construct;//维护构造函数的改变
    return newPro;
}
//mix是个辅助方法，这边给个最简单的实现，其实kissy里面的复杂的多。这边不考虑深度遍历等等，只是最简单的实现。
function mix(r, s) {
    for (var p in s) {
        if (s.hasOwnProperty(p)) {
            r[p] = s[p]
        }
    }
    return r;
}
//下面是kissy的实现r代表子类 s代表父类，px代表最后会混入子类原型上的属性，sx代表会混入子类函数上面的属性，也就是可以当做静态方法。
function extend (r, s, px, sx) {
    if (!s || !r) {
        return r;
    }
    var sp = s.prototype,
        rp;
    //针对父类生成一个原型。跟之前我们写的一致
    rp = createObject(sp, r);
    //不是简单的直接复制原型对象，而是先把以前原型的方法跟要继承的合并之后再一起赋值
    r.prototype = mix(rp, r.prototype);

    //为子类增加superclass属性，指向一个父类对象，这样就可以调用父类的方法了。这边是实现比较巧妙的地方
    r.superclass = createObject(sp, s);
    //下面就是往原型还有函数上混入方法了
    // add prototype overrides
    if (px) {
        mix(rp, px);
    }

    // add object overrides
    if (sx) {
        mix(r, sx);
    }

    return r;
}

function Animal(name){
    this.name = name;
}
Animal.prototype.run = function(){
    console.log(this.name + "is running!!");
};
function Dog(name){
    //Animal.call(this,name);
    //因为kissy的封装 这边可以这么用
    Dog.superclass.construct.call(this,name);
}
extend(Dog,Animal,{
    wang:function(){
        console.log("wang wang!!")
    }
});
var dog = new Dog("dog");
dog.run();//dog is running!!
dog.wang();//wang wang!!
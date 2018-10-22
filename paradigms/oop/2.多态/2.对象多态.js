
// 现在我们向鸭和鸡都发出“叫唤”的消息，它们接到消息后分别作出了不同的反应。如果有
// 一天动物世界里又增加了一只狗，这时候只要简单地追加一些代码就可以了，而不用改动以前的
// makeSound 函数

var makeSound = function (animal) {
    animal.sound();
};

var Duck = function () { };
Duck.prototype.sound = function () {
    console.log("嘎嘎嘎");
};
var Chicken = function () { };
Chicken.prototype.sound = function () {
    console.log("咯咯咯");
};

makeSound(new Duck());
makeSound(new Chicken());

var Dog = function () { }
Dog.prototype.sound = function () {
    console.log('汪汪汪');
};
makeSound(new Dog()); // 汪汪汪
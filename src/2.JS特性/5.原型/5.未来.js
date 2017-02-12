//通过Object.create( null )可以创建出没有原型的对象。
class Animal {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        return "woof";
    }
}
var dog = new Dog("Scamp");
console.log(dog.getName() + ' says ' + dog.speak());
function extend(Parent) {
	function Child () {
		Parent.call(this)
	}
	Child.prototype = new Parent()
	Child.prototype.constructor = Child
	return Child
}

// test
function Parent () {
  this.option = {} 
}

Parent.prototype.say = function () {
  console.log(this.option)
}

const Child = extend(Parent)

// 每个Child对象都会继承Parent的option私有属性
const c1 = new Child()
const c2 = new Child()

c1.__proto__.option.a = 1

console.log(c2.__proto__.option.a)

var Visitor = (function() {
	return {
		splice: function(){
			var args = Array.prototype.splice.call(arguments, 1)
			return Array.prototype.splice.apply(arguments[0], args)
		},
		push: function(){
			var len = arguments[0].length || 0
			var args = this.splice(arguments, 1)
			arguments[0].length = len + arguments.length - 1
			return Array.prototype.push.apply(arguments[0], args)
		},
		pop: function(){
			return Array.prototype.pop.apply(arguments[0])
		}
	}
})()

var a = new Object()
console.log(a.length)
Visitor.push(a, 1, 2, 3, 4)
console.log(a.length)
Visitor.push(a, 4, 5, 6)
console.log(a.length)
Visitor.pop(a)
console.log(a)
console.log(a.length)
Visitor.splice(a, 2)
console.log(a)
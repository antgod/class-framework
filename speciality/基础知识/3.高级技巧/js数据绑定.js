// function Person(){

// }

// Person.prototype.name = function(value) {
//     if (arguments.length == 0) {
//         return this._name
//     }
//     else {
//         this._name = value
//     }
// }

// var person=new Person()
// person.name("lhj")
// alert( person.name())

function Person () {
  Object.defineProperty(this, 'name', {
    set: function (value) {
      this._name = value + 'hj'
    },
    get: function () {
      return this._name
    },
    enumerable: true,
    configurable: true
  })
}
var person = new Person()
person.name = 'l'

console.log(person.name)

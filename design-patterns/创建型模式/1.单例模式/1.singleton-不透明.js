function Singleton () {
  this.instance
}

Singleton.getInstance = function () {
  if (!this.instance) {
    this.instance = new Singleton()
  }
  return this.instance
}
var ins1 = Singleton.getInstance()
var ins2 = Singleton.getInstance()

console.log(ins1 == ins2)

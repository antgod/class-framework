const delegate = function (client, delegation) {
	return {
		buttonWasPressed: (...args) => { 
			return delegation.buttonWasPressed.apply(client, [])
		}
	}
}
const FSM = {
	off: {
		buttonWasPressed: function () {
			console.log('关灯')
			this.currState = this.onState
		}
	},
	on: {
		buttonWasPressed: function () {
			console.log('开灯')
			this.currState = this.offState
		}
	}
}
const Light = function () {
	this.offState = delegate(this, FSM.off)
	this.onState = delegate(this, FSM.on)
	this.currState = this.offState 
	this.button = null
}
Light.prototype.init = function () {
	this.button = {}
	this.button.onclick = () => {
		this.currState.buttonWasPressed.call(this)
	}
}
const light = new Light()
light.init()

light.button.onclick()
light.button.onclick()
light.button.onclick()
const Light = function () {
	this.currState = FSM.off 
}
Light.prototype.init = function () {
	this.button = {}
	this.button.onclick = () => {
		this.currState.buttonWasPressed.call(this)
	}
}
const FSM = {
	off: {
		buttonWasPressed: function () {
			console.log('开灯')
			this.currState = FSM.on
		}
	},
	on: {
		buttonWasPressed: function () {
			console.log('关灯')
			this.currState = FSM.off
		}
	}
}
const light = new Light()
light.init()

light.button.onclick()
light.button.onclick()
light.button.onclick()
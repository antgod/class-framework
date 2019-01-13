const Light = function () {
  this.state = 'off' 
}

Light.prototype.init = function () {
  this.button = {}
  this.button.onclick = () => {
    this.buttonWasPressed()
  }
}

Light.prototype.buttonWasPressed = function () {
  if (this.state === 'off') {
    console.log('开灯')
    this.state = 'on'
  } else if (this.state === 'on') {
    console.log('关灯')
    this.state = 'off'
  }
}
const light = new Light()
light.init()

light.button.onclick()
light.button.onclick()
light.button.onclick()
var tv = {
  open: function () {
    console.log('opentv')
  },
  close: function () {
    console.log('closetv')
  }
}

var air = {
  open: function () {
    console.log('openair')
  },
  close: function () {
    console.log('closeair')
  }
}

function Controller (tv) {
  this.tv = tv
}

Controller.prototype.open = function () {
  this.tv.open()
}

Controller.prototype.close = function () {
  this.tv.close()
}

var setCommand = function (command) {
  command.open()
  command.close()
}
setCommand(new Controller(tv))

// 闭包实现
function Controller (tv) {
  return {
    open: function () {
      tv.open()
    },
    close: function () {
      tv.close()
    }
  }
}

var setCommand = function (command) {
  command.open()
  command.close()
}
setCommand(Controller(air))

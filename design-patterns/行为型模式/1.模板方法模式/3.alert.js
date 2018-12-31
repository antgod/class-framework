const identify = state => state

const Alert = function (data) {
	if (!data) {
		return
	}
	this.content = data.content
	this.panel = document.createElement('div')
	// ...
	this.success = data.success || identify
	this.fail = data.fail || identify
}

Alert.prototype = {
	init: function() {
		// ...
	},
	bindEvent: function() {
		// ...
	},
	hide: function() {
		// ...
	},
	show: function() {
		// ...
	},
}

const RightAlert = (data) => {
	Alert.call(this, data)
	this.panel.className = data.className
}

// 使用
const rightAlert = new RightAlert({
	className: 'right-alert',
})
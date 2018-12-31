var sales = {
	events: []
}

sales.listen = function (key, fn) {
	if (!this.events[key]) {
		this.events[key] = []
	}
	this.events[key].push(fn)
}

sales.triggerListen = function () {
	var key = arguments[0]
	var fns = this.events[key]
	if (!fns) {
		return
	}
	for (var i = 0, fn; fn = fns[i++];) {
		fn.apply(this, arguments)
	}
}

sales.listen(80, function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

sales.triggerListen(80, "120w")
sales.triggerListen(90, "150w")

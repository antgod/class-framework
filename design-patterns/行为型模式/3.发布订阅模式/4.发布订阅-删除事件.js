var event = {
	clientList: [],
	listen: function (key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	triggerListen: function (key) {
		var fns = this.clientList[key]
		if (!fns) {
			return
		}
		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments)
		}
	},
	remove: function (key, fn) {
		var fns = this.clientList[key]
		if (!fns) {
			return
		}
		for (var i = 0; i < fns.length; i++) {
			var _fn = fns[i]
			if (_fn === fn) {
				fns.splice(i, 1)
			}
		}
	}
}

var salesOffice = {}
var extend = function (child, parent) {
	for (var i in parent) {
		child[i] = parent[i]
	}
}

extend(salesOffice, event)

salesOffice.listen(80, fn1 = function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

salesOffice.listen(80, fn2 = function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

salesOffice.remove(80, fn1)

salesOffice.triggerListen(80, "120w")

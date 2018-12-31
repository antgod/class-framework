var Event = (function () {
	var clientList = []

	var listen = function (key, fn) {
		if (!clientList[key]) {
			clientList[key] = []
		}
		clientList[key].push(fn)
	}
	var trigger = function (key) {
		var fns = clientList[key]
		if (!fns) {
			return
		}
		for (var i = 0, fn; fn = fns[i++];) {
			fn.apply(this, arguments)
		}
	}
	var remove = function (key, fn) {
		var fns = clientList[key]
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

	return {
		listen: listen,
		trigger: trigger,
		remove: remove
	}
})()

Event.listen(80, fn1 = function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

Event.listen(80, fn2 = function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

Event.listen(90, fn1 = function (area, prices) {
	console.log(area + "平米,价格：" + prices)
})

Event.trigger(80, "120w");
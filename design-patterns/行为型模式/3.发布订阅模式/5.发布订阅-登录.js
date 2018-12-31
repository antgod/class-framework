var extend = function (child, parent) {
	for (var i in parent) {
		child[i] = parent[i]
	}
}

var event = {
	clientList: [],
	listen: function (key, fn) {
		if (!this.clientList[key]) {
			this.clientList[key] = []
		}
		this.clientList[key].push(fn)
	},
	trigger: function (key) {
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

var login = {
	success: function (key, data) {
		this.trigger(key, data)
	}
}

extend(login, event)

var header = (function () {
	login.listen("loginEnd", function () {
		header.setAvatar.apply(null, arguments)
	})

	return {
		setAvatar: function () {
			var key = [].shift.call(arguments)
			console.log("设置头部头像:" + [].slice.call(arguments).join(","))
		}
	}
})()

var nav = (function () {
	login.listen("loginEnd", function () {
		nav.setAvatar.apply(null, arguments)
	})

	return {
		setAvatar: function () {
			var key = [].shift.call(arguments)
			console.log("设置导航头像:" + [].slice.call(arguments).join(","))
		}
	}
})()

//ajax回调后，调用
login.success("loginEnd", "xxx.png");
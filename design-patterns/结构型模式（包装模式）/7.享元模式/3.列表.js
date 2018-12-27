var getDiv = (function () {
	var created = []
	var container = document.body
	var create = function () {
		return container.appendChild(document.createElement('div'))
	}
	var get = function () {
		if (created.length) {
			return container.appendChild(created.shift())
		} else {
			return create()
		}
	}
	/* 一个假设的事件，用来监听刚消失在视线外的div，实际上可以通过监听滚动条位置来实现 */
	userInfoContainer.disappear(function (div) {
		created.push(div)
		container.remove(container)
	})
	return get()
})()
var div = getDiv()
div.innerHTML = "${userinfo}"
function addEvent(dom, type, fn) {
	if(dom.addEventListener) {
		dom.addEventListener(type, fn, false)
	} else if(dom.attachEvent) {
		dom.attachEvent('on' + type, fn)
	} else {
		dom['on' + type] = fn
	}
}

var getEvent = function(event) {
	return event || window.event
}

var preventDefault = function(event) {
	var event = getEvent(event)
	if(event.preventDefault) {
		event.preventDefault()
	} else {
		event.returnValue = false
	}
}

var A = {
	g: function(id) {
		return document.getElementById(id)
	},
	css: function(id, key, value) {
		document.getElementById(id).style[key] = value
	},
	attr: function(id, key, value) {
		document.getElementById(id)[key] = value
	},
	html: function(id, html) {
		document.getElementById(id).innerHTML = html
	},
	on: function(id, type, fn) {
		document.getElementById(id)['on' + type] = fn
	}
}
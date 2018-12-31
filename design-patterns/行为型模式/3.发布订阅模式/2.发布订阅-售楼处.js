var sales = {
	events: []
}

var fn = function (area, price) {
	console.log("新房发布，面积：" + area + "，价格:" + price)
}

sales.listen = function (customer) {
	var area = customer.area
	if (!this.events[area]) {
		this.events[area] = []
		this.events[area].persons = []
	}
	this.events[area].persons.push(customer.name)
	this.events[area].push(fn)
}

sales.triggerListen = function (area) {
	var fns = this.events[area]
	for (var i = 0; i < fns.length; i++) {
		var fn = fns[i]
		console.log("发送给：" + fns.persons[i])
		fn.apply(this, [].slice.call(arguments))
	}
}

sales.listen({
	name: 'a',
	area: 80
})

sales.listen({
	name: 'a',
	area: 90
})

sales.listen({
	name: 'b',
	area: 80
})

sales.listen({
	name: 'c',
	area: 90
})
sales.listen({
	name: 'd',
	area: 80
})

sales.triggerListen(80, "120w")
sales.triggerListen(90, "150w")
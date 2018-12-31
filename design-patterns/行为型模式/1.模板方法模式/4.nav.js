const identify = state => state

const formateString = function (str, data) {
	return str.replace(/\{(\w+)\}/g, (match, key) => {
		return data[key] || ''
	})
}

const Nav = function(data) {
	this.tpl = '<a href="{href}" title="{title}">{name}</a>'
	return this.html = data.map(item => formateString(this.tpl, item)).join('\n')
}

// 增加序号模板
const NumNav = function(data) {
	const tpl = '{num}.'
	data.forEach(item => item.name = `${formateString(tpl, item)}${item.name}`)
	return Nav.call(this, data)
}

const data = [
	{href: 'http://www.baidu.com', title: '百度一下，你就知道', name: '百度', num: 1 }, 
	{href: 'http://www.taobao.com', title: '淘宝商城', name: '淘宝', num: 2 },
	{href: 'http://www.qq.com', title: '腾讯首页', name: '腾讯', num: 3 },
]

console.log(Nav(data))
console.log(NumNav(data))
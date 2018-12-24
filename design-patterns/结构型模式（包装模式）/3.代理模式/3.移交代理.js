// 比如我们公司的补打卡是最后是要交给大boss来审批的，但是公司那么多人，每天都那么多补打卡，那大boss岂不是被这些琐事累死。所以大boss下会有一个助理，来帮忙做这个审批，最后再将每个月的补打卡统一交给大boss看看就行。

// 补打卡事件
const fillOut = function (lateDate) {
	this.lateDate = lateDate
}

// 这是bigBoss
const bigBoss = function (fillOut) {
	this.state = function (isSuccess) {
		console.log("忘记打卡的日期为：" + fillOut.lateDate + ", 补打卡状态：" + isSuccess)
	}
}
// 助理代理大boss 完成补打卡审批
const proxyAssis = function (fillOut) {
	this.state = function (isSuccess) {
		(new bigBoss(fillOut)).state(isSuccess) // 替bigBoss审批
	}
}

// 调用方法：
const assis = new proxyAssis(new fillOut("2016-9-11"))
assis.state("补打卡成功")
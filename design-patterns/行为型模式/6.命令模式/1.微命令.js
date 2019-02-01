//事件发出者
const setCommand = function (command, distance) { //命令的绑定者
	command.do(distance)
}
//事件的执行者

const Location = function () { //执行事件类
	const ball = {
		style: {
			top: 0,
			left: 0,
			right: 0,
			down: 0,
		}
	}
	const move = function (direct) {
		return function (distance) {
			const style = ball.style
			style[direct] = style[direct] + distance
			console.log(direct, style[direct])
		}
	}
	const moveUp = move("top")
	const moveDown = move("down")
	const moveLeft = move("left")
	const moveRight = move("right")
	return {
		moveUp,
		moveDown,
		moveLeft,
		moveRight
	}
}
//封装命令
const MoveUp = function (exer) {
	this.exer = exer
}
MoveUp.prototype.do = function (distance) {
	this.exer.moveUp(distance)
}
const MoveDown = function (exer) {
	this.exer = exer
}
MoveDown.prototype.do = function (distance) {
	this.exer.moveDown(distance)
}
const MoveLeft = function (exer) {
	this.exer = exer
}
MoveLeft.prototype.do = function (distance) {
	this.exer.moveLeft(distance)
}
const MoveRight = function (exer) {
	this.exer = exer
}
MoveRight.prototype.do = function (distance) {
	this.exer.moveRight(distance)
}
const location = Location()

setCommand(new MoveUp(location), 15) 
setCommand(new MoveDown(location), -30) 
setCommand(new MoveLeft(location), 45) 
setCommand(new MoveUp(location), -90) 
const Human = function(param) {
	this.skill = param && param.skill || '保密'
	this.hobby = param && param.hobby || '保密'
}

Human.prototype = {
	getSkill: function() {
		return this.skill
	},
	getHobby: function() {
		return this.hobby
	}
}

const Named = function(name) {
	this.firstName = name.slice(0, name.indexOf(' '))
	this.lastName = name.slice(name.indexOf(' '))
}

const Work = function(code) {
	const map = {
		coder: '程序员',
		ui: '视觉',
		ue: '交互',
	}
	this.work = map[code] || '产品'
}

Work.prototype.changeWork = function(work) {
	this.work = work
}

const createStaff = (params) => {
	const human = new Human(params)
	human.name = new Named(params.name)
	human.work = new Work(params.code)
	return human
}

const staff = createStaff({
	skill: 'coding',
	hobby: 'play',
	name: 'ming feng',
	code: 'coder',
})

console.log(staff, staff.name.firstName, staff.work)
staff.work.changeWork('运营')
console.log(staff.work)
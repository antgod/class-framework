const Human = function(param) {
	return param
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
	return {
		firstName: name.slice(0, name.indexOf(' ')),
		lastName: name.slice(name.indexOf(' '))
	}
}

const Work = function(code) {
	const map = {
		coder: '程序员',
		ui: '视觉',
		ue: '交互',
	}
	return {
		work: map[code] || '产品',
		changeWork: function (code) {
			this.work = map[code] || '产品'
		}
	}
}

const wrap = (a, b) => Object.assign(a, b)

const createStaff = (params) => {
	const human = Human(params)
	wrap(human, Named(params.name))
	wrap(human, Work(params.code))
	return human
}

const staff = createStaff({
	skill: 'coding',
	hobby: 'play',
	name: 'ming feng',
	code: 'coder',
})

console.log(staff, staff.firstName, staff.work)
staff.changeWork('ui')
console.log(staff.work)
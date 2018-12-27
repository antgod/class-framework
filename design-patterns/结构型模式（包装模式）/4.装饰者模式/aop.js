const before = (fn, before) => {
	return (...args) => {
		if (before(...args) === false) {
			return
		}
		return fn(...args)
	}
}

const after = (fn, after) => {
	return (...args) => {
		const ret = fn(...args)
		after(...args)
		return ret
	}
}

const fn = function (options) {
	console.log(`函数执行,参数为${JSON.stringify(options)}`)
	return options
}

before(
	before(
		after(
			after(
				fn, (options) => {
					console.log(`函数after1执行,参数为${JSON.stringify(options)}`)
				}
			),
			(options) => {
				console.log(`函数after2执行,参数为${JSON.stringify(options)}`)
			}
		),
		(options) => {
			console.log(`before2执行,参数为${JSON.stringify(options)}`)
			if (options.valid === false) {
				return false
			}
		}
	),
	(options) => {
		options.valid = false
		console.log(`函数before1执行,参数为${JSON.stringify(options)}`)
	}
)({})
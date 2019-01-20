const openComputer = {
	execute: function () {
		console.log("打开电脑")
	}
}

const openQQ = {
	execute: function () {
		console.log("打开QQ")
	}
}

const MacroCommand = function () {
	return {
		commandList: [],
		add: function (command) {
			this.commandList.push(command)
		},
		execute: function () {
			this.commandList.forEach(command => command.execute())
		}
	}
}
const macroCommand = MacroCommand()
macroCommand.add(openComputer)
macroCommand.add(openQQ)

macroCommand.execute()
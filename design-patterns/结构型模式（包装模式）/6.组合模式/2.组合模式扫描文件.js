function Folder(name) {
	this.name = name
	this.files = []
}

Folder.prototype.add = function (file) {
	this.files.push(file)
}

Folder.prototype.scan = function () {
	for (var i = 0, file = null; file = this.files[i++];) {
		if (file instanceof Folder) {
			console.log('扫描文件夹', this.name)
		}
		file.scan()
	}
}

function File(name) {
	this.name = name
}

File.prototype.add = function (file) {
	throw new Error('文件不能再添加文件')
}

File.prototype.scan = function () {
	console.log('扫描文件', this.name)
}

var fd0 = new Folder("编程")
var fd1 = new Folder("前端")
var fd2 = new Folder("后端")
var fd3 = new Folder("JS")
var fd4 = new Folder("CSS")
var fd5 = new Folder("NodeJS")
var fd6 = new Folder("IOS")

var fl1 = new File("汇编")
var fl2 = new File("前端知识汇总")
var fl3 = new File("后端语言概览")
var fl4 = new File("react")
var fl5 = new File("sass")
var fl6 = new File("express")
var fl7 = new File("swift")

fd0.add(fd1)
fd0.add(fd2)

fd1.add(fd3)
fd1.add(fd4)
fd2.add(fd5)
fd2.add(fd6)

fd0.add(fl1)
fd1.add(fl2)
fd2.add(fl3)
fd3.add(fl4)
fd4.add(fl5)
fd5.add(fl6)
fd6.add(fl7)

fd0.scan()
const menusHover = () => {
	return {
		hover: () => { console.log('menus悬浮') }
	}
}

const tabsHover = () => {
	return {
		hover: () => { console.log('tabs悬浮') }
	}
}

const Layout = () => {
	const elementList = []
	return {
		add: (element) => elementList.push(element),
		hover: () => elementList.forEach(element => element.hover()),
	}
}

const layout = Layout()
layout.add(menusHover())
layout.add(tabsHover())

layout.hover()
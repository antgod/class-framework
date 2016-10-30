import fs from 'fs'
const config = {
	text: '节点1',
	children: [
		{
			text: '节点1-1',
			children: [
				{
					text: '节点1-1-1',
					children: []
				}
			]
		},
		{
			text: '节点2',
		}
	],
}

const renderTree = (leaf, path) => {
	const subLeafs = leaf.children ? leaf.children.map((subLeaf, i)=>{
		const subPath = [path,'children',i].join('.')
		return renderTree(leaf.children[i], subPath)
	}).join('') : ''
	return `
		<li class="node">
			<a href="#">${leaf.text}(${path})</a>
			<ul>
				${subLeafs}
			</ul>
		</li>
	`
}


fs.writeFileSync('./tree.html',
	`<!DOCTYPE html>
		<html lang="en">
			<head>
      	<meta charset="UTF-8">                
			</head>                                      
			<body>
				<ul class="tree">
					${renderTree(config, 'config')}
				</ul>
			</body>
		</html>`)



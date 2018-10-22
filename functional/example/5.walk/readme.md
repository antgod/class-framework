## walk
### 说明
这是一个可以追踪路径的迭代json函数。

### 用途
用来深度便利对象，并且可以随意设置当前级别的路径。

### 用法
```
walk(data, 'children', (item, index, parentPath) => relativePath)
```
relativePath 为当前节点的相对路径，留给客户随意组装

### 源码
```
const walk = (obj, childrenName, handler, i = 0, parentPath = []) => {
  const customPath = handler(obj, i, parentPath)
  if (obj[childrenName] !== undefined && Array.isArray(obj[childrenName])) {
    obj[childrenName].forEach((child, index) =>
      walk(child, childrenName, handler, index, parentPath.concat(customPath)))
  }
}
```

### 例子
1. 使用walk(./examples/test.js)

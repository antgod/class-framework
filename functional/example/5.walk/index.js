const walk = (obj, childrenName, handler, i = 0, parentPath = []) => {
  const customPath = handler(obj, i, parentPath)
  if (obj[childrenName] !== undefined && Array.isArray(obj[childrenName])) {
    obj[childrenName].forEach((child, index) =>
      walk(child, childrenName, handler, index, parentPath.concat(customPath)))
  }
}

module.exports = walk

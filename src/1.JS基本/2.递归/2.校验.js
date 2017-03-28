const config = require('./data')

const checkTreeLeaf = (rule) => {
  const memoryCache = []
  const bindsCache = []
  const renderTree = (leaf, path) => {
    /* eslint-disable no-unused-expressions */
    leaf && leaf.children && leaf.children.map((subLeaf, i) => {
      const subPath = [path, i].join('.')
      return renderTree(leaf.children[i], subPath)
    })

    const { success, message } = rule(leaf, path)(memoryCache, bindsCache)
    if (!success) {
      memoryCache.push(message)
    }
    return memoryCache
  }
  return renderTree
}

// 校验bind值必须是string且不能为空字符串
const rule = (leaf, path) => (memoryCache, bindsCache) => {
  if (!leaf) {
    return {
      success: false,
      level: 'warning',
      message: `页面组件编译有误，保存后可能会无法打开页面，请检查组件配置，组件路径${path}`,
    }
  }

  if (bindsCache.find(bind => bind.bind === leaf.bind) !== undefined) {
    return {
      success: false,
      level: 'error',
      message: `bind重复, 路径${bindsCache.find(bind => bind.bind === leaf.bind).path} and ${path}`,
    }
  }

  if (leaf.bind !== undefined) {
    bindsCache.push({
      bind: leaf.bind,
      path,
    })
  }
  return {
    success: true,
  }
}

console.log(checkTreeLeaf(rule)(config, 'root'))

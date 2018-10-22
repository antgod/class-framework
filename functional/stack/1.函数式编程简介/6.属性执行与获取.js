const existy = x => !!x

const execer = (condition, action) => (...args) => {
  return existy(condition) ? action(...args) : undefined
}

const propExecer = (target, name) => (...args) => {
  const action = target[name]
  return execer(action, () => {
    return typeof action === 'function' ? action.apply(target, args) : action
  })()
}

[
  propExecer([1, 2, 3], 'reverse')(),
  propExecer({ foo: 42 }, 'foo')(),
  propExecer([1, 2, 3], 'concat')([4], [5], [6]),
].map(console.log)

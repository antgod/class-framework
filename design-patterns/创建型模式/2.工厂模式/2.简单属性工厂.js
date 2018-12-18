// 创建通用类工厂
function createCommonFactory(attrs, diffs = {}) {
  const obj = new Object()
  for(const key in attrs) {
    obj[key] = attrs[key]
  }

  for(const key in diffs) {
    obj[key] = diffs[key]
  }
  return obj
}
const common = { shape: 'circle' }
const diffs = {
  bastetball: {
    use: 'hand'
  },
  football: {
    use: 'foot'
  },
}
const ball = createCommonFactory(common, diffs.bastetball)
console.log(ball)
const football = createCommonFactory(common, diffs.football)
console.log(football)
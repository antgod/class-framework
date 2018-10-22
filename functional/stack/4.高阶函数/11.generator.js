const generator1 = (counter, prefix) => (pre = prefix) => [pre, counter++].join('')

const g1 = generator1(0, 'prefix')

console.log(g1())
console.log(g1())
console.log(g1('new'))

const generator2 = (init, prefix) => {
  return {
    count: init,
    uniqueString: function (pre = prefix) {
      return [pre, this.count++].join('')
    },
  }
}

const g2 = generator2(0, 'prefix')

console.log(g2.uniqueString())
console.log(g2.uniqueString())
console.log(g2.uniqueString('new'))


const generator3 = (init, prefix) => {
  let counter = init
  return {
    uniqueString: (pre = prefix) => {
      return [pre, counter++].join('')
    },
  }
}

const g3 = generator3(0, 'prefix')

console.log(g3.uniqueString())
console.log(g3.uniqueString())
console.log(g3.uniqueString('new'))

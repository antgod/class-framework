const everypass = (...funs) => (...args) => {
  const everything = (funcs, truth) => {
    if (!funcs.length) {
      return truth
    } else {
      const [currentHandle, ...restHandle] = funcs
      return args.every(currentHandle) && everything(restHandle, truth)
    }
  }

  return everything(funs, true)
}

const evenNums = everypass(n => typeof n === 'number', n => n % 2 === 0)

const somepass = (...funs) => (...args) => {
  const everything = (funcs, truth) => {
    if (!funcs.length) {
      return truth
    } else {
      const [currentHandle, ...restHandle] = funcs
      return args.every(currentHandle) || everything(restHandle, truth)
    }
  }

  return everything(funs, true)
}

const evenNum = somepass(n => typeof n === 'number', n => n % 2 === 0)

console.log(evenNums(1, 2, 3, 4))
console.log(evenNum(1, 2, 3, 4))

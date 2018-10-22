const max = data => data.reduce((maxer, next) => maxer > next ? maxer : next)

console.log(max([5, 1, 3, 4, 2]))


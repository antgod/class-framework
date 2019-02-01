// 不用备忘录
const add = (a, b) => {
    return a + b
}

console.log('add:', add(1, 2));
console.log('add:', add(1, 2));
console.log('add:', add(1, 2));
console.log('add:', add(1, 2));

// 备忘录
const Add = (fn, ...args) => {
    const results = {}
    const key = args.join(',')
    if (results[key]) {
        return results[key]
    }
    return results[key] = fn(...args)
}

console.log('add:', Add(add, 1, 2));
console.log('add:', Add(add, 1, 2));
console.log('add:', Add(add, 1, 2));
console.log('add:', Add(add, 1, 2));
function existy(x) {
  return x != null
}

console.log(existy(null));
console.log(existy(undefined));
console.log(existy(0));
console.log(existy(false));

// 函数在加工
function truthy(x) { return (x!==false) && existy(x)}

console.log('truthy',truthy(false));
console.log('truthy',truthy(0));
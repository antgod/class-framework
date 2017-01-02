// redux 实现
/*
  const compose = (...funcs) => {
    if (funcs.length === 0) {
      return arg => arg
    }

    if (funcs.length === 1) {
      return funcs[0]
    }

    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)
    return (...args) => rest.reduceRight((composed, f) => f(composed), last(...args))
  };
*/
const compose = (...funcs) => (...init) => {
  const first = funcs[0];
  const rest = funcs.slice(1);
  return rest.reduce((composed, func)=>func(composed), first(...init))
};

module.exports = compose;

function a(init) {
  console.log(init);
  return 1
}
function b(a) {
  console.log(a);
  return 2
}
function c(b) {
  console.log(b);
  return 3
}
function d(c) {
  console.log(c);
  return 4
}

// console.log(compose(a, b, c, d)('init'));
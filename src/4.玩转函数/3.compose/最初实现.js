const connect =  (...reducers) => (...initparams) => {
  return reducers.reduce((last, reducer)=> {
    const res = last();
    return () => reducer(res);
  }, () => initparams)
};

function a(init) {
  console.log(init)
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
console.log(connect(a, b, c, d)('init')());
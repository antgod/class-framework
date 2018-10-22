var closure = function() {
  var a = {};
  return function() {
    return a;
  }
};

var immediate = (function() {
  var a = {};
  return function() {
    return a;
  }
})();

console.log({} == {});

var closureInstance = closure();
console.log(closureInstance() == closureInstance());

console.log(immediate() == immediate());

// 面向对象实现
function parseAge(age) {
  if(typeof  age !== 'string') {
    console.error(['expecting a string but', age, 'is', typeof  age].join(' '));
    return false;
  }
  console.log(['attempt to parse age', age].join(' '));
  var r = parseInt(age, 10);

  if(isNaN(r)){
    console.warn(['Could not parse age', age].join(' '));
    return false;
  }
  console.log(['parse',  age, '[', typeof age, ']', 'result', r, '[', typeof r, ']'].join(' '));
  return r;
}

parseAge('42');

parseAge(42);

parseAge('frob');

// 函数式实现
function fail(thing){
  console.error(thing)
}

function warning(thing){
  console.warn(thing);
}

function note(thing){
  console.log(thing)
}

function parseAge(age) {
  if(typeof  age !== 'string') {
    fail(['expecting a string but', age, 'is', typeof  age].join(' '));
    return false;
  }
  note(['attempt to parse age', age].join(' '));
  var r = parseInt(age, 10);

  if(isNaN(r)){
    warning(['Could not parse age', age].join(' '));
    return false;
  }
  note(['parse',  age, '[', typeof age, ']', 'result', r, '[', typeof r, ']'].join(' '));
  return r;
}

// 重写，以便消除正常打印
function note(){}

parseAge('42');

parseAge(42);

parseAge('frob');
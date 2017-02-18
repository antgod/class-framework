// 面向对象方式
function fun(condition, action) {
  if (condition) {
    return typeof action === 'function' ? action() : action
  } else {
    return undefined
  }
}

// 函数式方式
const existy = (x) => x !== null && x !== false;

const doWhenExisty = (condition, action) => {
  if (existy(condition)) {
    return action();
  } else {
    return undefined
  }
};

const exec = (target, name, ...args) => doWhenExisty(target[name], ()=> {
  const prop = target[name];
  console.log(args)
  var result = typeof prop === 'function' ? prop.apply(target, args) : prop;
  console.log(['The result is', result].join(' '));
  return result;
});

exec([1, 2, 3], 'reverse');
exec({ foo: 42 }, 'foo');
exec([1, 2, 3], 'abc');

const arr = [1, 2, 3];
exec(arr, 'push', 4, 5, 6);
console.log('push result', arr);

console.log([null, undefined, 1, 2, false].map(existy));
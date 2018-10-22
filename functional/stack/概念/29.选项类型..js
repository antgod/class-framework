// Option
// Option，是 union type 的特例，它只包含两种类型 Some 和 None。Option 常用于表示那些不确定是否返回值的函数：

// Naive definition
const Some = (v) => ({
  val: v,
  map(f) {
    return Some(f(this.val));
  },
  chain(f) {
    return f(this.val);
  }
});
const None = () => ({
  map(f){
    return this;
  },
  chain(f){
    return this;
  }
});
// maybeProp :: (String, {a}) -> Option a
const maybeProp = (key, obj) => typeof obj[key] === 'undefined' ? None() : Some(obj[key])

console.log(maybeProp('name',{name:'lhj'}).chain(val=>`我名字叫：${val}`))
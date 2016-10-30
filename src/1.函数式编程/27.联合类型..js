// Union type
// 联合类型，表示将多个类型信息放入一个类型变量中。JavaScript 中没有类型机制，所以让我们假设有一个类型变量 NumOrString，
// 它表示 Number 或者 String 类型。+ 运算符在 JavaScript 中既可用于 Number，也可用于 String，所以我们使用 NumOrString 定义 + 的输入输出类型信息：

// add :: (NumOrString, NumOrString) -> NumOrString
const add = (a, b) => a + b;
add(1, 2);
// => Number 3
add('Foo', 2);
// => String "Foo2"
add('Foo', 'Bar');
// => String "FooBar"
函数第一次的返回决定函数的最终返回。第一次返回有两种方式处理。

- 一种是处理递归函数的返回值，我们通常称之为自吸收。通过函数的返回在递归中传递数据。

这种方式通过一次次消耗参数的个数，最后使参数消失，来完成递归终止。通常都会看见终止条件为`0, [], ''`等空值。

- 第二种处理递归函数的参数，我们通常称之为累加器。通过函数参数来传递数据。

这种方式通过一次次的累加参数值，最后参数消失，来完成递归函数终止。通常会看见终止条件为`result/累加器`等值。

- 自吸收例子
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = ([current, ...rest]) => {
  if (!current) {
    return 0
  } else {
    return sum(rest) + current
  }
}
console.log(sum(arr))
```

- 累加器例子
```
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumAdd = ([current, ...rest], result = 0) => {
  if (!current) {
    return result
  } else {
    return sumAdd(rest, result + current)
  }
}
console.log(sumAdd(arr))
```

- 特别说明
需要特别强调，累加器是正序执行。也是说，累加器会先运行最外层递归函数，这样拼接时候，就可以把result.concat(current)。

而自吸收则不同，自吸收是最内层先执行计算出结果，再和最外层累加，拼接时候永远是[current].concat(result)

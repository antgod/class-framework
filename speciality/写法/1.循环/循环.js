//一：这种循环直接省略掉了列表项目的内部声明以及变量操作区代码
var list = [1, 2, 3];
for (var i = 0, item; item = list[i++];) {
  console.log("正排：" + item);
}

//二：删除数组，直接省略掉了声明区代码
list = [1, 2, 3];
for (; item = list[0];) {
  list.shift();
  console.log("正排：" + item);
}

//三：倒序:利用i==0返回false原理
list = [1, 2, 3], i = list.length;
while (i) {
  i--;
  console.log("倒排：" + list[i]);
}

list = [1, 2, 3], i = list.length;
for (; i--;) {
  console.log("倒排：" + list[i]);
}

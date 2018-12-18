function square(i) {
    return i * i;
}

function dubble(i) {
    return i *= 2;
}

function map(handeler, list) {
    return list.map(handeler);
}

// 数组的每一项平方
console.log(map(square, [1, 2, 3, 4, 5]));
console.log(map(dubble, [1, 2, 3, 4, 5]));
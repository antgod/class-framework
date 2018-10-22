var p = Object.defineProperties({},{
    //可写入,可枚举,可删除
    x: {value: 1, writable: false, enumerable: false, configurable: false},
    y: {value: 2, writable: true, enumerable: true, configurable: true},
    r: {get: function(){return 88;}, set: function(newvalue){this.x =newvalue;},enumerable: true, configurable: true},
    greet: {value: function(){console.log('hello,world');}, writable: true, enumerable: true, configurable: true}
});



delete p.x;
delete p.y;

console.log(p.r)

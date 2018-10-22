function A(){
    this.a=1;
}

A.prototype.b=2;

var p = Object.defineProperties(new A(),{
    x: {value: 1, writable: true, enumerable: true, configurable: true},
    y: {value: 2, writable: true, enumerable: false, configurable: true},
});


console.log(Object.getOwnPropertyNames(p)); //返回自身所有属性
console.log(Object.keys(p));                //返回自身可枚举所有属性


Object.getOwnPropertyNames(p).forEach((item)=>{
    if(p.hasOwnProperty(item)){
        console.log('hasOwnProperty',item);
    }

    if(p.propertyIsEnumerable(item)){
        console.log('propertyIsEnumerable',item);
    }
});


//所有属性
console.log("y" in p,"a" in p)

//可枚举属性
for(var i in p){
    console.log(i)
}

var obj = Object.seal(Object.create(Object.freeze({x:1}),{y:{value: 2, writable: true}}));
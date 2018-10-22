
var add=function (a,b){
    if(arguments.length>1){
        return a+b;
    }else{
        return this+a;
    }
};

var multiply=function (a,b){
    if(arguments.length>1){
        return a*b;
    }else{
        return this*a;
    }
};

var subtract=function (a,b){
    if(arguments.length>1){
        return a-b;
    }else{
        return this-a;
    }
};

Number.prototype.add=add;
Number.prototype.multiply=multiply;
Number.prototype.subtract=subtract;

console.log(subtract(multiply(add(1,2), 3), 4));
console.log(add(1,2).multiply(3).subtract(4));



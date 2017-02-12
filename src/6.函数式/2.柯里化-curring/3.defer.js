var defer=function(){
    var cache=[];
    cache.push([].shift.call(arguments));
    var inner = function(){
        if(arguments.length){
            cache.push([].shift.call(arguments));
            return inner;
        }else{
            return cache.reduce(function(a,b){return a*b})
        }
    }

    return  inner;
};


console.log(defer(1)(2)(3)(4)());
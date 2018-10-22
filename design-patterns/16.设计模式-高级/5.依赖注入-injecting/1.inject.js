//最简单的依赖注入,不能修改参数顺序
function inject1 ( fn, args, scope ) {
    return function () {
        fn.apply ( scope, args )
    }
}

var fn=inject1(function(){
    console.log(arguments);
},[1,2,3],this);


fn();

//根据名字来获得参数
function inject2 ( fn, args, scope ) {
    var code = fn.toString ();
    var list = code
        .match ( /function\s*\(\s*([^\)]*)/ ) [1].split ( ',' );
    args = list.map ( function(name){
        return args[name];
    });
    return function () {
        fn.apply ( scope, args )
    }
}

var fn2=inject2(function(name,age){
    console.log(arguments);
},{age:18,name:'lhj'},this);

fn2();
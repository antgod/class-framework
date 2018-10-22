var dir1={
    'file1':function(){
        console.log(arguments)
    },
    'file2':function(){
        console.log(arguments)

    }
};

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

var fn2=inject2(function(file1,file2){
    file1(arguments);
    file2(arguments);
},dir1,this);

fn2();

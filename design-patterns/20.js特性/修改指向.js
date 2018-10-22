var a={
    b:function(){
        console.log(this.c);
    },
    c:1
};

a.b();

global.c=2;

var b= a.b;

b();

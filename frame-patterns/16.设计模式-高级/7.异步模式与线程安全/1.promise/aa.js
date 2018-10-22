

var p=new Promise(function(resolve,reject){

     setTimeout(()=>{
         resolve(reject);
     },1000)
});



p.then((data)=>{
    console.log("成功",data);
},function(data){
    console.log("失败",data);
});
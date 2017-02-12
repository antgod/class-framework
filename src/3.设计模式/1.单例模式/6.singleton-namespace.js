
/**
 * Created by lihongji on 2015/9/24.
 */

var MyApp={};
MyApp.namespace=function(name){
    var parts=name.split(".");
    var current=MyApp;
    for(var i in parts){
        if(!current[parts[i]]){     //第一次：如果MyApp.dom为空，第二次：如果MyApp.dom.style为空
           current[parts[i]]={};    //第一次：让current.dom={}，第二次：让MyApp.dom.style={}
        }
        current=current[parts[i]];  //让current指向MyApp.dom,让current指向MyApp.dom.style
    }
};
MyApp.namespace("dom.style");
console.log(MyApp);
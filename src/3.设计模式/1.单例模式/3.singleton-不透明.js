/**
 * Created by lihongji on 2015/9/24.
 */
function Singleton(){}

Singleton.getInstance=function() {
    var instance;
    return function(){
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    };
};
var instance=Singleton.getInstance();
var ins1=instance();
var ins2=instance();

console.log(ins1==ins2);
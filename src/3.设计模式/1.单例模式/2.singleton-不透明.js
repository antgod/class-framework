/**
 * Created by lihongji on 2015/9/24.
 */
function Singleton(){}

Singleton.getInstance=(function() {
    var instance;
    return function(){
        if (!instance) {
            instance = new Singleton();
        }
        return instance;
    };
})();
var instance=Singleton.getInstance();
var instance2=Singleton.getInstance();

console.log(instance==instance2);
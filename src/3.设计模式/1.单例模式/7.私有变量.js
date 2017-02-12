/**
 * Created by lihongji on 2015/9/24.
 */

var user=(function(){
    var name='lhj';

    return {
        getUserInfo:function(){
            return name;
        }
    }
})();

console.log(user.getUserInfo());
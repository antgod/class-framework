/*
* 区分不同动作的状态扭转
* */

/*
* 解耦合,分离出发布订阅类
* */

/*
 * Promise增加then函数
 * */

function PubSub(){
    var list=[];
    var self={
        add:function(event){
            list.push(event);
            if(this.fired){
                this.fire();
            }
            return this;
        },
        fire:function(){
            var args=arguments;
            list.forEach((event)=>{
                event.apply(this,args);
            });
            this.fired=true;
        }
    };
    return self;
}

var states={
    "resolve":{status:"done",pubSub:new PubSub()},
    "reject":{status:"fail",pubSub:new PubSub()},
    "notify":{status:"progress",pubSub:new PubSub()}
};

function Promise(func){
    this.fired=false;
    this.callbacks={};
    this.promise=this;

    if ( func ) {
        func.call( this, this );
    }
}

var fn=Promise.prototype;

fn.then=function(){
    var fn=arguments[0];

    var promise=new Promise(function(newDefer) {
        var returned=fn.apply(this,arguments);
        if(returned&&returned.promise){
            returned.promise.done(newDefer.done);
        }else{
            //TODO
        }
    });

    return promise;
};

for(var i in states){
    var state=states[i];
    var pubsub=state.pubSub;
    fn[i]=pubsub.fire;
    fn[state.status]=pubsub.add;
}



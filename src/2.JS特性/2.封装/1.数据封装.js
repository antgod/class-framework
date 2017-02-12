var Person=function(){
    var _name='lhj';
    return {
        getName:function(){
            return _name;
        },
        setName:function(name){
            _name=name;
        }
    }
};

var person=new Person();

console.log(person.getName());

person.setName("lhj1");

console.log(person.getName());


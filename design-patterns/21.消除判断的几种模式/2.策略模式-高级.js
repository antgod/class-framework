/**
 * Created by lihongji on 16/5/8.
 */

//可以把判断分解成多个函数
function strategy_1(thing) {
    var types = {
        1: '未开始',
        2: '执行中',
        3: '结束'
    };
    this.exec = function (type) {
        console.log(`todo ${thing}`);
        return types[type];
    }
}

function strategy_2(thing) {
    var types = {
        1: '开始',
        2: '暂停',
        3: '恢复'
    };
    this.exec = function (type) {
        console.log(`todo ${thing}`);
        return types[type];
    }
}

function strategy_3(thing) {
    var types = {
        1: '准备',
        2: '运行中',
        3: '完毕'
    };
    this.exec = function (type) {
        console.log(`todo ${thing}`);
        return types[type];
    }
}

function Calculate(strategy) {
    this.strategy = strategy;
}

Calculate.prototype.exec = function (type) {
    return this.strategy.exec(type);
};

var calculate1 = new Calculate(new strategy_1('thing_1'));
console.log(calculate1.exec(1));
console.log(calculate1.exec(2));

var calculate2 = new Calculate(new strategy_1('thing_2'));
console.log(calculate2.exec(1));
console.log(calculate2.exec(3));
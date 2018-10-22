'use strict';

var validator = {
    messages: [],
    types   : {},
    validate: function (datas, opts) {
        var types = this.types;
        var config = opts || {};
        var multiple = config.multiple;
        var multipleChecked=true;
        this.messages = [];

        for (var field in datas) {
            var item = datas[field];
            var value = item.value;
            var rule = item.rule;
            var reg = item.reg;
            var checker = types[rule];

            if (checker) {
                var validate = checker.validate;
                var message = checker.message;
                var checked = reg ? reg.test(value) : validate(value);
                if (!checked) {
                    this.messages.push(`${field}${message}`);
                    if (!multiple) {
                        return false;
                    }else{
                        multipleChecked=false;
                        continue;
                    }
                }
            }
        }

        return multiple ? multipleChecked : true;
    }
};

validator.types.isNonEmpty = {
    validate: function (value) {
        return !!value;
    },
    message : "不能为空"
};

validator.types.isNumber = {
    validate: function (value) {
        return /^\d+$/.test(value);
    },
    message : "必须是数字"
};

var datas = {
    name: {
        value: '',
        rule : 'isNonEmpty',
    },
    age : {
        value: '2a',
        rule : 'isNumber',
        reg  : /^\d+$/
    }
};

if (!validator.validate(datas, {multiple: true})) {
    console.log(validator.messages.join(','));
}else{

}
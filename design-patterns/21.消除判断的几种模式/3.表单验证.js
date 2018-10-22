var validator = {
    validate: function (value, type) {
        switch (type) {
            case 'isNonEmpty':
                return !!value; // NonEmpty 验证结果
                break;
            case 'isNumber':
                return true; // Number 验证结果
            case 'isAlphaNum':
                return true; // AlphaNum 验证结果
            default:
                return true;
        }
    }
};
//  测试
console.log(validator.validate("", "isNonEmpty"));
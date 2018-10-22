在计算机科学中，柯里化（英语：Currying），又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。这个技术由 Christopher Strachey 以逻辑学家哈斯凯尔·加里命名的，尽管它是 Moses Schönfinkel 和 Gottlob Frege 发明的。


1. 通用实现
    
    ```
    function currying(fn) {
        var slice = Array.prototype.slice,
        __args = slice.call(arguments, 1);
        return function () {
            var __inargs = slice.call(arguments);
            return fn.apply(null, __args.concat(__inargs));
        };
    }
    ```
    
1. 延迟执行。

 柯里化的另一个应用场景是延迟执行。不断的柯里化，累积传入的参数，最后执行。
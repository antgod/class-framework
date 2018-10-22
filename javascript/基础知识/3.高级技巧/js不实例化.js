        (function () {
            function $() {
                return new Person();
            }

            function Person() {
                this.name = 'lhj';
                this.init();
            }

            Person.fn = Person.prototype = {
                init: function () {
                    return [];
                }
            };

            window.$ = $;
        })();

        console.log($().name)
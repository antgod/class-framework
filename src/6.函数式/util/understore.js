const keys = Object.keys;

class _ {
  constructor(props) {
    this.data = props;
    if (this instanceof _) {
      return this
    }
    return new _();
  }

  /*链式操作*/
  static then(callback) {
    this.next = callback(this.data);
    return this;
  };

  static chain(props) {
    this.data = props;
    return this
  };

  static tap(callback) {
    callback(this.data);
    return this
  };

  /*数组操作*/
  static push(item) {
    this.data.push(item);
    return this
  };

  static find(array, condition) {
    return array.reduce((last, next) => last = (condition(next) === true ? next: last), undefined)
  }

  static reject(array, condition) {
    return array.reduce((last, next) => {
      if(condition(next) === false){
        last.push(next);
      }
      return last;
    }, [])
  }

  static all(...args) {
    return args.reduceRight((truth ,f)=> (truth && f()), true);
  }

  static any(...args) {
    return args.reduceRight((truth ,f)=> (truth || f()), false);
  }

  /*对象操作*/
  static map(object, callback) {
    return keys(object).map((key, index) => callback(object[key], key, index, object))
  }

  static sortBy(object, callback){
    
  }

  /*取值函数*/
  static value(props) {
    return this.data;
  };

  /*工具函数*/
  static identity(key) {
    return key
  }

  static range(start, stop, step) {
    var array = [];
    if (start > stop) {
      for (let i = start; i >= stop; i = i - (step || 1)) {
        array.push(i);
      }
    } else {
      for (let i = start; i <= stop; i = i + (step || 1)) {
        array.push(i);
      }
    }
    return array
  };
}

_.keys = keys;

module.exports = _;
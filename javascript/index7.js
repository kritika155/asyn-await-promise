var myMethod = function() {
    console.log(this.a);
};

var obj1 = {
    a: 2
};

var obj2 = {
    a: 3
};

myMethod1 = myMethod.bind(obj1); // 2
myMethod1();
myMethod.call(obj2);
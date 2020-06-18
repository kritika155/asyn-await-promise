var myMethod = function(a) {
    let b = []
    this.b = a;

    console.log(this.b);
};

var myObject = {
    myMethod: myMethod
};

// myMethod() // this === window
var a = 3;
var b = [3];
// myMethod.call(myObject, a) // this === myObject
myMethod.apply(myObject, b)
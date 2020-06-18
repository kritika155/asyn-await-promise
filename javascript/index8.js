var myMethod = function() {
    console.log(this.a);
};

var obj1 = {
    a: 2
};

// var obj2 = {
//     a: 3,
//     myMethod: function() {
//         console.log(this.a);
//     }
// };

// obj1.myMethod(); // 2
// obj2.myMethod(); // 3

// obj1.myMethod.call(obj2); // ?????
// obj2.myMethod.call(obj1);
// myMethod.call(obj2); // ?????
// obj2.myMethod();
myMethod.apply(obj1);
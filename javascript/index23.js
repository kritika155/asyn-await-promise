function foo() {
    console.log("Simple function call");
    console.log(this === window);
}

foo(); //prints true on console
console.log(this === window) //Prints true on console.

function foo1() {
    'use strict';
    console.log("Simple function call")
    console.log(this === window);
}

foo1();
console.log(this === window) //Prints true on console.
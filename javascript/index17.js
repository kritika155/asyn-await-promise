var myVar = 100;

function SomeFunction() {

    function WhoIsThis() {
        var myVar = 200;

        alert("myVar = " + myVar); // 200
        alert("this.myVar = " + this.myVar); // 100
    }

    WhoIsThis();
}

SomeFunction();
var myVar = 100;

function WhoIsThis() {
    this.myVar = 200;

    this.display = function() {
        var myVar = 300;

        alert("myVar = " + myVar); // 300
        alert("this.myVar = " + this.myVar); // 200
    };
}
var obj = new WhoIsThis();

obj.display();
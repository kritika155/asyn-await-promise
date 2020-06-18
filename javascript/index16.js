var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    alert("Hi " + myVar); // 200
    alert("There " +
        this.myVar); // 100
}

WhoIsThis(); // inferred as window.WhoIsThis()

var obj = new WhoIsThis();
alert(obj.myVar);
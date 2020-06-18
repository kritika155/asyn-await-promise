var myVar = 100;


function WhomyVar() {

    alert(myVar);
}

function WhoIsThis() {

    var myVar = 200;
    this.myVar = 500;
}

var obj1 = new WhoIsThis();

var obj2 = new WhoIsThis();
// obj2.myVar = 300;

alert("First Instance of Object 1 " + obj1.myVar); // 200 
alert("First Instance of Object 2 " + obj2.myVar); // 300
alert("Second Instance of Object 1 " + obj1.myVar);
WhomyVar();
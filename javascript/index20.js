var myVar = 100;

var obj = {
    myVar: 300,
    whoIsThis: function() {
        var myVar = 200;

        alert(myVar); // 200
        alert(this.myVar); // 300
    }
};

obj.whoIsThis();
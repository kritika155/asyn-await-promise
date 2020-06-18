//Create an empty constructor function
function Person() {

}
//Add property name, age to the prototype property of the Person constructor function
Person.prototype.name = "Ashwin";
Person.prototype.age = 26;
Person.prototype.sayName = function() {
    console.log("Hi! " + this.name);
    // console.log(Person.prototype);
}

//Create an object using the Person constructor function
var person1 = new Person();
var person2 = new Person();

person1.name = "Anil";
person1.age = 33;
//Access the name property using the person object
console.log("Name: " + person1.name);
console.log("Age: " + person1.age);

console.log(person1);
console.log("Person2:" + person2.name);

person1.sayName();
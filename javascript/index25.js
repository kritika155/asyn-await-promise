//Define the object specific properties inside the constructor
function Human(name, age) {
    this.name = name,
        this.age = age,
        this.friends = ["Jadeja", "Vijay"]
}
//Define the shared properties and methods using the prototype
Human.prototype.sayName = function() {
        console.log(this.name);
    }
    //Create two objects using the Human constructor function
var person1 = new Human("Virat", 31);
var person2 = new Human("Sachin", 40);

//Lets check if person1 and person2 have points to the same instance of the sayName function
console.log(person1.sayName === person2.sayName) // true
console.log(person1.sayName);
person1.sayName();
console.log(person2.sayName);
person2.sayName();
//Let's modify friends property and check
person1.friends.push("Amit");

console.log(person1.friends) // Output: "Jadeja, Vijay, Amit"
console.log(person2.friends) //Output: "Jadeja, Vijay"
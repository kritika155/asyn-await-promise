function Human(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName,
        this.fullName = function() {
            return this.firstName + " " + this.lastName;
        }
}

var person1 = new Human("Virat", "Kohli");
var person2 = new Human("Kritika", "Roy");
console.log(person1);
console.log(person2);

Human.prototype.name = "Ashwin";
console.log(Human.prototype.name) //Output: Ashwin

//Square bracket notation
Human.prototype["age"] = 26;
console.log(Human.prototype["age"]); //Output: 26

console.log(Human.prototype);
console.log(person1);
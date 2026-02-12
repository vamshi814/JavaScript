// Prototype Inheritance
// Prototype inheritance is a JavaScript mechanism where objects inherit properties and methods from other objects through the prototype chain.

// Enables shared behavior without duplicating code.
// Uses prototypes to link objects for inheritance.

// Animal is the parent class with a method speak.
// Dog is the child class, which inherits from Animal and overrides the speak method.
// Object.create(Animal.prototype) sets up inheritance so Dog can access Animal methods.
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

Dog.prototype = Object.create(Animal.prototype); // Set up inheritance
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
    console.log(`${this.name} barks.`);
};

const dog = new Dog('Rex');
dog.speak(); // Rex barks.
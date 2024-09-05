'use strict';

// Constructor function
const Person = function (firstName, birthYear) {
  // instance properties
  this.ime = firstName;
  this.godiste = birthYear;
};

const jonas = new Person('Jonas', 1991);
// console.log(jonas);
const matilda = new Person('Matilda', 1995);
// console.log(jonas instanceof Person); // Instance === object
//Jonas je object/instance of Person constructor function...

// 1. New empty object {} is created
// 2. Function is called, this keyword is set to the newly created object this = {}
// 3. This newly created object {} is linked to prototype
// 4. function automatically returns that new created object

// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.godiste);
};
// matilda.calcAge();

// console.log(jonas.__proto__); // Print out jonas prototypes that jonas has acsess to
// console.log(jonas.__proto__ === Person.prototype); // Check if object is a prototype of

// console.log(Person.prototype.isPrototypeOf(jonas)); // Check if object is a prototype of

// Adding property to the prototype
Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda);

// console.log(jonas.hasOwnProperty('ime'));
// console.log(jonas.hasOwnProperty('species'));

// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); // Null

// console.dir(Person.prototype.constructor);

const arr = [1, 2, 3, 4, 4]; // new Array === [],
// (brackets mean new Array construtcor is called,
// behind the scenes always a new object created with even
// static symbols like brackets)
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); // True
// console.log(arr.__proto__.__proto__); // Object.prototype

Array.prototype.unique = function () {
  return [...new Set(this)];
};

// console.log(arr.unique());

const h1 = document.querySelector('h1');
// console.dir(x => x + 1);

// CODING CHALLANGE #1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 120);
// bmw.accelerate();
// bmw.brake();
// console.log(bmw);
// console.log(bmw.__proto__);

// ES6 classes
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.firstName}`);
};
jessica.greet();

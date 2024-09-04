'use strict';

const Person = function (firstName, birthYear) {
  // instance properties
  this.ime = firstName;
  this.godiste = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object {} is created
// 2. Function is called, this keyword is set to the newly created object this = {}
// 3. This newly created object {} is linked to prototype
// 4. function automatically returns that new created object

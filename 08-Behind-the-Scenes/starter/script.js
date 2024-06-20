'use strict';
/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;
  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/
//console.log(me);
//console.log(job);
//console.log(year);
/*
var me = 'Ervin';
let job = 'Teacher';
const year = 2000;

console.log(addDecl(2, 3));
console.log(addArrow);
console.log(addExpr);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/
//example

// var x = 1;
// let y = 2;
// const z = 3;

///////////////////////////////////////
// Regular Functions vs. Arrow Functions
// var firstName = 'Matilda';

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// // arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};
const friend = me;
friend.age = 27;
console.log('Friend: ', friend);
console.log('Me: ', me);

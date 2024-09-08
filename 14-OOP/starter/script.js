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

Person.hey = function () {
  console.log('Hey there !!!');
};

// Person.hey();
// Prototypes
// console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.godiste);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.ime} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike instanceof Student);
// console.dir(Student.prototype.constructor);
Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

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
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     // console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static method, all instances/objects of a class will not inherit this method
//   // Does not get into prototype property of a class hence no instances
//   // will be able to use static methods
//   static hey() {
//     console.log('Hey there !!!');
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// // console.log(jessica);
// // jessica.calcAge();
// // console.log(jessica.age);

// // console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
// jessica.greet();
// PersonCl.hey();

// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
// console.log(account.latest);

account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// steven.init('Steven', 1979);
// console.log(steven);
// steven.calcAge();

// CODING CHALLANGE #2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(this.speed);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(this.speed);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(vel) {
//     this.speed = vel * 1.6;
//   }
// }

// const ford = new CarCl('Ford', 120);
// console.log(ford);
// console.log(ford.speedUS);

// ford.speedUS = 50;
// console.log(ford);

// CODING CHALLANGE #3
// const Ev = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };
// Ev.prototype = Object.create(Car.prototype);

// Ev.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// Ev.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed}, wtih a charge of ${this.charge}%`
//   );
// };

// const tesla = new Ev('Tesla', 120, 23);
// console.log(tesla);
// tesla.chargeBattery(50);
// tesla.accelerate();

// console.log(tesla instanceof Ev);
// Ev.prototype.constructor = Ev;
// console.dir(Ev.prototype.constructor);
// // Ev.prototype = Ev;
// console.dir(Ev);

///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods

class Account {
  // 1) Public fields(instances)
  locale = navigator.language;

  // 2) Private fields(instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }
  // 3) Public methods
  // Public Interface(API)
  getMovements() {
    return this.#movements;
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  // _approveLoan(val) {
  //   return true;
  // }
  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }
  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}
// const acc1 = new Account('Jonas', 'EUR', 1111);
// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000);
// console.log(acc1.getMovements());
// console.log(acc1);

// Chaining
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

////////////////////////////////////////////////////
// CODING CHALLANGE #4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(vel) {
    this.speed = vel * 1.6;
  }
}

class EvCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed}, wtih a charge of ${this.#charge}%`
    );
    return this;
  }
}
const tesla = new EvCl('Tesla', 120, 23);
console.log(tesla);
tesla.accelerate().accelerate().brake().chargeBattery(60).accelerate();
console.log(tesla);

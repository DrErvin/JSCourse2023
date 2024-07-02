'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
// createBooking('LH123');

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  //   if (passenger.passport === 24739479284) {
  //     alert('Checked in');
  //   } else {
  //     alert('Wrong Passport!');
  //   }
};
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// CALLBACK Functions
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase(); //REGEXP (/ /g,"");
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonki');

const greetArrow = greeting =>
  function (name) {
    console.log(`${greeting} ${name}`);
  };

// greetArrow('Hey')('Jonkidonk');

// CALL AND APPLY METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');
// console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');

// Call method
// book.call(eurowings, 23, 'Sarah Williams');
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// book.call(swiss, 583, 'Mary Cooper');

const addTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
// const addVAT = addTax(0.23);
// console.log(addVAT(100));
// console.log(addVAT(23));

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const str = `${this.question}\n${this.options.join(
      '\n'
    )}\n(Write option number)`;
    let answer = Number(prompt(str));

    typeof answer === 'number' &&
      answer <= this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },
  displayResults: function (type = 'array') {
    if (type === 'array') console.log(this.answers);
    else if (type === 'string')
      console.log(`Poll results are: ${this.answers.join(', ')}`);
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// CLOSURE
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

// booker();
// booker();
// console.dir(booker);

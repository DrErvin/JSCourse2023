'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  document.querySelector('.movements').innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((value, index) => {
    const movementType = value > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
     <div class="movements__type movements__type--${movementType}">${index} ${movementType}</div>
     <div class="movements__value">${value}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((add, value) => (add += value), 0);
  document.querySelector('.balance__value').textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (account) {
  const income = account.movements
    .filter(valueMov => valueMov > 0)
    .reduce((acc, valueMov) => acc + valueMov, 0);
  document.querySelector('.summary__value--in').textContent = `${income}€`;

  const outcome = Math.abs(
    account.movements
      .filter(valueMov => valueMov < 0)
      .reduce((acc, valueMov) => acc + valueMov, 0)
  );
  labelSumOut.textContent = `${outcome}€`;

  const interest = account.movements
    .filter(valueMov => valueMov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(int => int > 1)
    .reduce((acc, int) => acc + int);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};
let currentAccount;

// document.querySelector(".login__btn")
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    console.log('Transfer succeded');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    // Updaate UI
    updateUI(currentAccount);
  }
});
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some(movAmount => movAmount >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }

  inputLoanAmount.value = '';
});
const overalBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, movAmount) => acc + movAmount, 0);
// console.log(overalBalance);

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// SLICE
// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));

// // SPLICE
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log('LETTERS', letters);
// console.log([...arr, ...arr2]);

// FOREACH in MAPS
// const currencies2 = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies2.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.splice(1, 2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  dogs.forEach((value, index) => {
    const isDog = value >= 3 ? 'an adult' : 'still a puppy';
    console.log(
      `Dog number ${index + 1} is ${isDog}, and is ${value} years old`
    );
  });
};
// checkDogs(dogsJulia, dogsKate);
const movementsDescriptions = movements.map(
  (valueMov, index) =>
    `Movement ${index + 1}: You ${
      valueMov > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(valueMov)}`
);
// console.log(movementsDescriptions);
const createUsernames = function (accounts) {
  accounts.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(accounts);
const withdrawals = movements.filter(valueMov => valueMov < 0);
// console.log(withdrawals);
// console.log(movements);
const max = movements.reduce((acc, valueMov) => {
  if (acc > valueMov) return acc;
  else return valueMov;
});
// console.log(max);
// const calcAverageHumanAge = function (ages) {
//   const agesHuman = ages.map(value =>
//     value <= 2 ? 2 * value : 16 + value * 4
//   );
//   console.log(agesHuman);
//   const adults = agesHuman.filter(value => value >= 18);
//   console.log(adults);
//   const average =
//     adults.reduce((acc, value) => (acc += value), 0) / adults.length;
//   return average;
// };
// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));

const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// console.log(calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]));

// Asceding sort order
// movements.sort((a,b) => {
//   if(a>b) return 1;
//   if(a<b) return -1;
// });
movements.sort((a, b) => a - b);
// console.log(movements);

// Descending
// movements.sort((a,b)=> {
//   if(a>b) return -1;
//   if(a<b) return 1;
// });
movements.sort((a, b) => b - a);
// console.log(movements);

//Array.from
// const x = new Array(7);
// console.log(x);

// x.fill(1, 3, 5);
// console.log(x);

// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => el.textContent.replace('€', '')
//   );
//   console.log(movementsUI);
// });
labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => el.textContent.replace('€', '')
  );
  // console.log(movementsUI);
});

const obj = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
// console.log(obj);

const convertTitleCase = function (title) {
  const capitzalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitzalize(word)))
    .join(' ');

  return capitzalize(titleCase);
};

// Challenge #4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Task #1
dogs.forEach(
  obj => (obj.recommendedFood = Math.trunc(obj.weight ** 0.75 * 28))
);
console.log(dogs);

// Task #2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

// Task #3
const ownersEatTooMuch = dogs
  .flatMap(obj => (obj.curFood > obj.recommendedFood ? obj.owners : ''))
  .filter(el => el !== '');
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .flatMap(obj => (obj.curFood < obj.recommendedFood ? obj.owners : ''))
  .filter(el => el !== '');
console.log(ownersEatTooLittle);

// const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog=>dog.owners);
// console.log(ownersEatTooMuch);

// Task #4
// "Matilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Michael's dogs eat too little!"

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// Task #5
// dogs.forEach(obj => {
//   console.log(obj.curFood === obj.recommendedFood);
// });

console.log(dogs.some(obj => obj.curFood === obj.recommendedFood));

// Task #6
const checkEatingOkay = function (obj) {
  return (
    obj.curFood > obj.recommendedFood * 0.9 &&
    obj.curFood < obj.recommendedFood * 1.1
  );
};
console.log(dogs.some(obj => checkEatingOkay(obj)));

// Task #7
const dogsOkay = dogs.filter(obj => checkEatingOkay(obj));
console.log(dogsOkay);

// Task #8
const task8 = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(task8);

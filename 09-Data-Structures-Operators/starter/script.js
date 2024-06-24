'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({ time, address, mainIndex, starterIndex }) {
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} and
      ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
};
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// const ingridients = [
//   prompt('Your first ingridient: '),
//   prompt('Your second ingridient: '),
//   prompt('Your third ingridient: '),
// ];

// restaurant.orderPasta(...ingridients);

// restaurant.orderDelivery({
//   time: '22:3',
//   address: 'Put zivota 3',
//   mainIndex: 2,
//   starterIndex: 3,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//CODING CHALLANGE #1

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds;
// console.log(team1);
// console.log(draw);
// console.log(team2);

// const printGoals = function (...players) {
//   console.log(
//     `${players.length} goals were scored by these players: ${players}`
//   );
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7.
// team1 > team2 && console.log('Team 2 is more likely to win');
// team1 < team2 && console.log('Team 1 is more likely to win');
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'Closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

//PROPERTY NAMES
// const properties = Object.keys(restaurant.openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const key of properties) {
//   openStr += `${key}, `;
// }
// console.log(openStr);

// // Poperty VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// CODING CHALLANGE #2
// 1 Task
// const entries = Object.entries(game.scored);
// for (const [counter, name] of entries) {
//   console.log(`Goal ${Number(counter) + 1}: ${name}`);
// }

// // Task 2
// const values = Object.values(game.odds);
// let sum = 0;
// for (const value of values) {
//   sum += value;
// }
// console.log(sum / values.length);

// // Task 3
// //console.log(game['team1']);
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// const oddsEntries = Object.entries(game.odds);
// for (const [teamNo, odd] of oddsEntries) {
//   const teamStr = teamNo === 'x' ? 'draw' : `victory ${game[teamNo]}`;
//   console.log(`Odd of ${teamStr}: ${odd}`);
// }
// // Task 4
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// console.log(scorers);

// const foodSet = new Set(['Pizza', 'Pasta', 'Burek']);
// console.log(foodSet);

// const foodSetEntries = foodSet.entries();
// for (const [i, value] of foodSetEntries) {
//   console.log(i, value);
// }

// console.log(new Set('Shmedtmann').size);

const rest = new Map();
rest
  .set('name', 'Classico Italiano')
  .set(1, 'Firenze, Italy')
  .set('categories', ['Italian', 'Pizzeria', 'Vegeterian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest);

console.log(rest.get(1));
const head = document.querySelector('h1');
rest.set(head, 'Heading');
console.log(rest);
console.log(rest.get(head));

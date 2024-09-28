// Exporting module
console.log('Exoprting module');

// Blocking code (This is the modul that is imported by script.js,
// when you have blocking code here it will wait for the await to finish in
// a blocking way for this file and for the file that did the import,
// code will not start until the await promise is resovled in both files
// this way)
// console.log('Start fetching');
// await fetch('https://jsonplaceholder.typicode.com/users');
// console.log('Finish fetching users');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
  console.log('This is starter file');
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
  console.log('This is starter file');
}

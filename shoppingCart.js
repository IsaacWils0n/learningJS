// this is going to be EXPORTING MODULE
console.log('Exporting module');
const name = 'abc';
console.log(name);
const shippingCost = 10;
// const cart = [];

// In ES module there are 2 types of exports
// Named export it is the simplest way
// The main use case of Named export is to export multiple things

// Default export : we use Default export when we want to export thing per module
// var cart;
// this variable is private inside this module
// export always need to happen in top level code
export var cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};
let a = '3';
if (a === 3) {
}
addToCart('asdf', 'asdf', 'asdf');

const totalPrice = 123;
const totalQuantity = 23;
export { totalPrice, totalQuantity as tq };

// Default export
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}

// hoisting in JS

// install plugin prettier and eslint
// run eslint --init with prettier configuration for Javascript in JSON file. It will create .eslintrc.json
// modify differenct configuration in rules property inside the .eslintrc.json file.
// you can use import and export to have modularity in Javascript

// Functional programming topics
// Pure function => a function which takes input and gives output. It doesn't change the outer state.
// Callback function => passing function as a parameter to other function / calling one function in other.
// higher order function => if it is a callback function
// anonymous function/ lambda function => almost all (except where we require scope of `this`) anonymous function can be changed to lambda (fat arrow) function.

const hi = function () {
  console.log('hi');
};
const hi1 = () => console.log('hi');

const obj = {
  a: 5,
  b: 6,
  add: function () {
    console.log(this.a + this.b);
  },
};

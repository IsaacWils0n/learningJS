/* eslint-disable no-console */
//////////////////////////////////////////////////////////////////////
// EXPORTING AND IMPORTING IN ES6 MODULES

// Simply import module buy without importing any value

// this is going to be IMPORTING MODULE
// ES module works with out the extension .js as well

// ALL MODULES ARE EXECUTED BY DEFAULT

// import './shoppingCart.js';

// console.log('Importing module');

//console.log(shippingCost);
//Uncaught ReferenceError: shippingCost is not defined
// IT is because shippingCost and cart variable are scoped to the current module, so we can only use these variable in shoppingCart.js
// and if we want to use those variable in script.js then we need to use export

// import { addToCart } from './shoppingCart.js';
// console.log('Importing module');
// // now we are able to call this function as if it was defined in this scope
/// it happens after exporting
// addToCart('Bread', 2);

// import { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
// console.log('Importing module');
// addToCart('Bread', 2);
// // console.log(totalPrice, tq);
// console.log(tp, tq);

// Now we can also import all the exports of a module as the same time

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 2);
// console.log(ShoppingCart.totalPrice);

// now this will import the default export no matter what its called
// we can give any name here (add)

// HOWEVER IN PRACTISE WE NEVER MIX NAMED AND DEFAULT EXPORT IN SAME MODULE
// import add, { addToCart, totalPrice as tp, tq } from './shoppingCart.js';
// add('pizza', 22);
// console.log(tp);

// IT IS NOT ADDVISIBLE TO IMPORT FROM SAME MODULE TWICE

import add, { cart } from './shoppingCart.js';
add('pizza', 22);
add('bread', 2);
add('apple', 7);

console.log(cart);

// IMPORTS ARE NOT COPIES OF EXPORTS THEY ARE INSTEAD LIKE A LIVE CONNECTION IT MEANS THEY POINT TO THE SAME PLACE IN MEMORY

//////////////////////////////////////////////////////////////////////// THE MODULE PATTERN

// The main goal of the module pattern its to encapsulate functionality to have private data and to expose a public API

// The best way of achieving all that is by simply using a function because function give us private data by default and allow us to return value which can become public API

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 234;
//   const totalQuantity = 233;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 2);
// shoppingCart2.addToCart('pizza', 5);
// console.log(shoppingCart2);
// // {cart: Array(2), totalPrice: 234, totalQuantity: 233, addToCart: ƒ}
// console.log(shoppingCart2.shippingCost);
// undefined

// CLOSURE : Allow a function to have access to all the variable that were present at the birth place

//////////////////////////////////////////////////////////////////////// COMMON JS MODULES

// we can't use common JS with out module bundler like: webpack,parcel
// Node js is a way of running js on web server outside of a browser
// just like ES6 modules in common js 1 file is 1 module

// this happen in node.js
// Export
// export.addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(`${quantity} ${product} added to cart`);
//       };

// // Import
// const {addToCart} = require('./shoppingCart.js');

//////////////////////////////////////////////////////////////////////// A BRIEF INTRODUCTION TO THE COMMAND LINE

// commands
// ls = is for directory
// cd = change directory
// to move up : cd ..
// to move 2 level up : cd../..
// short cut key to clear : command+k
// create folder - mkdir
// remove folder(it works for only empty folders) - rmkdir
// create files - touch
// create multiple files all at once -touch filename filename and so on
// delete - rm
// move to parent location - mv (file which you want to move) (where you want to put it )
//(for parent location use= ../)
// to delete directory and files in it - rm -r(directory name) / r-stands for recursively means folder and all the files in that folder

///////////////////////////////////////////////////////////////////////
// INTRODUCTION TO NPM

// NPM - node package manager
// NPM is a software and a package repository

// first initialize npm command - npm init
// to install 3partypackages command - npm i leaflet

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

// const state = {
//   cart: [
//     { product: 'Bread', quantity: 5 },
//     { product: 'Pizza', quantity: 3 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(stateClone);

// console.log(stateDeepClone);

// when ever your saving or sharing your project don't save or share node module depository (dependency)
// if you have deleted your node module depository and you must have your package.json file
// simply install your deleted node module back from terminal - npm i

///////////////////////////////////////////////////////////////////////
// BUNDLING WITH PARCEL AND NPM SCRIPTS

// Module bundler -
// Parcel  - super fast, easy to use , it works out of the box with out any configuration
// webpack - is way popular in react but its way to complex to use

// download parcel using npm - npm i parcel --save-dev

// these are regular dependencies
// "dependencies": {
//   "leaflet": "^1.7.1",
//   "lodash-es": "^4.17.21"

// and parcel is a dev dependencie

// parcel is just another command line interface
// In order to use parcel here in console
// we have two options
// 1 npx - it is an application build into npm
// command - npx parcel index.html
// command for particular version - npm i parcel@versionnumber
// command for uninstall - npm uninstall parcel

// 2 npm scripts
// "scripts": {
//   "start": "parcel index.html"
// },
// command for terminal - npm run start(which is the name of script we created in package.json)

// we use this command - npm run start when ever we want to start parcel or devloping

// when ever we are done developing our project
// It is time build the final bundle so the bundle that is compressed and has code elemination

// script in package.json
// "build": "parcel build index.html"

// by using module.hot the page will not reload but simply it make changes
// will be updated on web with out reloading
// if (module.hot) {
//   module.hot.accept();
// }

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// now we just need to put the library name and parcel will find the path to that library
// this will work with html, css, sacs files or imgaes and
// also all kind of module es6 and common js modules

// import cloneDeep from 'lodash-es';
// import cloneDeep, * as _ from './lodash-es';
// import * as Auth from './auth.module';
// console.log(asdfasdf, 'asdf');
// const state = {
//   cart: [
//     { product: 'Bread', quantity: 5 },
//     { product: 'Pizza', quantity: 3 },
//   ],
//   user: { loggedIn: true },
// };
// const stateClone = { ...state };
// const stateDeepClone = cloneDeep(state);
// state.user.loggedIn = false;
// console.log(stateClone);
// // console.log(Auth.login('f', 's'));
// console.log(stateDeepClone);

// console.log('hello');

//////////////////////////////////////////////////////////////////////
// Counfiguring BABEL and Polyfilling

// It is used to configure modern code back to es5 code
// we can also configure  BABEL ex: we can configure exactly what kind of browser should be supported

// babel works with plugin and presets that can both be configured
// Plugin is JS feature that we can transpile(convert)
// we can customise as per our requirement , we can transpile function,class or loops back to es5
// for more visit - bebeljs.io website
// Example:

// here we are importing everthing
import 'core.js/stable';
// here we are importing a particular thing
// it reduce the bundle size
// import 'core-js/stable/array/find';

// install package - npm i regenerator-runtime

// Pollifilling asyn functions
import 'regenerator-runtime/runtime';

//////////////////////////////////////////////////////////////////////
// Modern. clean and declarative js programming

//////////////////////////////////////////////////////////////////////
// Fix bad code using declarative functional paradigm

// doing in clean.js

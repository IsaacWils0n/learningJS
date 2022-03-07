//////////////////////////////////////////////////////////////////////
// Fix bad code using declarative functional paradigm

const { async } = require('regenerator-runtime');

// import { sum } from 'lodash-es';

// import { all } from 'core-js/fn/promise';

// import { all } from "core-js/fn/promise";

// const shoppingCart = [
//   { product: 'bread', quantity: 6 },
//   { product: 'pizza', quantity: 3 },
//   { product: 'milk', quantity: 4 },
//   { product: 'water', quantity: 8 },
// ];

// const allowedProduct = {
//   lisbon: 5,
//   others: 9,
// };

// const checkCorrectAllowedProducts = function (cart, numAllowed, city) {
//   if (!cart.length) return [];
//   // let item;

//   // const allowed = numAllowed[city] > 0 ? numAllowed[city] : numAllowed.others;

//   const allowed = numAllowed?.[city] ?? allowedProduct.others;

//   // let allowed;
//   // if (city == 'lisbon') {
//   //   allowed = allowedProduct.lisbon;
//   // } else {
//   //   allowed = allowedProduct.others;
//   // }

//   const newCart = cart.map(item => {
//     const { product, quantity } = item;
//     // console.log(product, quantity, allowed);
//     return {
//       product,
//       quantity: quantity > allowed ? allowed : quantity,
//     };
//   });
//   return newCart;
//   // for (item of shoppingCart) {
//   //   if (item.quantity > allowed) item.quantity = allowed;
//   // }
// };
// const allowedShoppingCart = checkCorrectAllowedProducts(
//   shoppingCart,
//   allowedProduct,
//   'lisbon'
// );
// console.log(allowedShoppingCart);

// const createOrderDescription = function (cart) {
//   const [{ product: p, quantity: q }] = cart;
//   console.log(p, q);
//   // const first = cart[0];
//   // const p = first.product;
//   // const q = first.quantity;

//   return `Order with ${q} ${p} ${cart.length > 1 ? ', etc...' : '.'}`;
//   // if (cart.length > 1) {
//   //   return 'Order with ' + q + ' ' + p + ', etc... ';
//   // } else {
//   //   return 'Order with' + q + '' + p + '.';
//   // }
// };
// const orderDescription = createOrderDescription(allowedShoppingCart);
// console.log(orderDescription);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const budget = [
//   { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
//   { value: -45, description: 'Groceries 🥑', user: 'jonas' },
//   { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
//   { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
//   { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
//   { value: -20, description: 'Candy 🍭', user: 'matilda' },
//   { value: -125, description: 'Toys 🚂', user: 'matilda' },
//   { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
// ];

// const limitPerPerson = {
//   jonas: 1500,
//   matilda: 100,
// };

// // pure function without side effects
// const add = function (value, description, user) {
//   if (!user) user = 'jonas';
//   user = user.toLowerCase();

//   let lim;
//   if (limitPerPerson[user]) {
//     lim = limitPerPerson[user];
//   } else {
//     lim = 0;
//   }

//   if (value <= lim) {
//     budget.push({ value: -value, description: description, user: user });
//   }
// };
// add(90, 'shopping', 'JohN');
// console.log(budget);

// const check = function () {
//   for (const el of budget) {
//     let lim;
//     if (limitPerPerson[el.user]) {
//       lim = limitPerPerson[el.user];
//     } else {
//       lim = 0;
//     }

//     if (el.value < -lim) {
//       el.flag = 'limit';
//     }
//   }
// };
// check();

// console.log(budget);

// const bigExpenses = function (limit) {
//   let output = '';
//   for (const el of budget) {
//     if (el.value <= -limit) {
//       output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
//     }
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };
// bigExpenses();

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// FILTER
// Array.prototype.customFilter = function (execute) {
//   const newFilterArr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (execute(this[i]) === true) {
//       newFilterArr.push(this[i]);
//     }
//   }
//   return newFilterArr;
// };

// const check = arr.customFilter(function (n) {
//   return n % 2 === 0;
// });
// console.log(check);

// // MAP
// Array.prototype.customMap = function (execute) {
//   const newMapArr = [];
//   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     newMapArr.push(execute(this[i]));
//   }
//   return newMapArr;
// };

// const check2 = arr.customMap(function (n) {
//   return n * 2;
// });
// console.log(check2);

// // REDUCE // no new arr //
// Array.prototype.customReduce = function (execute) {
//   let sum = 0;
//   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     execute((sum += this[i]));
//   }
//   return sum;
// };

// const checkOnceMore = arr.customReduce((acc, item) => acc + item);
// console.log(checkOnceMore);

const newArr = [1, 2, 3, 4, 5, 6, 7, 8];

const ObjArr = [
  { name: 'abc1', age: 18 },
  { name: 'abc2', age: 10 },
  { name: 'abc3', age: 20 },
  { name: 'abc4', age: 23 },
];

// find
Array.prototype.customFind = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) === true) {
      return this[i];
    }
  }
  return undefined;
};

// console.log(newArr.customFind(el => el === 5));
// console.log(newArr.customFind(el => el === 9));

// const desiredPerson = person => person.name === 'abc2';
// console.log(ObjArr.customFind(desiredPerson));
// console.log(ObjArr.customFind(person => person.name === 'abc5'));

// SOME
Array.prototype.customSome = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) === true) return true;
  }
  return false;
};

const checkSome = newArr.customSome(el => el >= 4);
const checkSome1 = newArr.customSome(el => el <= null);
// console.log(checkSome, checkSome1);
const checkSome3 = ObjArr.customSome(person => person.age <= 5);
const checkSome4 = ObjArr.customSome(person => person.name === 'abc3');
// console.log(checkSome3, checkSome4);

// const arr1 = [8, 21, 9, 8];

// // EVERY
Array.prototype.customEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i]) === false) return false;
  }
  return true;
};
const cbc = newArr.customEvery(el => el >= 20);
const cbc2 = newArr.customEvery(el => el >= 0);
// console.log(cbc, cbc2);
const objResult1 = ObjArr.customEvery(person => person.age >= 10);

const objVar = ObjArr.customEvery(function (person) {
  return person.age >= 10;

  // return (person.age >= 10) ? true : false

  // if(person.age >= 10)
  // return true;
  // else return false;
});

const objResult2 = ObjArr.customEvery(person => person.name === 'abc8');
// console.log(objResult1, objResult2);

const person = {
  name: 'abc1',
  age: 18,
  marks: [12, 34, 55, 67, 56],
  // showDetails: function () {
  //   console.log(this.name, this.age);
  // },
};

// person.showDetails();

// const incrementAge = function (age) {
//   age++;
// };

const add = function (...arr) {
  const array = [...arr];
  console.log(...arr);
  return array.reduce((sum, cur) => sum + cur, 0);
};

const outerShowDetails = function () {
  console.log(this.name, this.age, this);
};
// outerShowDetails.bind(person)();
outerShowDetails.bind(person)();
outerShowDetails.call(person);
const result = add.apply(person, person.marks);
// console.log(result);

const employee = {
  fullName: function (city, country) {
    return this.firstName + ' ' + this.lastName + ',' + city + ',' + country;
  },
};

const employee1 = {
  firstName: 'John',
  lastName: 'Doe',
};

const employeeResult = employee.fullName.apply(employee1, ['Oslo', 'Norway']);
// console.log(employeeResult);

// http request  => promise.then (cb())
// fetch()
// function fetchStudetns(): Promise<Array>;
// function fetchStudent(name): Promise<Object>;
// function fetchBooksIssued(student_id): Promise<Array>;

// fetch books issued by Rohan
// callback hell
function fetchStudent() {
  const p1 = Promise.resolve({ student_id: 'id1' });
  return p1;
}

function fetchBooksIssued(id) {
  const booksIssued = {
    id1: ['book1', 'book2'],
  };
  const p2 = Promise.resolve(booksIssued[id]);
  return p2;
}

// function printIssuedBooks() {
//   fetchStudent().then(student => {
//     fetchBooksIssued(student.student_id).then(books => {
//       console.log(books);
//     });
//   });
// }

async function printIssuedBooks() {
  const student = await fetchStudent();
  const studentBook = await fetchBooksIssued(student.student_id);
  console.log(studentBook);
}
printIssuedBooks();

// async await solves this problem.

// callback(), => create callback hell problem
// promises() => promise inside promise inside promise (nested) can create callback hell problem.
// async await => syntactical sugar to promises => uses promises internally =>provide a synchronous way (one line after the other) to write asynchronous program (solves callback hell problem)

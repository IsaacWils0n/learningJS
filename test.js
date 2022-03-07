// // Highre order function, Callback functions
// // Implementing your own custom map, filter, reduce. These are also called higher order function.

// // import { sum } from './lodash-es';

// // For Practice try implementing Array.find, Array.some and Array.every
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // map
// Array.prototype.customMap = function (execute) {
//   const emptyArr = [];
//   for (let i = 0; i < this.length; i++) {
//     emptyArr.push(execute(this[i]));
//   }
//   return emptyArr;
// };

// const result2 = arr.customMap(function (a) {
//   return a * 3;
// });
// // console.log(result2);

// // Filter
// Array.prototype.customFilter = function (execute) {
//   const emptyArr1 = [];
//   console.log(this);
//   for (let i = 0; i < this.length; i++) {
//     if (execute(this[i]) === true) {
//       emptyArr1.push(this[i]);
//     }
//   }
//   return emptyArr1;
// };

// const filterResult = arr.customFilter(function (a) {
//   return a % 2 === 0;
// });
// console.log(filterResult);

// // reduce const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Array.prototype.customReduce = function (execute) {
//   let sum = 0;
//   for (let i = 0; i < this.length; i++) {
//     execute((sum = +this[i]));
//   }
//   return sum;
// };

// // [].reduce((acc, curr) => acc + curr, 0);

// // const students = [
// //   { name: 'abc', age: 12 },
// //   { name: 'def', age: 2 },
// //   { name: 'ghi', age: 15 },
// //   { name: 'jkl', age: 19 },
// // ];

// // const fil_stud = students.customFilter(student => student.age >= 10);
// // console.log(fil_stud);

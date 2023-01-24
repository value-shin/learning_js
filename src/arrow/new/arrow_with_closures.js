// const add = function(num1) {
//   return function(num2) {
//     return num1 + num2;
//   }
// }

const add = (num1) => (num2) => num1 + num2;

const add2 = add(2);

console.log(add2(10)); //> ??


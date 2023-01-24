// const f = function() {
//   return {
//     x: 10,
//     y: 20
//   }
// }

// const f = () => {
//   return {
//     x: 10,
//     y: 20
//   }
// }

// // Do not!
// const f = () => {
//   x: 10,
//   y: 20
// }

const f = () => ({
  x: 10,
  y: 20
});

console.log(f());


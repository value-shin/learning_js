let x = 'global x';

function foo() {
  let x = 'inside function x';
  console.log(x);
}

console.log(x); //> ??

foo(); //> ??

console.log(x); //> ??


var x = 'global x';

function foo() {
  x = 'inside function x';
  console.log(x);
}

console.log(x); //> ??

foo(); //> ??

console.log(x); //> ??


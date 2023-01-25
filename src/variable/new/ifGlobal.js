let x = 'global x';

if (true) {
  let x = 'inside if x';
  console.log(x); //> ??
}

console.log(x); //> ??


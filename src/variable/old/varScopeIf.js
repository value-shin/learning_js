var x = 'global x';

if (true) {
  var x = 'inside if x';
  console.log(x); //> ??
}

console.log(x); //> ??


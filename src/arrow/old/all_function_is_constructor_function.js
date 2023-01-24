var add = function (a, b) {
  return a + b;
};

var isntItBug = new add();

console.dir(isntItBug);
console.dir(add);


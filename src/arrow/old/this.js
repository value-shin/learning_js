function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++;
    console.log(this.age);
  }, 1000);
}

var p = new Person();

function Person() {
  var that = this;
  that.age = 0;

  setInterval(function growUp() {
    that.age++;
    console.log(that.age);
  }, 1000);
}

var p = new Person();


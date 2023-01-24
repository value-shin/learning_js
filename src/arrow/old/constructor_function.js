var People = function (name) {
  this.name = name;

  this.sayMyName = function() {
    console.log(this.name);
  }
};

var person = new People('shin');
person.sayMyName();

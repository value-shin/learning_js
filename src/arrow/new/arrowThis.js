// function Person() {
//   const that = this;
//   that.age = 0;

//   setInterval(() => {
//     that.age++;
//     console.log(that.age);
//   }, 1000);
// }

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}


const p = new Person();

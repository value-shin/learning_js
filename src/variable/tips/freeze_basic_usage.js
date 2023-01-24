const obj = {
  prop: 10
};

Object.freeze(obj);

obj.prop = 999;

console.log(obj); //> ??


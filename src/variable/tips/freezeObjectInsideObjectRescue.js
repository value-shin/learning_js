'use strict';

const obj = {
  objProp: {
    prop: 10
  }
};

Object.freeze(obj);
Object.freeze(obj.objProp);

obj.objProp.prop = 999;

console.log(obj); //> ??

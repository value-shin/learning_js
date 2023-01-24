'use strict';

const obj = {
  objProp: {
    prop: 10
  }
};

Object.freeze(obj);

obj.objProp.prop = 999;

console.log(obj); //> ??

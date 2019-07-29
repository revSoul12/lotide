/*
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  } 
  return true;
  };

const eqObjects = function(obj1, obj2) {
  
  //Comparing keys by isolating them into arrays
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);  

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } 
  for (let i = 0; i < obj1Keys.length; i++) {
    if (!obj2Keys.includes(obj1Keys[i])) {
      return false;
    } 
  }
  //Comparing values
  for (const key of obj1Keys) {
    const v1 = obj1[key];
    const v2 = obj2[key];
    if (Array.isArray(v1) && Array.isArray(v2)) {
      if (!eqArrays(v1, v2)) {
        return false;
      };
    } else if (v1 !== v2) {
      return false
    }
  }
  return true; 
};

*/

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  ${actual} !== ${expected}`)
  }
};

module.exports = assertObjectsEqual;

/*  TEST CODE
const ab = { a: '1', b: 2 };
const ba = { b: 2, a: '1' };
const abc = { a: '2', b: 3, c: 111 };

assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);

*/
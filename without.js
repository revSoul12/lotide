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

const assertArraysEqual = function (actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  ${actual} !== ${expected}`);
  }
};

*/


const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])){
    newArr.push(source[i]);
    }
  }
  return newArr;
};

module.exports = without;

/* TEST CODE

assertArraysEqual (without(["hello", "world", "lighthouse"], ["lighthouse"]), ["hello", "world"]);

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

*/
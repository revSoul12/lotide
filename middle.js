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

const middle = function (arr) {
  
  if (arr.length < 2) {
    return [];
  } else if (arr.length % 2 !== 0) {
    let middleIndex = Math.floor(arr.length / 2);
    return [arr[middleIndex]];
  } else {
    let i = Math.floor((arr.length - 1) / 2);
    return [arr[i], arr[i + 1]];
    
  }
  
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 8]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

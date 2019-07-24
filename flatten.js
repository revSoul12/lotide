const eqArrays = function (arr1, arr2) {
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

const flatten = function (arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++)
        answer.push(arr[i][j]);
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// //return arr.reduce((a,b) => (a.concat(b)),[]);
// for (let i = 0; i < arr.length; i++)  {
//   if(arr.isArray(arr[i])) {
//     return arr.concat(arr[i]);
//   }
// }

console.log(flatten([1, 2, [3, 4]]));
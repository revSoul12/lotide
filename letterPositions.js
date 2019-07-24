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

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  ${arr1} !== ${arr2}`)
  }
};


const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
      const item = sentence[i];

      if (item !== " ") {
        if (results[item]) {
          results[item].push(i);
        } else {
          results[item] = [i];
        }
      }
    }
  return results;
};


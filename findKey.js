const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  ${actual} !== ${expected}`);
  }
};

//fxn to scan obj and return first key for which callback returns truthy
//if no key found, return undefined
const findKey = function(obj, callback) {
  for (let key in obj) {
    if(callback(obj[key])) {
      return key;
    }
  }  
  return undefined;
} 

let result= findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result, "noma")
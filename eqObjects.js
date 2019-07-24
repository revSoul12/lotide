const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  ${actual} !== ${expected}`);
  }
};

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


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  //isolating obj keys and values in array;
  const obj1Keys = Object.keys(obj1);
  // const obj1Values = Object.values(obj1);
  const obj2Keys = Object.keys(obj2);
  // const obj2Values =ß Object.values(obj2);
  

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } 
  for (let i = 0; i < obj1Keys.length; i++) {
    if (!obj2Keys.includes(obj1Keys[i])) {
      return false;
    } 
  }
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc), false);

//Array values in obj
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd2, dc), false);
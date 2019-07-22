const assertEqual = function(actual, expected) {
  if (actual.join() === expected.join()) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔️⛔️⛔️ Assertion Failed:  &{actual} !== &{expected}`);
  }
};


function tail(array) {
  let tailArray = array.slice(1);
  return tailArray;
}

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);
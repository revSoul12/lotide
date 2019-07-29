// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`⛔️⛔️⛔️ Assertion Failed:  ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(str) {
  const results = {};
  for (const item of str) {
    if (item !== " ") {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// console.log(countLetters("lighthouse2 in the 411house"));

module.exports = countLetters;

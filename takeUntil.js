//will return a slice of array with elements taken from the beginning
//will keep going until callback returns a truthy value
const takeUntil = function(array, callback) {
  let newArr = [];

  for (let item of array) {
    if (!callback(item)) {
      newArr.push(item);
    } else {
      return newArr;
    }
  }  
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
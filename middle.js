
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

module.exports = middle;



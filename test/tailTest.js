// const assertArraysEqual = require('../assertArraysEqual');
// const tail = require('../tail');


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertArraysEqual(result, ["Lighthouse", "Labs"]);


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

});
const headTest = require('../assertEqual');
const head = require('../head');

// TEST CODE
headTest(head([5,6,7]), 5);
headTest(head(["Hello", "Lighthouse", "Labs"]), "Hello");
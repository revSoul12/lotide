# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @dlaserna/lotide`

**Require it:**

`const _ = require('dlaserna/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Asserts if two arrays compared are equal.
* `assertEqual(...)`: Asserts if two values compared are equal.
* `assertObjectsEqual(...)`: Asserts equality of two compared objects.
* `countLetters(...)`: Creates an object with the letter so the string parameter as keys and the number of those letters as values.
* `countOnly`: Takes an array and counts only those specified values of the array.
* `eqArrays(...)`: Asserts if two compared arrays are equal.
* `eqObjects(...)`: Asserts if two compared objects are equal.
* `findKey(...)`: Scans object and returns first key for which callback returns truthy. If no key found, function returns undefined.
* `findKeyByValue(...)`: Scans an object and returns first key that has a specified value.  If no key found, function returns undefined.
* `flatten(...)`: Takes nested arrays and converts into a single array.
* `head(...)`: Return the first element of an array.
* `letterPositions(...)`: Returns an object locating the index of each value in a string.
* `map(...)`: Takes to parameters, an array and function that modifies the array.  Returns modified array.
* `middle(...)`: Returns an array of the middle value of an array.  If length of the array is even, returns an array of the two middle values.
* `tail(...)`: Returns the sliced elements from index 1 onwards.
* `takeUntil(...)`: Takes two parameters: an array and a callback function. Returns a slice of array with elements taken from the beginning.  Will keep going until callback returns a truthy value.
* `without(...)`: Takes two arrays as parameters: a source and an item to remove.  Returns an array that excludes the items removed.




console.log('DEMO slice');

var array = [1, 2, 3];

console.log('should return a copy of the portion of the array requested');
console.log(slice(array, 1, 2)); // [2]
console.log(array); // [1, 2, 3];

console.log('CASE if end is omitted, slice extracts through the end of the sequence (arr.length)')
console.log(slice(array, 1)); // [2, 3]
console.log(array); // [1, 2, 3];

console.log('CASE if begin is greater than the length of the sequence, an empty array is returned')
console.log(slice(array, 2, 1)); // []
console.log(array); // [1, 2, 3];


console.log('CASE if begin is undefined, slice begins from index 0')
console.log(slice(array, undefined, 1)); // [1]
console.log(array); // [1, 2, 3];

console.log('CASE if end is greater than the length of the sequence, slice extracts through to the end of the sequence (arr.length)')
console.log(slice(array, 1, 5)); // [2, 3]
console.log(array); // [1, 2, 3];

console.log('CASE return empty array if no params are passed')
console.log(slice(array)); // []
console.log(array); // [1, 2, 3];


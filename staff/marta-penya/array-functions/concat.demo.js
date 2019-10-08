console.log('DEMO concat');

var array = [1, 2, 3];

console.log('should push a single item');
console.log(concat(array, 4)); // 4
console.log(array); // [1, 2, 3, 4]

console.log('should push a multiple items');
console.log(concat(array, 'a', 'b', 'c')); // 7
console.log(array); // [1, 2, 3, 'a', 'b', 'c']
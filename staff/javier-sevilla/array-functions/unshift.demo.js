console.log('DEMO unshift');

var array = [1, 2, 3, 4];

console.log('should unshift a single item');
console.log(unshift(array, 0)); // 5
console.log(array); // [0, 1, 2, 3, 4,]

console.log('should unshift a multiple items');
console.log(unshift(array, 'a', 'b', 'c')); // 7
console.log(array); // [1, 2, 3, 'a', 'b', 'c']
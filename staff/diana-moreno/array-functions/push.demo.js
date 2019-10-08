console.log('DEMO push');

var array = [1, 2, 3];

console.log('should push a single item');
console.log(push(array, 4)); // 4
console.log(array); // [1, 2, 3, 4]

console.log('should push a multiple items');
console.log(push(array, 'a', 'b', 'c')); // 7
console.log(array); // [1, 2, 3, 'a', 'b', 'c']

console.log('CASE should add nothing with empty value received');
console.log(push(array)) // 7
console.log(array); // [1, 2, 3, 'a', 'b', 'c']

console.log('CASE should throw type error on argument different to array');
try {
  push('hello')
  console.log('this will not print')
} catch(error) {
  console.log(error.message) // Uncaught TypeError: hello is not a function
}

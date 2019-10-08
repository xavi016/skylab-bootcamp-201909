console.log('DEMO pop');

var array = [1, 2, 3];

console.log('should remove the last element of the array and return the element');
console.log(pop(array)); // 3

console.log('should modify the original array')
console.log(array); // [1, 2]

console.log('CASE should return undefined on empty array');
console.log(pop()) // undefined

console.log('CASE should throw type error on argument different to array');
try {
  pop('hello')
  console.log('this will not print')
} catch(error) {
  console.log(error.message) // Uncaught TypeError: hello is not a function
  //debugger
}


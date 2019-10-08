console.log('DEMO reverse');

var array = [1, 2, 3];

console.log('should reverse the order of the elements in an array and return the new array');
console.log(reverse(array)); // [3, 2, 1]
console.log(array); // [ 3, 2, 1 ]

console.log('CASE should throw type error on argument different to array');
try {
  reverse('hello')
  console.log('this will not print')
} catch(error) {
  console.log(error.message) // Uncaught TypeError: hello is not a function
}
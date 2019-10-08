console.log('DEMO unshift');

var array = [1, 2, 3]

console.log('CASE should add one or more elements to the first positions of the array and return the new array length');
console.log(unshift(array, 4, 5, 6)) // 6
console.log(array) // [ 4, 5, 6, 1, 2, 3 ]

console.log('CASE strings passed as parameters')
console.log(unshift(array, 'hello', 'bye')) // 8
console.log(array) // ["hello", "bye", 4, 5, 6, 1, 2, 3]

console.log('CASE should throw type error on argument different to array');
try {
  pop('hello')
  console.log('this will not print')
} catch(error) {
  console.log(error.message) // Uncaught TypeError: hello is not a function
  //debugger
}

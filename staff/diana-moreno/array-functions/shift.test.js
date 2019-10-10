console.log('DEMO shift');

var array = [1, 2, 3]

console.log('should remove the first element of the array and return the element');
console.log(shift(array)) // 1
console.log(array) // [2, 3]

console.log('CASE should return undefined on empty array');
console.log(shift()) // undefined
console.log(array) // [2, 3]

console.log('CASE should throw type error on argument different to array');
try {
  shift('hello')
  console.log('this will not print')
} catch(error) {
  console.log(error.message) // string is not and array
  //debugger
}



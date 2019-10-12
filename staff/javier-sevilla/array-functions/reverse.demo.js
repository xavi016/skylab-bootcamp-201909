console.log('DEMO reverse');

var array = [99, 88, 77, 66, 55, 44, 66, 44];

console.log('should reverse numbers');
console.log(reverse(array)); 
console.log(array); // [44, 66, 44, 55, 66, 77, 88, 99]


array = ['a', 'j', 'o', 'E', 'e'];
console.log('should reverse characters');
console.log(reverse(array)); 
console.log(array); // ["e", "E", "o", "j", "a"]

console.log('CASE should throw a type error when there are no parameters');
try {
    reverse();
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}
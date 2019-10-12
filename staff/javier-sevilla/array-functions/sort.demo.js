console.log('DEMO sort');

var array = [111, 22 , 1, 23, 2134, 2345];

console.log('should sort  numbers');
console.log(sort(array)); 
console.log(array);


array = ['a', 'j', 'o', 'E', 'e'];
console.log('should sort  numbers');
console.log(sort(array)); 
console.log(array); // ["o", "j", "e", "a", "E"]

console.log('CASE should throw a type error when there are no parameters');
try {
    sort();
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}


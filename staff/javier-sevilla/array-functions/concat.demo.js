console.log('DEMO concat');

var array = [1, 2, 3, 4];
var array2 = [5, 6, "e", "d"];

console.log('CASE should concat an array');
var newArray = concat(array, array2); // 5
console.log(newArray); // [0, 1, 2, 3, 4, 5, 6, "e", "d"]

console.log('CASE should concat a multiple items');
newArray = concat(array, 'a', 'b', 'c', array2); // 7
console.log(newArray); // [1, 2, 3, 4, 'a', 'b', 'c', 5, 6, "e", "d"]

console.log('CASE should throw a type error when there are no parameters');
try {
    concat();
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}

console.log('CASE should throw type error when first paramter is not an a array');
try {
    concat(1, 2, 3);
} catch(error) {
    console.log(error.message);
    // console.log('type error: ' (error instanceof TypeError))
}


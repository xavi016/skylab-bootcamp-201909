function addTwo(item) {
    return item + 2;
}

console.log('DEMO map');

var array = [1, 2, 3];

console.log('should print the array given')

console.log(array); //[1, 2, 3]

console.log('should map every item of the array given, add 2 and return the resulting array');

console.log(map(array, addTwo)); // [3, 4, 5]

console.log('CASE throw Type Error if funcion is not a function');

try {
    map(array, 6);

} catch (error) {
    console.error(error);
}

console.log('CASE throw Type Error if array is not an array');

try {
    map(6, addTwo);

} catch (error) {
    console.error(error);
}
function isTwo(item) {
    return item > 2;
}
console.log('DEMO filter');

var array = [1, 2, 3];

console.log('should print the array given')

console.log(array);

console.log('should return a new array with those items who accomplish the condition "item > 2"');

console.log(filter(array, isTwo)); // [3]

console.log('CASE throw type error if no funcion');

try {
    console.log(filter(array, 3));
} catch (error) {
    console.error(error);
}


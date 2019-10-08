console.log('DEMO concat');

var array1 = [1, 2, 3];
var array2 = ['cat', 'dog']

console.log(array1);
console.log(array2);

console.log('should join the arrays given');
console.log(concat(array1, array2)); 

 // [1, 2, 3, 'cat', 'dog']

 var array = [1, 2, 3];
console.log('should join the array and items');
console.log(concat(array1, 'a', 'b', 'c')); 
// [1, 2, 3, 'a', 'b', 'c']
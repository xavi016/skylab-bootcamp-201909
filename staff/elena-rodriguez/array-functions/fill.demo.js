console.log('DEMO fill');

console.log('should print [1,2,0,0,5]');
var array = [1,2,3,4,5]
console.log(fill(array,0,2,4))

console.log('should print [1,2,0,0,0]');
var array = [1,2,3,4,5]
console.log(fill(array,0,2))

console.log('should print [0,0,0,0,0]');
var array = [1,2,3,4,5]
console.log(fill(array,0))
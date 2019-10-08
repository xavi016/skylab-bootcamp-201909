console.log('DEMO every');

var array = [1,2,3,4];

function belowTen (num){return num < 10};

console.log('should return true');
console.log(every(array, belowTen));

var array2 = ['1','2','3'];
console.log('Should return true');
function isString (str) {return typeof str === 'string'}
console.log(every(array2 , isString));

var array2 = [1,'2','3'];
console.log('Should return false');
function isString (str) {return typeof str === 'string'}
console.log(every(array2 , isString));
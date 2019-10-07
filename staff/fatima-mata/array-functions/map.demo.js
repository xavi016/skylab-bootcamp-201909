console.log('DEMO map')

var array = [1,2,3];

console.log('should return a array2 with the numbers of the first array multiplied for 2');// [2, 4, 6]
var b = map(array, function (num){return num * 2});
console.log(array);
console.log(b);

console.log('should add 10 to all numbers');
var c = map(array, function(n){return n + 10});
console.log(array);
console.log(c);


  

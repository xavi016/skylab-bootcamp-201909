console.log('DEMO map')
var array = [1,2,3,4];
console.log('should multiply by 2 the numbers of the array');
var result = map(array, function (num){return num*2});
console.log(array);
console.log(result);
console.log('should add 10 to all numbers');
var result2 = map(array, function(n){return n + 10});
console.log(array);
console.log(result2);
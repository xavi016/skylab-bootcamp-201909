console.log('DEMO map');


var array = [1,2,3];

console.log('should return a new Array with the numbers of the first array multiplied for 2'); 
// [2, 4, 6]
var mapped = map(array,function (x) {
    return x * 2;
 })

console.log(mapped);

console.log('should return a new Array with the numbers of the first array multiplied for 2'); 
// [1, 1.4142135623730951, 1.7320508075688772] 
var mapped = map(array,function(num) {
    return Math.sqrt(num);
})
console.log(mapped);


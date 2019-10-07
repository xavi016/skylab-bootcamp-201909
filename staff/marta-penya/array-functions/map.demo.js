console.log('DEMO map');

var array = [1, 2, 3];


var newArr = map(array, function(value){
    return value * 2
}); 

console.log('should add a new array with the results of the function introduced');
console.log(newArr); 
 // [2, 4, 6]


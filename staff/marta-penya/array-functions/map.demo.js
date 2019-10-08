console.log('DEMO map');

var array = [1, 2, 3];
console.log(array)

var newArr = map(array, function(value){
    return value * 2
}); 

console.log('should add a new array with the results of the function introduced');
console.log(newArr); 
 // [2, 4, 6]


 console.log('CASE should throw type error on no function');

 try{
     map(array, true)

 } catch(error){
     console.log(error.message);
     console.log('type error:' + (error instanceof TypeError));

 }
console.log('DEMO findIndex');

var array = [2, 3, 4, 5];

console.log(array);


console.log('should print the index of the first element that meets the condition'); 
console.log('condition: item > 2')
console.log(findIndex(array, function(item){
       return item > 2;
   })); 

   
console.log('should prints -1 if there is no element that meets the condition');
console.log('condition: item > 5')
console.log(findIndex(array, function(item){
       return item > 5;
   })); 
      

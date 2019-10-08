console.log('DEMO some');

var array = [1, 2, 3, 4];

console.log(array);


console.log('should print true if some element meet the condition'); 
console.log('condition: item > 2')
console.log(some(array, function(item){
       return item > 2;
   })); 

   
console.log('should print false if no element meet the condition');
console.log('condition: item > 5')
console.log(some(array, function(item){
       return item > 5;
   })); 
      

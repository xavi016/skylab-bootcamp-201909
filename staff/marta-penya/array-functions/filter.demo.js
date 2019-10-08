console.log('DEMO filter');

var array = [1, 2, 3, 4];

console.log(array);


console.log('should print the new array with the elements that complies with the condition'); 
console.log('condition: item > 2')
console.log(filter(array, function(item){
       return item > 2;
   })); 

   
console.log('should print the new array with the elements that complies with the condition');
console.log('condition: item > 1')
console.log(filter(array, function(item){
       return item > 1;
   })); 
      

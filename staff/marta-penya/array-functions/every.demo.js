console.log('DEMO every');

var array = [2, 3, 4, 5];

console.log(array);


console.log('should print true if all elements meet the condition'); 
console.log('condition: item > 1')
console.log(every(array, function(item){
       return item > 1;
   })); 

   
console.log('should print false if any element does not fulfill the condition');
console.log('condition: item > 5')
console.log(every(array, function(item){
       return item > 5;
   })); 
      

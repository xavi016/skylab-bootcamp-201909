
 /**
 * Finds the value of the first element of an array that meets the test function provided 
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {value} returns the value of the first element that meets the function, otherwise it returns undefined.
 * 
 */

var array = [2, 3, 4, 5, 7 , 8];

function find(array,funcion) { 
    for(i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
           return array[i]
        }  
    }
    return undefined
}


console.log('should prints -1 if there is no element that meets the condition');
console.log('condition: item > 5')
console.log(find(array, function(item){
       return item > 5;
   })); 
      

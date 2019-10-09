
 /**
 * 
 * Executes a reducing function on each element of an array
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @returns {number} returns a single value
 * 
 *  
 */

numbers = [7, 5 , 2, 6];   //60


function reduce(array, expression){
    var acumulador = array[0]
    for (var i = 1; i < array.length; i++){
        expression(acumulador, array[i], i, array);
    }
		
    return acumulador
}


console.log(reduce(numbers, function(){
    for(var i = 1; i < array.length; i++){
        acumulador *= array[i];
    }
}));




/*foreach*/

function forEach(array, expression) {
	for (var i = 0; i < array.length; i++) 
		expression(acumulador, array[i], i, array);
}
console.log('should multiply each number by 10');

forEach(numbers, function(number) { console.log(number * 10); });

var result = 0;

forEach(numbers, function(number) { result += number; });

console.log(result);

/**
 * Executes a reducing function on each element of an array
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {*} expression function to reduce the array
 * 
 * @returns {number} returns the acumulator.
 */


function reduce(array, expression){
    
    var acum = 0;
    
    for (var i = 0; i < array.length; i++){
        if (i === 0) {
            expression(0, array[i], i, array);
        }

        if(i === 1){
            acum = expression(array[0], array[i], i, array);
        }

        if(i > 1) {
            acum = expression(acum, array[i], i, array);
        } 
    };
		
    return acum;
};
/**
 *
 * @param {Array} array The array 
 * @param {Function} expression The expression yo evaluate the array
 * @return {Boolean} Depending if the condition at the end
 */

function every(array, expression){
    for (var i=0; i < array.length; i++){
        if(expression(array[i]) === false) return false
    }
    return true
};   



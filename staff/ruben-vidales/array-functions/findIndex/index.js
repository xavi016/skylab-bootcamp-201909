/**
 * 
 * @param {*} array 
 * @param {*} expression 
 */
function findIndex (array, expression){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for(var i = 0 ; i < array.length; i++){
        if(expression(array[i])){
            return i;
        }
    }
    return -1;
}
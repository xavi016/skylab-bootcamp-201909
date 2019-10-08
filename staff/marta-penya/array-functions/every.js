
 /**
 * Checks if all the elements in the array pass the condition implemented by the given function
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {boolean} returns true if all the elements in the array pass the condition; otherwise, false.
 * 
 */



function every(array,funcion) { 
    var areAll = false;
    var newArr = [];
    for (i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
         newArr[newArr.length] = array[i] 
        }
        
    }
    if(newArr.length === array.length){
        areAll = true
    }
    return areAll
}

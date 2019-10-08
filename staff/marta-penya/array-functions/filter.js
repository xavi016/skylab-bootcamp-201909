 /**
 * Creates a new array with all the elements that meet the condition implemented by the given function.
 * 
 * @param {Array} array The array to push elements to.
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {Array} returns the new array created with the condition implemented 
 * 
 *  
 */



function filter(array,funcion) { 
    var newArr = [];
        for (i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
        newArr[newArr.length] = array[i]
    }
}
    return newArr
}


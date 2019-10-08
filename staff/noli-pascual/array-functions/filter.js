/**
 * Iterates on every item of an array and returns a new array with those items that accomplish one or several conditions.
 * * 
 * @param {Array} array The array to filter items.
 * @param {Function} function that specifies the condition to be accomplished.
 * 
 * @returns {Array} The new array.
 * @throws {TypeError} If Array is not an awway.
 * @throws {TypeError} If Function is not a function.
 */

function filter(array,funcion) { 
    if(!array instanceof Array) throw TypeError(array + ' is not an array');
    if(!funcion instanceof Function) throw TypeError(funcion + ' is not a function');
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
        newArray[newArray.length] = array[i];
    }
}
    return newArray;
}



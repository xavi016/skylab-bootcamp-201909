/**
 * Iterates on every item of an array and returns a new array with those items that accomplish one or several conditions.
 * * 
 * @param {Array} array The array to filter items.
 * @param {Function} function that specifies the condition to be accomplished.
 * 
 * @returns {Array} The new array.
 */

function isTwo(item) {
    return item > 2;
}

function filter(array,funcion) { 
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
        newArray[newArray.length] = array[i];
    }
}
    return newArray;
}



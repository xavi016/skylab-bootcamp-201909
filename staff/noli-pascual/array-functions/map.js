/**
 * Iterates on every item of an array and manipuates it according to a function.
 * 
 * @param {Array} array The array to push elements to.
 * @param {Function} function that specifies what to do with the array items.
 * 
 * @returns {Array} The new lenth of the array.
 */


function addTwo(item) {
    return item + 2;
}

function map(array, funcion) { 
    var newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray[i] = funcion(array[i]);
    }
    return newArray;
}


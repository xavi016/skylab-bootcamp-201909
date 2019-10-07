/**
 * Iterates on every item of an array and manipuates it according to a function.
 * It returns the new array with items modified
 * 
 * @param {Array} array The array to get items.
 * @param {Function} function that specifies what to do with the array items (add 2)
 * 
 * @returns {Array} The new array.
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


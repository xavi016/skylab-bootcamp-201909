/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 * @param {Array} array The array to pop the value from
 * @returns {Function} The value deleted from the expression 
 * 
 */

function map(array, expression) {
    var newArr = []
    for (var i = 0; i < array.length; i++)
    newArr[newArr.length] = expression(array[i])

    return newArr

};
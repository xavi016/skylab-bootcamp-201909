/**
 * Iterates an array and returns a new array modified by an expression.
 * @param {*} array The array to iterate
 * @param {*} expression The expression that modify the array.
 * 
 * @returns {array} The new array modified by the epression.
 */

function map (array, expression) {
    var newArray = [];
    for (var i=0; i<array.length; i++) {
        newArray[i] = expression(array[i])
    }
    return newArray;
}
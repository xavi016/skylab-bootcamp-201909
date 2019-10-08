/**
 * Returns a new array with an expression applied. 
 * 
 * @param {Array} array The array to iterate.
 * @param {expression} function which will return a new parameter.
 * 
 * @returns {newArray} The new array with the function applied.
 */


function map(numbers, expression) { 
var result = [];
   for (let i = 0; i < numbers.length ; i++)
   {result[i] = expression(numbers[i])}

    return result;
}


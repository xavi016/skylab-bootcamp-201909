/**
 * removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to iterate.
 * @param {expression} function which will return a new parameter.
 * 
 * @returns {newArray} The new parameters with the function applied.
 */


function map(array, expression) { 
    var newArray = [];
   for (let i = 0; i < array.length ; i++)
   {newArray[i] = expression(array[i])}

    return newArray;
}


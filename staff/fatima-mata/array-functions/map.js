/**
 *Iterates through an array and returns a new modified array.
 * 
 * @param {Array} array The array to iterate.
 * @param {expression}  Function that will return the new parameter.
 * 
 * @returns {Array2} The new array created by expression.
 */
function map(array, expression) { 
	
	var array2 = [];
    for (var i=0; i<array.length; i++) {
        array2[i] = expression(array[i])
    }
    return array2;
}
/**
 * Returns de value of the fisrt element in the array that satisfies the condition.
 * @param {Array}  The array done.
 * @param {expression} provided testing function.
 */

function find(array, expression) {
    if(!(array instanceof Array)) throw TypeError(array + 'is not arrary')
	if(typeof expression !== 'function') throw TypeError(expression + 'is not a function')
    
    var result;
    for (var i = 0; i < array.length; i++) {
        if (expression(array[i]) == true && !result) {
            result = array[i];
        }
    }
    if (!result) {
        result = undefined;
    }

    return result;

}
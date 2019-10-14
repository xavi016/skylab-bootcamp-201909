/**
 * Itearates an array and evaluates an expression on each item.
 * 
 * @param {Array} array The array to iterate.
 * @param {Function} expression The expression to evaluate in each item of the array.
 */

function forEach (array, expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    (function recursiveCall (n) {
        expression(array[n],n);
        //if (++n<array.length) recursiveCall(array, n, expression);
        ++n < array.length && recursiveCall(n);
    })(0);

}
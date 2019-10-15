/**
 * 
 * Returns the index of the first element in the hooray that satisfies the provided 
 * testing function. Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {*} expresion 
 * 
 */
Hooray.prototype.findIndex = function(expression) {
    if (typeof expression !== 'function') throw TypeError(expression + " is not a function");

    for (var a = 0; a < this.length; a++) {
        if (expression(this[a])) return a;
    }

    return -1;
}
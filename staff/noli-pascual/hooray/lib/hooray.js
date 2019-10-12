function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * FOREACH Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};

/**
 * PUSH Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function() { 
	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};
/**
 * MAP. Iterates on every item of a hooray and manipuates it according to a function.
 * It returns the new hooray with items modified.
 * 
 * @param {Hooray} hooray The to get items.
 * @param {Function} function that specifies what to do with the array items (add 2)
 * 
 * @returns {Hooray} The new hooray.

 * @throws {TypeError} If Function is not a function.
 */

Hooray.prototype.map = function(expression) { 
  
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var result = new Hooray();
    for (i = 0; i < this.length; i++) {
		result[i] = expression(this[i]);
		result.length++;
    }
    return result;
}

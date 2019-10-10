function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each item.
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
 * Pushes a variable number of items into this hooray.
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
 * Copies a part of the hooray within a new array starting from beginning
 *  to end (end not included). The original array will not be modified.
 * 
 * @param {number} begin Index for starting position 
 * 
 * @param {number} end Indez for ending position 
 * 
 * @returns {Hooray} New hooray with the extracted values 
 */



Hooray.prototype.slice = function(begin, end) {
	
    var result = []; 

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    
    return result;
}


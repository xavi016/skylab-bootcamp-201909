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
 * Find the first element that accomplish a condition and returns its index. 
 * 
 * @param {Array} array we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} the index of the element found. 
 * */

Hooray.prototype.findIndex = function(expression) { 
if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");
    
for (let i = 0; i < this.length; i++){
        if(expression(this[i])) {
            return i;
        }  
    } 
     return -1;  
} 
    
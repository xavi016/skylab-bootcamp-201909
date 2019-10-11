function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
};

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
 * Copies a part of the hooray within a new hooray starting from beginning
 * to end (end not included). The original hooray will not be modified.
 *
 * 
 * @param {number} begin  Item for the start position
 * 
 * @param {number} end  Item for the end position
 * 
 * @returns {Hooray} New hooray with the extracted values
 */

 Hooray.prototype.slice = function(begin, end) {
	if (!this) throw Error( 'is not defined'); 
	if (!(this instanceof Hooray)) throw Error( 'Is not a Hooray');

    //if (typeof end === 'undefined') end = hooray.length;

    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?
    
    return result;
}


/**
 * Deletes the last item of an array and returns de deleted item.
 *  
 * @returns {number} returns de last item deleted on the array
 */
Hooray.prototype.pop = function () {
    
    if (this.length===0) return undefined;

    var result = this[this.length-1];
    this.length-=1;
    
    return result;
} 


/**
 * Returns the 1st index that got true in the function given
 * If there is no match, returns a -1
 * 
 * @returns {number}
 * 
 */

Hooray.prototype.findIndex = function (expression){
    for (i = 0; i < this.length;i++){
        if (expression(this[i])){
            return i
        }
    } 
    return -1
    
};



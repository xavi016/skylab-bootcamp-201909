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
 * PUSH
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
 * SLICE
 * Copies a part of the hooray wthin a new hooray starting from the beginning to end
 *  (end not include). The origal hooray will not be modified.
 * 
 * @param {Number} begin Index for starting position.
 * @param {Number} end Index for the last position.
 * 
 * @returns {Hooray} New hooray with the extracted values.
 */
Hooray.prototype.slice = function(begin, end) { 
    //if (typeof end === 'undefined') end = array.length;
    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?
    
    return result;
};
/**
 * SPLICE
 * Changes the contents of an hooray by removing or replacing
 *  existing elements and/or adding new elements in place.
 * 
 * @param {Number} start Index for starting position.
 * @param {Number} delCount Index for the last position.
 * @param {*} items Index for the last position.
 * 
 * @returns {Hooray} An hooray containing the deleted elements.
 * If only one element is removed, an hooray of one element is returned.
 *  If no elements are removed, an empty hooray is returned.
 */
Hooray.prototype.splice = function(start, delCount) { 
    //if (typeof end === 'undefined') end = array.length;
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	var result = new Hooray;
	var newArray = [];
	var x = 0;
	var arrPos = 0;
	var itemsLen;
	var items = [];
	if(typeof delCount === 'undefined'){
		itemsLen = arguments.length-1;
		var index = 1;
	}else{
		itemsLen = arguments.length-2
		var index = 2;
	}
	for(var y = 0; y<itemsLen; y++){
		items[y] = arguments[index];
		index++;
	}
	var finalLength = this.length-delCount+itemsLen;
	
	// Deleted elements
	for (var i = 0; i < delCount; i++) {
		result[i] = this[i+start];
	}
	while (x < finalLength) {
		if(x === start){
			for(var y =0; y<delCount; y++){
				arrPos++
			}
			for(var y = 0; y<itemsLen; y++){
				newArray[x] = items[y]
				x++
			}
		}else{
			newArray[x] = this[arrPos] 
			x++
			arrPos++
		}
	}
	this.length = newArray.length
	for(var i = 0; i<this.length;i++){
		this[i] = newArray[i]
	}

    return result;
};
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
 * SLICE method returns a shallow copy of a portion of an hooray into a new hooray object selected from begin to end (end not included) where begin and end represent
 * the index of items in that hooray. The original hooray will not be modified.
 * 
 * @param {Number} begin index, start position.
 * 
 * @returns {Number} number end index, last position.
 * @returns {Hooray} with the portion of the original Hooray.
 */

Hooray.prototype.slice = function(begin, end) {
    
	
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
 * SPLICE method changes the contents of an array by
 * removing or replacing existing elements and/or adding new elements in place.
 * 
 * @param {Number} begin index, start position.
 * 
 * @returns {Number} number end index, last position.
 * 
 * @param {*} items to add to hooray.
 * 
 * @returns {Hooray} a hooray containing the deleted elements. If only one element is removed, a hooray of one
 * element is returned. If no elements are removed, an empty hooray is returned.
 */

Hooray.prototype.splice = function(start, delCount) { 
    //if (typeof end === 'undefined') end = array.length;
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	var result = [];
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
​
    return this;
};

/**
 * The map() method creates a new hooray with the results of calling a
 * provided function on every element in the calling hooray.
 * 
 * @param {Function} function that provides what to do to the elements of the hooray.
 * 
 * @returns {Hooray} hooray with the elements of original hooray but modified.
 * 
 
 */

 Hooray.prototype.map = function(expression) {
     //ToDo

 }
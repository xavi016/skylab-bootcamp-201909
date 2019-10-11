
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


/**
 * Changes the contents of an hooray by removing or replacing existing elements and/or adding new elements in place.
 * 
 * @param {number} start Index for starting position 
 * 
 * @param {number} delCount Indez for ending position 
 * 
 * @param {*} item The elements to add to the array 
 * 
 * @returns {Hooray} An hooray containing the deleted elements. If only one element is removed, 
 * an hooray of one element is returned. If no elements are removed, an empty hooray is returned.
 */


Hooray.prototype.splice = function(start, delCount) { 
    //if (typeof end === 'undefined') end = array.length;
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	var result = new Hooray;
	var newHooray = [];
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
				newHooray[x] = items[y]
				x++
			}
		}else{
			newHooray[x] = this[arrPos] 
			x++
			arrPos++
		}
	}
	this.length = newHooray.length
	for(var i = 0; i<this.length;i++){
		this[i] = newHooray[i]
    }
    
    return result;
};



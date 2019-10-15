/**
 * Delete the first element of elements
 *  
 * @returns {*} return element deleted.
 */
Hooray.prototype.shift = function() { 
	var elementDeleted = this[0]
	for (var i = 1; i < this.length; i++) {
		this[i-1] = this[i]; 
	}
	delete this[this.length-1]  
    this.length--;
    return elementDeleted;
};
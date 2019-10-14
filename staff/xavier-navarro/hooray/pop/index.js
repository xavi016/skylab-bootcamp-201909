/**
 * Removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {Item} Return the removed item
 */
Hooray.prototype.pop = function (){
    if (this.length === 0) return undefined;
	var aux = this[this.length -1];
	
	delete this[this.length - 1];
	this.length--;
    return aux;
}
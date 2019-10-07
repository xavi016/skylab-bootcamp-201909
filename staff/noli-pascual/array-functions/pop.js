/**
 * Substracts the last item of an array given.
 * 
 * @param {Array} array The array to pop elements to.
 * 
 * @returns {Item} The that was eliminated from the array.
 */

function pop(array) { 
	var itemErased = array[array.length -1];
    array.length = array.length -1;
	return itemErased;

}
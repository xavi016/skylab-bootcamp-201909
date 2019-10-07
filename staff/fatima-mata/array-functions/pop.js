/**
 * Removes the last element of the array and return its content.
 * 
 * @param {Array} array The array to delete the last elements.
 * 
 * @returns {number} The last element removed.
 */
function pop(array) { 

	var a = array[array.length-1];
	array.length -= 1

	return a
}


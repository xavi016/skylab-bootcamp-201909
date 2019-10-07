/**
 * Eliminates the first item of an array and returns it.
 * 
 * @param {Array} array The array to shift.
 * 
 * @returns {item} The item eliminated.
 */

function shift(array) { 
	var itemShift = array[0];
   
	for(i = 0; i < array.length; i++) {
		if(i > 0) {
			array[i - 1] = array[i];
		}
		
	}
	array.length = array.length -1;
	return itemShift;
}

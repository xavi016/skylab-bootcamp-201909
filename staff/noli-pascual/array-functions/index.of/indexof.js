/**
 * indexof method returns the first index at which a given element can be found in the array,
 * or -1 if it is not present.
 * 
 * @param {Array} array
 * @param {*} element to search in array
 * 
 * @returns {number} the position of the first element equal to indicated
 */

function indexOf(arr, searchElement) { 
		
	for(i = 0; i < arr.length; i++) {
		
		if(arr[i] === searchElement) {
			return i;
        }
	}
	
	return newArray[0];

}






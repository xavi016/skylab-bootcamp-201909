/**
 * indexof method returns the first index at which a given element can be found in the array,
 * or -1 if it is not present.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {number} the position of the first element that accomplish the condition
 */

function indexOf(arr, searchElement) { 
	var newArray = []
	
	for(i = 0; i < arr.length; i++) {
		
		if(arr[i] === searchElement) {
			newArray[newArray.length] = i;
        }
    
	}
	if(newArray.length === 0) {
		return -1;
	}
	else {
		return newArray[0];
	}
}

indexOf(['hola', '2', 3], 'hola');




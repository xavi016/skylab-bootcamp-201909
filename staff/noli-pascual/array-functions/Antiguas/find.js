/**
 *  Returns the index of the first element in the array that accomplish the provided condition (function).
 * 	Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {number} the position of the first element that accomplish the condition
 */

function find(array,funcion) { 
	var newArray = []
	
	for(i = 0; i < array.length; i++) {
		
		if(funcion(array[i])) {
			newArray[newArray.length] = array[i];
		}
	}
	if(newArray.length === 0) {
		return -1;
	}
	else {
		return newArray[0];
	}
}

//REFACTORIZACIÓN
function find(array,funcion) { 
	
	for(i = 0; i < array.length; i++) {
		
		if(funcion(array[i])) {
			return array[i];
		}
	}
	return undefined
}

function isGreater(item) {
	return item > 2;
}

find([1,5,8],isGreater);
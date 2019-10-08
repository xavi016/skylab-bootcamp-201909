/**
 *  Returns the index of the first element in the array that accomplish the provided condition (function).
 * 	Otherwise, it returns -1, indicating that no element passed the test.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {number} the position of the first element that accomplish the condition
 */
var arr = ['kks','Manoli','jjj'];
function every(array,funcion) { 
	var matches = 0;
	
	for(i = 0; i < array.length; i++) {
		
		if(funcion(array[i])) {
			matches ++;
		}
	}
	if(matches === array.length) {
		return true;
	}
	else {
        return false;
    }
}


function isString(item) {
	return typeof item === 'string';
}

every(arr, isString);


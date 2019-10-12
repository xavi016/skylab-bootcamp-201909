/**
 * Adds the second parameter value to the first parameter.
 * 
 * @param {Array} array 
 * @param {*} parameter to add to first array.
 * 
 * @returns {Array} the resulting array with array and parameter.
 */


function concat(...arguments) {
	var newArray = [];
	
	for(var i = 0; i < arguments.length; i++) { 

		if(!(arguments[i] instanceof Array)) { 
			newArray[newArray.length] = arguments[i];
		}
		else {
			
			for(var j = 0; j < arguments[i].length; j++) {
				newArray[newArray.length] = arguments[i][j];
			}
		}	
	}
	
	return newArray; 
}




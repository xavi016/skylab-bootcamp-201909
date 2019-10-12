/**
 * Adds the second parameter value to the first parameter.
 * 
 * @param {Array} array 
 * @param {Array} array to add to first array.
 */


var elem1 = ['a','b','c'];
var elem2 = 2;
var elem3 = [1,6];
var elem4 = ['Manoli'];


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

concat(elem1, elem2, elem3, elem4);


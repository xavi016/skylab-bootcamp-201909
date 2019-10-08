/**
 * Adds the second parameter value to the first parameter.
 * 
 * @param {Array} array 
 * @param {Array} array to add to first array.
 */

let arr1 = [1,2,3];
const arr2 = ['a','b','c'];

function concat(arrPrimero, arrSegundo) {
	var newArray = [];
	
	for(i = 0; i<arrPrimero.length;i++) { 

		newArray[newArray.length] = arrPrimero[i];
	} 

	arrPrimero += ',';

	for(j = 0; j < arrSegundo.length; j++) {
		newArray[newArray.length] = arrSegundo[j];
	}
	return newArray;

}

concat(arr1, arr2);



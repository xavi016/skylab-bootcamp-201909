/**
 * The fill() method fills (modifies) all the elements of an array from a
 * start index (default zero) to an end index (default array length) with a static value.
 * It returns the modified array.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {number} the position of the first element that accomplish the condition
 */

function fill(arr, element, indexIni, indexFin) { 
    
    if(indexFin === undefined) {
        indexFin = arr.length-1;
    }
	
	for(i = indexIni; i <= indexFin; i++) {
		
		arr[i] = element;
    }
    return arr;
}

var array = ['index0', 'index1', 'index2', 'index3', 'index4'];
fill(array, 'fill', 3, 4);


/**
 * 
 * @param {*} array The array to reverse sort elements to. 
 */
function reverse(array) { 	
    if (!(array instanceof Array)) throw TypeError(array + ' is no an array');

    var arrayAux = [];
    var j = 0;
    for (var i = (array.length-1); i > -1; i--) {
        arrayAux[j] = array[i];       
        j += 1;
    }
    for (var x = 0; x < array.length; x++) {
        array[x] = arrayAux[x];       
    }

    return array;
}

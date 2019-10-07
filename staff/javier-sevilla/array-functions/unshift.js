/**
 * 
 * @param {*} array The array to push elements to.
 * @param {...any} item The item (or items) to unshift.
 * 
 * @returns {number} The new lenth of the array.
 */
function unshift(array) { 	
    //console.log(arguments)
    var newArray = []; 

    for (var i = 1; i < arguments.length; i++) {
        newArray[i -1] = arguments[i];
    }
    var y = i -1;

    for (var j = 0; j < array.length; j++) {
        newArray[y + j] = array[j];
    }

    for (var x = 0; x < newArray.length; x++) {
        array[x] = newArray[x];
    }
    return array.length;
}
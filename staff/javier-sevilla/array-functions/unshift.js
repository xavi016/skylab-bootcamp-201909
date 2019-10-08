/**
 * 
 * @param {*} array The array to unshift elements to.
 * @param {...any} item The item (or items) to unshift.
 * 
 * @returns {number} The new lenth of the array.
 */
function unshift(array) { 	
    //console.log(arguments)
    if (array===undefined) throw TypeError(array + ' is no an array')
    if (!(arguments[0] instanceof Array)) throw TypeError(arguments[0] + ' is no an array')
    
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
/**
 * 
 * @param {*} array The array to delete elements to.
 * 
 * @returns {number} The new lenth of the array.
 */
function shift(array) { 	
    //console.log(arguments)
    if(array.length === 0) {
      return undefined;
    }
 
    var newArray = []; 
    var elementDeleted = array[0];
    for (var i = 1; i < array.length; i++) {
        array[i-1] = array[i]; 
    }
    array.length = array.length - 1;
    return elementDeleted;
}
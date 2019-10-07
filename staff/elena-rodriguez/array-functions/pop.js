/**
 * removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {item} The last item removed.
 */

function pop(array) { 
	
    var lastItemIndex = array.length -1; 
    var lastItem = array[lastItemIndex];
    array.length = array.length - 1;
    return lastItem;
}
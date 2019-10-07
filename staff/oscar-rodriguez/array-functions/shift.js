/**
 * Deletes the first item of an array and shifts each item into a lower index.
 * Returns de removed item of the array.
 * 
 * @param {Array} array The array on will delete the first item.
 * 
 * @returns {any} The item deleted from the array.
 */
function shift (array) {

    var itemShifted = array[0];

    for (var i=1; i<array.length; i++) {
        array[i-1]=array[i];
    }
    array.length--;
    return itemShifted;
}
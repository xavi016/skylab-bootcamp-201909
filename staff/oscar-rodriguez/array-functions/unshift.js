/**
 * Add a new item at beggining of an array and unshifts each item into a higher index.
 * 
 * @param {Array} array The array on will add item at first .
 * @param {any} item The item will be added in the array.
 */
function unshift (array, item) {
    for (var i=array.length; i>=1; i--) {
        array[i]=array[i-1];
    }
    array[0]=item;
}
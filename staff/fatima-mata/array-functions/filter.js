/**
 * Accept a function as a parameter that you will use to return a 
 * new array only with the elements that meet a condition.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the array.
 */
function filter(array) { 
    var array2 = [];
    for(var i = 0; i < array.length; i++) {
    if (array[i]) {
    array2.push(array[i]);
}












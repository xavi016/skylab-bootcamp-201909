/**
 * The pop method removes the last element of an
 * array, and returns that element.
 * @param {Array} array The array to pop elements from.
 * 
 * @returns {last} Returns the array without the last element.
 */

    function pop(array) {

        var last = array[array.length - 1];
     
        array.length = array.length - 1;
     
        return last; 
     
     }
     
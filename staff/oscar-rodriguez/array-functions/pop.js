/**
 * Deletes the last item of an array and returns de deleted item.
 * 
 * @param {Array} array The array on we will delete last item
 * 
 * @returns {any} returns de last item deleted on the array
 */
function pop (array) {
    var result=array[array.length-1];
    array.length-=1;
    
    return result;
} 
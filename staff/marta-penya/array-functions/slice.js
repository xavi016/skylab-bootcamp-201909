 /**
 * Copies a part of the array within a new array starting from beginning
 *  to end (end not included). The original array will not be modified.
 * 
 * @param {Array} array The array to push elements to.
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {Array} returns the new array created with the condition implemented 
 * 
 *  
 */


function slice(array, begin, end) {
    if (!(array instanceof Array)) throw new TypeError(array + ' is not an array');

    //if (typeof end === 'undefined') end = array.length;

    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? array.length + begin : begin;
    end = end || array.length;
    end = end < 0? array.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = array[i];

    //result.length = end - begin; // WTF?
    
    return result;
}
/**
 * The fill() method fills (modifies) all the elements of an array from a
 * start index (default zero) to an end index (default array length) with a static value.
 * It returns the modified array.
 * 
 * @param {Array} array
 * @param {Function} function that specifies the condition
 * 
 * @returns {number} the position of the first element that accomplish the condition
 */

function fill(array, item, indexIni, indexEnd) {

    if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array');
    if(item instanceof Function) throw TypeError(typeof item + ' should be a string or a number')
    
    if(!indexEnd) indexEnd = array.length - 1;
    
    else if(indexEnd) indexEnd = indexEnd -1;
    
    if(!item) item = undefined;
    
    if(!indexIni) indexIni = 0;
    
    for(var i = indexIni; i <= indexEnd; i++) {
      array[i] = item;
    }
    return array;
}

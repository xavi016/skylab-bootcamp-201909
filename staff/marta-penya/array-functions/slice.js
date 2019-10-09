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



var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];


function slice(array, fidx, lidx){
    if(array.length === 0)throw ReferenceError('array is empty');
    
    var newArray = [];
    for(var i = fidx; i < lidx; i++){
        newArray[newArray.length++] = array[i];
    }
    return newArray;
}
console.log(slice(animals, 2, 4));
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

function splice(array, start, remove, add1, add2) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    if (!(typeof start === 'number')) throw TypeError(start + ' is not a number');
    var newArray = [];
    var n = 0;
    var x = remove;
    for (var i = 0; i < array.length; i++) {
        if (i < start) {
            newArray[n++] = array[i];
        } else if (x >= 0) {
            if (x === 0) {
                newArray[n++] = array[i];
                if (add1 != 0) {
                    newArray[n++] = add1;
                    add1 = 0;
                    if (add2 != 0) {
                        newArray[n++] = add2;
                        add2 = 0;
                    }
                }
            } else if (x-- === 1) {
                if (add1 != 0) {
                    newArray[n++] = add1;
                    add1 = 0;
                    if (add2 != 0) {
                        newArray[n++] = add2;
                        add2 = 0;
                    }
                }
            }
        } else if (array.length > start + remove) {
            newArray[n++] = array[i];
        }
    }
    return newArray;
}



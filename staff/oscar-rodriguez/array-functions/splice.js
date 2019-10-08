/**
 * Add in the array the items
 * 
 * @param {Array} array The array we will iterate and modify
 * @param {Number} index The starting position in the array
 * @param {Number} numItems Number of items that will be deleted in the array
 * @param {any} - items that will be added to the array. 
 *              if it's omitted, nothing is added, but $numItems will be deleted since $index position
 */
function splice (array, index, numItems) {
    var deleted = [];
    var deletedIndex = 0;
    if (index >= array.length) 
        index = array.length;
    if (index+numItems > array.length) 
                    numItems=arra.length;
    if (index===(array.length-1)) 
                    array.length--;
    for (var i=index+numItems; i<array.length; i++) {
        if (numItems > 0) {
            deleted[deletedIndex]=array[i-numItems];
            deletedIndex++;
            array[i-numItems]=array[i];
        }
    }
    array.length-=numItems;
    if (arguments.length>3) {
        debugger
        for (var i=array.length-1; i>=index; i--) {
            array[i+(arguments.length-3)]=array[i];
        }
        for (i=0; i<(arguments.length-3); i++) {
            array[index+i]=arguments[i+3];
        }
    }
                
    return deleted;
}
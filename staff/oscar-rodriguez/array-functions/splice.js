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

    if (index >= array.length) {
        console.log("Index must be less that array's length");
    } else if (index+numItems > array.length) {
                    console.log("Sorry, you can't delete more items than exists");
        } else if (index===(array.length-1)) {
                    array.length--;
                } else {
                    for (var i=index+numItems; i<array.length; i++) {
                        if (numItems > 0) {
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
                }
}
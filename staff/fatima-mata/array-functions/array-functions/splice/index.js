/**
 * method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 * 
 * @param {*} array An array to iterates.
 * @param {*} inicio Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1, meaning -n is the index of the nth last element and is therefore equivalent to the index of array.length - n) and will be set to 0 if absolute value is greater than the length of the array.
 * @param {*} eliminar An integer indicating the number of old array elements to remove.
 * @param {*} añadir1 The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
 * @param {*} añadir2 The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
 * 
 * @return An array containing the deleted elements. If only one element is removed, an array of one element is returned. If no elements are removed, an empty array is returned.
 */

function splice (array, start) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');

    var deleteCount = arguments [2] || 0; 
    if (start < 0) start = (array.length)+start;
    
    var deleted = [];
    if (start >= array.length) start = array.length-1;
    if (start+deleteCount > array.length) deleteCount=array.length-start;

    if (deleteCount) {
        
        for (var i=start; i<start+deleteCount; i++) {
            deleted[deleted.length]=array[i];
        }
    
        for (var i=start; i<array.length; i++) {
            if ((i+deleteCount)<array.length)
                array[i]=array[i+deleteCount];
        }

        array.length-=deleteCount;
    }

    if (arguments.length>3) {
        for (var i=array.length-1; i>=start; i--) {
            array[i+(arguments.length-3)]=array[i];
        }
        for (i=0; i<(arguments.length-3); i++) {
            array[start+i]=arguments[i+3];
        }
    }
                
    return deleted;
}
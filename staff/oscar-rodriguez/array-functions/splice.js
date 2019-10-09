/**
 * Add in the array the items
 * 
 * @param {Array} array The array we will iterate and modify
 * @param {Number} start The starting position in the array
 * @param {Number} deleteCount Number of items that will be deleted in the array
 * @param {*} - items  that will be added to the array. 
 *              if it's omitted, nothing is added, but $numItems will be deleted since $start position
 */ //function splice(array, start, deleteCount--Optional, items--Optional)

function splice (array, start) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');

    var deleteCount = arguments.length > 2 ? arguments [2] : 0; 
    if (start < 0) start = (array.length-1)+start;
    if (deleteCount > (array.length+start)) deleteCount=array.length+start;

    var deleted = [];
    var deletedIndex = 0;
    if (start >= array.length) 
        start = array.length;
    if (start+deleteCount > array.length) 
                    deleteCount=array.length;
    if (start===(array.length-1)) 
                    array.length--;
    for (var i=start; i<start+deleteCount; i++) {
        debugger
        if (deleteCount > 0) {
            deleted[deletedIndex]=array[i];
            deletedIndex++;
            array[i]=array[i+deleteCount];
        }
    }
    array.length-=deleteCount;
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


var arr = [1,12,3,4,5,6,7];

splice(arr, 3, 2);
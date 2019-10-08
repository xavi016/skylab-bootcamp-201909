/**
 * Look for an element & returns the first index (if not found > return -1)
 * 
 * @param {array} The array to be searched with element
 * @param {element} element 
 * @param {index} number 
 */

    function indexOf(array,element,number){
        number = number || 0;
        var index= -1
        for (var i = number; i < array.length; i++){
            if(element === array[i]) {
                index = i
                break
            }
        }
        return index;
    }




/**
 * join all the elements into a single string.  
 * 
 * @param {Array} arrays to join together.
 * @param {element} the element that separate each item. 
 * 
 * @returns {string} string with all the elements.
 * */


 function join(array, caract) {
    if(caract === undefined)
        caract =',';
    var result = '';
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            result += array[i];
        else
            result += array[i] + caract;
    }
    return result;
 }

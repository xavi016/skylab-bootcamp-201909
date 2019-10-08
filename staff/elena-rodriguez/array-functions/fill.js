/**
 * join all the elements into a single string.  
 * 
 * @param {Array} array initial.
 * @param {newItem} element that we want to add.
 * @param {number} index where we want to initiate the changes.
 * @returns {number} index where we want to stop the changes. 
 * */


//numero que queremos poner, posicion inicial, posición final
 //debería rellenar....
function fill(array, newItem, startPos, endPos) {
    if (typeof(endPos) === 'undefined') {
        if (typeof(startPos) === 'undefined') {
            for (let i = 0; i < array.length; i++)
            array[i] = newItem;
            return array;  
            } 
        else {
            for (let i = startPos; i < array.length; i++)
            array[i] = newItem;
            return array;}
    }
    else {
        for (let i = startPos; i < array[endPos - 1]; i++)
            array[i] = newItem;
            return array;
         }
}


/**
 * Return a string separated by the character it receives
 * 
 * @param {Array} array The array to iterate.
 * @param {newItem} - Character by which we will replace items from array
 * @param {start} - Position where the value will start to change
 * @param {end} - Position less one where the value will end to change
 * 
 * @returns {newArray} Return a string separated by the character it receives
 */
function fill(array,newItem, start, end){
    if(typeof start === 'number' && typeof end === 'undefined'){
      for(var i = start; i < array.length; i++){
        array[i] = newItem;
      }
    }else if(typeof start === 'undefined' && typeof end === 'undefined'){
      for(var i = 0; i < array.length; i++){
        array[i] = newItem;
      }
    } else if(typeof start === 'number' && typeof end === 'number'){
      for(var i = start; i < end; i++){
        array[i] = newItem;
      }
    }else{
      return array;
    }
    return array
  }
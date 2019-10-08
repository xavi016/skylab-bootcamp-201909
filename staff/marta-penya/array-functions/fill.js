
 /**
 * 
 * 
 * @param {Array} array 
 * 
 * @param {Function} expression 
 * 
 * @returns {boolean} 
 * 
 *  
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
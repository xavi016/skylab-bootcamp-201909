
 /**
 * Adds one or more elements to the beginning of an array and returns the new length of the array.
 * 
 * @param {Array} array the array to add elements in
 * 
 * @param {*} items to add at the beginning of the array 
 * 
 * @returns {Number} returns the new length of the array
 * 
 *  
 */


function unshift(array, items) { 
  var itemsLen = items.length;
  var arrLen = array.length;

  for(var i = 0; i< itemsLen; i++){
    array[arrLen+i] = null;
  }

  var newLen = array.length-1;

  for(var e = newLen; e >= 0; e--){
    array[e] = array[e-itemsLen]
    if(e === newLen-arrLen){
       break;
      }
  }
  for(var o = 0; o<itemsLen; o++){
         array[o] = items[o];
       }
  return array;
}


/**
 * Add elements at the begining of an array. Returns the array modified. 
 * 
 * @param {Array} array The array to add elements to.
 * @param {Array} array the items to add. 
 * 
 * @returns {array} The array moddified.
 */

 

function unshift(array, items) { 
  var itemsLen = items.length;
  var arrLen = array.length;
  for(var i = 0; i< itemsLen; i++){
    array[arrLen+i] = null
  }
  var newLen = array.length-1;
  for(var e = newLen; e >= 0; e--){
    array[e] = array[e-itemsLen]
    if(e === newLen-arrLen){
       break
      }
  }
  for(var o = 0; o<itemsLen; o++){
         array[o] = items[o];
       }
  return array
}


/**
 * Remove the last element of the array and return the element
 * @param  {Array} array The array to delete the last item
 * @return {Number}       The last element of the array
 * @throws {TypeError}    If array is not an array
 */
function pop(array) {
  if(!array) {
    return undefined;
  } else if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array');

  var lastElem = array[array.length-1]

  array.length = array.length-1
  return lastElem || undefined
}


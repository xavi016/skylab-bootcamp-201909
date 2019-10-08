/**
 * Removes the first element of the array and returns the element
 * @param  {[type]} array [description]
 * @return {[type]}       [description]
 * @throws {TypeError}    If array is not an array
 */
function shift(array) {
  if(!array) {
    return undefined;
  } else if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array');

  var firstElem = array[0]

  for(var i = 0; i < array.length-1; i++)
    array[i] = array[i+1]

  array.length = array.length-1

  return firstElem
}

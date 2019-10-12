/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param  {Array} array Array to search on
 * @param  {String, Number} item  Item to find in the array
 * @return {Boolean}       A boolean if found or not
 * @throws {TypeError} If array is not an array, item is not a string, a number or a boolean
 */
function includes(array, item) {
  if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
/*  if ((item instanceof Array) || (item instanceof Function)) throw TypeError(item + ' is not a number, boolean or a string');*/
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');

  for (let i in array) {
    if (array[i] === item) return true;
  }
  return false;
}
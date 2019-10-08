/**
 * Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
 * @param  {Array} array     Base array
 * @param  {Number} indexIni Initial index to select the portion of the array
 * @param  {Number} indexEnd End index to select the portion of the array
 * @return {Array}           A copy of the portion of the array
 * @throws {TypeError}    If array is not an array
 */
function slice(array, indexIni, indexEnd) {
  let newArray = [];
  counter = 0;

  if(indexIni > indexEnd) {
    return newArray;
  } else if(!indexIni) {
    indexIni = 0;
  } else if(!indexEnd || indexEnd > array.length) {
    indexEnd = array.length
  }

  for(var i = indexIni; i < indexEnd; i++) {
    newArray[counter] = array[i];
    counter++;
  }
  return newArray;
}

// falta la parte de negativos
/**
 * Creates a new array with all elements that pass the test implemented by the provided function.
 * @param  {Array}   array [description]
 * @param  {Function} fn    [description]
 * @return {Array}         [description]
 */
function filter(array, fn) {

  if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  let newArray = [];
  let counter = 0;

  for(let i in array) {
    if(fn(array[i])) {
      newArray[counter] = array[i]
      counter++
    }
  }
  return newArray || [];
}

var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

console.log(filter(array, word => word.length > 23))
console.log(filter('hola', word => word.length > 23))
console.log(filter(array, 'hola'))
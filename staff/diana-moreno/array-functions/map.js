/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param  {[type]}   array [description]
 * @param  {Function} fn    [description]
 * @return {[type]}         [description]
 */
function map(array, fn) {

  if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  let newArray = [];
  let counter = 0;

  for(let i in array) {
    newArray[i] = fn(array[i])
  }
  return newArray;
}

var array = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
var arr2 = [1, 2, 3]
console.log(map(array, word => word.length > 23))
console.log(map(arr2, x => x + 1))
/*console.log(map('hola', word => word.length > 23))
console.log(map(array, 'hola'))*/
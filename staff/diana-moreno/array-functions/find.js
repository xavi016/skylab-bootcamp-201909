/**
 * Returns the value of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First number that matches the condition
 */
function find(array, fn) {

  if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  for(let i in array) {
    if(fn(array[i])) {
      return array[i];
    }
  }
}


let array = [1, 2, 3]
fn = x => x === 3

console.log(find(array, fn))
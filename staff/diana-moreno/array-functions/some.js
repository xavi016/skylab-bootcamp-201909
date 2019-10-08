function some(array, fn) {
 if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  for(let i in array) {
    if(fn(array[i])) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3]


console.log(some(array, x => x === 3))
console.log(some(array, x => x === 4))
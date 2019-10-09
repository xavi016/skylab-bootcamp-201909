function every(array, fn) {
  if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  let counter = 0;
  for(let i in array) {
    if(fn(array[i])) counter++;
  }
  if(counter === array.length) return true;
  else return false;
}

let array = [1, 2, 3]

console.log(every(array, x => x >= 1)) // true
console.log(every(array, x => x === 4)) // false
function every(array, fn) {
 if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if(!(fn instanceof Function)) throw TypeError(typeof fn + ' is not a function');

  let counter = 0;
  for(let i in array) {
    if(fn(array[i])) {
      console.log(counter)
      counter++;
    }
  }
  return counter === array.length ? true : false
}

let array = [1, 2, 3]


console.log(every(array, x => x >= 1))
console.log(every(array, x => x === 4))
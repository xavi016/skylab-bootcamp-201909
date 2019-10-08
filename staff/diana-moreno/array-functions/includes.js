function includes(array, item) {

  if(!(array instanceof Array)) throw TypeError(typeof array + ' is not an array')
  else if((item instanceof Array) || (item instanceof Function)) throw TypeError(typeof item + ' is not a number or a string');

  for(let i in array) {
    if(array[i] === item) {
      return true;
    }
  }
  return false;
}


let array = [1, 2, 3]

console.log(includes(array, 3))
console.log(includes(array, 4))
console.log(includes(array, 'hola'))
console.log(includes(array, [1, 2]))
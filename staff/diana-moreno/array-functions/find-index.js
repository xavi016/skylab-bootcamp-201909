function findIndex(array, fn) {
  for(let i in array) {
    if(fn(array[i])) return i
  }
  return -1
}

var array = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}
function isLargeNumber2(element) {
  return element > 444;
}


console.log(findIndex(array, isLargeNumber))
console.log(findIndex(array, isLargeNumber2))
console.log(array)
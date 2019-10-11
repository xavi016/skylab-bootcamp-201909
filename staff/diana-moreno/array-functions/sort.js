/**
 * sorts the elements of an array in place and returns the sorted array
 * @param  {Array}   array Array to sort
 * @param  {Function} fn    Function that decides if the sort is increasing or decreasing
 * @return {Array}         Array sorted
 */
function sort(array, fn) {
  var decreasing = function() {
    if (array[j] < array[j + 1]) {
      var aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  };
  var increasing = function() {
    if (array[j] > array[j + 1]) {
      var aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  };

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length - 1 - i; j++) { // con -i es más eficiente
      if (!fn) fn = function() { return 1 }
      if (fn(2, 1) === 1 - 2) decreasing();
      else increasing();
    }
  }
  return array;
}

var array = [5, 6, 2, 4, 9, 0];
console.log(sort(array)) // [ 0, 2, 4, 5, 6, 9 ]
var fn = function(a, b) { return a - b }
console.log(sort(array, fn)) // [ 0, 2, 4, 5, 6, 9 ]
var fn2 = function(a, b) { return b - a }
console.log(sort(array, fn2)) // [ 9, 6, 5, 4, 2, 0 ]
var fn3 = function(a, b) { return b === a }
console.log(sort(array, fn3)) // [ 0, 2, 4, 5, 6, 9 ]
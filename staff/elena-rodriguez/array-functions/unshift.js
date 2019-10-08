/**
 * removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {item} The last item removed.
 */

var array = [1,2,3,4]
var items = ["a","b"]
function unshift(array, items) { 
  var itemsLen = items.length;
  var arrLen = array.length;
  for(var i = 0; i < itemsLen; i++){
    for(var e = arrLen ; e = 0;  e--){

        //
    array[e] = array[e+1];
    console.log(array[e])
    console.log(array[e+1])
    console.log(array)
    items[i] = array[0]
    }
  }
  return array
}
console.log(unshift(array, items))


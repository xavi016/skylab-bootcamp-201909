/**
 * The method sorts the elements of an array in place and returns the sorted array. 
 * 
 * @param {Array} arr 
 * @throws {TypeError} Error
 * 
 * @returns {Array} reorganized array;
 */

function sort(array){

   if (!(arr instanceof Array)) throw TypeError (arr + ' is not an array')

       for (var i = 0; i < array.length; i++) {
           for (var j = i+1; j < array.length; j++) {
               if(array[i] > arr[j]){
                   var c = array[i];
                   array[i] = arr[j];
                   array[j] = c;
               }
           }
       }
       return array;
   };
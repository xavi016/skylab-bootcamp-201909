/**
 * Concatenates two arguments. 
 * 
 * @param {Array} The array adds both arguments inside 
 * @returns {Function} Both arguments concatenated
 * 
 */


function concat(array) {
  if (!(array instanceof Array)) throw TypeError (array + ' is not an array')
 
 var newArray = array;
 var counter = arr.length;
  for (var i = 1; i < arguments.length; i++) {
      if(arguments[i] instanceof Array) {
         for (var j = 0; j < arguments[i].length; j++) {
             newArray[counter] = arguments[i][j];
             counter++;
         }
      } else { newArray[counter] = arguments[i];
                 counter++;}
  }
  return newArray;
}













//  function concat(array) {
//     var newArray = array;
//     for (var i = 0; i < arguments.length; i++) {
//           if(arguments[i] instanceof Array){
//             for (var a = 0; a < (arguments[i].length); a++) {
//             newArray[a] = arguments[i][a];
              
//             } 
//           } else {
//             newArray[a] = arguments[i];
          
//           }
//     }
//     return newArray;
  
// }

// var numbers = [1,2,3];
// var numbers2 = [4,5,6];
// concat(numbers,numbers2);



    
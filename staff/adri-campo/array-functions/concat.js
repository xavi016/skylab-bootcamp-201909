/**
 * Concatenates two arguments.
 * 
 * @param {Array} The array adds both arguments inside 
 * @returns {Function} Both arguments concatenated
 * 
 */

 function concat(array1) {
    var newArray= array1;
	for (var i = 0; i < arguments.length; i++) {
        if(arguments[i] instanceof Array){
          for (var a = 0; a < (arguments[i].length); a++) {
           newArray[a] = arguments[i][a];
            
          } 
        } else {
          newArray[a] = arguments[i];
         
        }
  }
	return newArray;
  
}

concat([1,2,3],"helloworld")



    
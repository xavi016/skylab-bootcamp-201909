/**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to push elements to.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {Array} the new array created
 */

function concat(arguments) { 
    var newArr = array;
    var index = array.length

	for (var i = 1; i < arguments.length; i++){
        if(arguments instanceof Array){
            for(var j = 1; j < arguments.length; j++){

                newArr[newArr.length] = arguments[i][j]
                index++ 
                         
            }
        }
         else {
            newArr[newArr.length] = arguments[i]
            index++
        }
    }
		
	return newArr
}
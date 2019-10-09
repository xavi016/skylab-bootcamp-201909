/**
 * Concat method it is used to fuse one or more arrays. This method doesn't
 * change the existing arrays.
 * @param{arguments} The selected arrays that give the values to the functions
 * @param{newArray} The new array with the merged values
 * 
 */
function concat(){
        
    var count = 0;
    var newArray = [];

    for(var i = 0; i < arguments.length; i++) {
        for(var j=0; j < arguments[i].length; j++){
            
            newArray[count] = arguments[i][j];
                count++
        }

    }
    return newArray;
}




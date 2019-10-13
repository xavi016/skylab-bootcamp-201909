/**
 * 
 * @param {Array} array 
 * @param {...arguments} elements to add in the beggining of the array
 * 
 * @returns {number} the array length after add the elements
 */
function unshift (array){
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    // OPT 1
    var array = [];
    for(var i = 0; i < array.length; i++){
        array[i] = array[i];
    }


    var contador = 0;
    for(var i = 1; i<arguments.length ;i++){
        array[contador] = arguments[i];
        contador++;
    }


    for(var j = 0; j<array.length; j++ ){
        array[contador] = array[j];
        contador++;
    }

    return array.length;
    
}
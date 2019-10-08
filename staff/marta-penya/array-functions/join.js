

/**
 * Join all the elements of an array (or an object similar to an array) into a string and return this string.
 * 
 * @param {Array} array The array to join each element into a string.
 *
 *  @param {...any} item the separator to join the elements with
 * 
 * @returns {...any} returns the string with all elements joined
 */


function join(array, item) { 
    var string = '';

    if(item === ''){
        item = ',';
    };

    for (var i = 0; i < array.length; i++){
       
        if(array.length -1 === i){
            string += array[i];
        }else{
            string += array[i] + item;
        }
        
    }
   
	return string   
}



/*Es una cadena usada para separar cada uno de los elementos del arreglo. El separador es convertido a una cadena
 si es necesario. Si este se omite, los elementos del arreglo son separados con una coma (","). Si el separador
  es una cadena vacía todos los elementos son unidos sin ningún carácter entre ellos.*/
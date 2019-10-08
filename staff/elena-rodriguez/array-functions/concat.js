
/**
 * Concatenate all the elements into one single array.  
 * 
 * @param {Array} array the initial array.
 * 
 * @returns {array} array with the diferent arrays or elements concatenated.
 * */

function concat(array) {
    var aux = array;
    var cont = array.length;
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] instanceof Array) {
            for (let j = 0; j < arguments[i].length; j++) {
                aux[cont] = arguments[i][j];
                cont++;
            }
        }
        else {
        aux[cont] = arguments [i]; 
        cont++;
        }
    }
    return aux;
  }

  
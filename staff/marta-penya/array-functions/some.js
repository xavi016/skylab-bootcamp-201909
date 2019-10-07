El método some() comprueba si al menos un elemento del array 
cumple con
 la condición implementada por la función proporcionada.

 /**
 * Pushes a variable number of items into an array.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the array.
 */

function some(array, expression ) { 
    for (var i = 1; i < arguments.length; i++) {
        expression(array, i)
    }

}
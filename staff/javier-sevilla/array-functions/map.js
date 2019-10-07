/**
 * 
 * @param {*} array The array to iterate.
 * @param {*} expression The expression to evaluate in each item of the array.
 */

function map(array, expression) { 	
    //console.log(arguments)
    var newArray = []; 
	for (var i = 0; i < array.length; i++) 
        newArray [i] = expression(array[i]);

    return newArray;
}
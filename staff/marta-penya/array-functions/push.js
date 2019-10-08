/**
 * To join two or more arrays. This method does not change existing arrays.
 * 
 * @param {Array} array The array to push elements to.
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} returns a new array
 */

function push(array, ) { 
	//console.log(arguments) 

	for (var i = 1; i < arguments.length; i++)
		array[array.length] = arguments[i]

	return array.length
}
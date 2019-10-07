function push(array) { 
	//console.log(arguments) 

	for (var i = 1; i < arguments.length; i++)
		array[array.length] = arguments[i]

	return array.length
}
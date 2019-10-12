/**
 * SPLICE
 * Changes the contents of an array by removing or replacing
 *  existing elements and/or adding new elements in place.
 * 
 * @param {Number} start Index for starting position.
 * @param {Number} delCount Index for the last position.
 * @param {*} items Index for the last position.
 * 
 * @returns {Array} An array containing the deleted elements.
 * If only one element is removed, an array of one element is returned.
 *  If no elements are removed, an empty array is returned.
 */

function splice(array, start, delCount) { 
    //if (typeof end === 'undefined') end = array.length;
    // if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
	var result = []; // nuevo array con los elementos eliminados
	var newArray = []; // introducir nuevos valores del array original
	var x = 0; // iniciar el bucle y recorrer el array
	var arrPos = 0; // indice para colocar los elementos correctamente
	var itemsLen; // longitud de los items a introducir
	var items = []; // items a introducir
	// debugger


	if(delCount === 'undefined'){ // si no hay elementos a eliminar
		itemsLen = arguments.length-1;
		var index = 1;
	}else if(arguments.length === 2 && start !== 'undefined' && start >= 0 && delCount !== 'undefined'){ // si no hay items a introducir
		var index = 0;
		itemsLen = 0;
	}else if(arguments.length === 1){ // si solo se introduce un parámetro numérico 
		delCount = array.length-start;
		itemsLen = array.length-start;
	} else if(start < 0){ // si start es negativo
		itemsLen = arguments.lenght - delCount + start;
		start = array.length+start;
	}else{ // si introducimos todos los parametros 
		itemsLen = arguments.length-2
		var index = 2;
	}
	
	// extracción de items de arguments y guardarlos en var items
	if(itemsLen !== 0){
		var finalLength = array.length-delCount;
		// ADD ['Jan','March']
		for(var y = 0; y<itemsLen; y++){
			items[y] = arguments[index];
			index++;
		}
	}else {
		var finalLength = array.length-delCount+itemsLen;
	}
	// guardar items eliminados en el array results
	for (var i = 0; i < delCount; i++) {
		result[i] = array[i+start];
		result.length++;
	}
	//bucle para colocar los items correctamente en el new array
	var lol = false;
	while (x < finalLength) {
		if(x === start && lol === false){
			for(var y =0; y<delCount; y++){
				arrPos++
			}
			if(itemsLen !== 0){
				for(var y = 0; y<itemsLen; y++){
					newArray[x] = items[y]
					x++
				}
			}
			lol = true
		}else{
			newArray[x] = array[arrPos] 
			x++
			arrPos++
		}
	}
	// arreglar lenght del array original y añadir items(si hay)
	// debugger
	for(var i = 0; i<array.length;i++){
		array[i] = newArray[i]
	}

	for(var x = delCount; x>0; x--){
		delete array[array.length-1];
		array.length--
	}
	// debugger
	console.log(result);
	console.log(array);

    return result;
};
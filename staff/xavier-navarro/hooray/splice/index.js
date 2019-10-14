/**
 * SPLICE
 * Changes the contents of an hooray by removing or replacing
 *  existing elements and/or adding new elements in place.
 * 
 * @param {Number} start Index for starting position.
 * @param {Number} delCount Index for the last position.
 * @param {*} items Index for the last position.
 * 
 * @returns {Hooray} An hooray containing the deleted elements.
 * If only one element is removed, an hooray of one element is returned.
 *  If no elements are removed, an empty hooray is returned.
 */

Hooray.prototype.splice = function(start, delCount) { 
	var result = new Hooray; // nuevo hooray con los elementos eliminados
	var newHooray = []; // introducir nuevos valores del hooray original
	var x = 0; // iniciar el bucle y recorrer el hooray
	var arrPos = 0; // indice para colocar los elementos correctamente
	var itemsLen; // longitud de los items a introducir
	var items = []; // items a introducir
	var finalLength;
	if(arguments.length === 1){ // si solo se introduce un parámetro numérico 
		delCount = this.length-start;
	} else if(start < 0){ // si start es negativo
		itemsLen = arguments.lenght - delCount + start;
		start = this.length+start;
	}else{ // si introducimos todos los parametros 
		itemsLen = arguments.length-2
		var index = 2;
	}
	
	(itemsLen !== 0) ? finalLength = this.length-delCount : finalLength = this.length-delCount+itemsLen;
	
	// guardar items eliminados en el hooray results
	for (var i = 0; i < delCount; i++) {
		result[i] = this[i+start];
		result.length++;
	}
	//bucle para colocar los items correctamente en el new hooray
	var exit = false;
	while (x < finalLength) {
		if(x === start && exit === false){
			for(var y =0; y<delCount; y++){
				arrPos++
			}
			if(itemsLen !== 0){
				for(var y = 0; y<itemsLen; y++){
					newHooray[x] = arguments[index];
					x++;
				}
			}
			exit = true;
		}else{
			newHooray[x] = this[arrPos];
			x++;
			arrPos++;
		}
	}
	// arreglar lenght del hooray original y añadir items(si hay)
	for(var i = 0; i<this.length;i++){
		this[i] = newHooray[i];
	}

	for(var x = delCount; x>0; x--){
		delete this[this.length--];
	}

    return result;
};
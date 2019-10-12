function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.forEach = function(expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	//throw Error('🤡');
	for (var i = 0; i < this.length; i++) 
		expression(this[i], i, this);
};

/**
 * PUSH
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function() { 
	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};
/**
 * SLICE
 * Copies a part of the hooray wthin a new hooray starting from the beginning to end
 *  (end not include). The origal hooray will not be modified.
 * 
 * @param {Number} begin Index for starting position.
 * @param {Number} end Index for the last position.
 * 
 * @returns {Hooray} New hooray with the extracted values.
 */
Hooray.prototype.slice = function(begin, end) { 
    //if (typeof end === 'undefined') end = array.length;
    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?
    
    return result;
};
/**
 * Fill the hooray to iterate with the item that you sent
 * 
 * @param {Hooray} hooray The hooray to iterate.
 * @param {*} newItem Character by which we will replace items from hooray
 * 
 */
Hooray.prototype.fill = function(newItem){
	var start = 0;
	var end = this.length;
	
	switch(arguments.length){
	  case 2:
		start = arguments[1];
		break;
	  case 3:
		start = arguments[1];
		end = arguments[2];
		break;
	  default:
		  if (arguments.length < 1 ) newItem = undefined;
		break;
	}

	for(var i = start; i < end; i++){
		this[i] = newItem;
	  }  
	  
  };	

  Hooray.prototype.splice = function(start, delCount) { 
    //if (typeof end === 'undefined') end = array.length;
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	var result = new Hooray; // nuevo hooray con los elementos eliminados
	var newHooray = []; // introducir nuevos valores del hooray original
	var x = 0; // iniciar el bucle y recorrer el hooray
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
		delCount = this.length-start;
		itemsLen = this.length-start;
	} else if(start < 0){ // si start es negativo
		itemsLen = arguments.lenght - delCount + start;
		start = this.length+start;
	}else{ // si introducimos todos los parametros 
		itemsLen = arguments.length-2
		var index = 2;
	}
	
	// extracción de items de arguments y guardarlos en var items
	if(itemsLen !== 0){
		var finalLength = this.length-delCount;
		// ADD ['Jan','March']
		for(var y = 0; y<itemsLen; y++){
			items[y] = arguments[index];
			index++;
		}
	}else {
		var finalLength = this.length-delCount+itemsLen;
	}
	// guardar items eliminados en el hooray results
	for (var i = 0; i < delCount; i++) {
		result[i] = this[i+start];
		result.length++;
	}
	//bucle para colocar los items correctamente en el new hooray
	var lol = false;
	while (x < finalLength) {
		if(x === start && lol === false){
			for(var y =0; y<delCount; y++){
				arrPos++
			}
			if(itemsLen !== 0){
				for(var y = 0; y<itemsLen; y++){
					newHooray[x] = items[y]
					x++
				}
			}
			lol = true
		}else{
			newHooray[x] = this[arrPos] 
			x++
			arrPos++
		}
	}
	// arreglar lenght del hooray original y añadir items(si hay)
	// debugger
	for(var i = 0; i<this.length;i++){
		this[i] = newHooray[i]
	}

	for(var x = delCount; x>0; x--){
		delete this[this.length-1];
		this.length--
	}
	// debugger
	console.log(result);
	console.log(this);

    return result;
};

/**
* check if ALL the elements of the array accomplish a condition.
*
* @param {Hooray} hooray The array we check.
* @param {function} function The function that gives the condition.
* @returns {boolean} True if ALL the elements accomplish the condition, else, false.
*/
Hooray.prototype.every = function (expression) {
	// if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	for (let i = 0; i < this.length; i++) {
		if (!expression(this[i])) return false;
	}
	return true;
 };
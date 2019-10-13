function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * FOREACH Iterates the current hooray and evaluates an expression on each item.
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
 * PUSH Pushes a variable number of items into this hooray.
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
 * MAP. Iterates on every item of a hooray and manipuates it according to a function.
 * It returns the new hooray with items modified.
 * 
 * @param {Hooray} hooray The to get items.
 * @param {Function} function that specifies what to do with the array items (add 2)
 * 
 * @returns {Hooray} The new hooray.

 * @throws {TypeError} If Function is not a function.
 */

Hooray.prototype.map = function(expression) { 
  
    if(!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
    
    var result = new Hooray();
    for (i = 0; i < this.length; i++) {
		result[i] = expression(this[i]);
		result.length++;
    }
    return result;
}

/**
 * Concat array with arguments and return a new array adding arguments.
 * 
 * @param {Array} array The array to concatenate elements to newArray
 * 
 * @returns {Array} newArray contains: array + arguments.
 * 
 */
Hooray.prototype.concat = function() { 	
	var hooray = new Hooray();	
	
    for (var i = 0; i < this.length; i++){
        hooray[i] = this[i];
    }
		
    for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] instanceof Array) {
			for (var j = 0; j < arguments[i].length; j++){
				hooray[i] = arguments[i][j];
				++i
			}
		} else {
			hooray[i] = arguments[i];
			++i			
		}
	}      
	hooray.length = i;
    return hooray;
};


/**
 * INCLUDES Iterates determines whether an hooray includes a certain value among its entries,
    returning true or false as appropriate.
 * 
 * @param {*} element to find in hooray.
 * 
 * 
 * @returns true or false.
 * 
 */

Hooray.prototype.includes = function(value, index) {
    
    if(!index) index = 0;

	for(var i = index; i < this.length; i++) {
		
		if(this[i] === value) return true;
    }
    return false;
}

/**
 * SHIFT Delete the first element of object
 * 
 * @returns {*} return element deleted.
 */
Hooray.prototype.shift = function() { 
	var elementDeleted = this[0]
	for (var i = 1; i < this.length; i++) {
		this[i-1] = this[i]; 
	}
	delete this[this.length-1]  
    this.length = this.length - 1;
    return elementDeleted;
};

/**
 * SLICE Copies a part of the hooray within a new array starting from beginning
 *  to end (end not included). The original array will not be modified.
 * 
 * @param {number} begin Index for starting position 
 * 
 * @param {number} end Indez for ending position 
 * 
 * @returns {Hooray} New hooray with the extracted values 
 */



Hooray.prototype.slice = function(begin, end) {
	
    var result = []; 

    begin = begin || 0;
    begin = begin < 0? this.length + begin : begin;
    end = end || this.length;
    end = end < 0? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    
    return result;
}


/**
 * SPLICE Changes the contents of an hooray by removing or replacing
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

	for(var i = 0; i<this.length;i++){
		this[i] = newHooray[i]
	}

	for(var x = delCount; x>0; x--){
		delete this[this.length-1];
		this.length--
	}

	console.log(result);
	console.log(this);

    return result;
};
/**
 * JOIN 
 * 
 * @param {Hooray} to change
 *  * 
 * 
 */



Hooray.prototype.join = function(separator){

    if(separator === undefined)
        separator =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + separator;
	} 
    return result;
}

/**
 * FILL the hooray to iterate with the item that you sent
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


   /**
 * EVERY Checks if all the elements in the array pass the condition implemented by the given function
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * 
 * @param {Function} expression The expression to evaluate in each item of the array.
 * 
 * @returns {boolean} returns true if all the elements in the array pass the condition; otherwise, false.
 * 
 */

Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
	
    for (let i = 0; i < this.length; i++) {
        if (!expression(this[i])) return false;
    }
    return true;
};


  /**
 * POP eliminates last item of Hooray.
 * 
 * 
 */
Hooray.prototype.pop = function (){
    if (this.length === 0) { return undefined };
	var elem = this[this.length -1];
	
	delete this[this.length - 1];
	this.length--;
    return elem;
}

  /**
 * UNSHIFT  
 * 
 */
Hooray.prototype.unshift = function(){
	var arr = [];
    for(var i = 0; i < array.length; i++){
        arr[i] = array[i];
    }
    var contador = 0;
    for(var i = 1; i<arguments.length ;i++){
        array[contador] = arguments[i];
        contador++;
    }
    for(var j = 0; j<arr.length; j++ ){
        array[contador] = arr[j];
        contador++;
    }
    return this.length;
}


 /**
 * REVERSE.
 * 
 */

Hooray.prototype.reverse = function() {

    var firstIndex = 0;
    var endIndex = this.length - 1; 
  
      if(endIndex > firstIndex){
        for(var i = 0; i < endIndex; i ++)
          {var temp = this[firstIndex];
          this[firstIndex] = this[endIndex];
          this[endIndex] = temp;
          firstIndex++;
          endIndex--;
          }
      }

    return this;
};
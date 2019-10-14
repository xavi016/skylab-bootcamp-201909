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

/**
* check if ALL the elements of the array accomplish a condition.
*
* @param {Hooray} hooray The array we check.
* @param {function} function The function that gives the condition.
* @returns {boolean} True if ALL the elements accomplish the condition, else, false.
*/
Hooray.prototype.every = function (expression) {
	if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

	for (let i = 0; i < this.length; i++) {
		if (!expression(this[i])) return false;
	}
	return true;
 };

 /**
 * Concat hooray with arguments and return a new hooray with all hoorays elements  + arguments
 * 
 * @param {*} horray The Hooray to concatenate elements to newArray
 * @returns {*} newHooray contains: hooray + arguments.
 * 
 */
Hooray.prototype.concat = function() {
	var aux = new Hooray();
	 
	 for (var i=0; i<this.length; i++) {
		 aux[i]=this[i];
	 }
	 aux.length = this.length;
	 for (var i = 0; i < arguments.length; i++) {
		 for (var j = 0; j < arguments[i].length; j++) {
			 aux[aux.length++] = arguments[i][j];
		 }
	 }
	 
	 return aux;
}

/**
 * The first hooray element becomes the last, and the last hooray element becomes the first.
 * 
 * @returns {*} newHooray that transposes the elements
 * 
 */
Hooray.prototype.reverse = function() {
    var firstIndex = 0;
    var endIndex = this.length-1; 
      if(endIndex > firstIndex){
        for(var i = 0; i < endIndex; i ++) {
			var temp = this[firstIndex];
			this[firstIndex] = this[endIndex];
			this[endIndex] = temp;
			firstIndex++;
			endIndex--;
        }
      }

    return this;
};

function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * Return a string separated by the character it receives
 * 
 * @param {Hooray} hooray The hooray to iterate.
 * @param {Character} char Character by which we will separate the hooray
 * 
 * @returns {Hooray} Return a string separated by the character it receives
 */
Hooray.prototype.join = function(char){
    if(char === undefined) char =',';
    var result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + char;
	} 
    return result;
}

/**
 * Create a new hooray with all the elements that accomplish the condition of the function given. 
 * 
 * @param {Hooray} hooray
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {Array} newHoor with the items of the first hooray that accomplished the test. 
 * */

Hooray.prototype.filter = function (expression) {
	if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');
	var newHooray = new Hooray;
	for (i = 0; i < this.length; i++) {
		if (expression(this[i])) {
			newHooray[newHooray.length] = this[i];
			newHooray.length++;
		}
	}
	return newHooray;
 };

/**
 * Removes the last element from an array and returns that element. This method changes the length of the array.
 * 
 * @param {Array} array The array to remove elements to.
 * 
 * @returns {Item} Return the removed item
 */
 Hooray.prototype.pop = function (){
    if (this.length === 0) return undefined;
	var aux = this[this.length -1];
	
	delete this[this.length - 1];
	this.length--;
    return aux;
}

/**
 * Check if at least one element of the hooray fulfill the condition implemented by the function provided.
 * @param {Function} expression we use to test the elements. 
 * 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 

Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true ;
        }
    } 
    return false;
};

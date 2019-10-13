function Hooray() {
    for (var i = 0; i  < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
}

/**
 * FOR-EACH.
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
 * PUSH.
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * 
 * @returns {number} The new length of the hooray.
 */

Hooray.prototype.push = function() { 

	for (var i = 0; i < arguments.length; i++)
		this[this.length++] = arguments[i];

	return this.length;
};



/**
 * FIND-INDEX
 * Find the first element that accomplish a condition and returns its index. 
 * 
 * @param {Hooray} hooray we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} index number of the element found. 
 * */

Hooray.prototype.findIndex = function(expression) { 
if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");
    
for (let i = 0; i < this.length; i++){
        if(expression(this[i])) {
            return i;
        }  
    } 
     return -1;  
} 
    
/**
 * FILTER.
 * Create a new hooray with the elements that pass the condition. 
 * 
 * @param {Hooray} hooray we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {Hooray} the new hooray with the condition applied. 
 * */

Hooray.prototype.filter = function (expression) {

    if (!(this instanceof Hooray)) throw TypeError(this + ' is not a hooray');
    if (!(expression instanceof Function)) throw TypeError(expression + ' is not a function');

    var newHooray = new Hooray;
        for (i = 0; i < this.length; i++) {
        if(expression(this[i])) {
        newHooray[newHooray.length] = this[i];
        newHooray.length++;
        }
    }
    return newHooray;
}

  /**
 * EVERY.
 * Checks if all the elements in the hooray accomplish the condition given. 
 * 
 * @param {Hooray} hooray initial. 
 * 
 * @param {Function} expression The condition to evaluate the array
 * 
 * @returns {boolean} returns true if all the elements accomplish; if not, returns false;
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
 * MAP.
 * Iterates through all the items of a Hooray and change them according to an expression.
 * Returns a new hooray with the items modified.
 * 
 * @param {Hooray} hooray where it takes the initial items. 
 * @param {Function} function that apply changes. 
 * 
 * @returns {Hooray} A ner hooray with the modifications done. 

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
 * FILL.
 * Fill the hooray to iterate with the items that you sent.
 * 
 * @param {Hooray} hooray The initial hooray.
 * @param {*} newItem Character we will use to replace items from hooray.
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
 * CONCAT.
 * Concatenate an initial hooray with other arguments and returns a new hooray with all the elements. 
 * 
 * @param {array} Array The initial array given. 
 * @param {*} other arguments given. 
 * 
 * 
 * @returns {Hooray} new Hooray that contains initial Array and the elements given, all concatenated. 
 * 
 */
Hooray.prototype.concat = function() { 	
	var newHooray = new Hooray();	
	
    for (var y = 0; y < this.length; y++){
        newHooray[y] = this[y];
    }
		
    for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] instanceof Array) {
			for (var j = 0; j < arguments[i].length; j++){
				newHooray[y] = arguments[i][j];
				++y
			}
		} else {
			newHooray[y] = arguments[i];
			++y			
		}
	}      
	newHooray.length = y;
    return newHooray;
    
};
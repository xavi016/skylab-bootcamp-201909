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
 * Deletes the first item of an hooray and shifts each item into a lower index.
 * Returns de removed item of the hooray.
 * 
 * 
 * @returns {any} The item deleted from the hooray.
 */
Hooray.prototype.shift = function  () {

    if (this.length===0) return undefined;
    var itemShifted = this[0];

    for (var i=1; i<this.length; i++) {
        this[i-1]=this[i];
    }
    this.length--;
    return itemShifted;
}

/**
 * Add a new item at beggining of an array and unshifts each item into a higher index.
 * 
 * @param {any} item The item will be added in the array.
 */
Hooray.prototype.unshift = function () {

    for (var i=((this.length-1)+(arguments.length)); i>0; i--) {
        this[i]=this[i-(arguments.length)];
    }
    for (var i=0; i<(arguments.length); i++) {
        this[i]=arguments[i];
    }
	this.length += arguments.length;
    return this.length;
}

/**
 * Deletes the last item of an array and returns de deleted item.
 *  
 * @returns {any} returns de last item deleted on the array
 */
Hooray.prototype.pop = function () {
    
    if (this.length===0) return undefined;

    var result = this[this.length-1];
    this.length-=1;
    
    return result;
} 

/**
 * Converts an Array into a String.
 * 
 * @param {String} separator Separator between each element. 
 *                           If an separator is omited, as default separator is a coma.
 */
Hooray.prototype.join = function () {
        
    var separator = arguments[0] || ",";
    var string='';

    for (var i=0; i<this.length; i++) {
        string+=this[i];
        if (i<this.length-1) string+=separator;
    }
    return string;
}

/**
 * Aplies an expresion to each item of an array and saves the result on a new array.
 * 
 * @param {Array} array The array we will iterate.
 * @param {Function} expression The expression that will be applied to each array item.
 * 
 * @returns {Array} a new array with the results of apply the expression into Array
 */
Hooray.prototype.map = function (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');    
    
    var newHooray = new Hooray ();
    for (var i=0; i<this.length; i++) {
		newHooray[newHooray.length++]=expression(this[i]);
    }

    return newHooray;
}

/**
 * concats two or more Hoorays on a new array. 
 * First Hooray concatenated it's the hooray who call's the method. If no more Hoorays are sent, only
 * the calling Hooray is returned.
 * Concat doesn't modify the original Hoorays.
 * 
 * @param {Hooray} this - the Hooray that call's the concat and will be contenated on the Hooray.
 * @param {*} item - Required: the Hooray(s) to be concatenated in the params order on the new Hooray.
 */
Hooray.prototype.concat = function () {
	
    var result= new Hooray();  
	
	for (var i=0; i<this.length; i++){
        result[result.length++]=this[i];
    }

    for (var i=0; i<arguments.length; i++) {
        if (arguments[i] instanceof Hooray) {
            for (var j=0; j<arguments[i].length; j++) {
                result[result.length++]=arguments[i][j];
            }
        } else result[result.length++]=arguments[i];
    }
    return result;
}


/**
 * Evaluate if all items accomplish the expression sent.
 * 
 * @param {Function} expression The expression to evaluate on every item in the Hooray.
 * 
 * @returns {Boolean} True when ALL itmes acomplish expression || False when not.
 * 
 * @throws {TypeError} If expression is not a function.
 */
Hooray.prototype.every = function  (expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    
    for (i=0; i<this.length; i++) {
        if (!(expression(this[i]))) return false;
    }
    return true;
}

Hooray.prototype.fill = function (item) {

    var start = arguments[1] || 0;
    start = start < 0 ? this.length + start : start;
    var end = arguments[2] || this.length;
    end = end < 0 ? this.length + end : end;

    if (end > this.length) end = this.length;    

    for( var i=start; i<end; i++){
        this[i]=item;
    }
}
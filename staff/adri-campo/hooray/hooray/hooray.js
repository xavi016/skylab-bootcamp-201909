function Hooray() {
    for (var i = 0; i < arguments.length; i++)
        this[i] = arguments[i];

    this.length = arguments.length;
};

/**
 * Iterates the current hooray and evaluates an expression on each item.
 * 
 * @param {Function} expression The expression to evaluate in each item of the hooray.
 * @throws {TypeError} If expression is not a function.
 */

Hooray.prototype.forEach = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    //throw Error('🤡');
    for (var i = 0; i < this.length; i++)
        expression(this[i], i, this);
};

/**
 * Pushes a variable number of items into this hooray.
 * 
 * @param {...any} item The item (or items) to push.
 * @returns {number} The new lenth of the hooray.
 */
Hooray.prototype.push = function () {
    for (var i = 0; i < arguments.length; i++)
        this[this.length++] = arguments[i];

    return this.length;
};


/**
 * Copies a part of the hooray within a new hooray starting from beginning
 * to end (end not included). The original hooray will not be modified.
 *
 * @param {number} begin  Item for the start position
 * @param {number} end  Item for the end position
 * @returns {Hooray} New hooray with the extracted values
 */

Hooray.prototype.slice = function (begin, end) {
   // if (!this) throw Error("undefined is not defined");
    if (!(this instanceof Hooray)) throw Error("is not a Hooray");

    //if (typeof end === 'undefined') end = hooray.length;

    var result = []; // {}; // WTF?

    begin = begin || 0;
    begin = begin < 0 ? this.length + begin : begin;
    end = end || this.length;
    end = end < 0 ? this.length + end : end;

    for (var i = begin; i < end; i++)
        result[i - begin] = this[i];

    //result.length = end - begin; // WTF?

    return result;
};


/**
 * Deletes the last item of an array and returns de deleted item.
 * @param {Hooray} hooray we want to test.
 * @returns {number} returns de last item deleted on the array
 */

Hooray.prototype.pop = function () {

    if (this.length === 0) return undefined;

    var result = this[this.length - 1];
    this.length--;

    return result;
}


/**
 * Find the first element that accomplish a condition and returns its index. 
 * 
 * @param {Hooray} hooray we want to test.
 * @param {Function} expression that contains the condition. 
 * @returns {element} the index of the element found. 
 * */

Hooray.prototype.findIndex = function (expression) {
    if (!(this instanceof Hooray)) throw TypeError(this + " is not defined");
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    for (let i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            return i;
        }
    }
    return -1;
}


/**
 * Create a new array with all the elements that accomplish the condition of the function given.
 * 
 * @param {Function} expression we use to test the elements. 
 * @returns {Array} newArr with the items of the first array that accomplished the test.
 */

// function checkCondition (item){
//     return item < 25

// }

Hooray.prototype.filter = function (expression) {
    if (!(expression instanceof Function)) throw TypeError(expression + " is not a function");

    var newHooray = new Hooray;
    for (i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            newHooray[newHooray.length] = this[i];
            newHooray.length++
        }
    }
    return newHooray

};

/**
 * Removes the last element of an array, and returns that element. This method change the lenght of the array.
 * 
 * @param {Hooray} Hooray to pop the value from
 * @returns {Function} expression we use to test the elements.
 * 
 */

Hooray.prototype.map = function (expression) {
    if (typeof expression !== "function") throw TypeError(expression + " is not a function")

    var newHooray = new Hooray;

    for (var i = 0; i < this.length; i++) {
        newHooray[newHooray.length] = expression(this[i])
        newHooray.length++
    }
    return newHooray

};

// var arrayexample = [2,3,5,6];

// function modify (item) {
//     return item * 2
// };

// console.log(map,modify);

/**
 * 
 * The function checks if at least there is one argument in the array that 
 * accomplish the implemented condition for the function that we introduced. 
 *
 * @param {Hooray} hooray The hooray the some should evaluate
 * @param {Function} expression we use to test the elements. 
 * @returns {boolean} true if any of the elements match with the condition or false if any of them match.
 *  
 */ 

Hooray.prototype.some = function(expression) {  
    if (typeof expression !== "function") throw new TypeError(expression + " is not a function");

    for (i=0; i< this.length; i++){
        if (expression(this[i])){
            return true 
        }
    } 
    return false
};

/**
 * Fills with an input from an start index to and end. 
 * 
 * @param {Array} title The test suite title
 * @param {Expression} expression The tests to be run
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
 * Checks if all the elements in the array pass the condition implemented by the given function
 * 
 * @param {Array} array The array to evaluate elements to the condition given 
 * @param {Function} expression The expression to evaluate in each item of the array.
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
 * It shows you all the items merged using a string value that is given at the beginning.
 * If no value is given, then the function gives you ",".
 * 
 * @param {Array} array 
 * @param {String} String value you give to merge the items
 */

Hooray.prototype.join = function(hongda){

    if(hongda === undefined)
        hongda =',';
    result = '';
    for (var i = 0; i < this.length; i++) {
        if (i === this.length - 1)
            result += this[i];
        else
            result +=this[i] + hongda;
	} 
    return result;
}

/**
 * Look for an element & returns the first index (if not found > return -1)
 * 
 * @param {array} The array to be searched with element
 * @param {Function} expression The expression to evaluate in each item of the array.
 * @param {item} item what you want to check inside the array 
 */

Hooray.prototype.indexOf = function(value, startIndex){
    // if (!(this instanceof Hooray)) throw TypeError(this + " is not an array");
    if (!(this instanceof Hooray)) throw TypeError(null + " is not an array");
    if (arguments.length > 3) throw Error('too many arguments');
    !startIndex ? startIndex = 0 : parseInt(startIndex);
 
    for (var i = startIndex; i < this.length; i++) {
     if (this[i] === value) return i;
   }
   return -1;
 };
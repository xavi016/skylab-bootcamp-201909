function Hooray() {
  for (var i = 0; i < arguments.length; i++)
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
 * Returns the index of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First index that matches the condition
 * @throws {TypeError}    If array is not an array or function is not a function
 */
Hooray.prototype.findIndex = function(fn) {
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for (var i = 0; i < this.length; i++)
    if (fn(this[i])) return i;

  return -1;
};

/**
 * Returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.
 * @param  {Array} array     Base array
 * @param  {Number} indexIni Initial index to select the portion of the array
 * @param  {Number} indexEnd End index to select the portion of the array
 * @return {Array}           A copy of the portion of the array
 * @throws {TypeError}    If array is not an array
 */
Hooray.prototype.slice = function(indexIni, indexEnd) {
  //if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
  var newArray = [];
  counter = 0;

  indexIni = indexIni || 0;
  indexIni = indexIni < 0 ? this.length + indexIni : indexIni;
  indexEnd = indexEnd || this.length;
  indexEnd = indexEnd < 0 ? this.length + indexEnd : indexEnd;

  for (var i = indexIni; i < indexEnd; i++) {
    newArray[counter++] = this[i];
    // newArray[i - indexIni] = array[i] // no hace falta declarar counter
    //counter++;
  }
  return newArray;
}

/**
 * Creates a new array with the results of calling a provided function on every element in the calling array.
 * @param  {Array}   array Array to change
 * @param  {Function} fn    Function that produces an element of the new Array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
Hooray.prototype.map = function(fn) {
  if (this.length === 0) return this;
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  var newArray = [];

  for(var i = 0; i < this.length; i++)
    newArray[i] = fn(this[i]);

  return newArray;
}

/**
 * Modifies all the elements of an array from a start index (default zero) to an end index (default array length) with a static value.
 * @param  {Array} array    Array to be modified
 * @param  {String, Number} item     Item to modify the array with
 * @param  {Number} indexIni Index to start to modify
 * @param  {NUmber} indexEnd Index to end to modify
 * @return {[type]}          The modified array
 * @throws {TypeError} If array is not an array, item is not a string or a number, and indexIni and indexEnd are not a number.
 */
Hooray.prototype.fill = function(item, indexIni, indexEnd) {
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');

  if (indexIni !== undefined && typeof indexIni !== 'number') throw TypeError('index should be a number');
  if (indexEnd !== undefined && typeof indexEnd !== 'number') throw TypeError('index should be a number');

  if (!indexEnd) indexEnd = this.length - 1;
  else if (indexEnd) indexEnd = indexEnd - 1;

  if (!item) item = undefined;
  if (!indexIni) indexIni = 0;

  for (var i = indexIni; i <= indexEnd; i++) {
    this[i] = item;
  };
  return this;
}

/**
 * Returns the value of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First number that matches the condition
 * @throws {TypeError}    If array is not an array or function is not a function
 */
Hooray.prototype.find = function(fn) {
  if(!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for(var i = 0; i < this.length; i++)
    if(fn(this[i])) return this[i];

  return undefined;
}

/**
 * Tests whether at least one element in the array passes the test implemented by the provided function.
 * @param  {Array}   array   Array to pass the function
 * @param  {Function} fn     Function to be passed by the array
 * @return {Boolean}         Boolean value
 * @throws {TypeError} If array is not an array, or function is not a function
 */
Hooray.prototype.some = function(fn) {
 if(!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for(var i = 0; i < this.length; i++)
    if(fn(this[i])) return true;

  return false;
}

/**
 * Tests whether all elements in the array pass the test implemented by the provided function.
 * @param  {Array}   array  Array to be verified
 * @param  {Function} fn    Function with the condition to pass
 * @return {Boolean}        A boolean value
 * @throws {TypeError}    If array is not an array or function is not a function
 */
Hooray.prototype.every = function(fn) {
  if(!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  var counter = 0;
  for(var i = 0; i < this.length; i++)
    if(fn(this[i]))
      counter++; debugger

  return counter === this.length ? true : false;
}

/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @param  {Array} array Array to search in
 * @param  {String, Number} item  Item to be searched in the array
 * @return {Number}       First index where the item has been found.
 * @throws {TypeError}    If array is not an array
 */
Hooray.prototype.indexOf = function(item) {
  if (!(typeof item === 'number' || typeof item === 'string')) throw TypeError(typeof item + ' is not a string or a number');

  for (var i = 0; i < this.length; i++)
    if (this[i] === item) return i;

  return -1;
}

/**
 * Reverses the order of the elements in an array and returns the new array
 * @param  {[Array]} array The array to reverse
 * @return {[Array]}       The array reversed
 * @throws {TypeError}    If array is not an array
 */
Hooray.prototype.reverse = function(array) {
  var newArray = [];
  counter = 0;

  for(var i = this.length-1; i >= 0; i--)
    newArray[counter++] = this[i];
    // counter++;

  for(var i = 0; i < this.length; i++)
    this[i] = newArray[i]

  return this;
}

/**
 * Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 * @param  {Array} array Array to search on
 * @param  {String, Number} item  Item to find in the array
 * @return {Boolean}       A boolean if found or not
 * @throws {TypeError} If array is not an array, item is not a string, a number or a boolean
 */
Hooray.prototype.includes = function(item) {
  for(var i = 0; i < this.length; i++) {
    if (this[i] === item) return true;
  }
  return false;
}

/**
 * creates a new array with all elements that pass the test implemented by the provided function.
 * @param  {Array}   array Array to change
 * @param  {Function} fn    Function to pass to the array
 * @return {Array}         A new array with each element being the result of the callback function.
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
Hooray.prototype.filter = function(fn) {
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  let newArray = [];
  let counter = 0;

  for(var i = 0; i < this.length; i++) {
    if (fn(this[i])) newArray[counter++] = this[i]
  //counter++
  }

  return newArray;
}

/**
 * Is used to merge two or more arrays without modifying the original array.
 * @param  {Array}  One or more rrays to merge
 * @return {Array} New merged array
 * @throws {TypeError} If array is not an array, or expression is not a function.
 */
Hooray.prototype.concat = function() {
  let newArray = [];

  for (let i in arguments) {
    if(!(arguments[i] instanceof Array)) {
      newArray[newArray.length] = arguments[i]
    } else {
      for(let j in arguments[i]) {
        newArray[newArray.length] = arguments[i][j];
      }
    }
  }
  return newArray;
}
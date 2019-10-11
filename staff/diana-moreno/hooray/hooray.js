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
 * Returns the index of the first element in the provided array that satisfies the provided testing function.
 * @param  {Array}   array Array to find in
 * @param  {Function} fn   Function that returns a condition
 * @return {Number}        First index that matches the condition
 * @throws {TypeError}    If array is not an array or function is not a function
 */
Hooray.prototype.findIndex = function(fn) {
  if (!(this instanceof Hooray)) throw TypeError('Data type is not a hooray')
  if (!(fn instanceof Function)) throw TypeError(fn + ' is not a function');

  for (let i = 0; i < this.length; i++)
    if (fn(this[i])) return i;

  return -1;
}
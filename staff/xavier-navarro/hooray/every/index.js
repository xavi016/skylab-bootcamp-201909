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
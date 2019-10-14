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
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
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
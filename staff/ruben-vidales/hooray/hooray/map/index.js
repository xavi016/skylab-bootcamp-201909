/**
 * 
 */
Hooray.prototype.map = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var newHooray = new Hooray();
    for (var i = 0; i < this.length; i++) {
        newHooray[i] = expression(this[i]);
        newHooray.length++;
    }
    return newHooray;
}
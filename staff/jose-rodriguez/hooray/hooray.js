function Hooray() {
    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i];
    }
    this.length = arguments.length;
}


Hooray.prototype.includes = function (elem, start) {
    
    for (var i = start || 0; i < this.length; i++) {
        if (elem === this[i]) return true;
    } return false;
}

Hooray.prototype.concat = function () {
    var newHooray = new Hooray();

    for (var i = 0; i < this.length; i++) {
        newHooray[newHooray.length++] = this[i];
    }

    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] instanceof Hooray) {
            debugger
            for (var j = 0; j < arguments[i].length; j++) {
                newHooray[newHooray.length++] = arguments[i][j];
            }
        } else {
            debugger
            newHooray[newHooray.length++] = arguments[i];
        }
    } return newHooray;
}


Hooray.prototype.every = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    for (var i = 0; i < this.length; i++) {
        if (!(expression(this[i]))) {
            return false;
        }
    } return true;
}
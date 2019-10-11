function Hooray() {
    for (var i = 0; i < arguments.length; i++){
        this[i] = arguments[i];
    }
    this.length = arguments.length;
}


Hooray.prototype.includes = function (elem,start) {
    for (var i = 0 || start; i < Hooray.length; i++) {
        if (elem === Hooray(i)) return true;
    } return false;
}
Hooray.prototype.join = function (separator) {
    var sep = '';
    if (separator === undefined) {
        sep = ',';
    }
    else {
        sep = separator;
    }
    var aux = '';
    if (this.length > 0) {
        for (let i = 0; i < this.length; i++) {
            if (i === this.length - 1) {
                aux += this[i];
            }
            else {
                aux += this[i] + sep;
            }
        }
        return aux;
    }
    else {
        return aux;
    }
};
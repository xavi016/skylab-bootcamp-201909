Hooray.prototype.filter = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux = new Hooray();
    var cont = 0;
    for (let i = 0; i < this.length; i++) {
        if (expression(this[i])) {
            aux[cont] = this[i];
            aux.length++;
            cont++;
        }
    }
    return aux;
}

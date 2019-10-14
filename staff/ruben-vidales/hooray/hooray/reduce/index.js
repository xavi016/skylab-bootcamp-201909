Hooray.prototype.reduce = function (expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');

    var aux = 0;
    for (var i = 0; i < this.length; i++) {
        aux = expression(aux, this[i]);
    }
    //Fix for start
    if (aux[0] === '0') {
        aux = aux.substring(1);
    }
    return aux;
}
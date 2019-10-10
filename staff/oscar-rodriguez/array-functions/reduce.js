function reduce (array, expression) {

    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');

    var result=array[0];
    for (i=1; i<array.length; i++) {
        result=expresion(array[i]);
    }
}
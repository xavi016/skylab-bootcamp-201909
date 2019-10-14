function indexOf (array, item) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');
    var start = arguments.length > 2 ? arguments[2] : 0;
    if (isNaN(start)) return -1;

    for (i=start; i<array.length; i++) {
        if (array[i]===item) return i;
    }
    return -1;
}
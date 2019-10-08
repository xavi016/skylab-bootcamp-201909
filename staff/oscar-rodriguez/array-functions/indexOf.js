function indexOf (array, item) {

    var start = arguments.length > 2 ? arguments[2] : 0;
    for (i=start; i<array.length; i++) {
        if (expression(array[i])) return i;
    }
    return -1;
}
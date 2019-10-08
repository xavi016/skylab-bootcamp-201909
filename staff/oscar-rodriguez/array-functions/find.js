function find (array, expression) {

    for (i=0; i<array.length; i++) {
        if (expression(array[i])) return array [i];
    }
    return undefined;
}
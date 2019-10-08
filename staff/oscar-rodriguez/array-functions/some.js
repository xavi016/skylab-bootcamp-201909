function some (array, expression) {

    for (i=0; i<array.length; i++) {
        if (expression(array[i])) return true;
    }
    return false;
}
function reduce (array, expression) {
    var result=array[0];
    for (i=1; i<array.length; i++) {
        result=expresion(array[i]);
    }
}
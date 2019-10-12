function some(array,funcion) { 
    var isElement = false;
    for (i = 0; i < array.length; i++) {
        if(funcion(array[i])) {
        isElement = true;
    }
}
    return isElement
}
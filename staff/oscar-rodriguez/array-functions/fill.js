
function fill (array, item) {
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    var start = arguments.length > 2 ? arguments[2] : 0;
    var end = arguments.length > 3 ? arguments[3] : arguments[0].length;
    if (end > arguments[0].length) end = arguments[0].length;
    
    for( var i=start; i<end; i++){
        array[i]=item;
    }
}
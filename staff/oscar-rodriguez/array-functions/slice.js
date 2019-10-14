function slice (array) {

    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    var start = arguments.length > 1 ? arguments[1] : 0;
    var end = arguments.length > 2 ? arguments[2] : arguments[0].length;

    var newArray = [];

    if (start > end) return newArray;


    if ((start < 0) && (end < 0)) {
         start=array.length+start;
         end=array.length+end;
    } else if ((start < 0) || (end < 0)) {
            return newArray;
    }

    for (var i=start; i<end; i++) {
        newArray[i-start]=array[i];
    }
    return newArray;
}


function fill (array,item) {
    var start = arguments.length > 2 ? arguments[2] : 0;
    var end = arguments.length > 3 ? arguments[3] : array.length;

    for (var i = start; i < end; i++) {
        array[i] = item;
    } return array;
}
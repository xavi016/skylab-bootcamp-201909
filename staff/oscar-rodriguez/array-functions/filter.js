function filter (array, expression) {
    if (typeof expression !== 'function') throw TypeError(expression + ' is not a function');
    if (!(array instanceof Array)) throw TypeError (array + ' is not an array');

    var results = [];

    if (array.length === 0 ) return results;

    for (i=0; i<array.length; i++) {
        if (expression(array[i])) {
            debugger
            results[results.length]=array[i];
        }
    }
    return results;
}

var arr= [1,2,3,4,5,6,7,8];

var res=filter(arr, function (item) { return item > 3; });
function slice(array, begin, end) {
    var result = [];

    for (var i = begin; i < end; i++) {
        result[i-begin] = array[i];
        
    }
    // result.length = end-begin;
}
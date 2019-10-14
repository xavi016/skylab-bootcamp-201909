function includes(array, find_value, param_start) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var start = param_start ? param_start : 0;

    for (let i = start; i < array.length; i++) {
            if (array[i] === find_value) {
                return true;
            }
    }
    return false;
}

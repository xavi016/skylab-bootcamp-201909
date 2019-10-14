function indexOf(array, searchedElement, from) {
    if (!(array instanceof Array)) throw TypeError(array + ' is not an array');
    
    var start = from ? from : 0;
    for (let i = start; i < array.length; i++) {
        if(searchedElement == array[i]){
            return i;
        }
    }
    return -1;
}
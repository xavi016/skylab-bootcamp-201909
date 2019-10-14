function indexOf(array, item) {
    var newArray = []
    for(i = 0; i < array.length; i++) {
        if(array[i] === item) {
            newArray[newArray.length] = i;
        }
    }
    if(newArray.length === 0) {
        return -1;
    }
    else {
        return newArray[0];
    }
 }

function includes(array,item) { 
    var isElement = false;
    for (i = 0; i < array.length; i++) {
        if(item === array[i]) {
        isElement = true;
        }
    }   
    return isElement
}

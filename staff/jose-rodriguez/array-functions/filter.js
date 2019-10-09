

function filter(array,expression) {
    var newArray = [];
    for(var i=0; i<array.length; i++){
        if(expression(array[i])) {
            newArray[newArray.length] = array[i];
        }
    } return newArray;
}
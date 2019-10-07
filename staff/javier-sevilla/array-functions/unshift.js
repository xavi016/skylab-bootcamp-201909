function unshift(array) { 	
    //console.log(arguments)
    var newArray = []; 
    var elements = arguments.length;

    for (var i = 1; i < arguments.length; i++) {
        newArray[i -1] = arguments[i];
    }
    console.log(i)
    for (var j = 0; j < array.length; j++) {
        newArray[i + j] = array[j];
    }

    for (var x = 0; x < newArray.length; x++) {
        array[x] = newArray[]
    }
    return elements;
}
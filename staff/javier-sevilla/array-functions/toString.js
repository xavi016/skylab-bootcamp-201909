function toString(array) { 	
    //console.log(arguments)
    if (!(array instanceof Array)) throw TypeError(array + ' is no an array');
    
    var charString = ""; 

    for (var i = 0; i < array.length; i++) {
        charString += arguments[i];
    }

    return charString;
}
function sort (array) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    var sorted = false;
    var aux;

    var expresion = arguments.length > 1 ? arguments [1] : (function (a,b) { return b < a ? 1 : -1 });
    
    while (!sorted) {
        sorted = true;
        for (var i=0; i<array.length-1; i++){
            
            if ((expresion(array[i].toString().charCodeAt(0),array[i+1].toString().charCodeAt(0))>0)) {
                aux = array[i+1];
                array[i+1] = array[i];
                array[i] = aux;
                sorted = false;
            }
        }
    }
}
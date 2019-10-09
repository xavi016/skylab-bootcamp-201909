function sort (array) {

    if (!(array instanceof Array)) throw TypeError (array + 'is not an array');
    
    var sorted = false;
    var aux;

    var expresion = arguments.length > 1 ? arguments [1] : (function (a,b) { return b<a? 1:-1 });
    debugger
    while (!sorted) {
        sorted = true;
        for (var i=0; i<array.length-1; i++){
            debugger
            if ((expresion(array[i],array[i+1])>0)) {
                aux = array[i+1];
                array[i+1] = array[i];
                array[i] = aux;
                sorted = false;
            }
        }
    }
}

var arr = [15,4,3,1,8,5];
sort (arr, function (a,b) { return b - a });
console.log(arr);

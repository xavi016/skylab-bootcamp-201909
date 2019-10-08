function sort (array) {
    var sorted = false;
    var aux;
    var expresion = arguments > 1 ? arguments [1] : (function (a,b) { return b < a; });
    while (!sorted) {
        sorted = true;
        for (var i=0; i<array.length-1; i++){
            if (expresion(array[i],array[i+1])) {
                aux = array[i+1];
                array[i+1] = array[i];
                array[i] = aux;
                sorted = false;
            }
        }
    }
}

var arr = [15,4,3,1,8,5];
sort (arr, function (a,b) { return a > b});
console.log(arr);

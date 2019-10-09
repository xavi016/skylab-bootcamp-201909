function sorted(arr){
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if(arr[i] > arr[j]){
                var c = arr[i];
                arr[i] = arr[j];
                arr[j] = c;
            }
        }
    }
    return arr;
}    
var arr = [4, 5, -6, 7, 'M', 'n', 'N', 'm'];
console.log(sorted(arr));
function reduce(array, expression, initialValue) {
  
    if (initialValue || initialValue === 0) {
        var accum = initialValue
        var start = 0
    } else {
        var accum = array[0]
        var start = 1
    }
     
    for (var i = start; i < array.length; i++) {
        accum = expression(accum, array[i])
    }

    return accum

};
  
  
function reducer(accum, initialValue) {
    return accum + initialValue;
};


var arrayNumbers = [1,2,3,4,5];

reduce(arrayNumbers, reducer, 10);


















// variable que acumule los valores de la array
//  
// var allArray = [1, 2, 3, 4]
// var result = 0;

// function reduce() {
// for (var i = 0; i < allArray.length; i++) {
//    result += allArray[i];
//  } console.log(result);
// }

// reduce();

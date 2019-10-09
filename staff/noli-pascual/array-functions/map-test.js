describe('map'/* primer parámetro de describe*/, function () {//function es el segundo parámetro de la función describe con todos los it (pruebas)

    it ('should add two to each value of the array', function () {// it: title, funcion: (vars, )
    
    var array= [1,2,3];

    var result = [];

    function addTwo(item) {
        return item + 2;
    }

    result = map(array, addTwo);

    expect(result).toBe(3,4,5);

    }, 
    
    function (error) {
        expect(error).toBe(undefined);
    }

    )

    
    
});


/* function addTwo(item) {
    return item + 2;
}

console.log('DEMO map');

var array = [1, 2, 3];

console.log('should print the array given')

console.log(array); //[1, 2, 3]

console.log('should map every item of the array given, add 2 and return the resulting array');

console.log(map(array, addTwo)); // [3, 4, 5]

console.log('CASE throw Type Error if funcion is not a function');

try {
    map(array, 6);

} catch (error) {
    console.error(error);
}

console.log('CASE throw Type Error if array is not an array');

try {
    map(6, addTwo);

} catch (error) {
    console.error(error);
} */
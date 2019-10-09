describe('findIndex', function () {
    it('should return the index number of the first item that returns true to the condition', function () {
        var array = [1, 4, 5, 53, 23, 37];
        findIndex(array, array[i] > 5);
        
        expect(i).toBe(3);

    });

    it('should return -1 if there is no match', function () {
        var array = [1, 4, 5, 53, 23, 37];
        findIndex(array, array[i] > 55);
        result = -1;

        expect(result).toBe(-1);

    });    

    it('should return -1 if the array is empty', function () {
        var array = [];
        findIndex(array, array[i] > 55);
        result = -1;

        expect(result).toBe(-1);

    });   


    // ERRORES

    it('should fail if array is NOT an array', function () {
        var array; //= [1, 4, 5, 53, 23, 37];
        var condition = array[i] > 55

        expect( function() { findIndex(array, condition);}).toThrow(TypeError, "Cannot read property '0' of undefined");

    });   


    


//     it('should fill the function with a value + startIndex', function () {
//         var array = [1, 3, 4, 6, 7, 8, 6];
//         var start = 3;
//         fill(array, 7, start);
//         result = array.toString();

//         expect(result).toBe([1,3,4,7,7,7,7].toString());
       
//     });

//     it('should fill the function with a value + startIndex + endIndex', function () {
//         var array = [1, 3, 4, 6, 7, 8, 6];
//         var start = 3;
//         var end = 6;
//         fill(array, 7, start, end);
//         result = array.toString();

//         expect(result).toBe([1,3,4,7,7,7,6].toString());
//     });


//     it('should fill with undefined when item is not declared', function(){
//         var array = [1, 3];
//         fill(array);
//         result = array.toString();

//         expect(result).toBe([undefined,undefined].toString());
//     });
    

// // // ERRORES

// //     it('should fail if array is NOT an array', function () {
// //         var array; //= [1, 3, 4, 6, 7, 8, 6];
// //         var item = 3;

// //         expect(function() { fill(array,item);}).toThrow(TypeError, array + ' is not an array');
// //     });


// //     it('should fail on NULL array', function () {
// //         var array = null; //= [1, 3, 4, 6, 7, 8, 6];
// //         var item = 3;

// //         expect(function() { fill(array,item);}).toThrow(TypeError, array + ' is not an array');
// //     });

    
});

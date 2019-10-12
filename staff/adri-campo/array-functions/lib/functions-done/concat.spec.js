describe ("concat", function(){

    it ("Should return the items in the arrays unified in a new array", function () {
        var numbers = [1,2,3];
        var numbers2 = [4,5,6];
        var result = concat(numbers,numbers2);
         
        expect(result).toBe([1,2,3,4,5,6]);


    });


    // ERRORS


    // it('should fail if array is NOT an array', function () {
    //     var arrayNumbers = 3; //= [1, 3, 4, 6, 7, 8, 6];
        
    //     function findNumber(itemArray,item){
    //         return itemArray === item
    //     }

    //     expect(function() { indexOf(arrayNumbers, 4 ,findNumber); }).toThrowError(arrayNumbers + ' is not an array');
    // });


    // it('should fail on NULL array', function () {
    //     var arrayNumbers = null; //= [1, 3, 4, 6, 7, 8, 6];

    //     function findNumber(itemArray,item){
    //         return itemArray === item
    //     }

    //     expect(function() { indexOf(arrayNumbers, 4 ,findNumber); }).toThrowError(null + ' is not an array');

    // });

    
});








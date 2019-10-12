describe('concat', function () {
    it('should add arr1 and arr2 insdie a new array, specifying 1 array as a parameter', function () {
        var elem1 = ['a','b','c'];
        var elem2 = [1, 2, 3];

        var newArray = elem1.concat(elem2);
        var expected = ['a','b','c', 1, 2, 3];

        expect(newArray).toEqual(expected);
        expect(newArray).not.toEqual(elem1);
        expect(newArray).toBeInstanceOf(Array);

    });

    it('should add arr1 and content of number parameter inside a new array'), function() {
        var array = ['a','b','c'];
        var param1 = 1;
        
        var newArray = array.concat(param1);
        var expected = ['a','b','c', 1];

        expect(newArray).toEqual(expected);
        expect(newArray).toBeInstanceOf(Array);
    }

    it('should add arr1 and content of string parameter inside a new array'), function() {
        var array = ['a','b','c'];
        var param2 = 'Hello, world!';
        
        var newArray = array.concat(param2);
        var expected = ['a','b','c', 'Hello, world!'];

        expect(newArray).toEqual(expected);
        expect(newArray).toBeInstanceOf(Array);
    }

    it('should add arr1 and content of function parameter inside a new array'), function() {
        var array = ['a','b','c'];
        var param3 = function() {console.log('Hello, world!');};

        var newArray = array.concat(param3);
        var expected = ['a','b','c', 1];

        expect(newArray).toEqual(expected);
        expect(newArray).toBeInstanceOf(Array);
    }

});
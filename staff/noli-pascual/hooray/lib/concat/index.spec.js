describe('Hooray.prototype.concat', function () {
    it('should concatenate the array passed with hooray elements and create a new hooray', function () {
        var hooray = new Hooray(1, 2, 3);

        var array = [4,5,6]

        var result = hooray.concat(array);

        expect(result.length).toBe(6);
        expect(hooray.length).toBe(3);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
      
    });

    it('should concatenate the elements passed with hooray elements and create a new hooray', function () {
        var hooray = new Hooray(1, 2, 3);

        var array = [4,5,6]

        var result = hooray.concat(array,7,8,9);

        expect(result.length).toBe(9);
        expect(hooray.length).toBe(3);
        expect(result).not.toBe(hooray);
        expect(result).toBeInstanceOf(Hooray);

        expect(result[0]).toBe(1);
        expect(result[1]).toBe(2);
        expect(result[2]).toBe(3);
        expect(result[3]).toBe(4);
       
    });

});
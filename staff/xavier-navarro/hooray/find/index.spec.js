describe ('Hooray.prototype.find',function(){
    it ('Should show true if element is found',function(){
       var hooray = new Hooray('bcn','mad','cph','svq');
       var element = function elementFound (element){
          return element === 'cph';
       };
       expect(hooray.find(element)).toBe('cph');
 
    });
 
    it ('Should show false if elemen is not found',function(){
        var hooray = new Hooray('bcn','mad','cph','svq');
       
        var element = function elementFound (element){
                            return element === 'val';
                        };
        expect(hooray.find(element)).toBe(undefined);
    });
 
    it ('Should show undefine if array is empty', function(){
       var hooray = new Hooray;
       var element = function elementFound (element){
                                return element===4;
                            };
       expect(hooray.find(element)).toBe(undefined);
    })
 
 })
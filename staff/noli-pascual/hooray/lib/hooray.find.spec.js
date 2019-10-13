describe('Hooray.prototype.find',function(){
  
    it ('should true is the element is found', function(){
       var myHooray= new Hooray(1,2,5,7, 'string');
       var elementFound= myHooray.find('string');
             
       expect(elementFound).toBe(true);
    });
 
    it ('Should false if not found a element whithin of array',function(){
       var myHooray= new Hooray(1,2,5,7, 'string');
       var elementFound= myHooray.find(4);
             
       expect(elementFound).toBe(false);
    });
 
    it('should fail on non-function expression', function () {
      var numbers = new Hooray(1, 2, 3);      
      
      expect(function () { numbers.find(); }).toThrowError('undefined is not a function');
      expect(function() { numbers.find(true); }).toThrowError('true is not a function');
      expect(function() { numbers.find(1); }).toThrowError('1 is not a function');
  });
 });
 
//The includes() method determines whether an array includes a certain value among its entries,
//returning true or false as appropriate.

function includes(arr, value) { 

	for(var i = 0; i < arr.length; i++) {
		
		if(arr[i] === value) {
			return true;
    }
    
  }
  return false;
}
var array = [1, 5, 8];

includes(array, 8);


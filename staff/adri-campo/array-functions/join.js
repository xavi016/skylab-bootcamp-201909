/**
 * 
 * @param {*} array 
 * @param {*} expression 
 */



function join(array1) {
    var newArray= array1;
    for (var i = 0; i < arguments.length; i++) {
          if(arguments[i] instanceof Array){
            for (var a = 0; a < (arguments[i].length); a++) {
            newArray[a] = arguments[i][a];
              
            } 
          } else {
            newArray[a] = arguments[i];
          
          }
    }
    return newArray.toString();
  
}

join([1,2,3],"helloworld")


function join(array, item) {
    if(item === undefined) item =',';
    var result = '';
    for (var i = 0; i < array.length; i++) {
        if (i === array.length - 1)
            result += array[i];
        else
            result += array[i] + item;
    }
    return result;
 }


 var arrayNumbers = [1,2,3,4,5]
 console.log(join(arrayNumbers, '---'));
 


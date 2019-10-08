// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// console.log(array1.concat(array2));
// // expected output: Array ["a", "b", "c", "d", "e", "f"]
console.log("DEMO concat")



// function concat(array, arguments) {
//     var newArray = array;
//     var counter = array.length

//         for(var x=1; x < arguments.length; x++){
//             if(arguments[x] instanceof Array){      
//                 for (var j=1; j < arguments[x][j].length; j++){
//                 newArray[newArray.length++] = arguments[x][j];   
//                 }
//             }
//         else { 
//             newArray[newArray.length] = arguments[x][j]
//         }

//         }
//         return newArray
// };


//FUNCIÓN CORRECTA PARA CONCATENAR 2 ARRAYS 

function concat(array1) {
    var newArray= array1;
	for (var i = 0; i < arguments.length; i++) {
        if(arguments[i] instanceof Array){
          for (var a = 0; a < (arguments[i].length); a++) {
           newArray[a] = arguments[i][a];
            debugger
          } 
        } else {
          newArray[a] = arguments[i];
         
        }
  }
	return newArray;
  
}


 



    
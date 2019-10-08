// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];

// console.log(array1.concat(array2));
// // expected output: Array ["a", "b", "c", "d", "e", "f"]


const array1 = ["hola", "mundo"];
const num1 = 5; 
const num2 = 10;
const newArray = [];

function concat(arguments) {
        for(var x=0; i < arguments.length; x++){
            if(arguments[x] instanceof Array){      
                for (var j=0; j < arguments[x][j].length; j++){
                newArray[newArray.length++] = arguments[x][j];   
                }
            }
        else { 
            newArray[newArray.length] = arguments[x]
        }

        }
    return newArray
};

concat(array1,num1,num2);




    
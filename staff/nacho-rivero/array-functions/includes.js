/**
 * Method determines if the element it is included in the array or not. Returns a boolean.
 * @param {*} array The array given.
 * @param {*} value The element to find in the array.
 */


function includes(array, value){
    var a = 0;
    
    for(i=0; i<array.length; i++){
      
        if(array[i] == value){
            a++;
        }  
    }

    switch(a){
        case a = 1:
            console.log(`Array includes ${value}`);
            console.log(true);
            break;
        case a = 0:
            console.log(`Array NOT includes ${value}`);
            console.log(false);
            break;
    }   
}
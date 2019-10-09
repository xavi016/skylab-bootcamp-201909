/**
 * Modifies the array from the start index (default zero) to an end index (default array length). Returns the modified array
 * @param {*} array The array to modificate.
 * @param {*} value The value to introduce in the array.
 * @param {*} start The index in the array to start the introduction of the value.
 * @param {*} end The last index to introduce the value.
 */

function fill(array, value, start, end) {

    if(!(array instanceof Array)) throw TypeError (array +' is not an array');
    if(!(array instanceof Function)) throw TypeError (array+' is not a function');

    var i=0;
    var j=0;

    if (end){

        j=start;
       
        for (j; j<end; j++){
            array[j]=value;
        }

        return  array[j]=value;
        
    } 

    else if (start){

        i=start-1;

        for (i; i<array.length-1; i++){
            array[i]=value;
        }

        return  array[i]=value;

    } else 
    
        {

        for (var i=0; i<array.length-1; i++){
            array[i]=value;
        }

        return  array[i]=value;
    }
}
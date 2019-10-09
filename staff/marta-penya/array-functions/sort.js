/**
 * Sorts the elements of an array locally. Responds to the position of the string value according to its Unicode value.
 *  
 * @param {Array} array The array to sort
 * 
 * @returns {Array} Returns the array with sorted elements
 */



function sort(array) {
    
    for (i = 1; i < array.length; i++) {
        for (j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return array
}



console.log('DEMO sort');

var lista = ['v', 'l', 'n', 'a', 703, 247, 563, 224, 714, 464, 953, 708, 201, 887, 550, 515, 206, 131];

console.log(lista);


console.log('should print the array sorted'); 
console.log(sort(lista)); 

var list = ['v', 'L', 'n', 'a', 'M', 'r'];

console.log(list);
   
console.log('should print the array sorted according to its unicode value'); 
console.log(sort(list));

      



var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];



splice(animals, 1, 1, 'grillo');

function splice(array, start, eliminados, itemintroducir){
    var results = [];

    if(eliminados !== 0){
        debugger
        for(var i = 0; i < eliminados; i++){
            results[i] = array[start + i];
            if((start + eliminados + i) < array.length){
                for(var i in array){
                    array[start] = array[start + eliminados + i]
                }
                
            };
        };        
        array.length = array.length - eliminados;
    }

}






console.log(animals) // array modificada por el splice
console.log(newArray) //items eliminados si hay


console.log splice array nuevo
devuelve un array con el elemento o elementos eliminados
o si no hay, un array vacio

console.log(animals)


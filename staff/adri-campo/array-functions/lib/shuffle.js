/* ES EL EJEMPLO DE MANU EN CLASE (JUEVES 10/10)

function shuffle(array)
COMO HACER UNA FUNCIÓN QUE DADA UNA ARRAY DE ENTRADA TE DE UNA ARRAY CON DATOS MEZCLADOS*/


function shuffle (array) {
  
    var result = [];
    for (var i = 0; i < array.length; i++) result[i] = array[i];
    
    for (i=0; i<array.length;i++) {
        var random = Math.floor(Math.random() * array.length) 
        var value = result[i]
        result[i] = result[random]
        result[random] = value
        }
        return result
     };
        
  var numbers = [1,2,3,4,5];
  
  var randomized = shuffle(numbers)
  
  console.log(randomized);
  
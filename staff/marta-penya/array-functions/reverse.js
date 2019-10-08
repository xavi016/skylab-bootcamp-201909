





var lenguajes = ["PHP", "C", "C#", "Rust", "Java", "JavaScript", "C++", "Go"];


function invert(array){
    var cadenaInvertida = [];
    for(let i = 0; i < array.lenght; i--){
        cadenaInvertida = array[i]
    }
    return cadenaInvertida
}

console.log(lenguajes);

invert(lenguajes);
console.log(lenguajes);



function invert(array) {
    var x = array.length;
    var cadenaInvertida = [];
   
    while (x >= 0) {
      cadenaInvertida = cadenaInvertida + array[i];
      x--;
    }
    return cadenaInvertida;
  }


  console.log(lenguajes);

  invert(lenguajes);
  console.log(lenguajes);











function invert(array){
    var invertLong = array.length;

    for(var i = 0; i < array.length / 2; i++){
        console.log(array.length / 2)
        var temporal = array[i];
        console.log(temporal)
        var indexInverted = invertLong - i - 1;
        array[i] = invertLong[indexInverted];
        array[indexInverted] = temporal;
    }
}


var lenguajes = ["PHP", "C", "C#", "Rust", "Java", "JavaScript", "C++", "Go"];

console.log(lenguajes);

invert(lenguajes);
console.log("Invertido manualmente: ", lenguajes);
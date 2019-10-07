console.log('DEMO every');



var array = [1, 30, 29, 29, 10, 13];

    function every(array){
        var x
        array.forEach(element => {
            if(element > 40) return false;
        });
        return true;
    }


    console.log(every(array));

  // expected output: true







  function every(currentValue) {
    return currentValue < 40;
  }

  function esSuficientementeGrande(elemento, indice, arrreglo) {
    return elemento >= 10;
  }
  [12, 5, 8, 130, 44].every(esSuficientementeGrande);   // false
  [12, 54, 18, 130, 44].every(esSuficientementeGrande); // true
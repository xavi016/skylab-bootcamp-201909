//BINGO
//
//pedir nombre del jugador y guardarlo
//mostrar carton con 15 numeros excluyendo el 0
//pedir confirmación mediante confirm() para seguir jugando
//mostrar numero por pantalla y si coincide con alguno del cartón, se tachará con una X o un 0.
//mostrar por pantalla el cartón actualizado con las X correspondientes
//volver a preguntar al inicio de cada turno si desea continuar
//se mostrará por pantalla cuando se haga linea "LINEA" y se seguirá para bingo
//cuando se haga bingo, se informará de en cuantos turnos se ha completado el cartón.
//se preguntará si se desea volver a jugar


let randomNumber = 0;

var bingoCard = [
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
  { number: randomNumber, matched: false },
];

const bomboNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]


// 1. Función que genera un cartón aleatorio sustituyendo randomNumber del objeto por un numero random no repetido del 1 al 90
const randomBingoCard = function(arr) {
  let counter = arr.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * bomboNumbers.length);
    arr[counter -1].number = bomboNumbers.splice(index, 1)[0];
    counter--;
  }
  return arr;
}
//console.log(randomBingoCard(bingoCard))


//2. Función que pregunta el nombre al usuario y saluda
const user = function() {
  let name = prompt("Bienvenido a SkyBingo, cual es tu nombre?");
  alert("Hola, " + name)
}


// 3. Función que muestra el cartón random por pantalla
const showCard = function(arr) {
  let arrayNums = [];
  for(let i in arr) {
    arrayNums.push(arr[i].number);
  }
  console.log("Tu carton es el siguiente:\n\n" + arrayNums.slice(0, 5) + "\n" + arrayNums.slice(5, 10) + "\n" + arrayNums.slice(10, 15))
}


// 4. Función que pide confirmación para seguir jugando
const confirmPlay = function() {
  return confirm("Quieres seguir jugando?") ? true : alert("Ok, bye");
}


// 5. Función que desordena los números de bomboNumbers2 y los pone en juego para bingo. Una vez utilizados, los añade a un array (discartedNumbers) para no volver a utilizarlos.

const bomboNumbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]

const discartedNumbers = [] //array que muestra los numeros utilizados


const generateNumberPlay = function() {
  let counter = bomboNumbers2.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    let num = bomboNumbers2.splice(index, 1)[0]
    console.log("El numero elegido al azar del bombo ha sido el " + num)
    discartedNumbers.push(num)
    counter--;
    return num;
  }
 }


// 6. Función que sustituye el número seleccionado del bombo por una X si se encuentra en el cartón.
const crossNumber = function(arr, numbertoPlay) {
   for(let i in arr) {
    if(arr[i].number == numbertoPlay) {
      arr[i].matched = true;
      alert("El numero " + arr[i].number + " se encuentra en tu carton!\nVamos a tacharlo."); //muestra por alerta
      console.log("El numero " + arr[i].number + " se encuentra en tu carton!\nVamos a tacharlo."); //muestra por pantalla
      arr[i].number = "X";
      showCard(arr);
    }
  }
}

//función que muestra un mensaje cuando se hace Linea.
let rows = []

const linea = function(arr) {
  let row1 = arr.slice(0, 5);
  let row2 = arr.slice(5, 10);
  let row3 = arr.slice(10, 15);
  rows.push(row1, row2, row3)
  for(let i in rows) {
      if(rows[i].every(elem => elem.matched === true)) {
        console.log("LINEA!")
        return true;
    }
  }
}
//función que muestra un mensaje cuando se hace Bingo informa de la cantidad de jugadas realizadas para conseguir bingo.
const bingoWin = function(arr) {
  for(let i in rows) {
    if(arr.every(elem => elem.matched === true)) {
      console.log("BINGO!!!!\n\n Has realizado " + discartedNumbers.length + " tiradas para conseguir Bingo.")
      return true;
    }
  }
}


// 7. Función que entra en bucle mientras quieras seguir jugando y se haga la primera linea, mostrando nuevos numeros y comprobando si se encuentran en el carton, si se encuentra en el cartón, lo tacha, muestra el cartón actualizado y vuelve a preguntar si se quiere seguir jugando.
const newNumber = function(arr) {
  let stop = false;
   for(let i in arr) {
    while(arr[i].matched === false && !stop) {
      if(confirmPlay() !== true) { //pregunta si quieres seguir jugando
        stop = true; //si no quieres seguir jugando, se termina el juego
      }
      let newNumPlay = generateNumberPlay() //genera un nuevo numero
      //console.log(discartedNumbers)
      crossNumber(arr, newNumPlay)//tacha el numero encontrado
      if(linea(arr) === true) {
        stop = true;
      }
    }
  }
}

// 8. Función que continúa buscando coincidencias después de que se haga linea, sigue para bingo.
const newNumber2 = function(arr) {
  let stop = false;
   for(let i in arr) {
    while(arr[i].matched === false && !stop) {
      if(confirmPlay() !== true) { //pregunta si quieres seguir jugando
        stop = true; //si no quieres seguir jugando, se termina el juego
      }
      let newNumPlay = generateNumberPlay() //genera un nuevo numero
      //console.log(discartedNumbers)
      crossNumber(arr, newNumPlay)//tacha el numero encontrado
      bingoWin(arr);
    }
  }
}


// 8. Función principal que inicia de principio a fin el juego de Bingo.
const bingo = function() {
  user() //funcion que pregunta el nombre y saluda
  let generateBingoCard = randomBingoCard(bingoCard) //genera cartón random
  showCard(generateBingoCard) //muestra el cartón random por pantalla
  newNumber(generateBingoCard) //entra en bucle mientras quieras seguir jugando
  newNumber2(generateBingoCard)
  console.log(generateBingoCard)
  console.log(discartedNumbers)
};


bingo()



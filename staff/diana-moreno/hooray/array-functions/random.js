function shuffle(array) {
  let newArray = []
  let copyArray = []

  for(let i = 0; i < array.length; i++) {
    copyArray[i] = array[i]
  }
  //let copyArray = [...array] // en ES6 usamos spread operator, en ES5 usamos for loop

  for(let i = 0; i < array.length; i++)  {
    let randomIndex = Math.floor(Math.random() * copyArray.length)
    newArray[i] = copyArray[randomIndex]
    copyArray.splice(randomIndex, 1)
  }
  //console.log(array) // no modifica el array original porque hacemos una copia
  return newArray
}

var numbers = [1, 2, 3, 4, 5]

//console.log(shuffle(numbers))
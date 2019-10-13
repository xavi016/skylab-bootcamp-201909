function shuffle(array) {
  let newArray = [];
  let copyArray = [];

  for(let i = 0; i < array.length; i++) {
    copyArray[i] = array[i];
  };
  //let copyArray = [...array] // en ES6 usamos spread operator, en ES5 usamos for loop

  for(let i = 0; i < array.length; i++)  {
    let randomIndex = Math.floor(Math.random() * copyArray.length)
    newArray[i] = copyArray[randomIndex]
    copyArray.splice(randomIndex, 1)
  };
  return newArray;
};

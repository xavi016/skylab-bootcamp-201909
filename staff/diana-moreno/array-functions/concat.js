function concat() {
  let newArray = [];

  for (let i in arguments)
    for (let j in arguments)
      newArray[newArray.length] = arguments[i][j];

  return newArray;
}

/*var arr1 = [1, 2, 3]
var arr2 = [2, 3, 5]
var arr3 = [6, 7, 8]

concat(arr1, arr2, arr3)*/
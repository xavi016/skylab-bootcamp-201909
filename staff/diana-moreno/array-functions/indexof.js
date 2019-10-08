function indexOf(array, item) {
  for(let i in array) {
    if(array[i] === item) return i
  }
  return -1
}

var array = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(indexOf(array, 'duck'))
console.log(indexOf(array, 'hola'))

//versión segundo índice?
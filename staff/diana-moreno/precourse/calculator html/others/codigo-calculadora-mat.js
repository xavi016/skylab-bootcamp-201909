let mathExpression7 = ["1", "+", "(", "3", "/", "2", ")", "+", "4", "*", "2"]
let mathExpression4 =
["36", "-", "6", "+", "(", "6", "*", "2", "+", "(", "2", "-", "1", ")", ")"]
let mathExpression8 = ["1", "+", "3", "/", "2", "+", "4", "*", "2"]
let mathExpression9 = ["36", "-", "6", "+", "(", "6", "*", "2", "+", "(", "4", "*", "2", ")", "+", "(", "2", "-", "1", ")", ")"]

let mathExpression2 = ["5", "*", "(", "7", "-", "2", ")"]
let mathExpression = ["3", "+", "(", "3", "*", "2", "+", "(", "1", "+", "2", ")", ")"]
//función que multiplica
function multiplication(mathExpression) {
  for(let i in mathExpression) {
    if(mathExpression[i] === "*") {
      console.log("multiplica", mathExpression)
      let index = mathExpression.indexOf("*")
      let num1 = parseFloat(mathExpression[index-1])
      let num2 = parseFloat(mathExpression[index+1])
      let result = num1 * num2
      mathExpression.splice(index-1, 3, result)
    }
  }
}
//función que divide
function division(mathExpression) {
  for(let i in mathExpression) {
    if(mathExpression[i] === "/") {
      console.log("divide", mathExpression)
      let index = mathExpression.indexOf("/")
      let num1 = parseFloat(mathExpression[index-1])
      let num2 = parseFloat(mathExpression[index+1])
      console.log("num2", num2)
      let result = num1 / num2
      mathExpression.splice(index-1, 3, result)
    }
  }
}
//función que suma
function addition(mathExpression) {
  for(let i in mathExpression) {
    if(mathExpression[i] === "+") {
      console.log("suma", mathExpression)
      let index = mathExpression.indexOf("+")
      let num1 = parseFloat(mathExpression[index-1])
      let num2 = parseFloat(mathExpression[index+1])
      let result = num1 + num2
      mathExpression.splice(index-1, 3, result)
    }
  }
}
//función que resta
function subtraction(mathExpression) {
  for(let i in mathExpression) {
    console.log("resta", mathExpression)
    if(mathExpression[i] === "-") {
      console.log("resta", mathExpression)
      let index = mathExpression.indexOf("-")
      let num1 = parseFloat(mathExpression[index-1])
      let num2 = parseFloat(mathExpression[index+1])
      let result = num1 - num2
      mathExpression.splice(index-1, 3, result)
    }
  }
}

//Añade a un array todos los indices de cuando aparece el simbolo "("
let parentIni = []

function parenthesis(mathExpression) {
  console.log(mathExpression)
  for(let i in mathExpression) {
    if(mathExpression[i] === "(") {
      parentIni.push(i)
    }
  }
}

//función que opera una sola expresión, ya sea porque se encuentra dentro de un paréntesis, o porque no tiene paréntesis, llama a las funciones de suma, resta, división y multiplicación para que se ejecuten según el orden de prioridad.
function operateOneExpression(mathExpression) {
  for(let i in mathExpression) {
    let indexAdd = mathExpression.indexOf("+")
    let indexSub = mathExpression.indexOf("-")
    let indexDiv = mathExpression.indexOf("/")
    let indexMult = mathExpression.indexOf("*")
    if(indexDiv < indexMult) {
      division(mathExpression)
      multiplication(mathExpression)
    } else if(indexDiv > indexMult) {
      multiplication(mathExpression)
      division(mathExpression)
    }
    if(indexAdd < indexSub) {
      addition(mathExpression)
      subtraction(mathExpression)
    } else if (indexAdd > indexSub) {
      subtraction(mathExpression)
      addition(mathExpression)
    }
  }
  return mathExpression
}

//función que separa cada operación por paréntesis y opera primero dentro de cada uno, del más interior al más exterior, teniendo en cuenta el orden de prioridad, hasta que al final únicamente queda un número: el resultado.
function calculate(arrayParenthesis) {
  parenthesis(mathExpression)
  for(let i = parentIni.length-1; i >= 0; i--) {
    let indexIni = parseFloat(parentIni[i])
    let trimExpression = mathExpression.slice(indexIni, mathExpression.length)
    let parcialIndexLast = trimExpression.indexOf(")")
    let indexLast =indexIni + parcialIndexLast
    let parenthesisExpression = mathExpression.slice(indexIni+1, indexLast)
    let result = (operateOneExpression(parenthesisExpression).toString())
    mathExpression.splice(indexIni, parcialIndexLast+1, result)
  }
  if(mathExpression.length > 1) {
    operateOneExpression(mathExpression)
  }
  console.log(parseInt(mathExpression))
  return parseInt(mathExpression)
}

calculate()

